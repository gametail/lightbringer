import React from 'react'
import { twMerge } from 'tailwind-merge'
import { TbBow, TbMaximize, TbMinus, TbCircleX } from 'react-icons/tb'

interface IWindowTitleBar {
  className?: string
}

const WindowTitleBar: React.FC<IWindowTitleBar> = ({ className }) => {
  return (
    <header className={twMerge('flex', className)}>
      <TbBow className="w-12 mx-1 place-self-center" size={28} />
      <h1 className="text-xl grow place-self-center">Lightbringer</h1>
      <div className="flex items-center justify-center ">
        <button className="flex items-center justify-center h-10 w-14 bg hover:bg-neutral">
          <TbMinus size={20} />
        </button>
        <button className="flex items-center justify-center h-10 w-14 bg hover:bg-neutral">
          <TbMaximize size={20} />
        </button>
        <button className="flex items-center justify-center h-10 w-14 bg hover:bg-error">
          <TbCircleX size={20} />
        </button>
      </div>
    </header>
  )
}

export default WindowTitleBar
