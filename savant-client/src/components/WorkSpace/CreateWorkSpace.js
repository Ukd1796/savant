import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../../utils/Modal/Modal";
import { UserAuth } from "../../context/AuthContext";

const CreateWorkSpace = (props) => {

    const { user, logOut } = UserAuth();
    const [values, setValues] = useState({
        workspaceName: "",
        desc: ""
    });
    const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post("http:localhost:5000/workspaces/createWorkspace", {
            adminEmail: user?.email,
            workspaceName: values.workspaceName,
            desc: values.desc,
            dateofCreation: new Date.toLocaleDateString()
        })
            .then((res) => {
                console.log(res);
                console.log("New Workspace Created");
                props.setShow(false);
                window.location.reload(false);
                setLoading(false);
            })
            .catch(err => {
                setError(err.response.data.message);
                setLoading(false);
            });
    }

    return (
        <div>
           
            <Modal isVisible={props.isShowModal} onClose={props.closeModal}>
                <form className="m-8" onSubmit={handleSubmit}>
                    <h3 className="mb-4 text-xl font-medium text-gray-900">
                        Create a new Workspace
                    </h3>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Title
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={handleChange("workspaceName")}value={values.workspaceName} />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                            Description
                        </label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-32" id="description" type="text" placeholder="Description" onChange={handleChange("desc")} value={values.desc} />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )

}

export default CreateWorkSpace;