"use client"

import { StaffType } from '@/types/types'
import { faArrowAltCircleDown, faEnvelope, faLocationDot, faPhone, faSpider, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const BuildVirtualCard = () => {
  var goog_chart = 'http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
    var str_start = 'BEGIN:VCARD\nVERSION:3.0\n';
        var str_vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
        var str_end = '\nEND:VCARD';
  const [staffId, setStaffId] = useState<string>('');
  const [qr, setQr] = useState<string | null>(null);
  const [image, setImage] = useState(goog_chart);
  const [data, setData] = useState<StaffType>({
    department: "",
    email: "",
    firstName: "",
    id: "",
    jobRole: "",
    otherNames: "",
    phoneHome: "",
    phoneWork: "",
    physicalAddress: "",
    staffIdNo: "",
    surname: "",
    url: "",
    username: "",
});
console.log(str_vcard);
const email = data.email
    
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
          console.log(work_mail);
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
  
          

          useEffect(()=> {
            const formQR = ()=> {
              save();
              str_vcard += str_end;
          // console.log(str_vcard)

          const formatres = goog_chart+str_vcard.replace(/\n/g,'%0A');
          setImage(formatres)

            };
            formQR();
          },[data])

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setData(prev => ({
              ...prev,
              [name]: [value]
            }));
          };
  return (
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
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="firstName" value={data.firstName} onChange={handleChange}/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Last name:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="surname" value={data.surname} onChange={handleChange}/>
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
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="email" value={data.email} onChange={handleChange}/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Work:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="phoneWork" value={data.phoneWork} onChange={handleChange}/>
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Address:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="physicalAddress" value={data.physicalAddress} onChange={handleChange}/>
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
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" name="url" value={data.url} onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className="flex-[0.5] flex flex-col justify-center items-center mb-[10px]">
            <button className="w-[150px] h-[40px] bg-gradient-to-r from-[#54afe0] via-[#0579B8] to-[#5dc0f5] rounded-2xl">
              <h4 className="text-white font-thin font-serif" style={{ fontSize: "16px" }}>Create Card</h4>
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
            <div className=" bg-[#ffffff] w-[320px] h-[200px] shadow-lg flex flex-col gap-1">
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
                  <Image className=' object-cover ' src="/images/GetLogoImage.png" alt='/' width={200} height={200} />
              </div>
              <div className="flex items-center justify-center mt-[-8px] flex-1 mb-[10px]">
                <h1 className="text-[#000000] font-thin text-[8px]">Commercial Banking | Consumer Banking | Corporate and Investment Banking</h1>
              </div>
              <div className="flex-1 bg-black"></div>
            </div>
          </div>
          <div className="flex-1 absolute top-[140px] right-[30px] ">
                        <Image src={image} alt='Passport Photograph' width={100} height={120} className='rounded-lg'/>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default BuildVirtualCard