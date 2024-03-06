"use client"
import { StaffType } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// const getStaff = async (id: string) => {
//     const staffId: number = 10928
//     const res = await fetch(`http://localhost:3000/api/staffinfo/${id}`, {
//         cache: "no-cache"
//     });
//     if (!res.ok) {
//         throw new Error("Failed!");
//     }

//     console.log(res);
//     return res.json();
// };

// const [data, setData] = useState<StaffType>();
// console.log(data);

const StaffInfo =  ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<StaffType>();
    console.log(data);

    const { id } = params;
    useEffect(() => {
        const fetchStaff = async () => {
            const staffNo: number = 10928;
            try {
                const res = await fetch(`http://localhost:3000/api/staffinfo/${staffNo}`, {});

                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }

                const data = await res.json();
                // console.log(data);
                setData(data.data);
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
                        <Image src="blob:http://localhost:3000/e147d467-af33-41eb-affc-bdea0384f364" alt='Passport Photograph' width={100} height={120} className='rounded-lg'/>
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

export default StaffInfo