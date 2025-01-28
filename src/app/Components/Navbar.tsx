"use client"
import { useState } from 'react';
import Logo from './Icons/Logo';
import Link from 'next/link';


export default function index() {

    const [show, setshow] = useState(false);
    // 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4
    return (
        <div className=" bg-black  ">
            <nav className="bg-black lg:px-20 lg:py-6  sm:py-6 sm:px-7 py-5 px-4 sticky ">
                {/* For large and Medium-sized Screen */}
                <div className="flex justify-between items-center ">
                    <div className=" flex space-x-3 items-center">
                       <Logo/>
                    </div>
                    <div className="hidden sm:flex flex-row space-x-4">
                        <Link className="px-8 text-white" href="#">¿Qué hacemos?</Link>
                        <Link className="px-8 text-white" href="#">¿Quiénes somos?</Link>
                        <Link className="px-8 text-white" href="#">Contactanos</Link>
                    </div>
                    {/* Burger Icon */}
                    <div id="bgIcon" onClick={()=>setshow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                        <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                 
                    <div className="flex flex-col gap-4 mt-4  mx-auto ">
                         <Link className='text-white' href="#">¿Qué hacemos?</Link>
                        <Link className='text-white' href="#">¿Quiénes somos?</Link>
                        <Link className='text-white' href="#">Contactanos</Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}

