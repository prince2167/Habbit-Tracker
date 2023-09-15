import { connect } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/model/userModel";
import bcryptjs from "bcryptjs"

connect();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody

        //  check user alreasy exist
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //  To Hash the password
        const salt = await bcryptjs.genSaltSync(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        // create user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        return NextResponse.json(
            { message: "User created successfully", success: true, savedUser })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json()
//         const validator = vine.compile(signupSchema)
//         const output = await validator.validate(body)

//         return NextResponse.json(body, { status: 200 })

//     } catch (error) {
//         if (error instanceof errors.E_VALIDATION_ERROR) {
//             return NextResponse.json(error.message, { status: 400 })
//         }
//     }
// }