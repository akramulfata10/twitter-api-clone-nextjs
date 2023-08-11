import prisma from "@/prisma";
import { koneksiKeDb } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try{
        await koneksiKeDb();
        const users = await prisma.user.findMany({ include: { tweets:true, _count: true }});
        return NextResponse.json({ users } , {status:201});
    }catch(error: any){
        console.log(error);
        return NextResponse.json({error:error.message}, {status:500});
    } finally{
        await prisma.$disconnect();
    }
}