import React, { useState } from 'react';
import '../CSS/Navbar.css'

const Navbar = () => {
    let [open, setOpen] = useState(false);
    let links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Service', link: '/services' },
        { name: 'Room', link: '/room' },
        { name: 'Blog', link: '/blogs' },
        { name: 'Contact', link: '/contact' },
    ];
    return (
        <div className='sticky top-0 left-0 z-50 font-[Poppins] py-6 text-center bg-blue-400 lg:px-24 px-4'>
            <div className='flex items-center justify-between'>
                <div className='cursor-pointer'>
                    Navbar
                </div>
                <div onClick={() => setOpen(!open)} className='text-2xl absolute right-6 top-4 cursor-pointer lg:hidden text-white'>
                    <i className={`${open ? 'fa-solid fa-x' : 'fa-solid fa-bars'}`}></i>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-8 absolute lg:static bg-blue-400 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} lg:opacity-100`}>
                    {
                        links.map((link) => (
                            <li key={link.name} className="md:ml-8 md:my-0 my-7">
                              <a
                                href={link.link}
                                className="text- hover:text-gray-400 duration-500"
                              >
                                {link.name}
                              </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;