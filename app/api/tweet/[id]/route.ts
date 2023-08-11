import { koneksiKeDb } from "@/utils"
import prisma from "@/prisma";
import { NextResponse } from "next/server";



export const GET = async (req: Request, {params} : { params: { id : string }}) => {
    try{
        await koneksiKeDb();
        const tweet = await prisma.tweets.findFirst({ 
            where : { id : params.id },
        });
        return NextResponse.json({ tweet }, {status:200} );
    }catch (error:any){
        console.log(error);
        return NextResponse.json({ error:error.message }, {status:500});
    } finally{  
        await prisma.$disconnect();
    }
}


export const PUT = async (req: Request, {params} : { params: { id : string }}) => {
    try{
        const { tweet } = await req.json();
        await koneksiKeDb();
        const updatedTweet = await prisma.tweets.update({ 
            data : { tweet},
            where : { id : params.id },
        });
        return NextResponse.json({ tweet : updatedTweet }, {status:200});
    }catch (error:any){
        console.log(error);
        return NextResponse.json({ error:error.message }, {status:500});
    } finally{  
        await prisma.$disconnect();
    }
}