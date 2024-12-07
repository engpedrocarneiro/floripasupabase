import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import User from "@/models/User"
import { hashPassword } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const { name, email, password, company, industry } = await req.json()

    if (!name || !email || !password || !company || !industry) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: "Email já cadastrado" },
        { status: 400 }
      )
    }

    const hashedPassword = hashPassword(password)
    const user = await User.create({
      name,
      email,
      company,
      industry,
      password: hashedPassword,
    })

    return NextResponse.json(
      { message: "Usuário criado com sucesso", userId: user._id },
      { status: 201 }
    )
  } catch (error) {
    console.error("Erro ao registrar usuário:", error)
    return NextResponse.json(
      { message: "Erro ao criar usuário" },
      { status: 500 }
    )
  }
}