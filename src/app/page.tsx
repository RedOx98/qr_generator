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
const hub:string = `
BEGIN:VCARD
VERSION:3.0
FN:Jane Smith
TEL:+19876543210
EMAIL:jane.smith@example.com
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
    // var goog_chart = 'http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
    // const [image, setImage] = useState("");
    // var str_start = 'BEGIN:VCARD\nVERSION:3.0\n';
  //    var str_vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
    //     var str_end = '\nEND:VCARD';
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //  React.ChangeEvent<HTMLInputElement> | undefined
    setStaffId(e.target.value)
    //  console.log("Here"+e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const res = await fetch(`https://quickchart.io/qr?text=https://localhost:3000/staffInfo/${staffId}&format=png`, {
    //   method: 'GET',
    //   headers: {
    //     "Content-Type": "image/png"
    //   }
    // })
    
    // const blob = await res.blob();
    // const blobUrl = URL.createObjectURL(blob);
    // console.log(blobUrl)
    // setQr(blobUrl);
    // } catch (err) {
    //   console.log(err);
      
    // }
  }

  useEffect(() => {
  
    const fetchStaff = async () => {
        
        // const staffNo: number = 11357;
        try {
            const res = await fetch(`http://localhost:3000/api/staffinfo/${staffId}`, {});

            if (!res.ok) {
                throw new Error("Failed to fetch");
            }
         
            // const hub:string = `
            // BEGIN:VCARD
            // VERSION:3.0
            // FN:Jane Smith
            // TEL:+19876543210
            // EMAIL:jane.smith@example.com
            // END:VCARD            
            // `;
        //     var opts = {
        //       width: 480,
        //       // errorCorrectionLevel: 'H',
        //       type: 'string',
        //       // quality: 0.3,
        //       // margin: 1,
             
        //       //color: {
        //       //   dark:"#010599FF",
        //       //   light:"#FFBF60FF"
        //       // }
        //     }
        // await    QRCode.toString(hub,opts,  function (err:string, string:string) {
        //       if (err) throw err
        //       setImage(string);
        //       console.log(string);
        //     })


console.log("skksksks")
            const data = await res.json();
            // console.log(data);
            setData(data.data);

            // const add_staff = () => {
        const firstName = data?.data?.firstName;
        const surname = data?.data?.surname;
        const otherNames = data?.data?.otherNames;
        // const birthday = vcard.get_field("birthday");
        // const gender = vcard.get_field("gender");
        // return str_vcard += 'N:' + surname + ';' + firstName + ';' + otherNames + '\n' +
        //     'FN:' + firstName + ' ' + surname + ' ' + otherNames;

        // // if (birthday !== '') {
        // //     vcard.str_vcard += '\nBDAY:' + birthday;
        // // };
        // // if (gender !== '') {
        // //     vcard.str_vcard += '\nX-Gender:'+ gender;
        // // }
    // };
    // const add_address = () => {
        const physical_address = data?.data?.physicalAddress;
        // console.log(physical_address)
        // const department = data?.data?.department;
        // // if(physical_address + department !== '')
        // return str_vcard += '\nADR;TYPE=home:;;'+physical_address+';'+department;
    // };
    // const add_email = () => {
        const work_mail = data?.data?.email;
        // console.log(work_mail);
        // data?.data?.email;
        // const home_mail = vcard.get_field(res?.email);
        // return str_vcard += '\nEMAIL;TYPE=internet,home:'+work_mail;
    // };
    // const add_tel = () => {
        // const home = vcard.get_field(res?.email?.toString();
        const work = data?.data?.phoneWork;
        // return str_vcard += '\nTEL;TYPE=work:'+work;
    // };
    // const add_url = ()=> {
        const urlWork = data?.data?.url;
        // return str_vcard += '\nURL;TYPE=work:'+urlWork;
    // };
    // const save = ()=> {
    //     add_staff();
    //     add_address();
    //     add_tel()
    //     add_email();
    //     add_url();
    //     // add_work;

    //     str_vcard += str_end;
    //     // console.log(str_vcard)

    //     // const formatres = goog_chart+str_vcard.replace(/\n/g,'%0A');
    //     // setImage(formatres)
    //     // return formatres;
    // }
    //         save();
        } catch (err) {
            console.log(err);
        }
    }
    fetchStaff();
}, [staffId])
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
          <input type="text" className="firstName w-[350px] border-b-[1px] focus:border-b-1 outline-none bg-gradient-to-r from-[#c2d0dd] via-[#B3C1D0] to-[#c2d0dd] text-center focus:bg-gradient-to-r focus:from-[#C6DBF0] focus:via-[#B3C1D0] focus:to-[#AFC2D4] focus:text-center focus:text-[14px] focus:font-sans h-[33px] rounded-xl" placeholder="Enter Your Staff id." onChange={handleChange}/>
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