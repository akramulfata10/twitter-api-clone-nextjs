import { koneksiKeDb } from "@/utils";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (req : Request) => {
    try{
        const { name, password, email } = await req.json();
        if(!name && !email && !password){
            return NextResponse.json({error:"Invalid Data"}, {status:422});
        }
        await koneksiKeDb();
        const existingUser = await prisma.user.findFirst({where:{ email }});
        if(existingUser){
            return NextResponse.json({message :"User already register"}, {status: 403});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const userCreate = await prisma.user.create({
            data : {name, email,password:hashPassword},
        });
        return NextResponse.json({ userCreate }, {status:201});
    }catch(error:any){
        console.log(error);
        return NextResponse.json({error:error.message}, {status:500});
    } finally{
        await prisma.$disconnect();
    }
}