"use client"

import { StaffType } from '@/types/types'

import { faArrowAltCircleDown, faEnvelope, faLocationDot, faPhone, faSpider, faUser , faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import html2canvas from 'html2canvas';
import { usePDF } from 'react-to-pdf';
import QRCode from "react-qr-code";
import { useUserStore } from "@/utils/store";
import { useRouter } from "next/navigation";


const BuildVirtualCard = () => {
  const navigate = useRouter();

  var goog_chart = 'http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
    var str_start = 'BEGIN:VCARD\nVERSION:3.0\n';
        var str_vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
        var str_end = '\nEND:VCARD';

        const { user } = useUserStore();
        

  const [staffId, setStaffId] = useState<string>('');
  const [qr, setQr] = useState<string | null>(null);
  const [image, setImage] = useState(goog_chart);
  let [data, setData] = useState<StaffType>({
    department: user?.level,
    email: user?.email,
    firstName: user?.firstName,
    id: "123456",
    jobRole: user?.role,
    otherNames: "DOE",
    phoneHome: "+2345678989900",
    phoneWork: "+2346789909909",
    physicalAddress: "EPAC",
    staffIdNo: "12345",
    surname: "",
    url: "whatsapp",
    username: user?.username,
  });
  // console.log(data);
// console.log(str_vcard);
const [downloadFlag, setDownloadFlag] = useState<boolean>(false);
// const email = data.email
const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });   
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
        const add_staff = () => {
          const firstName = data.firstName;
          const surname = data.surname;
          const otherNames = data.otherNames;
          // const birthday = vcard.get_field("birthday");
          // const gender = vcard.get_field("gender");
          return str_vcard += 'N:' + surname + ';' + firstName + ';' + otherNames + '\n' +
              'FN:' + firstName + ' ' + surname + ' ' + otherNames;
  
          // if (birthday !== '') {
          //     vcard.str_vcard += '\nBDAY:' + birthday;
          // };
          // if (gender !== '') {
          //     vcard.str_vcard += '\nX-Gender:'+ gender;
          // }
      };
      const add_address = () => {
          const physical_address = data.physicalAddress;
          // console.log(physical_address)
          const department = data.department;
          // if(physical_address + department !== '')
          return str_vcard += '\nADR;TYPE=home:;;'+physical_address+';'+department;
      };
      const add_email = () => {
          const work_mail = data.email;
          // console.log(work_mail);
          // data.email;
          // const home_mail = vcard.get_field(res?.email);
          return str_vcard += '\nEMAIL;TYPE=internet,home:'+work_mail;
      };
      const add_tel = () => {
          // const home = vcard.get_field(res?.email?.toString();
          const work = data.phoneWork;
          return str_vcard += '\nTEL;TYPE=work:'+work;
      };
      const add_url = ()=> {
          const urlWork = data.url;
          return str_vcard += '\nURL;TYPE=work:'+urlWork;
      };
      const save = ()=> {
          add_staff();
          add_address();
          add_tel()
          add_email();
          add_url();
          // add_work;
      }
      const {
        firstName,
        surname,
        otherNames,
        department,
        physicalAddress,
       email,
        phoneWork,
      } = data;
        
      //dummy from Tosin to check if this working
      
      let tqr = "BEGIN:VCARD\nVERSION:3.0\n";
      tqr += `N:${surname};${firstName};${otherNames}\n`;
      tqr += `FN:${firstName} ${surname} ${otherNames}\n`;
      tqr += `TITLE:${department}\n`;
      tqr += `ADR;WORK:;;${physicalAddress}\n`;
      tqr += `EMAIL;PREF;INTERNET:${email}\n`;
      tqr += `TEL;WORK;VOICE:${phoneWork}\n`;
      tqr += "END:VCARD";
      
          

          useEffect(()=> {
            useUserStore.persist.rehydrate();
            // console.log(user);
            const formQR = ()=> {
              // save();
              str_vcard += str_end;
          // console.log(str_vcard)

          const formatres = goog_chart+str_vcard.replace(/\n/g,'%0A');
          setImage(formatres)

            };
            formQR();
          },[data])

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            
            const { name, value } = e.target;
            console.log(name, value);
            setData(prev => ({
              ...prev,
              [name]: [value]
            }));


          };

          const handleSubmit = () => {
            navigate.push('/generate'); // Replace with your desired route
          };
        

  return (
    <div>
    <div className='hidden sm:block'>
    <div className='w-full h-full flex flex-row justify-center items-center'>
      <div className="w-[800px] h-[598px] flex flex-row justify-between items-center  mt-[15px] gap-2 ">
        <div className="h-[530px] flex-[2] flex flex-col gap-6">
          <div className="flex-[1] flex flex-col gap-1 items-center">
            <div className="">
              <h3 className="text-[#10A2DC] font-semibold" style={{ fontSize: "25px" }}>E-Business Card</h3>
            </div>
            <div className="flex flex-row justify-around items-center w-[200px] gap-2 mt-[-10px] ml-[20px]">
              <div className="flex-[2] h-[2.5px] border-b-2 bg-gradient-to-r from-white via-gray-600 to-white"></div>
              <div className="flex-1">
                <h6 className="text-gray-500">Portal</h6>
              </div>
            </div>
          </div>
          <div className="flex-[3] gap-3 flex flex-col">
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">First name:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="firstName" value={data.firstName} onChange={handleChange} disabled/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Last name:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="surname" value={data.surname} onChange={handleChange} disabled/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Mobile Number:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="phoneWork" value={data.phoneWork} onChange={handleChange}/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Email Address:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="email" value={data.email} onChange={handleChange} disabled/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Work:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="phoneWork" value={data.phoneWork} onChange={handleChange} disabled/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Address:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="physicalAddress" value={data.physicalAddress} onChange={handleChange} disabled/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Role:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="jobRole" value={data.jobRole} onChange={handleChange}/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Website:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="url" value={data.url} onChange={handleChange} disabled/>
              </div>
            </div>
          </div>
          {/* <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleDownload}>
  <FontAwesomeIcon icon={faFilePdf} className="text-white" width={16} height={16} />
  <span className="text-base">Save as PDF</span>
</button>

<button className="flex items-center justify-center gap-2 mt-4 px-4 py-2 mb-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={() => toPDF()}>
  <FontAwesomeIcon icon={faFileImage} className="text-white" width={16} height={16} />
  <span className="text-base">Save as Image</span>
</button> */}
{ downloadFlag &&
<div className="flex space-x-4 ml-12">
  <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border border-gray-300" onClick={handleDownload}>
    <FontAwesomeIcon icon={faFilePdf} className="text-gray-700" width={16} height={16} />
    <span className="text-base">Save as PDF</span>
  </button>

  <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border border-gray-300" onClick={() => toPDF()}>
    <FontAwesomeIcon icon={faFileImage} className="text-gray-700" width={16} height={16} />
    <span className="text-base">Save as Image</span>
  </button>
</div>
}
          <div className="flex-[0.5] flex flex-col justify-center items-center mb-[10px]">
            <button onClick={() => setDownloadFlag(!downloadFlag)}className="w-[150px] h-[40px] bg-gradient-to-r from-[#54afe0] via-[#0579B8] to-[#5dc0f5] rounded-2xl">
              <h4 className="text-white font-thin font-serif" style={{ fontSize: "16px" }}>Get Card</h4>
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[560px] flex-[1.5] bg-[rgb(207,213,219)] flex flex-col items-center rounded-r-xl relative" >
          <div className="flex-1 w-[230px] rounded-2xl bg-gradient-to-r from-[#54afe0] via-[#0579B8] to-[#5dc0f5] mt-[10px] flex flex-row items-center justify-center gap-2">
            <div className="">
              <h3 className="text-white font-serif text-right font-extralight">Choose Card Style</h3>
            </div>
            <div className="bg-[#000000] w-[32px] h-[32px] rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faArrowAltCircleDown} className='text-[#ffff] opacity-100 ' width={20} height={20}/>
            </div>
          </div>
          <div className="flex-[10] mt-[25px] flex flex-col gap-[20px] ">
            <div id="my-qr" ref={targetRef} className=" bg-[#ffffff] w-[320px] h-[200px] shadow-lg flex flex-col gap-1">
              {/* <FontAwesomeIcon icon={faStar} className='text-[#00000020] opacity-100' width={20} height={20}/> */}
              <div className="flex-[2] flex flex-row justify-between items-start ">
                <div className="bg-[#000000] w-[15px] h-full ml-[30px] "></div>
                <div className="flex flex-row gap-1 mt-[10px]">
                  <div className="flex flex-col gap-[0px]">
                    <div className="">
                      <h5 className="text-[#000000] uppercase font-bold text-[14px]">{data.firstName + ' ' + data.surname}</h5>
                    </div>
                    <div className="flex justify-end items-center">
                      <h5 className="text-[#000000] uppercase font-light text-[10px]">{data.jobRole}</h5>
                    </div>
                  </div>
                  <div className="bg-[#000000] rounded-l-full w-[45px] h-[40px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className='text-[#ffff] opacity-100' width={20} height={20}/>
                  </div>
                </div>
              </div>
              <div className="flex-[4] flex flex-col gap-3 ">
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className='text-[#ffff] opacity-100' width={8} height={8}/>
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">{data.phoneWork}</h5>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className='text-[#ffff] opacity-100' width={8} height={8}/>
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">{data.email}</h5>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faSpider} className='text-[#ffff] opacity-100' width={8} height={8}/>
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">{data.url}</h5>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faLocationDot} className='text-[#ffff] opacity-100' width={8} height={8}/>
                  </div>
                  <div className="">
                    <h5 className="font-extralight text-[12px]">{data.physicalAddress}</h5>
                  </div>
                </div>
              </div>
              <div className="flex-[0.5] flex items-end justify-end">
              </div>
            </div>
            <div className=" bg-[#ffffff] w-[320px] h-[200px] flex flex-col shadow-lg">
              <div className="flex-[14] flex justify-center items-center ml-[-20px]">
              {
                      // data?.staffIdNo == '' ? <Image src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                      // :
                      //image
                      <QRCode
                        value={tqr.toString()}
                        size={256}
                        style={{
                          height: "80px",
                          maxWidth: "80px",
                          width: "80px",
                        }}
                      />

                      // <Image src={image} alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                    }              </div>
              <div className="flex items-center justify-center mt-[-8px] flex-1 mb-[10px]">
                <h1 className="text-[#000000] font-thin text-[8px]">Commercial Banking | Consumer Banking | Corporate and Investment Banking</h1>
              </div>
              <div className="flex-1 bg-black"></div>
            </div>
          </div>
          <div className="flex-1 absolute top-[140px] right-[30px] ">
          {
                      // data?.staffIdNo == '' ? <Image src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                      // :
                      //image
                      <QRCode
                        value={tqr}
                        size={256}
                        style={{
                          height: "80px",
                          maxWidth: "80px",
                          width: "80px",
                        }}
                      />

                      // <Image src={image} alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                    }                      </div>
        </div>
      </div>
    </div>
    </div>
    <div className="sm:hidden">
    <div className="flex flex-col w-full gap-6 ml-4 mt-12">
 
  <div className="flex flex-row items-center">
    <label htmlFor="firstName" className="text-sm text-gray-500 flex justify-start" >First Name</label>
    <input type="text" id="firstName" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" value={data.firstName} disabled></input>
  </div>


  <div className="flex flex-row items-center  ">
    <label htmlFor="lastName" className="text-sm text-gray-500   flex justify-start">Last Name</label>
    <input type="text" id="lastName" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" value={data.surname} disabled></input>
  </div>

 
  <div className="flex flex-row items-center  ">
    <label htmlFor="mobileNumber" className="text-sm text-gray-500   flex justify-start">Mobile Number</label>
    <input type="text" id="mobileNumber" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" name="phoneWork" value={data.phoneWork} onChange={handleChange}></input>
  </div>


  <div className="flex flex-row items-center  ">  
    <label htmlFor="emailAddress" className="text-sm text-gray-500   flex justify-start">Email Address</label>
    <input type="email" id="emailAddress" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" value={data.email} disabled></input>
  </div> 


  <div className="flex flex-row items-center  ">
    <label htmlFor="work" className="text-sm text-gray-500   flex justify-start">Work</label>
    <input type="text" id="work" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" value={data.jobRole} disabled></input>
  </div>


  <div className="flex flex-row items-center  ">
    <label htmlFor="address" className="text-sm text-gray-500   flex justify-start">Address</label>
    <input type="text" id="address" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" value={data.physicalAddress} disabled></input>
  </div>

 
  <div className="flex flex-row items-center  ">
    <label htmlFor="role" className="text-sm text-gray-500   flex justify-start">Role</label>
    <input type="text" id="role" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" value={data.jobRole} disabled></input>
  </div>


  <div className="flex flex-row items-center  ">
    <label htmlFor="website" className="text-sm text-gray-500   flex justify-start">Website</label>
    <input type="text" id="website" className="text-sm flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 ml-2 -mt-2" value={data.url} disabled></input>
  </div>

  <button
      onClick={handleSubmit}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Submit
    </button>
</div>

    </div>
    </div>
  )
}

export default BuildVirtualCard