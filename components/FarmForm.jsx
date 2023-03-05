import React from 'react'
import Modal from "../utils/modal"
import { Formik, Form, Field, ErrorMessage } from 'formik'




function FarmForm({showModal,handleModalToggle }) {

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const { userName,  userPassword } = values;
        await dispatch(LoginUser({ data: { userName, userPassword } }));
       console.log(values)
       setSubmitting(false);
       resetForm()
   };





  return (
    <Modal isVisible={showModal} onClose={() => handleModalToggle() }>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-[#017d3f] sm:text-3xl">
      Get started today
    </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
      dolores deleniti inventore quaerat mollitia?
    </p>
                    <Formik
                initialValues={{
                    amountPlanted: '',
                    cropCategory: '',
                    cropName: '',
                    harvestDate: '',
                    plantDate: '',
                    price: '',
                }}
                validationSchema={Yup.object({
                    amountPlanted: Yup.number()
                    .required('Required')
                    .min(1, 'Must be at least 1'),
                    cropCategory: Yup.string().required('Required'),
                    cropName: Yup.string().required('Required'),
                    harvestDate: Yup.date().required('Required'),
                    plantDate: Yup.date().required('Required'),
                    price: Yup.number().required('Required').min(0, 'Must be at least 0'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
  >
                    
                {({ isSubmitting }) => {
                        return (

                            

                            <Form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                                <div className="relative mt-1">
                                    <label htmlFor="email" className="sr-only text-lg"> Email</label>
                                    <div className="relative">
                                        <Field

                                            className="w-full rounded-lg  border-gray-200 bg-white  p-4 pr-12 text-base text-black shadow-sm"
                                            type="text"
                                            name="Email"
                                            placeholder="Email" />

                                        <ErrorMessage
                                            className=" text-error mt-1 text-lg"
                                            name="email"
                                            component="div" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="sr-only text-lg"> Phone number </label>
                                    <div className="relative mt-1">
                                        <Field
                                            className="w-full  border-gray-200 bg-white  rounded-lg p-4 pr-12 text-sm shadow-sm"
                                            type="phone"
                                            name="phoneNumber"
                                            placeholder="Phone number" />
                                        <ErrorMessage
                                            className=" text-error mt-1 text-lg"
                                            name="phoneNumber"
                                            component="div" />
                                    </div>
                                </div>

                                <div className="relative mt-1">
                                    <label htmlFor="userFirstName" className="sr-only text-lg">First Name</label>
                                    <div className="relative">
                                        <Field

                                            className="w-full rounded-lg  border-gray-200 bg-white  p-4 pr-12  text-sm shadow-sm"
                                            type="text"
                                            name="userFirstName"
                                            placeholder="First Name" />

                                        <ErrorMessage
                                            className=" text-error mt-1 text-lg"
                                            name="userFirstName"
                                            component="div" />
                                    </div>
                                </div>

                                <div className="relative mt-1">
                                    <label htmlFor="userLastName" className="sr-only text-slate-900  text-lg"> Last Name </label>
                                    <div className="relative">

                                        <Field
                                            className="w-full  border-gray-200 bg-white text-slate-900  rounded-lg p-4 pr-12 text-sm shadow-sm"
                                            type="text"
                                            name="userLastName"
                                            placeholder="Last Name" />

                                        <ErrorMessage
                                            className="text-lg text-error mt-1"
                                            name="userLastName"
                                            component="div" />
                                    </div>
                                </div>

                                <div className="relative mt-1">
                                    <label htmlFor="userName" className="sr-only text-lg"> Username </label>
                                    <div className="relative">

                                        <Field
                                            className="w-full  border-gray-200 bg-white text-slate-900  rounded-lg p-4 pr-12 text-sm shadow-sm"
                                            type="text"
                                            name="userName"
                                            placeholder="Username" />

                                        <ErrorMessage
                                            className="text-lg text-error mt-1"
                                            name="userName"
                                            component="div" />
                                    </div>
                                </div>


                                <div className="relative mt-1">
                                    <label htmlFor="password" className="sr-only text-lg">Password</label>
                                    <div className="relative">

                                        <Field
                                            className="w-full   border-gray-200 bg-white text-slate-900  rounded-lg p-4 pr-12 text-sm shadow-sm"
                                            type="password"
                                            name="userPassword"
                                            placeholder="Password" />

                                        <ErrorMessage
                                            className="text-lg text-error mt-1"
                                            name="userPassword"
                                            component="div" />
                                    </div>
                                </div>
                                
                                <div className="relative mt-1">
                                    <label htmlFor="confirmPassword" className="sr-only text-lg">Password</label>
                                    <div className="relative">

                                        <Field
                                            className="w-full  border-gray-200 bg-white text-black rounded-lg p-4 pr-12 text-sm shadow-sm"
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password" />

                                        <ErrorMessage
                                            className="text-lg text-error mt-1"
                                            name="confirmPassword"
                                            component="div" />
                                    </div>
                                </div>

                                <div className="flex  flex-col gap-10 items-center justify-between">

                                <button
        type="submit"
        className="block w-full rounded-lg  bg-[#017d3f] px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>


     </div>
     </Form>
        )}}
     </Formik>
        </div>
        </div>
        

</Modal>
    )
}

export default FarmForm






