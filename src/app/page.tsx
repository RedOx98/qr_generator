"use client"

import { faAngleLeft, faEnvelope, faLocationDot, faMagnifyingGlass, faPhone, faSpider, faUser, faUserTag, faFilePdf, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaffType } from '@/types/types';
import Image from 'next/image';
import { useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import { usePDF } from 'react-to-pdf';
import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";




type Input = {
  staffId: string | undefined
}


export default function Home() {
 
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  const [staffId, setStaffId] = useState<string>('');
  const [qr, setQr] = useState<string | null>(null);
  const [image, setImage] = useState<string>("");
  const [res, setRes] = useState<string>("");

  const [data, setData] = useState<StaffType>({
    department: "John doe",
    email: "JohnDoe@gmail.com",
    firstName: "John",
    id: "123456",
    jobRole: "EPI-Technology",
    otherNames: "DOE",
    phoneHome: "+2345678989900",
    phoneWork: "+2346789909909",
    physicalAddress: "EPAC",
    staffIdNo: "12345",
    surname: "DOE",
    url: "whatsapp",
    username: "jDOE",
});
const hub:string = `
BEGIN:VCARD
VERSION:2.1
N:Adebayo;Temitope
FN:Temitope Adebayo
ORG:Nigeria Inter-Bank Settlement System PLC
TITLE:Head, Instant Payment Platform Operations
TEL;WORK;VOICE:+234 803 430 6657
ADR;WORK:;;1230 Ahmadu Bello Way;Victoria Island;Lagos;12617;Nigeria
EMAIL;PREF;INTERNET:tadebayo@nibss-plc.com.ng
END:VCARD     
`;


  const handleDownload = async () => {
    const divRef = document.getElementById('my-qr'); 
    if (divRef) {
      const canvas = await html2canvas(divRef);
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'my-div-image.png';
      link.click();
    }
  };



const email = data?.email
    var goog_chart = 'http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
    var str_start = 'BEGIN:VCARD\nVERSION:3.0\n';
     var str_vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
        var str_end = '\nEND:VCARD';
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //  React.ChangeEvent<HTMLInputElement> | undefined
    setStaffId(e.target.value)
    //  console.log("Here"+e.target.value);
  }

  
    const fetchStaff = () => {
        const firstName = data?.firstName;
        const surname = data?.surname;
        const otherNames = data?.otherNames;
        const department = data?.department;
        const physical_address = data?.physicalAddress;
        const work_mail = data?.email;
        const tel = data?.phoneWork;
        str_vcard += str_end;
         str_vcard += 'N:' + surname + ';' + firstName + ';' + otherNames + '\n' +
            'FN:' + firstName + ' ' + surname + ' ' + otherNames+ ' ' + department+ ' ' + physical_address+ ' ' + work_mail+ ' ' + tel+ ' ' + str_vcard;
            const formatres:string = str_vcard.replace(/\n/g,'%0A');
            setRes(formatres)
        
        // return formatres;
        // setRes(formatres)
    }
        
    
    
  // bg-[#BFCBD7]
  return (
  <div className="w-full max-h-screen  flex flex-row items-center justify-center  bg-gradient-to-r from-[#f2f4f790] via-[#eaf0f7] to-[#edf0f2] z-[-99] overscroll-none">
   {/* Another onSubmit use to be here... */}

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
        {/* a refactored input your staff id number use to be here */}
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
           <div id="my-qr" ref={targetRef} className=" bg-[#ffffff] w-[320px] h-[200px] shadow-lg flex flex-col gap-1 rounded-[10px] relative">
              {/* <FontAwesomeIcon icon={faStar} className='text-[#00000020] opacity-100' width={20} height={20}/> */}
              <div className="flex-[2] flex flex-row justify-between items-start ">
                <div className="bg-[#000000] w-[15px] h-full ml-[30px] "></div>
                <div className="flex flex-row gap-1 mt-[10px]">
                  <div className="flex flex-col gap-[0px]">
                    <div className="">
                      {
                        data?.firstName == '' && data?.surname == ''?<h5 className="text-[#000000] uppercase font-bold text-[14px]">JOHN DOE</h5>
                        :
                        <h5 className="text-[#000000] uppercase font-bold text-[14px]">{data?.firstName + ' ' + data?.surname}</h5>
                      }
                    </div>
                    <div className="flex justify-end items-center">
                      {
                        data?.department == '' ? <h5 className="text-[#000000] uppercase font-light text-[10px]">TECHNOLOGY</h5> 
                        :
                         <h5 className="text-[#000000] uppercase font-light text-[10px]">{data?.department}</h5>
                      }
                      
                    </div>
                  </div>
                  <div className="bg-[#000000] rounded-l-full w-[45px] h-[40px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className='text-[#ffff] opacity-100' width={20} height={20} />
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
              <div className="flex-[4] flex flex-col gap-3 ">
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    {data?.phoneWork ==''?<h5 className="font-extralight text-[12px] text-black">090369410000</h5>
                    :
                    <h5 className="font-extralight text-[12px] text-black">{data?.phoneWork}</h5>
                    }
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    {
                      data?.email ===''? <h5 className="font-extralight text-[12px]">JohnDoe@gmail.com</h5>
                      :
                      <h5 className="font-extralight text-[12px]">{data?.email}</h5>
                    }
                  </div>
                  
                </div>
                
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faSpider} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    {data?.url===''? <h5 className="font-extralight text-[12px]">JohnDoe.com</h5>: <h5 className="font-extralight text-[12px]">{data?.url}</h5>}
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faLocationDot} className='text-[#ffff] opacity-100' width={8} height={8} />
                  </div>
                  <div className="">
                    {
                      data?.physicalAddress === ''? <h5 className="font-extralight text-[12px]">HEAD OFFICE</h5>
                      :
                      <h5 className="font-extralight text-[12px]">{data?.physicalAddress}</h5>
                    }
                  </div>
                </div>
              </div>
              <div className="ml-2 mr-8 h-80 w-80 mt-8">
                {
                  // data?.staffIdNo == '' ? <Image src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" alt='Passport Photograph' width={60} height={60} className='rounded-lg'/> 
                  // :
                  //image
                  <QRCode value={hub}   size={256}
                  style={{ height: "80px", maxWidth: "80px", width: "80px" }}/>
                 
                  // <Image src={image} alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                }
                        
                   </div>
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
              {
                data?.staffIdNo === ''? <h6 className="text-black font-thin text-[14px] ">10941</h6>
                :
                <h6 className="text-black font-thin text-[14px] ">{data?.staffIdNo}</h6>
              }
              
            </div>
          </div>
        </div>
        <div className="flex-[6] flex flex-col gap-8 ml-[-60px] mt-[20px]">
          <div className="flex flex-row gap-2 px-[64px]">
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-thin">Firstname:</h4>
            </div>
            <div className="flex-[2]">
              {
                data?.firstName === ''? <h4 className="text-[14px] font-sans font-semibold">Olumide</h4>
                :
                <h4 className="text-[14px] font-sans font-semibold">{data?.firstName}</h4>
              }
              
            </div>
          </div>
          <div className="flex flex-row gap-2 px-[64px]">
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-thin">Lastname:</h4>
            </div>
            <div className="flex-[2]">
              {
                data?.surname === ''? <h4 className="text-[14px] font-sans font-semibold">OLAMILEKAN</h4> : <h4 className="text-[14px] font-sans font-semibold">
                  {data?.surname}</h4>
              }
              
            </div>
          </div>
          <div className="flex flex-row gap-2 px-[64px]">
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-thin">Role:</h4>
            </div>
            <div className="flex-[2]">
              {
                data?.jobRole === '' ? <h4 className="text-[14px] font-sans font-semibold">Data Analyst</h4>
                : 
                <h4 className="text-[14px] font-sans font-semibold">{data?.jobRole}</h4>
              }
              
            </div>
          </div>
          <div className="flex flex-row gap-2 px-[64px]">
            <div className="flex-[2]">
              <h4 className="text-[14px] font-sans font-thin">Email:</h4>
            </div>
            <div className="flex-[2]">
              {
                data?.url === '' ?  <h4 className="text-[14px] font-sans font-semibold">oolamilekan@ecobank.com</h4>: <h4 className="text-[14px] font-sans font-semibold">{data?.url}</h4>
              }
              
            </div>
          </div>
          <div className="flex flex-row gap-2 px-[64px]">
            <div className="flex-[1]">
              <h4 className="text-[14px] font-sans font-thin">Location:</h4>
            </div>
            <div className="flex-[2]">
            {
          data?.physicalAddress === ''? <h4 className="text-[14px] font-sans font-semibold">HEAD OFFICE</h4>
          : 
          <h4 className="text-[14px] font-sans font-semibold">{data?.physicalAddress}</h4>
        }
              
            </div>
          </div>
        </div>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleDownload}>
  <FontAwesomeIcon icon={faFilePdf} className="text-white" width={16} height={16} />
  <span className="text-base">Save as PDF</span>
</button>

<button className="flex items-center justify-center gap-2 mt-4 px-4 py-2 mb-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={() => toPDF()}>
  <FontAwesomeIcon icon={faFileImage} className="text-white" width={16} height={16} />
  <span className="text-base">Save as Image</span>
</button>

      </div>
      <div className="flex-[0.1] bg-gradient-to-r from-[#03658C] via-[#02415A] to-[#0699AD] rounded-b-[10px] flex justify-center items-center cursor-pointer ">
        
        <h3 className="text-[#ffff] text-[16px] font-thin">Generate Card</h3>
      </div>
    </div>

  </div>
  );
}

// const arrayBuffer = await res.arrayBuffer();
    // const base64String = btoa(new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    // setQr(`data:image/png;base64,${base64String}`)
    // console.log(base64String);

    // Create a Blob URL
    // const blob = new Blob([Uint8Array.from(atob(base64String), c => c.charCodeAt(0))], { type: 'image/png' });
    // const blobUrl = URL.createObjectURL(blob);