
import { PrismaClient } from "@prisma/client";

export async function GET() {

    const prisma = new PrismaClient();

    try{
        const stallTypeData = await prisma.stallType.findMany();
    
        return new Response(JSON.stringify(stallTypeData), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch stall types" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } finally{
        await prisma.$disconnect();
    }
}