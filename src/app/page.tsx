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

  const handleDownload = async () => {
    const divRef = document.getElementById("my-qr");
    if (divRef) {
      const canvas = await html2canvas(divRef);
      console.log(canvas)
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "my-div-image.png";
      link.click();
      toast.success(`downlaoded successfully`);
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
                        10941
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
                        Olumide
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
                        OLAMILEKAN
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
                        Data Analyst
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
                        oolamilekan@ecobank.com
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
                        HEAD OFFICE
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
                  ref={targetRef}
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
                              JOHN DOE
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
                              TECHNOLOGY
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
                              090369410000
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
                              JohnDoe@gmail.com
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
                              JohnDoe.com
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
                              HEAD OFFICE
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
                      Olumide
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
                      OLAMILEKAN
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
                      Data Analyst
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
                      oolamilekan@ecobank.com
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
                      HEAD OFFICE
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
              onClick={handleDownload}
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
              onClick={() => toPDF()}
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
