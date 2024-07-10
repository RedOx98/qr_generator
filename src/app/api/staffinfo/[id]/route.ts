import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// type staffName = {
//     surname: string,
//     firstName: string,
//     otherNames: string,
//     physicalAddress: String,
//     email: string,
//     jobRole: string,
//     url: string,
// }
// type Vcard = {
//     str_start: string,
//     str_end: string,
//     str_vcard: string,
//     goog_chart: string,
//     res: any,
//     concat: [],
//     add_staff: () => string,
//     add_address: () => string,
//     add_tel: () => string,
//     add_email: () => string,
//     add_url?: () => string,
//     add_work?: () => string,
//     required_check?: ()=> string,
//     save?: ()=> string,
// }

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    console.log(id);

    try {
        // const body = req.json();
        const res = await prisma.user.findUnique({
            where: {
                staffIdNo: id
            }
        });
        console.log(res)

        
        return new NextResponse(JSON.stringify({ data: res }), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
}