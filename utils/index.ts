import prisma from "@/prisma";

export const koneksiKeDb = async () => {
    try{ 
        await prisma.$connect();
    }catch(error:any){
        return new Error(error.message);
    } finally {
        await prisma.$disconnect();
    }
}