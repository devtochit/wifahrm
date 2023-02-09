import Image from "next/image";
import {useState} from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../styles/Sign.module.css'

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true)

    const handleSubmit = values => {
        console.log(values)
        // your submit logic here
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <Field
                            className={styles.field}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            className={styles.error}
                            name="email"
                            component="div"
                        />
                        <Field
                            className={styles.field}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage
                            className={styles.error}
                            name="password"
                            component="div"
                        />
                        <button
                            className={styles.submitBtn}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                        <button
                            className={styles.switchBtn}
                            type="button"
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default SignUp



// const SignForm = () => {
//   const textVariants = {
//     offscreen: {
//       opacity: 0,
//       y: -100,
//       transition: {
//         type: "tween",
//         bounce: 0.4,
//         ease: "easeIn",
//         duration: 1,
//       },
//     },
//     onscreen: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "tween",
//         bounce: 0.4,
//         ease: "easeOut",
//         duration: 1,
//       },
//     },
//   };
//   return (
//     <div className={styles.wrapper}>
//       <motion.div
//         initial="offscreen"
//         whileInView="onscreen"
//         transition={{ staggerChildren: 0.5 }}
//         className={styles.inner}
//       >
//         <motion.h1 variants={textVariants}>Choose an amount</motion.h1>

//         <motion.div
//           transition={{ staggerChildren: 0.5 }}
//           className={styles.buttons__ctn}
//         >
//           <motion.button variants={textVariants} type="button">
//             <span>
//               <Image
//                 src="/svgs/ic-naira.svg"
//                 height={16}
//                 width={20}
//                 alt="naira_symbol"
//               />
//             </span>
//             1000
//           </motion.button>
//           <motion.button variants={textVariants} type="button">
//             <span>
//               <Image
//                 src="/svgs/ic-naira.svg"
//                 height={16}
//                 width={20}
//                 alt="naira_symbol"
//               />
//             </span>
//             2000
//           </motion.button>
//           <motion.button variants={textVariants} type="button">
//             <span>
//               <Image
//                 src="/svgs/ic-naira.svg"
//                 height={16}
//                 width={20}
//                 alt="naira_symbol"
//               />
//             </span>
//             3000
//           </motion.button>
//           <motion.button variants={textVariants} type="button">
//             <span>
//               <Image
//                 src="/svgs/ic-naira.svg"
//                 height={16}
//                 width={20}
//                 alt="naira_symbol"
//               />
//             </span>
//             4000
//           </motion.button>
//         </motion.div>

//           <h2>OR</h2>
       
//         <form action="POST" className={styles.form}>
//           <div className={styles.top__layer}>
      
//               <motion.div
//                 initial={{
//                   x: -100,
//                   opacity: 0,
//                   transition: {
//                     duration: 1,
//                   },
//                 }}
//                 whileInView={{
//                   x: 0,
//                   opacity: 1,
//                   transition: {
//                     duration: 1,
//                   },
//                 }}
//                 className={styles.amount}
//               >
//                 <label htmlFor="amount">Amount*</label>
//                 <input type="text" id="amount" placeholder="Enter Amount" />
//               </motion.div>
//               <motion.div
//                 initial={{
//                   x: -100,
//                   opacity: 0,
//                   transition: {
//                     duration: 1,
//                   },
//                 }}
//                 whileInView={{
//                   x: 0,
//                   opacity: 1,
//                   transition: {
//                     duration: 1,
//                   },
//                 }}
//                 className={styles.amount}
//               >
//                 <label htmlFor="name">Name*</label>
//                 <input type="text" id="name" placeholder="Name on Card" />
//               </motion.div>
//               <motion.div
//                 initial={{
//                   x: -100,
//                   opacity: 0,
//                   transition: {
//                     duration: 1,
//                   },
//                 }}
//                 whileInView={{
//                   x: 0,
//                   opacity: 1,
//                   transition: {
//                     duration: 1,
//                   },
//                 }}
//                 className={styles.amount}
//               >
//                 <label htmlFor="number">Number*</label>
//                 <input type="text" id="number" placeholder="Card Number" />
//               </motion.div>
           
//           </div>
//           <motion.div
//             transition={{ staggerChildren: 0.3 }}
//             className={styles.bottom__layer}
//           >
//             <motion.div
//               initial={{
//                 y: -100,
//                 opacity: 0,
//                 transition: {
//                   duration: 1,
//                 },
//               }}
//               whileInView={{
//                 y: 0,
//                 opacity: 1,
//                 transition: {
//                   duration: 1,
//                 },
//               }}
//               className={styles.amount}
//             >
//               <label htmlFor="cvc">CVC*</label>
//               <input type="text" id="cvc" placeholder="CVC" />
//             </motion.div>
//             <motion.div
//               initial={{
//                 y: -100,
//                 opacity: 0,
//                 scale: 0.5,
//                 transition: {
//                   duration: 1,
//                 },
//               }}
//               whileInView={{
//                 y: 0,
//                 opacity: 1,
//                 scale: 1,
//                 transition: {
//                   duration: 1,
//                 },
//               }}
//               className={styles.amount}
//             >
//               <label htmlFor="date">Exp Date</label>
//               <input type="text" id="date" placeholder="MM/YY" />
//             </motion.div>
//             <motion.div
//               initial={{
//                 y: -100,
//                 opacity: 0,
//                 scale: 0.5,
//                 transition: {
//                   duration: 1,
//                 },
//               }}
//               whileInView={{
//                 y: 0,
//                 opacity: 1,
//                 scale: 1,
//                 transition: {
//                   duration: 1,
//                 },
//               }}
//               className={styles.amount}
//             >
//               <label htmlFor="number">Postal code</label>
//               <input type="text" id="number" placeholder="Zip Code" />
//             </motion.div>
//           </motion.div>
//           <motion.button
//             initial={{
//               y: -100,
//               opacity: 0,
//               scale: 0.5,
//               transition: {
//                 duration: 1,
//               },
//             }}
//             whileInView={{
//               y: 0,
//               opacity: 1,
//               scale: 1,
//               transition: {
//                 duration: 1,
//               },
//             }}
//             type="submit"
//           >
//             Donate
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default SignForm;
