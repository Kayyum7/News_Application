import React, { useState } from 'react'
import SideBar from './SideBar'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

function Layout(props) {
    const [showSideBar, setShowSideBar] = useState(true)
    return (
        <div className='layout flex w-full h-full font-bold '>
            <div className='sidebar '>
                <SideBar showSideBar={showSideBar} />
            </div>

            <div className='w-full h-full'>
                <div className='header bg-primary h-20 w-full flex item-center'>
                    <HiOutlineMenuAlt1 onClick={() => setShowSideBar(!showSideBar)} color='gray' size={50} className='cursor-pointer' />
                </div>
                <div className='content max-h-[85vh] overflow-y-auto'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout