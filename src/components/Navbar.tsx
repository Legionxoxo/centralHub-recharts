import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search bar */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-zinc-300 px-2'>
        <Image src="/search.png" alt='Search' width={14} height={14} />
        <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
      </div>

      {/* Users */}
      <div className='flex items-center gap-6 justify-end w-full'>
      <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
        <Image src="/message.png" alt="" width={20} height={20} />
      </div>
      <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
        <Image src="/annoucement.jpeg" alt="" width={60} height={60} />
        <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full flex justify-center items-center bg-red-600 text-white text-xs '>1</div>
      </div>
      <div className='flex flex-col'>
      <span className='text-xs leading-3 font-medium'>Ram singh</span>
      <span className='text-[10px] text-zinc-600 text-right'>Admin</span>
      </div>
      <Image src="/avatar.png" alt='avatar' width={36} height={36} className='rounded-full' />
    </div>
    </div>
  )
}

export default Navbar