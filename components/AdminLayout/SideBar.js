// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useDarkMode } from '../DarkMode';
// import { useAuth } from '../../hooks/useAuth';
// import { ReactComponent as LogoSvg } from '../../assets/brand/logo.svg';
// import React from 'react';



// const  SideBar = ({ close }) => {
// //   const { darkMode, toggle: toggleDarkMode } = useDarkMode();
// //   const { user, logout } = useAuth();
//   const { pathname } = useRouter();

//   return (
//     <div className="flex flex-col h-full relative">
//       <button
//         // onClick={close}
//         className="ds-btn ds-btn-pastel ds-btn-circle ds-btn-sm md:hidden absolute right-1 top-4 rotate-45" >
//         <Add className="w-7 h-7" />
//       </button>
//       <Link href="/" passHref>
//         <a className="flex items-center md:justify-center lg:justify-start py-1.5 px-4">
//           <span className="w-[3.25rem] h-[3.25rem] p-3 rounded-full bg-primary text-primary-content">
//             <LogoSvg className="fill-current" />
//           </span>
//           <span className="text-3xl sm:text-3xl font-semibold uppercase ml-3 md:hidden lg:inline">
//             <span className="text-primary"> Wifahrm </span>
//           </span>
//         </a>
//       </Link>

      
//       <nav>
//         <ul className="ds-menu p-4 gap-3 border-t border-base-300 dark:border-base-content/10">
//           <li>
//             <Link href="/dashboard" passHref>
//               <a
//                 className={`ds-btn-pastel border-0 rounded-box font-medium md:flex-col lg:flex-row gap-y-1 ${
//                   pathname === '/dashboard' ? 'active' : ''
//                 }`}
//                 onClick={close}
//               >
//                 {/* <Category2 className="w-7 h-7" variant="TwoTone" /> */}
//                 Dashboard
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/products" passHref>
//               <a
//                 className={`ds-btn-pastel border-0 rounded-box font-medium md:flex-col lg:flex-row gap-y-1 ${
//                   pathname === '/products' ? 'active' : ''
//                 }`}
//                 // onClick={close}
//               >
//                 {/* <Tag2 className="w-7 h-7" variant="TwoTone" /> */}
//                 Products
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/clients" passHref>
//               <a
//                 className={`ds-btn-pastel border-0 rounded-box font-medium md:flex-col lg:flex-row gap-y-1 ${
//                   pathname === '/clients' ? 'active' : ''
//                 }`}
//                 // onClick={close}
//               >
//                 {/* <People className="w-7 h-7" variant="TwoTone" /> */}
//                 Task
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="" passHref>
//               <a
//                 className={`ds-btn-pastel border-0 rounded-box font-medium md:flex-col lg:flex-row gap-y-1 ${
//                   pathname === '/harvest' ? 'active' : ''
//                 }`}
//                 // onClick={close}
//               >
//                 {/* <UserSquare className="w-7 h-7" variant="TwoTone" /> */}
//                 Harvest
//               </a>
// 			</Link>
// 					</li>
// 				</ul>
// 			</nav>
      
// 			<div className="mt-auto p-4 gap-3 flex flex-col md:flex-row lg:flex-col justify-between border-t border-base-300 dark:border-base-content/10">
// 				<button
// 					// onClick={toggleDarkMode}
// 					className="ds-btn ds-btn-pastel ds-btn-block md:ds-btn-circle lg:ds-btn-block justify-between md:justify-center lg:justify-between lg:px-4 rounded-box lg:rounded-box"
// 				>
// 					<span className="md:hidden lg:inline">
// 						<span className="opacity-50">Dark Mode: </span>
// 						{/* {darkMode ? 'On' : 'Off'} */}
// 					</span>
// 					<span className={`ds-swap ds-swap-rotate${ ' ds-swap-active'}`}>
// 						{/* <Sun1 className="ds-swap-off w-7 h-7" /> */}
// 						{/* <Moon className="ds-swap-on w-7 h-7" /> */}
// 					</span>
// 				</button>
// 				<button
// 					// onClick={logout}
// 					className="ds-btn ds-btn-outline ds-btn-block md:ds-btn-circle lg:ds-btn-block lg:px-4 gap-2 rounded-box lg:rounded-box text-left"
// 				>
// 					<span className="flex flex-col flex-1 overflow-hidden md:hidden lg:flex">
// 						<span className="opacity-50">Log Out</span>
// 						<span className="truncate"> 'admin@demo.com </span>
// 					</span>
// 					{/* <LogoutCurve variant="TwoTone" className="w-7 h-7" /> */}
// 				</button>
// 			</div>
// 		</div>
// 	)
// }

// export default SideBar