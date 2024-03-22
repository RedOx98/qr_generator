import { faAngleDoubleLeft, faAngleRight, faArrowAltCircleDown, faCircleChevronUp, faEnvelope, faImage, faInbox, faLocation, faLocationDot, faLocationPin, faPerson, faPhone, faRectangleAd, faRightFromBracket, faRightToBracket, faSpider, faSquareCaretRight, faStar, faUser, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const BuildVirtualCard = () => {
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
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Last name:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Mobile Number:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Email Address:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Work:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Address:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Role:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
              </div>
            </div>
            <div className="flex flex-row gap-1 ml-2 justify-around">
              <div className="flex-[2] ml-2">
                <h6 className="font-serif font-extralight">Website:</h6>
              </div>
              <div className="flex-[3] mr-[40px]">
                <input type="text" className="firstName w-[250px] border-b-[1px] focus:border-b-1 outline-none" />
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
            <div className=" bg-[#ffffff] w-[320px] h-[200px] flex flex-col shadow-lg">
              <div className="flex-[14] flex justify-center items-center ml-[80px]">
                  <Image className=' object-cover ' src="/images/GetLogoImage.png" alt='/' width={200} height={200} />
              </div>
              <div className="flex items-center justify-center mt-[-8px] flex-1 mb-[10px]">
                <h1 className="text-[#000000] font-thin text-[8px]">Commercial Banking | Consumer Banking | Corporate and Investment Banking</h1>
              </div>
              <div className="flex-1 bg-black"></div>
            </div>
          </div>
          <div className="flex-1 absolute top-[140px] right-[30px] ">
                        <Image src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" alt='Passport Photograph' width={100} height={120} className='rounded-lg'/>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default BuildVirtualCard