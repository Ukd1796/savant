import React,{useState} from "react";
import NewCard from "../../utils/Card/NewCard";
import Modal from "../../utils/Modal/Modal";

const WorkSpace = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div class="flex space-x-2">
                <button
                    type="button"
                    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" onClick={() => setShowModal(true)}>
                    New WorkSpace
                </button>
            </div>
            <NewCard />
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <form className="m-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900">
                        Create a new Workspace
                    </h3>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Title
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Description
                        </label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-32" id="description" type="text" placeholder="Description" />
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

export default WorkSpace;