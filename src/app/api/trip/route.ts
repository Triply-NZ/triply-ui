import { tripSchema } from "@/ValidationSchemas/trip";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = tripSchema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.format(),{ status: 400});
    }

    // 验证通过发送给后端
}