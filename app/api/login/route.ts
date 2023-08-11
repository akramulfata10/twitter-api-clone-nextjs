import { koneksiKeDb } from "@/utils";
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import bcrypt from "bcrypt";

export const POST = async (req : Request) => {
    try{
        const { password, email } = await req.json();
        if(!email && !password){
            return NextResponse.json({error:"Invalid Data"}, {status:422});
        }
        await koneksiKeDb();
        const existingUser = await prisma.user.findFirst({ where:{ email } });
        if(!existingUser){
            return NextResponse.json({message :"User Belum Registrasi"}, {status: 403});
        }
        const isPasswordCorrect = await bcrypt.compare(
            password,existingUser.password
        );
        if(!isPasswordCorrect){
            return NextResponse.json({message:"Password incorrect"},{status:403});
        }
        return NextResponse.json({message:"login succes"},{status:201});
    }catch(error:any){
        console.log(error);
        return NextResponse.json({error:error.message}, {status:500});
    } finally{
        await prisma.$disconnect();
    }
}