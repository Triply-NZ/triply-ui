import {NextRequest} from "next/server";

export async function Post(request: NextRequest){
    const body = await request.json();
    const validation = tripSchema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.format(),{ status: 400});
    }

    // 验证通过发送给后端
}