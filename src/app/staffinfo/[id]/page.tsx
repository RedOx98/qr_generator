"use client"
import { StaffType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



const StaffInfo =  ({ params }: { params: { id: string } }) => {
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
    const email = data?.email
    var goog_chart = 'http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
    const [image, setImage] = useState(goog_chart)
    // console.log(email, image)
    // const vcard: Vcard = {
        var str_start = 'BEGIN:VCARD\nVERSION:3.0\n';
        var str_vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
        var str_end = '\nEND:VCARD';
        // const res = res,
        const concat = [];
        
        

    // };
    // const formatres = save();
    // console.log(formatres)

    const { id } = params;
    useEffect(() => {
        const fetchStaff = async () => {
            const staffNo: number = 10928;
            try {
                const res = await fetch(`http://localhost:3000/api/staffinfo/${id}`, {});

                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }

                const data = await res.json();
                // console.log(data);
                setData(data.data);
                const add_staff = () => {
            const firstName = data?.data?.firstName;
            const surname = data?.data?.surname;
            const otherNames = data?.data?.otherNames;
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
            const physical_address = data?.data?.physicalAddress;
            // console.log(physical_address)
            const department = data?.data?.department;
            // if(physical_address + department !== '')
            return str_vcard += '\nADR;TYPE=home:;;'+physical_address+';'+department;
        };
        const add_email = () => {
            const work_mail = data?.data?.email;
            console.log(work_mail);
            // data?.data?.email;
            // const home_mail = vcard.get_field(res?.email);
            return str_vcard += '\nEMAIL;TYPE=internet,home:'+work_mail;
        };
        const add_tel = () => {
            // const home = vcard.get_field(res?.email?.toString();
            const work = data?.data?.phoneWork;
            return str_vcard += '\nTEL;TYPE=work:'+work;
        };
        const add_url = ()=> {
            const urlWork = data?.data?.url;
            return str_vcard += '\nURL;TYPE=work:'+urlWork;
        };
        const save = ()=> {
            add_staff();
            add_address();
            add_tel()
            add_email();
            add_url();
            // add_work;

            str_vcard += str_end;
            // console.log(str_vcard)

            const formatres = goog_chart+str_vcard.replace(/\n/g,'%0A');
            setImage(formatres)
            // return formatres;
        }
                save();
            } catch (err) {
                console.log(err);
            }
        }
        fetchStaff();
    }, [id])

    // const singleStaff: StaffType = await getStaff(id);
    // console.log(singleStaff);
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            {
                data && (
                    <div className="flex flex-row relative gap-x-10">
                        <div className="mt-[100px] w-[400px] h-[400px] border-red-500 bg-white flex flex-col justify-center items-center gap-4 flex-[4] rounded-xl">
                        <h4 className="text-purple-500 font-serif font-semibold">Ecobank StaffInfo</h4>
                        <div className="w-[300px] flex flex-row">
                            <div className="flex-1">
                                <h3 className="text-black font-serif font-semibold">Name</h3>
                            </div>
                            <div className="flex-[2]">
                                <h3 className="text-black font-serif font-semibold">{data.surname + ' ' + data.firstName}</h3>
                            </div>
                        </div>
                        <div className="w-[300px] flex flex-row">
                            <div className="flex-1">
                                <h3 className="text-black font-serif font-semibold">Other Names</h3>
                            </div>
                            <div className="flex-[2]">
                                <h3 className="text-black font-serif font-semibold">{data.otherNames}</h3>
                            </div>
                        </div>
                        <div className="w-[300px] flex flex-row">
                            <div className="flex-1">
                                <h3 className="text-black font-serif font-semibold">Branch</h3>
                            </div>
                            <div className="flex-[2]">
                                <h3 className="text-black font-serif font-semibold">EPAC</h3>
                            </div>
                        </div>
                        <div className="w-[300px] flex flex-row">
                            <div className="flex-1">
                                <h3 className="text-black font-serif font-semibold">Physical Address</h3>
                            </div>
                            <div className="flex-[2]">
                                <h3 className="text-black font-serif font-semibold">270B, Epac, Ozumba Mbadiwe Street, VI, Lagos.</h3>
                            </div>
                            
                        </div>
                        <div className="flex-1">
                        <Image src={`${image}`} alt='Passport Photograph' width={100} height={120} className='rounded-lg'/>
                        {/* <img src='' alt="" />
                        <Link href={image}></Link> */}
                    </div>
                    </div>
                    <div className="flex-1 absolute top-[170px] right-[60px]">
                        <Image src="https://www.bwillcreative.com/wp-content/uploads/2023/03/how-to-make-a-passport-size-photo-in-photoshop-7.jpg" alt='Passport Photograph' width={100} height={120} className='rounded-lg'/>
                    </div>
                    </div>
                    
                )
            }
        </div>
    )
}
// "https://www.bwillcreative.com/wp-content/uploads/2023/03/how-to-make-a-passport-size-photo-in-photoshop-7.jpg"
{/* blob:http://localhost:3000/e147d467-af33-41eb-affc-bdea0384f364 */}

export default StaffInfo