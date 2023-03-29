import React,{useState} from "react";
import NewCard from "../../utils/Card/NewCard";
import Modal from "../../utils/Modal/Modal";
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import CreateWorkSpace from "./CreateWorkSpace";


const WorkSpace = () => {

    const {user,logOut} = UserAuth();
    const [showModal, setShowModal] = useState(false);
    const closeModal = ()=>setShowModal(false);
    const handleSignOut = async () => {
        try {
          await logOut()
         
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <div>
            <div class="flex space-x-2">  
            <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" onClick={() => setShowModal(true)}>
                New WorkSpace
            </button>
                <button
                    type="button"
                    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" onClick={handleSignOut}>
                    <Link to="/">
                    Sign Out
                    </Link>
                </button>
                <CreateWorkSpace isShowModal = {showModal} closeModal={closeModal} setShowModal={setShowModal}/>      
            </div>
            <NewCard />
        </div>
    )
}

export default WorkSpace;