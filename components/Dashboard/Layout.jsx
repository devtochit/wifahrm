import { useState, useEffect, useRef } from 'react'

import Footer from '../Dashboard/Footer'
import Sidebar from '../Dashboard/Sidebar'
import Toolbar from '../Dashboard/components/Toolbar'





const Layout = ({children}) => {
  // const [collapsed, setCollapsed] = useState(false)

  const toggleRef = useRef(null)
  // const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClick = event => {
      const insideToggle = toggleRef.current?.contains(event.target)
      const insideMenu = sidebarRef.current?.contains(event.target)

      if (!(insideToggle || insideMenu)) {
        setCollapsed(false)
      }
    }

    // const mediaQuery = window.matchMedia('(max-width: 639px)')

    // if (mediaQuery.matches) {
    //   window.addEventListener('click', handleClick)
    // }

    // return () => window.removeEventListener('click', handleClick)
  }, [])

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed)
  // }

  return (
    <>
    
        <div className='flex'>
          <Sidebar />
          <div className='w-full overflow-y-hidden'>
            <Toolbar />
            <main className="w-screen sm:w-auto sm:px-12 lg:py-6 lg:px-6">
              {children}
            </main>
            <Footer />
          </div>
        </div>

    </>
  )
}

export default Layout
