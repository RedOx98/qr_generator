"use client";

import { StaffType } from "@/types/types";
import { getSession } from "@/utils/session";
import { useUserStore } from "@/utils/store";
import {
  faAngleLeft,
  faEnvelope,
  faFileImage,
  faFilePdf,
  faLocationDot,
  faMagnifyingGlass,
  faPhone,
  faSpider,
  faUser,
  faUserTag,
  faArrowsV,
  faCircleArrowLeft,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { usePDF } from "react-to-pdf";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Input = {
  staffId: string | undefined;
};

export default function Home() {
  const navigate = useRouter();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const { user } = useUserStore();

  let [data, setData] = useState<StaffType>({
    department: "",
    email: user?.email,
    firstName: user?.firstName,
    id: "123456",
    jobRole: user?.role,
    otherNames: "",
    phoneHome: "+234...",
    phoneWork: "+234...",
    physicalAddress: "EPAC",
    staffIdNo: "12345",
    surname: user?.lastName,
    url: "",
    username: user?.username,
  });

  // const [res, setRes] = useState<String>("");

  const {
    firstName,
    surname,
    otherNames,
    department,
    physicalAddress,
    email,
    phoneWork,
  } = data;
  // str_vcard += str_start;
  // str_vcard += `N:${data.surname};${otherNames}\nFN:${data.firstName} \nN: ${data.surname} ${data.otherNames}; \nTITLE: ${data.department} \nADR;WORK:; ${data.physicalAddress}; \nEMAIL;PREF;INTERNET: ${data.email} \nTEL;WORK;VOICE: ${data.phoneWork} \n ${str_vcard}`;
  // str_vcard += str_end;
  // // const formatres: string = str_vcard.replace(/\n/g, '%0A');
  // setRes(str_vcard.toString());
  // console.log(res);
  let res = "BEGIN:VCARD\nVERSION:3.0\n";
  res += `N:${surname};${firstName};${otherNames}\n`;
  res += `FN:${firstName} ${surname} ${otherNames}\n`;
  res += `TITLE:${department}\n`;
  res += `ADR;WORK:;;${physicalAddress}\n`;
  res += `EMAIL;PREF;INTERNET:${email}\n`;
  res += `TEL;WORK;VOICE:${phoneWork}\n`;
  res += "END:VCARD";

  useEffect(() => {
    // toast.success(`welcome ${user?.firstName}`);
    useUserStore.persist.rehydrate();
    // window.location.reload();
  }, []);

  // const session = await getSession();

  // console.log(session);

  //   const hub: string = `
  // BEGIN:VCARD
  // VERSION:2.1
  // N:Adebayo;Temitope
  // FN:Temitope Adebayo
  // ORG:Nigeria Inter-Bank Settlement System PLC
  // TITLE:Head, Instant Payment Platform Operations
  // TEL;WORK;VOICE:+234 803 430 6657
  // ADR;WORK:;;1230 Ahmadu Bello Way;Victoria Island;Lagos;12617;Nigeria
  // EMAIL;PREF;INTERNET:tadebayo@nibss-plc.com.ng
  // END:VCARD
  //   `;

 
const handleDownloadPDF = () => {
  const divRef = document.getElementById("mya");

  if (divRef) {
    // Temporarily remove the 'hidden' class
    divRef.classList.remove('hidden');

    // Generate the PDF
    toPDF();

    // Reapply the 'hidden' class after PDF generation
    setTimeout(() => {
      divRef.classList.add('hidden');
    }, 500); // Adjust the delay if needed based on the PDF generation speed
  }
};

const handleDownload = async () => {
  const divRef = document.getElementById("mya");
  if (divRef) {
    console.log(divRef)
    divRef.classList.remove('hidden');
    console.log(divRef)
    const canvas = await html2canvas(divRef,{
      allowTaint : true
   });
    console.log(canvas)
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "my-div-image.png";
    link.click();
    toast.success(`downlaoded successfully`)
    divRef.classList.add('hidden');
  }
};

  // const email = data?.email;
  // const goog_chart =
  //   "http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=";
  // const str_start = "BEGIN:VCARD\nVERSION:3.0\n";
  // let str_vcard = "BEGIN:VCARD\nVERSION:3.0\n";
  // const str_end = "\nEND:VCARD";

  const handleSubmit = () => {
    navigate.push("/generate"); // Replace with your desired route
  };

  return (
    <div className="">
    <div id='mya'
                ref={targetRef} className='mt-12 ml-4  w-80 bg-cover bg-center rounded-t-lg border border-blue-300 hidden'>
<div className="flex flex-col ">
  <div className="flex justify-between p-4">
  <div>
                    <div className="flex items-center mb-2">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5"/>
<circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"/>
<path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
                        <span className="font-bold text-xs pl-2">{data.surname +" "+ data.firstName}</span>
                    </div>


        {/* Email */}

                    <div className="flex items-center mb-2">
                    <svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 512 512"  >

<g>
	<path className="bg-white" d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
		c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
		c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
		c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
		c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
		c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
		c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
		c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
		c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
		l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
		c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
		c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
		c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"/>
</g>
</svg>
                        <span className="text-xs pl-2">{data.email}</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <span className="text-xs pl-2">{data.phoneHome}</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <span className="text-xs pl-2">EPAC</span>
                    </div>
                </div>


                <div className=" -m-4 p-4">
                {
                      // data?.staffIdNo == '' ? <Image src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                      // :
                      //image
                      <QRCode
                        value={res.toString()}
                        size={256}
                        style={{
                          height: "80px",
                          maxWidth: "80px",
                          width: "80px",
                        }}
                      />

                      // <Image src={image} alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                    }        
</div>


 

  </div>



  <div className="">
            <div className="">
              <img className="" src="/images/brand_bar.png" alt="/" width="480" height="48" />

            </div>
        </div>
</div>


                   
</div>
      <div className="xs:flex sm:hidden lg:hidden xl:hidden 2xl:hidden xs:flex-col xs:h-full xs:w-full relative">
        <div className="xs:h-[390px] bg-[#031922] flex flex-col items-center justify-center rounded-b-[26px]">
          <div>
            <Link href="/">
              <Image
                className="ml-3 opacity-60 cursor-pointer"
                src="/images/Ecologo3.png"
                alt="/"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="flex-[1] flex flex-col gap-1 justify-center items-center mt-[-190px] ">
            <div className="">
              <h3
                className="text-[#10A2DC] font-semibold"
                style={{ fontSize: "35px" }}
              >
                E-Business Card
              </h3>
            </div>
            <div className="flex flex-row justify-around items-center w-[260px] gap-2 mt-[-10px] ml-[20px]">
              <div className="flex-[6] h-[2.5px]  border-b-2 bg-gradient-to-r from-white via-gray-600 to-white"></div>
              <div className="flex-1">
                <h6 className="text-gray-500">Portal</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:h-[700px] xs:w-[350px] overflow-hidden scroll-py-0 bg-[#48beed] flex flex-col justify-center items-center rounded-t-[56px] absolute top-[190px] gap-[30px] ml-[25px]">
          <div className="flex-[0.4] flex flex-col h-[500px] w-full p-2  gap-2 ">
            <div className="flex-[0.2] bg-[#ffffff] rounded-t-[10px] flex justify-center items-start mt-[-108px]">
              <h3 className="text-[#000000] text-[14px] font-sans font-bold">
                Lookup Data Result
              </h3>
            </div>
            <div className="flex-[6] bg-inherit flex flex-col justify-around items-center p-2">
              <div className="flex-[2] mt-[15px] flex flex-row gap-10  items-center mr-[-50px] ">
                <div
                  className="w-[100px] h-[100px] rounded-full flex justify-center items-center"
                  style={{ border: "1px solid black" }}
                >
                  <FontAwesomeIcon
                    icon={faUserTag}
                    className="text-[#000000] opacity-100 cursor-pointer"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex flex-col relative">
                  <div className="absolute w-[40px] top-[-50px] left-[-20px]">
                    <h6 className="text-[#fff] font-bold text-[12px]  w-[40px]">
                      USER ID:
                    </h6>
                  </div>
                  <div className="absolute top-[-20px] left-[-20px]">
                    {data?.staffIdNo === "" ? (
                      <h6 className="text-[#fff] font-thin text-[14px] ">
                        {data?.staffIdNo}
                      </h6>
                    ) : (
                      <h6 className="text-black font-bold text-[14px] ">
                        {data?.staffIdNo}
                      </h6>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-[6] flex flex-col gap-8 ml-[-60px] mt-[20px]">
                <div className="flex flex-row gap-2 px-[64px]">
                  <div className="flex-[2]">
                    <h4 className="text-[#fff] font-sans font-bold">
                      Firstname:
                    </h4>
                  </div>
                  <div className="flex-[2]">
                    {data?.firstName === "" ? (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.firstName}
                      </h4>
                    ) : (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.firstName}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-2 px-[64px]">
                  <div className="flex-[2]">
                    <h4 className="text-[#fff] font-sans font-bold">
                      Lastname:
                    </h4>
                  </div>
                  <div className="flex-[2]">
                    {data?.surname === "" ? (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.surname}
                      </h4>
                    ) : (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.surname}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-2 px-[64px]">
                  <div className="flex-[2]">
                    <h4 className="text-[#fff] font-sans font-bold">Role:</h4>
                  </div>
                  <div className="flex-[2]">
                    {data?.jobRole === "" ? (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.jobRole}
                      </h4>
                    ) : (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.jobRole}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-2 px-[64px]">
                  <div className="flex-[2]">
                    <h4 className="text-[#fff] font-sans font-bold">Email:</h4>
                  </div>
                  <div className="flex-[2]">
                    {data?.url === "" ? (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.url}
                      </h4>
                    ) : (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.url}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-2 px-[64px]">
                  <div className="flex-[1]">
                    <h4 className="text-[#fff] font-sans font-bold">
                      Location:
                    </h4>
                  </div>
                  <div className="flex-[2]">
                    {data?.physicalAddress === "" ? (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.physicalAddress}
                      </h4>
                    ) : (
                      <h4 className="text-[14px] font-sans font-semibold">
                        {data?.physicalAddress}
                      </h4>
                    )}
                  </div>
                </div>
              </div>
              <Link href="#"></Link>
            </div>
            <div className="h-80 w-80 mt-2 flex items-center justify-center">
              <div className="flex justify-center items-center mr-[-50px] mt-[-15px]">
                {
                  // data?.staffIdNo == '' ? <Image src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                  // :
                  //image
                  <QRCode
                    value={res.toString()}
                    size={256}
                    style={{
                      height: "80px",
                      maxWidth: "80px",
                      width: "80px",
                    }}
                  />

                  // <Image src={image} alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                }
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
            <div className="h-[150px] bg-gradient-to-r from-[#03658C] via-[#000000] mb-[-30px] w-[365px] mr-[-20px] to-[#000000] rounded-b-[10px] flex justify-center items-center cursor-pointer ">
              <h3 className="text-[#ffff] text-[16px] font-bold ">
                Generate Card
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:hidden sm:hidden w-full max-h-screen lg:flex flex-row items-center justify-center  bg-gradient-to-r from-[#f2f4f790] via-[#eaf0f7] to-[#edf0f2] z-[-99] overscroll-none">
        {/* Another onSubmit use to be here... */}

        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <div className="flex-[1] flex flex-col gap-1 justify-center items-center  ">
            <div className="">
              <h3
                className="text-[#10A2DC] font-semibold"
                style={{ fontSize: "35px" }}
              >
                E-Business Card
              </h3>
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
              <div
                className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white absolute top-[]"
                style={{ border: "1px solid black" }}
              >
                <h3 className="text-black font-thin font-serif text-[30px]">
                  2
                </h3>
              </div>
              <div className="bg-white h-[0.1px] w-[250px]">
                <div className=" h-[1.5px] bg-gradient-to-r from-white via-gray-600 to-white"></div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              <div className="flex-1 w-[285px] h-[44px] rounded-2xl bg-gradient-to-r from-[#bccdde] via-[#A5B6C8] to-[#93a4b5] mt-[10px] flex flex-row items-center justify-center gap-2">
                <div className="">
                  <h3 className="text-white font-serif text-right font-extralight">
                    Choose Card Style
                  </h3>
                </div>
                <div className="bg-[#ABC8E4] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faAngleDoubleDown}
                    className="text-[#89aed0] opacity-100 "
                    width={40}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <div className="bg-[#ABC8E4] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="text-[#89aed0] opacity-100 cursor-pointer"
                  width={40}
                  height={30}
                />
              </div>
              <div className="mb-[20px]">
                <div
                  id="my-qr"
                  
                  className=" bg-[#ffffff] w-[320px] h-[200px] shadow-lg flex flex-col gap-1 rounded-[10px] relative"
                >
                  {/* <FontAwesomeIcon icon={faStar} className='text-[#00000020] opacity-100' width={20} height={20}/> */}
                  <div className="flex-[2] flex flex-row justify-between items-start ">
                    <div className="bg-[#000000] w-[15px] h-full ml-[30px] "></div>
                    <div className="flex flex-row gap-1 mt-[10px]">
                      <div className="flex flex-col gap-[0px]">
                        <div className="">
                          {data?.firstName == "" && data?.surname == "" ? (
                            <h5 className="text-[#000000] uppercase font-bold text-[14px]">
                              {data?.firstName + " " + data?.surname}
                            </h5>
                          ) : (
                            <h5 className="text-[#000000] uppercase font-bold text-[14px]">
                              {data?.firstName + " " + data?.surname}
                            </h5>
                          )}
                        </div>
                        <div className="flex justify-end items-center">
                          {data?.department == "" ? (
                            <h5 className="text-[#000000] uppercase font-light text-[10px]">
                              {data?.department}
                            </h5>
                          ) : (
                            <h5 className="text-[#000000] uppercase font-light text-[10px]">
                              {data?.department}
                            </h5>
                          )}
                        </div>
                      </div>
                      <div className="bg-[#000000] rounded-l-full w-[45px] h-[40px] flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-[#ffff] opacity-100"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex-[4] flex flex-col gap-3 ">
                      <div className="flex flex-row w-full gap-6">
                        <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="text-[#ffff] opacity-100"
                            width={8}
                            height={8}
                          />
                        </div>
                        <div className="">
                          {data?.phoneWork == "" ? (
                            <h5 className="font-extralight text-[12px] text-black">
                              {data?.phoneWork}
                            </h5>
                          ) : (
                            <h5 className="font-extralight text-[12px] text-black">
                              {data?.phoneWork}
                            </h5>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-row w-full gap-6">
                        <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-[#ffff] opacity-100"
                            width={8}
                            height={8}
                          />
                        </div>
                        <div className="">
                          {data?.email === "" ? (
                            <h5 className="font-extralight text-[12px]">
                              {data?.email}
                            </h5>
                          ) : (
                            <h5 className="font-extralight text-[12px] max-w-[120px]  text-overflow-ellipsis">
                              {data?.email}
                            </h5>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-row w-full gap-6">
                        <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faSpider}
                            className="text-[#ffff] opacity-100"
                            width={8}
                            height={8}
                          />
                        </div>
                        <div className="">
                          {data?.url === "" ? (
                            <h5 className="font-extralight text-[12px]">
                              {data?.url}
                            </h5>
                          ) : (
                            <h5 className="font-extralight text-[12px]">
                              {data?.url}
                            </h5>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-row w-full gap-6">
                        <div className="bg-[#000000] w-[15px] h-full ml-[30px] flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-[#ffff] opacity-100"
                            width={8}
                            height={8}
                          />
                        </div>
                        <div className="">
                          {data?.physicalAddress === "" ? (
                            <h5 className="font-extralight text-[12px]">
                              {data?.physicalAddress}
                            </h5>
                          ) : (
                            <h5 className="font-extralight text-[12px]">
                              {data?.physicalAddress}
                            </h5>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mr-4 h-80 w-80 mt-8">
                      {
                        // data?.staffIdNo == '' ? <Image src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                        // :
                        //image
                        <QRCode
                          value={res.toString()}
                          size={256}
                          style={{
                            height: "80px",
                            maxWidth: "80px",
                            width: "80px",
                          }}
                        />

                        // <Image src={image} alt='Passport Photograph' width={60} height={60} className='rounded-lg'/>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ABC8E4] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-[#89aed0] opacity-100 cursor-pointer"
                  width={40}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex-[0.4] flex flex-col h-[650px] w-[108px] p-2 mr-[220px] gap-2 ">
          <div className="flex-[0.1] bg-[#000000] rounded-t-[10px] flex justify-center items-center">
            <h3 className="text-[#ffff] text-[14px] font-sans font-thin">
              Lookup Data Result
            </h3>
          </div>
          <div className="flex-[6] bg-[#ffff] flex flex-col justify-around items-center p-2">
            <div className="flex-[2] mt-[15px] flex flex-row gap-10  items-center mr-[-50px] ">
              <div
                className="w-[100px] h-[100px] rounded-full flex justify-center items-center"
                style={{ border: "1px solid black" }}
              >
                <FontAwesomeIcon
                  icon={faUserTag}
                  className="text-[#000000] opacity-100 cursor-pointer"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex flex-col relative">
                <div className="absolute w-[40px] top-[-50px] left-[-20px]">
                  <h6 className="text-black font-thin text-[12px]  w-[40px]">
                    USER ID:
                  </h6>
                </div>
                <div className="absolute top-[-20px] left-[-20px]">
                  {data?.staffIdNo === "" ? (
                    <h6 className="text-black font-thin text-[14px] ">10941</h6>
                  ) : (
                    <h6 className="text-black font-thin text-[14px] ">
                      {data?.staffIdNo}
                    </h6>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-[6] flex flex-col gap-8 ml-[-60px] mt-[20px]">
              <div className="flex flex-row gap-2 px-[64px]">
                <div className="flex-[2]">
                  <h4 className="text-[14px] font-sans font-thin">
                    Firstname:
                  </h4>
                </div>
                <div className="flex-[2]">
                  {data?.firstName === "" ? (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.firstName}
                    </h4>
                  ) : (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.firstName}
                    </h4>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2 px-[64px]">
                <div className="flex-[2]">
                  <h4 className="text-[14px] font-sans font-thin">Lastname:</h4>
                </div>
                <div className="flex-[2]">
                  {data?.surname === "" ? (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.surname}
                    </h4>
                  ) : (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.surname}
                    </h4>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2 px-[64px]">
                <div className="flex-[2]">
                  <h4 className="text-[14px] font-sans font-thin">Role:</h4>
                </div>
                <div className="flex-[2]">
                  {data?.jobRole === "" ? (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.jobRole}
                    </h4>
                  ) : (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.jobRole}
                    </h4>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2 px-[64px]">
                <div className="flex-[2]">
                  <h4 className="text-[14px] font-sans font-thin">Email:</h4>
                </div>
                <div className="flex-[2]">
                  {data?.url === "" ? (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.url}
                    </h4>
                  ) : (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.url}
                    </h4>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2 px-[64px]">
                <div className="flex-[1]">
                  <h4 className="text-[14px] font-sans font-thin">Location:</h4>
                </div>
                <div className="flex-[2]">
                  {data?.physicalAddress === "" ? (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.physicalAddress}
                    </h4>
                  ) : (
                    <h4 className="text-[14px] font-sans font-semibold">
                      {data?.physicalAddress}
                    </h4>
                  )}
                </div>
              </div>
            </div>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleDownloadPDF}
            >
              <FontAwesomeIcon
                icon={faFilePdf}
                className="text-white"
                width={16}
                height={16}
              />
              <span className="text-base">Save as PDF</span>
            </button>

            <button
              className="flex items-center justify-center gap-2 mt-4 px-4 py-2 mb-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              onClick={handleDownload}
            >
              <FontAwesomeIcon
            icon={faFileImage}
            className="text-white"
            width={16}
            height={16}
          />
          <span className="text-base">Save as Image</span>
            </button>
          </div>
          <div className="flex-[0.1] bg-gradient-to-r from-[#03658C] via-[#02415A] to-[#0699AD] rounded-b-[10px] flex justify-center items-center cursor-pointer ">
            <h3 className="text-[#ffff] text-[16px] font-thin">
              Generate Card
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
