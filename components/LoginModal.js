import Modal from "../utils/modal"
// import { useSelector } from "react-redux";
import React from 'react'
import { setCloseModal } from "../redux/slice/loginSlice"
import { useDispatch} from "react-redux";
import { useRouter } from 'next/router'
import Link from "next/link";


function LoginModal( showModal) {

  let router= useRouter()

  const dispatch = useDispatch();
    const handleClose =()=> {
    
        dispatch(setCloseModal()) 
        router.push('/')
     
    }



  return (
    <Modal isVisible={showModal} onClose={() => handleClose() }>
<div className="rounded-lg bg-white p-8 shadow-2xl">
  <h2 className="text-xl font-bold">Login Successful?</h2>

  <p className="mt-2 text-lg text-gray-500">
    Do you want to see a list of your crops ???
  </p>

  <div className="mt-8 flex items-center justify-end text-xs">
    <button
      type="button"
      className="rounded bg-green-50 px-4 py-2 font-medium text-xl text-green-600"
    >
   <Link href="/choosecrop"> Check Crops </Link>
    </button>
    <button
      type="button"
      className="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-xl text-gray-600"
    >
 <Link href="/dashboard">Dashbaord   </Link>    </button>
  </div>
</div>



  </Modal>
)
}

export default LoginModal
    