import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const {id} = params;

    try {
        const body = req.json();
        const res = await prisma.user.findUnique({
            where: {
                staffIdNo: id
            }
        });
        return new NextResponse(JSON.stringify({data: res}), {status: 200});
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
}