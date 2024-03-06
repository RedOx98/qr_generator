"use client"
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
  return (
  <div className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
    <div className="w-[1/2] h-1/2 flex items-center justify-center">
    <form action="" className="w-[400px] h-[500px] flex flex-col" onSubmit={handleSubmit}>
      <h4 className="text-white">This for the form</h4>
      <input type="text" name='staffId' value={staffId} className="w-[300px] h-[60px] rounded-md" placeholder="Enter your staff ID" onChange={handleChange}/>

      <button className="w-[200px] h-[70px] bg-red-500 rounded-xl mt-[20px]" type="submit">Submit ID</button>
    </form>

    {qr && (
          <div>
            <h4 className="text-white">Generated QR Code</h4>
            <Image src={qr} alt="QR Code" height={200} width={200}/>
          </div>
        )}
    </div>

  </div>
  );
}