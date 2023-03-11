import { forwardRef } from 'react'
import { Category2, Tag2, People, UserSquare, LogoutCurve, Moon, Sun1, Add } from 'iconsax-react';
import Link from 'next/link'
import SidebarNew from './components/sidebar/sidebar';
import { Feather } from './icons'


const Sidebar = forwardRef(
  ({ collapsed,sidebarRef }) => (
    <nav
      ref={sidebarRef}
      className={`w-64 min-h-screen p-6 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
        collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
      } transition-spacing motion-reduce:transition-none duration-300 sm:duration-500 ease-in-out`}
    >

<SidebarNew/>
      {/* <Link href='/' aria-label='Go to the dashboard' passHref>
        <div className='flex space-x-3 justify-center text-xl font-bold'>
          <Feather width={28} height={28} />
          <span> Wifahrm</span>
        </div>
      </Link>



  <nav className="flex flex-col mt-20 flex-wrap bg-gray-800 p-6">
    <div className="w-full block flex-col gap-16 flex-grow lg:flex lg:items-center  justify-start lg:w-auto">
      <div className="text-sm gap-20 items-center flex justify-between flex-col lg:flex-grow">
        <Link href="/dashboard">
          <a className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:text-white mr-4">
            Dashboard
          </a>
        </Link>
        <Link href="/dashboard/products">
          <a className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:text-white mr-4">
            Products
          </a>
        </Link>
        <Link href="/dashboard/createfarm">
          <a className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:text-white">
            Create Crops
          </a>
        </Link>
        <Link href="/dashboard/checkfarm">
          <a className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:text-white">
            Check Farm
          </a>
        </Link>
        <Link href="/dashboard/task">
          <a className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:text-white">
            Task
          </a>
        </Link>
      </div>
      <div>

      </div>
    </div>
    <button className="inline-block mt-32 text-base items-start  px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
          Log Out
        </button>
  </nav> */}
</nav>





  )
)

Sidebar.displayName = 'Sidebar'

export default Sidebar
