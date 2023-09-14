import { connect } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { signupSchema } from "@/validator/authSchema";


connect();


export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const validator = vine.compile(signupSchema)
        const output = await validator.validate(body)

        return NextResponse.json(body, { status: 200 })

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            return NextResponse.json(error.message, { status: 400 })
        }
    }
}