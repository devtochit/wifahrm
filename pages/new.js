/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
//Imported ReactHotToast ============>
import toast from 'react-hot-toast'
//Imported Formik ============>
import { useFormik } from 'formik'
import { signUpSchema } from '../utils/scemas'
//Imported Schemas ============>


const SignUp = () => {
    const initialValues = {
        name: "",
        family: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <div className='  relative flex h-screen w-full  flex-col
        bg-black/60 md:items-center md:justify-center md:bg-black/60'>
            <Head>
                <title>Wifarm - SignUp</title>
            </Head>
            <img
                src="https://i.ibb.co/dK3WDHd/tim-mossholder-x-Dw-Ea2kae-JA-unsplash.jpg"
                className="-z-10 !hidden opacity-50 sm:!inline object-cover md:relative"
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
                className='absolute w-full  mt-24 space-y-8 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-md md:px-14 z-30'>
                <h3 className='text-cusgray text-4xl font-semibold'>SignUp</h3>
                <div className="   grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-5 pb-[1em] ">
                    {/* <div className='space-y-4 w-72'> */}
                    <label className='inline-block w-full' htmlFor="name">
                        <input name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                            className={`input ${errors.name && touched.name && "border border-red-600"}`}
                            type="text" placeholder='Please enter a name...' id='name' />
                        <p className="text-red-500 font-semibold text-xs mt-1">{errors.name && touched.name && errors.name}</p>
                    </label>

                    <label className='inline-block w-full' htmlFor="family">
                        <input name='family' value={values.family} onChange={handleChange} onBlur={handleBlur}
                            className={`input ${errors.family && touched.family && "border border-red-600"}`}
                            type="text" placeholder='Please enter a family...' id='family' />
                        <p className='text-red-500 font-semibold text-xs mt-1'>
                            {errors.family && touched.family && errors.family}
                        </p>
                    </label>
                </div>
                <div className="   grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-5gap-x-5gap-x-5 ">
                    {/* <div className='space-y-4 w-72'> */}
                    <label className='inline-block w-full' htmlFor="name">
                        <input name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                            className={`input ${errors.name && touched.name && "border border-red-600"}`}
                            type="text" placeholder='Please enter a name...' id='name' />
                        <p className="text-red-500 font-semibold text-xs mt-1">{errors.name && touched.name && errors.name}</p>
                    </label>

                    <label className='inline-block w-full' htmlFor="family">
                        <input name='family' value={values.family} onChange={handleChange} onBlur={handleBlur}
                            className={`input ${errors.family && touched.family && "border border-red-600"}`}
                            type="text" placeholder='Please enter a family...' id='family' />
                        <p className='text-red-500 font-semibold text-xs mt-1'>
                            {errors.family && touched.family && errors.family}
                        </p>
                    </label>
                </div>
                <label className='inline-block w-full' htmlFor="email">
                    <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}
                        className={`input ${errors.email && touched.email && "border border-red-600"}`}
                        type="text" placeholder='Please enter a email...' id='email' />
                    <p className='text-red-500 font-semibold text-xs mt-1'> {errors.email && touched.email && errors.email}</p>
                </label>
                <div className="grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-5  ">
                    <label className='inline-block w-full' htmlFor="password">
                        <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}
                            className={`input ${errors.password && touched.password && "border border-red-600"}`}
                            type="text" placeholder='Please enter a Password...' id="password" />
                        <p className='text-red-500 font-semibold text-xs mt-1'>
                            {errors.password && touched.password && errors.password}
                        </p>
                    </label>
                    <label className='inline-block w-full' htmlFor="confirmPassword">
                        <input name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}
                            className={`input ${errors.confirmPassword && touched.confirmPassword && "border border-red-600"}`}
                            type="text" placeholder='Please enter a confirmPassword...' id="confirmPassword" />
                        <p className='text-red-500 font-semibold text-xs mt-1'>
                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                        </p>
                    </label>
                </div>
                <div>
                    <p className='text-cusgray'>Already have an account? <Link className='text-white font-bold underline' href={'/login'}>Login</Link></p>
                </div>
                <button type='submit'
                    disabled={isSubmitting || !!errors.email || !!errors.password || !!errors.confirmPassword}
                    className={`${isSubmitting || !!errors.email || !!errors.password || !!errors.confirmPassword ? "opacity-75" : ""}w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-green-600 bg-gradient-to-r from-green-500 to-lime-800 px-8 py-3 font-extrabold text-lg text-white transition-all duration-300 focus:outline-none w-full `}>Register</button>
            </form>
        </div>
    )
}

export default SignUp
