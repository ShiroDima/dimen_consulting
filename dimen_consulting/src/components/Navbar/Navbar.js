import React, { useState } from 'react'
import navLinks from '../../constants'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return(
        <div className='w-screen h-[100px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex flex-wrap items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Dimen <br /> Consulting</h1>
                    <ul className='hidden md:flex'>
                        {
                            navLinks.map((link, idx) => {
                                                    return <a href={`#${link.id}`} className='hover:shadow-sm hover:text-indigo-600'><li>{link.text}</li></a>
                                                })
                        }
                    </ul>
                </div>
                <div className='hidden md:flex flex-shrink-2 pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={() => setNav((prev) => !prev)}>
                    {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <a href='/'><li className='border-b-2 border-zinc-300 w-full'>Home</li></a>
                <a href='/'><li className='border-b-2 border-zinc-300 w-full'>About Us</li></a>
                <a href='/'><li className='border-b-2 border-zinc-300 w-full'>Request Form</li></a>
                <a href='/'><li className='border-b-2 border-zinc-300 w-full'>Contact Us</li></a>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar

