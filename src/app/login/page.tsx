import { faAngleLeft, faArrowAltCircleDown, faArrowAltCircleLeft, faCircleArrowLeft, faFilePdf, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

const page = () => {
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
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                    <label htmlFor="email" className="">
                      <h3 className="text-black font-extralight">Email</h3>
                    </label>
                    <input type="text" className="w-[400px] h-[35px] rounded-xl text-center" style={{border: "1px solid #10A2DC"}} placeholder="username@ecobank.com" />
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
                      <h3 className="text-white font-light">Company Single Sign-On</h3>
                      </div>
                  </div>
                  </Link>
                  <div className="mt-[40px]">
                    <h3 className="text-black font-light">I don't have an account <Link href="/" className="cursor-pointer"><span className="text-[#10A2DC]">Create account!</span></Link></h3>
                  </div>
                </div>
                </div>
                
        </div>
    </div>
  )
}

export default page