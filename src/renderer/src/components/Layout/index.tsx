import React from 'react'
import { twMerge } from 'tailwind-merge'
import { TbMenu2 } from 'react-icons/tb'

interface ILayout {
  className?: string
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ className, children }) => {
  return (
    <div className={twMerge('drawer 2xl:drawer-open', className)}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center px-12 mt-10 drawer-content">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="z-[997] absolute left-0 m-4 top-10 btn btn-primary btn-square drawer-button 2xl:hidden"
        >
          <TbMenu2 size={32} />
        </label>
      </div>
      <div className="z-[998] drawer-side top-10">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="min-h-full p-4 2xl:pt-14 menu w-80 bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Layout
