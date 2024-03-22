"use client"
import { faAngleLeft, faArrowAltCircleDown, faBinoculars, faEnvelope, faLocationDot, faMagnifyingGlass, faPhone, faRightLeft, faSpider, faUser, faUserTag, faV } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

type Input = {
  staffId: string | undefined
}


export default function Home() {
  const [staffId, setStaffId] = useState<string>('');
  const [qr, setQr] = useState<string | null>(null);
  console.log(staffId);
  console.log(qr);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //  React.ChangeEvent<HTMLInputElement> | undefined
    setStaffId(e.target.value)
    console.log(staffId);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://quickchart.io/qr?text=https://localhost:3000/staffInfo/${staffId}&format=png`, {
      method: 'GET',
      headers: {
        "Content-Type": "image/png"
      }
    })
    // const arrayBuffer = await res.arrayBuffer();
    // const base64String = btoa(new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    // setQr(`data:image/png;base64,${base64String}`)
    // console.log(base64String);

    // Create a Blob URL
    // const blob = new Blob([Uint8Array.from(atob(base64String), c => c.charCodeAt(0))], { type: 'image/png' });
    // const blobUrl = URL.createObjectURL(blob);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    console.log(blobUrl)
    setQr(blobUrl);
    } catch (err) {
      console.log(err);
      
    }
  }
  // bg-[#BFCBD7]
  return (
  <div className="w-full max-h-screen  flex flex-row items-center justify-center  bg-gradient-to-r from-[#f2f4f790] via-[#eaf0f7] to-[#edf0f2] z-[-99] overscroll-none">
    {/* <div className="w-[1/2] h-1/2 flex items-center justify-center z-[999]">
    <form action="" className="w-[400px] h-[500px] flex flex-col" onSubmit={handleSubmit}>
      <h4 className="text-black">This for the form</h4>
      <input type="text" name='staffId' value={staffId} className="w-[300px] h-[60px] rounded-md" placeholder="Enter your staff ID" onChange={handleChange}/>

      <button className="w-[200px] h-[70px] bg-red-500 rounded-xl mt-[20px]" type="submit">Submit ID</button>
    </form>

    {qr && (
          <div>
            <h4 className="text-white">Generated QR Code</h4>
            <Image src={qr} alt="QR Code" height={200} width={200}/>
          </div>
        )}
    </div> */}

{/* LEFT */}
    <div className="flex-1 flex flex-col justify-center items-center gap-2">
    <div className="flex-[1] flex flex-col gap-1 justify-center items-center  ">
            <div className="">
              <h3 className="text-[#10A2DC] font-semibold" style={{ fontSize: "35px" }}>E-Business Card</h3>
            </div>
            <div className="flex flex-row justify-around items-center w-[260px] gap-2 mt-[-10px] ml-[20px]">
              <div className="flex-[6] h-[2.5px]  border-b-2 bg-gradient-to-r from-white via-gray-600 to-white"></div>
              <div className="flex-1">
                <h6 className="text-gray-500">Portal</h6>
              </div>
            </div>
          </div>
      <div className="flex flex-col gap-4 justify-center items-center mb-[50px]">
        <div className="flex flex-row rounded-2xl w-[374px] h-[33px] justify-center items-center bg-[#AFC2D490]" style={{border: "1.5px solid #C6DBF0"}}>
          <div className="flex justify-center items-center" >
          {/* <input type="text" className="w-[300px] border-none outline-none" placeholder="Lookup Username"/> */}
          <input type="text" className="firstName w-[350px] border-b-[1px] focus:border-b-1 outline-none bg-gradient-to-r from-[#c2d0dd] via-[#B3C1D0] to-[#c2d0dd] text-center focus:bg-gradient-to-r focus:from-[#C6DBF0] focus:via-[#B3C1D0] focus:to-[#AFC2D4] focus:text-center focus:text-[14px] focus:font-sans h-[33px] rounded-xl" placeholder="Lookup Username"/>
          </div>
          <div className="bg-[#ACBFD2] w-[20px] h-[20px] rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#000000] opacity-100 cursor-pointer p-[1px]' width={16} height={16}/>
          </div>
        </div>
        <div className="flex flex-col w-[250px] h-[85px] justify-center items-center relative">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white absolute top-[]"  style={{border: "1px solid black"}}>
            <h3 className="text-black font-thin font-serif text-[30px]">2</h3>
          </div>
          <div className="bg-white h-[0.1px] w-[250px]">
          <div className=" h-[1.5px] bg-gradient-to-r from-white via-gray-600 to-white"></div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex-1 w-[285px] h-[44px] rounded-2xl bg-gradient-to-r from-[#bccdde] via-[#A5B6C8] to-[#93a4b5] mt-[10px] flex flex-row items-center justify-center gap-2">
            <div className="">
              <h3 className="text-white font-serif text-right font-extralight">Choose Card Style</h3>
            </div>
            <div className="bg-[#ABC8E4] w-[32px] h-[32px] rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faAngleDoubleDown} className='text-[#89aed0] opacity-100 ' width={40} height={30}/>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
        <div className="bg-[#ABC8E4] w-[32px] h-[32px] rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faAngleLeft} className='text-[#89aed0] opacity-100 cursor-pointer' width={40} height={30}/>
            </div>
          <div className="mb-[20px]">
          <div className=" bg-[#ffffff] w-[320px] h-[200px] shadow-lg flex flex-col gap-1 rounded-[10px]">
              {/* <FontAwesomeIcon icon={faStar} className='text-[#00000020] opacity-100' width={20} height={20}/> */}
              <div className="flex-[2] flex flex-row justify-between items-start ">
                <div className="bg-[#000000] w-[15px] h-full ml-[30px] "></div>
                <div className="flex flex-row gap-1 mt-[10px]">
                  <div className="flex flex-col gap-[0px]">
                    <div className="">
                      <h5 className="text-[#000000] uppercase font-bold text-[14px]">OLAIDE HAMMED</h5>
                    </div>
                    <div className="flex justify-end items-center">
                      <h5 className="text-[#000000] uppercase font-light text-[10px]">MARKETING</h5>
                    </div>
                  </div>
                  <div className="bg-[#000000] rounded-l-full w-[45px] h-[40px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className='text-[#ffff] opacity-100' width={20} height={20} />
                  </div>
                </div>
              </div>
              <div className="flex-[4] flex flex-col gap-3 ">
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">+234 903 694 9353</h5>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">olaskeet@gmail.com</h5>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faSpider} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">olahammed.com</h5>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faLocationDot} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">270B EPAC, Ozumba Mbadiwe, VI Lagos.</h5>
                  </div>
                </div>
              </div>
              <div className="flex-[0.5] flex items-end justify-end">
              </div>
            </div>
          </div>
          <div className="bg-[#ABC8E4] w-[32px] h-[32px] rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faAngleRight} className='text-[#89aed0] opacity-100 cursor-pointer' width={40} height={30}/>
            </div>
        </div>
      </div>
    </div>
    {/* RIGHT */}
    <div className="flex-[0.4] flex flex-col h-[650px] w-[108px] p-2 mr-[220px] gap-2 ">
      <div className="flex-[0.1] bg-[#000000] rounded-t-[10px] flex justify-center items-center">
      <h3 className="text-[#ffff] text-[14px] font-sans font-thin">Lookup Data Result</h3>
      </div>
      <div className="flex-[6] bg-[#ffff] flex flex-col justify-around items-center p-2">
        <div className="flex-[2] mt-[15px] flex flex-row gap-10  items-center mr-[-50px] ">
          <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center" style={{border: "1px solid black"}}>
          <FontAwesomeIcon icon={faUserTag} className='text-[#000000] opacity-100 cursor-pointer' width={80} height={80}/>
          </div>
          <div className="flex flex-col relative">
            <div className="absolute w-[40px] top-[-50px] left-[-20px]">
              <h6 className="text-black font-thin text-[12px]  w-[40px]">USER ID:</h6>
            </div>
            <div className="absolute top-[-20px] left-[-20px]">
              <h6 className="text-black font-thin text-[14px] ">10941</h6>
            </div>
          </div>
        </div>
        <div className="flex-[6] flex flex-col gap-8 ml-[-60px] mt-[20px]">
          <div className="flex flex-row gap-6">
            <div className="flex-1">
              <h4 className="text-[14px] font-sans font-thin">Firstname:</h4>
            </div>
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-semibold">Olumide</h4>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex-[1]">
              <h4 className="text-[14px] font-sans font-thin">Lastname:</h4>
            </div>
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-semibold">OLAMILEKAN</h4>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex-[1]">
              <h4 className="text-[14px] font-sans font-thin">Role:</h4>
            </div>
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-semibold">Data Analyst</h4>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex-[1]">
              <h4 className="text-[14px] font-sans font-thin">Email:</h4>
            </div>
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-semibold">oolamilekan@ecobank.com</h4>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex-[1]">
              <h4 className="text-[14px] font-sans font-thin">Location:</h4>
            </div>
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-semibold">Head Office</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0.1] bg-gradient-to-r from-[#03658C] via-[#02415A] to-[#0699AD] rounded-b-[10px] flex justify-center items-center cursor-pointer ">
        <h3 className="text-[#ffff] text-[16px] font-thin">Generate Card</h3>
      </div>
    </div>

  </div>
  );
}