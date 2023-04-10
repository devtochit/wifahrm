/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
//Imported react-hot-toast ============>
import toast from 'react-hot-toast'
//Imported Formik ============>
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik'
import { loginSchema } from '../utils/scemas'
//Imported Schemas ============>
import { login } from "../redux/slice/auth/AuthenticationSlice";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";
import Image from 'next/image'

const Login = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const initialValues = {
    userName: "",
    userPassword: "",
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting, resetForm: formikResetForm }) => {
      const { userName, userPassword } = values;
      try {
        const response = await dispatch(login({ userName, userPassword }));
        if (response) {
        } else {
          toast.success(`Logged in successfully! `, { position: "bottom-center" });
          formikResetForm();
          router.push('/dashboard');
        }
      } catch (error) {
        toast.error(response.error);
      } finally {
        setSubmitting(false);
      }
    }
  });


  return (
    <>
      <Navbar />
      <div className=' overflow-hidden relative flex h-screen w-screen flex-col bg-black/60 md:items-center md:justify-center md:bg-black/60 lg:px-4  px-[10px]'>
        <Head>
          <title>Wifahrm - Login</title>
        </Head>
        <Image
          src="https://i.ibb.co/5GrS5Wx/anaya-katlego-CXKk4z-U7an-E-unsplash.jpg"
          height={1000}
          width={1000}
          layout='responsive'
          className="-z-20  opacity-50 sm:!inline object-contain md:relative"
          alt="farm-img"
        />
        {/* <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer
                 object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt=''
      /> */}
        <form onSubmit={handleSubmit} className='absolute mt-24 space-y-8 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-md md:px-14 z-30'>
          <h3 className='text-4xl text-white font-semibold'>Signin</h3>
          <div className='space-y-4'>
            <label className='inline-block text-white w-full' htmlFor="userName">
              <input
                name='userName'
                value={values.userName}
                onBlur={handleBlur}
                onChange={handleChange}
                className={`input ${errors.userName && touched.userName && "border-2 border-red-900"}`}
                type="text"
                placeholder='Please enter a username...'
                id='userName'
              />
              <p className="text-red-500 font-semibold text-xs mt-1">{errors.userName && touched.userName && errors.userName}</p>
            </label>
            <label className='inline-block w-full' htmlFor="userPassword">
              <input
                name='userPassword'
                value={values.userPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                className={`input ${errors.userPassword && touched.userPassword && "border border-red-600"}`}
                type="password"
                placeholder='Please enter a Password...'
                id="userPassword"
              />
              <p className="text-red-500 font-semibold text-xs mt-1">{errors.userPassword && touched.userPassword && errors.userPassword}</p>
            </label>
          </div>
          <div className="flex">
            <Link href={'/signUp'} className='font-bold text-white hover:underline'>Create new account ?</Link>
          </div>


          <button type='submit'
            disabled={isSubmitting || !!errors.email || !!errors.userPassword}
            className={`${isSubmitting || !!errors.email || !!errors.userPassword ? "opacity-70))" : ""} w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-green-600 bg-gradient-to-r from-green-500 to-lime-800 px-8 py-3 font-extrabold text-lg text-white transition-all duration-300 focus:outline-none`}>Login</button>
        </form >
      </div >
      <Footer />
    </>
  )
}

export default Login
