const ObjectId = require('mongoose').Types.ObjectId;
const Workspace = require('../models/workspace')
const WorkspaceCode = require('../models/workspaceCode')
const WorkspaceMemb = require('../models/workspaceMemb')

exports.createWorkspace = async (req, res, next) => {
    let recentWorkCode;
    await WorkspaceCode.findOne().then(obj => {
        recentWorkCode = obj.code + 1;
        obj.code = recentWorkCode;
        obj.save();
    }).catch(err => {
        err.statusCode = 500;
        next(err);
    })

    const newWorkspace = new Workspace({
        adminEmail: req.body.adminEmail,
        workspaceName: req.body.workspaceName,
        desc: req.body.desc,
        workspaceCode: recentWorkCode,
        dateofCreation: req.body.dateofCreation,
    })

    newWorkspace.save().then(result => {
        WorkspaceMemb.findOne({email: req.body.adminEmail}).then(workspacememb => {
            workspacememb.workspacesOwned.push(recentWorkCode);
            workspacememb.save();
        }).catch(err => {
            next(err);
        })
        res.status(201).json({ message: "Workspace created successfully" });
    }).catch(err => {
        next(err);
    })

}

exports.getWorkspaces = (req, res, next) => {
    const type = req.body.type;
    const userEmail = req.body.userEmail;
    if (type === "creator") {
        Workspace.find({ adminEmail: userEmail }).then(results => {
            res.json(results);
        }).catch(err => {
            next(err);
        })

    }
    else if (type === "collaborator") {
        WorkspaceMemb.findOne({ email: userEmail }).then(workspacememb => {
            Workspace.find({ workspaceCode: workspacememb.workspacesEnrolled }).
                then(results => {
                    res.json(results);
                })
                .catch(err => {
                    next(err);
                })

        }).catch(err => {
            next(err);
        })
    }
    else {
        const err = new Error("Invalid Values")
        err.statusCode = 422
        next(err);
    }
}

exports.joinWorkspace = (req, res, next) => {
    const userEmail = req.body.userEmail;
    const workspaceCode = req.body.workspaceCode;
    Workspace.findOne({ workspaceCode: workspaceCode })
        .then(workspace => {
            if (!workspace) {
                const err = new Error("No such workspace");
                err.statusCode = 403;
                next(err);
            }
            if (workspace.members.indexOf(userEmail) >= 0) {
                const err = new Error("User a part of the workspace");
                err.statusCode = 403;
                next(err);
            }
            workspace.members.push(userEmail);
            return workspace.save();
        })
        .then(result => {
            return WorkspaceMemb.findOne({ email: userEmail });
        })
        .then(workspacememb => {
            if (workspacememb.workspacesOwned.indexOf(workspaceCode) >= 0) {
                const err = new Error("User already the owner of the workspace")
                err.statusCode = 403;
                next(err);
            }
            workspacememb.workspacesEnrolled.push(workspaceCode);
            return workspacememb.save();
        })
        .then(result => {
            res.json({ message: "Workspace joined successfully!" });
        })
        .catch(err => {
            next(err);
        })
}

exports.deleteWorkspace = (req, res, next) => {
    const workspaceCode = req.body.workspaceCode;
    Workspace.findByIdAndDelete({ workspaceCode: workspaceCode }).then(async workspace => {
        if (!workspace) {
            const err = new Error("Workspace Code does not exist");
            err.statusCode = 422;
            next(err);
        }

        workspace.members.forEach(async memberEmail => {
            await WorkspaceMemb.findOne({email: memberEmail})
                .then(workspacememb => {
                    if (workspacememb) {
                        workspacememb.workspacesEnrolled = workspacememb.workspacesEnrolled.filter(workspaceEnrolledCode => {
                            return workspaceEnrolledCode.toString() !== workspaceCode;
                        });
        
                        workspacememb.workspacesOwned = workspacememb.workspacesOwned.filter(workspaceOwnedCode => {
                            return workspaceOwnedCode.toString() !== workspaceCode;
                        });
        
                        workspacememb.save();
                    }
                })
                .catch(err => {
                    next(err);
                })
        })
})
}

exports.getWorkspace = (req,res,next) =>{
    const workspaceCode = req.body.workspaceCode;
    Workspace.findOne({workspaceCode:workspaceCode})
    .then(workspace=>{
        if(!workspace)
        {
            const err = new Error("Invalid workspace code.")
            err.statusCode = 422;
            next(err);
        }
        res.json(workspace)
    })
    .catch(err=>{
        next(err);
    })
}
        