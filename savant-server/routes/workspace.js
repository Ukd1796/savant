const express = require('express');
const router = express.Router();

const workspaceController = require("../controllers/workspace");

router.get("/",(req,res,next)=>{
    res.json({message:"This exists"});
})

router.post('/createWorkspace', workspaceController.createWorkspace);
router.post('/getWorkspaces', workspaceController.getWorkspaces);
router.post('/joinWorkspace', workspaceController.joinWorkspace);
router.post('/getWorkspace', workspaceController.getWorkspace);
router.delete('/deleteWorkspace', workspaceController.deleteWorkspace);

module.exports = router;
