"use client"

import { Credential } from "@/types/types";
import { faAngleLeft, faArrowAltCircleDown, faArrowAltCircleLeft, faCircleArrowLeft, faFilePdf, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const page = () => {
  const [credentials, setCredentials] = useState<Credential>({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState<string>('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: [value]
    }));
    console.log(credentials);
  };



  const handleSubmit = async()=> {
    try {
      const res = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({
        credentials
      }),
    });
    const data = await res.json();
    console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#10A2DC] via-[#315fa4] to-[#040533] gap-4 overscroll-none overflow-hidden">
        <div className="">
            <Image src="/images/Ecologo3.png" alt="" width={80} height={80}/>
        </div>
        <div className="w-[500px] h-[500px] flex flex-col gap-6 justify-center items-center border-red-500 shadow-black shadow-2xl bg-[#e3f5fa] opacity-90 rounded-lg" style={{border: "1px solid #10A2DC"}}>
                <div className="flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-center mt-[-40px]">
                    <h1 className="text-black text-[80px]]" style={{fontSize: "30px"}}>Welcome back!</h1>
                    <hr className="w-[70px] h-[6px] bg-[#10A2DC] ml-[140px] rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 flex-[5]">
                  <div className="flex flex-col justify-center items-center mt-[35px]">
                    <div className="">
                    <label htmlFor="email" className="">
                      <h3 className="text-black font-extralight">Username</h3>
                    </label>
                    <input type="text" className="w-[400px] h-[35px] rounded-xl text-center" style={{border: "1px solid #10A2DC"}} placeholder="username@ecobank.com" value={credentials.username} name="username" onChange={handleChange}/>
                    </div>
                    <div className="">
                    <label htmlFor="password" className="">
                      <h3 className="text-black font-extralight">Password</h3>
                    </label>
                    <input type="password" className="w-[400px] h-[35px] rounded-xl text-center" style={{border: "1px solid #10A2DC"}} placeholder="123456" value={credentials.password} name="password" onChange={handleChange}/>
                    </div>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="">
                      <FontAwesomeIcon icon={faLock} className="text-black" width={16} height={16} />
                      </div>
                      <div className="">
                      <h3 className="text-black font-light">Single Sign-on enabled</h3>
                      </div>
                    </div>
                    <div className=" mt-[10px]">
                      <Link href="/" className="cursor-pointer">
                      <h3 className="text-[#10A2DC] font-bold">Use password instead</h3>
                      </Link>
                    </div>
                  </div>
                  <Link href="/" className="cursor-pointer">
                  <div className="w-[400px] h-[40px] bg-gradient-to-r from-[#97329f] via-[#97329f] to-[#012727] flex flex-row items-center justify-center gap-4">
                  <div className="">
                      <FontAwesomeIcon icon={faCircleArrowLeft} className="text-white font-bold" width={16} height={16} />
                      </div>
                      <div className="">
                      <h3 className="text-white font-light" onClick={handleSubmit}>Company Single Sign-On</h3>
                      </div>
                  </div>
                  </Link>
                  <div className="mt-[40px]">
                    <h3 className="text-black font-light">I don't have an account <Link href="/" className="cursor-pointer"><span className="text-[#10A2DC]">Create account!</span></Link></h3>
                  </div>
                </div>
                </div>
                {message && <p className="text-[35px] font-bold text-red-600">{message}</p>}
        </div>
    </div>
  )
}

export default page