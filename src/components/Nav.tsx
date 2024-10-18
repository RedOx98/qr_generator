"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {
    faList,
    faUserTag,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//rounded-lg bg-[#00000070]

const Nav = ({}) => {
    const inactiveLink = 'flex gap-1 p-2 text-white flex-1';
    const activeLink = inactiveLink + ' items-end opacity-100 w-[200px] bg-[#0579B8] h-[50px] flex items-center text-[#10A2DC] rounded-xl flex-1';
    const pathname = usePathname();
    
    return (
        <div className={` `}>

            <nav className="xs:flex bg-[#031922] items-center justify-center sm:hidden lg:hidden xl:hidden 2xl:hidden xs:flex-col xs:h-full xs:w-full">
            <div className="flex flex-[3] lg:flex lg:flex-row flex-row items-end justify-center w-full  border-red-500 gap-[15px] mt-[25px]">
                    <Link href={'/'} className={pathname === '/' ? activeLink : inactiveLink} >
                        <div className="flex flex-1 items-center justify-center gap-2 w-[30px] cursor-pointer font-thin">
                        Generate
                        </div>
                    </Link>
                    <Link href={'/buildvcc'} className={pathname === '/buildvcc' ? activeLink : inactiveLink} >
                        <div className="flex flex-1 items-center justify-center gap-2 w-[30px] cursor-pointer font-thin">
                        Customize 
                        </div>
                    </Link>
                </div>
            </nav>
            
            

        <nav className='xs:hidden lg:flex flex flex-row justify-between w-full lg:h-[126px]  bg-gradient-to-r from-[#54afe0] via-[#0579B8] to-[#5dc0f5]'>
            <div className="flex-[2] flex flex-row items-center">
                <div className="flex flex-1 items-center justify-center ml-[2.5] w-[150px] border-red-500">
                    <Link href='/'>
                <Image className='ml-3 opacity-60 cursor-pointer' src="/images/Ecologo3.png" alt='/' width={150} height={150} />
                    </Link>
                </div>
                <div className="flex flex-[3] lg:flex lg:flex-row flex-row items-end justify-center w-[300px] mr-[100px] border-red-500 gap-[55px] mt-[50px]">
                    <Link href={'/'} className={pathname === '/' ? activeLink : inactiveLink} >
                        <div className="flex flex-1 items-center justify-center gap-2 w-[30px] cursor-pointer font-thin">
                        Generate
                        </div>
                    </Link>
                    <Link href={'/buildvcc'} className={pathname === '/buildvcc' ? activeLink : inactiveLink} >
                        <div className="flex flex-1 items-center justify-center gap-2 w-[30px] cursor-pointer font-thin">
                        Customize 
                        </div>
                    </Link>
                    <Link href={'/'} className={pathname === '/admin/adminprofile' ? activeLink : inactiveLink} >
                        <div className="flex flex-1 items-center justify-center gap-2 w-[30px] cursor-pointer font-thin">
                        Print
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex-1 flex flex-row justify-around items-start">
                <div className="flex-[3] mt-3">
                    <input type="text" className="w-[200px] h-[29px] rounded-2xl bg-[#00000040] text-[12px] flex justify-center items-center placeholder-[#ffffff70] pl-8 focus:border-transparent" placeholder='...what are you looking for?' />
                </div>
                <div className="flex-1">
                    <Link href="/">
                        <h5 className="text-white font-sans mt-3 font-thin"style={{fontSize: "10px"}}>FAQ/TRAFFIC</h5>
                    </Link>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Nav

//ecobank_qr/public/images/EcobankLogo.png