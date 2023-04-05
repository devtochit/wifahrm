import style from '../styles/auth.module.css';
// import { InputAuth } from '../../../';
import { useFormik } from 'formik';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { login } from "../redux/slice/auth/AuthenticationSlice";
import { useDispatch } from 'react-redux';
// import { AuthRoute } from '../../components/hoc/AuthRoute';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(login(values, router));
    },
  });

  return (
    <>
      <Head>
        <title>Auth | Login</title>
      </Head>
      <div className={style['container-auth']}>
        <div className={style['grid-auth']}>
          <div className={style['layout-auth']}>
            <p className={style['text-header']}>Login</p>
            <form onSubmit={formik.handleSubmit}>
              <div className={style['layout-form-login']}>
                <p className="font-Rubik">Hi, Welcome back!</p>
                {/* <InputAuth
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  styleContainer="mt-4"
                  label="Email"
                >
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-sm text-red-500">{formik.errors.email}</div>
                  )}
                </InputAuth> */}
                {/* <InputAuth
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                  styleContainer="mt-4"
                  label="Password"
                >
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-sm text-red-500">{formik.errors.password}</div>
                  )}
                </InputAuth> */}
                <p
                  onClick={() => router.push('/auth/forgot-password')}
                  className="font-Rubik text-right text-primary my-5 cursor-pointer"
                >
                  Forgot password?
                </p>
                {/* <Button
                  type="submit"
                  disabled={!formik.isValid}
                  className="btn-primary border rounded-full"
                >
                  Login
                </Button> */}
                <div className="py-6 flex items-center flex-nowrap">
                  <hr className="border border-gray-300 w-4/12" />
                  <p className="font-Rubik text-center text-gray-500 w-4/12">Login With</p>
                  <hr className="border border-gray-300 w-4/12" />
                </div>
                {/* <Button
                  className={`btn-white-primary-outline rounded-full flex items-center justify-center ${style['btn-img-oauth']}`}
                >
                  <img className="mr-3" src="/assets/icon/google.png" alt="icon-google" />
                  <p>Google</p>
                </Button> */}
                <div className="font-Rubik mt-5 flex justify-center cursor-pointer">
                  Don’t have an account?{' '}
                  <p onClick={() => router.push('/auth/register')} className="text-primary pl-2">
                    Sign Up
                  </p>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
