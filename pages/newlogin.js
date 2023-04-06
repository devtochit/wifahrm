/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
//Imported react-hot-toast ============>
import toast from 'react-hot-toast'
//Imported Formik ============>
import { useFormik } from 'formik'
import { loginSchema } from '../utils/scemas'
//Imported Schemas ============>


const Login = () => {
  const router = useRouter();
  const initialValues = {
    userName: "",
    password: "",
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      // await fetch('/api/login', {
      //   method: "POST",
      //   headers: {
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify(values)
      // }).then(res => res.json()).then(data => {
      //   if (data.status === "Success") {
      //     router.push('/');
      //     toast('Welcome Back to Site!',
      //       {
      //         icon: '👏',
      //         style: {
      //           borderRadius: '10px',
      //           background: '#cecece',
      //           color: '#000',
      //         },
      //       }
      //     );
      //   } else {
      //     console.log(data);
      //     toast.error(`${data.status} => ${data.message}`)
      //   }
      // })
      console.log(values)
    }
  });
  return (
    <div className=' overflow-hidden relative flex h-screen w-screen flex-col
         bg-black/60 md:items-center md:justify-center md:bg-black/60 px-10'>
      <Head>
        <title>Netflix - Login</title>
      </Head>
      <img
        src="https://i.ibb.co/5GrS5Wx/anaya-katlego-CXKk4z-U7an-E-unsplash.jpg"
        className="-z-20 !hidden  opacity-50 sm:!inline object-contain md:relative"
        alt=""
      />
      {/* <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer
                 object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt=''
      /> */}
      <form
        onSubmit={handleSubmit}
        className='absolute mt-24 space-y-8 rounded bg-black/80
                py-10 px-6 md:mt-0 md:max-w-md md:px-14 z-30'>
        <h3 className='text-4xl text-white font-semibold'>Signin</h3>
        <div className='space-y-4'>
          <label className='inline-block text-white w-full' htmlFor="userName">
            <input name='userName' value={values.userName} onBlur={handleBlur} onChange={handleChange}
              className={`input ${errors.userName && touched.userName && "border-2 border-red-900"}`}
              type="text" placeholder='Please enter a username...' id='userName' />
            <p className="text-red-500 font-semibold text-xs mt-1">{errors.userName && touched.userName && errors.userName}</p>
          </label>
          <label className='inline-block w-full' htmlFor="password">
            <input name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}
              className={`input ${errors.password && touched.password && "border border-red-600"}`}
              type="text" placeholder='Please enter a Password...' id="password" />
            <p className="text-red-500 font-semibold text-xs mt-1">{errors.password && touched.password && errors.password}</p>
          </label>
        </div>
        <div className="flex">
          <Link href={'/signUp'} className='font-bold text-white hover:underline'>Create new account ?</Link>
        </div>
        <button type='submit'
          disabled={isSubmitting || !!errors.email || !!errors.password}
          className={`${isSubmitting || !!errors.email || !!errors.password ? "opacity-70))" : ""} w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-green-600 bg-gradient-to-r from-green-500 to-lime-800 px-8 py-3 font-extrabold text-lg text-white transition-all duration-300 focus:outline-none`}>Login</button>
      </form>
    </div>
  )
}

export default Login
