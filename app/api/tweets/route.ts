import prisma from "@/prisma";
import { koneksiKeDb } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try{
        await koneksiKeDb();
        const tweets = await prisma.tweets.findMany();
        return NextResponse.json({ tweets } , {status:200});
    }catch (error:any) {
        return NextResponse.json({ error:error.message }, {status:500});
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req:Request) => {
    try{
        const { tweet, userId } = await req.json();
        if(!tweet && !userId) return NextResponse.json({ error:"Invalid Data"}, {status: 422 }); 
        await koneksiKeDb();
        const user = await prisma.user.findFirst({ where :{ id: userId }});
        if(!user) return NextResponse.json({ error: "Invalid user"}, {status: 401});
        const createTweet = await prisma.tweets.create({ data :{ tweet , userId} });
        return NextResponse.json({ createTweet }, {status:201});
    }catch (error:any){
        return NextResponse.json({ error: error.message}, {status: 500});
    } finally {
        await prisma.$disconnect();
    }
}