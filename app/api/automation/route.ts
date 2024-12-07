import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import connectDB from "@/lib/db";
import AutomationRule from "@/models/AutomationRule";
import { AutomationScheduler } from "@/lib/automation/scheduler";

const scheduler = new AutomationScheduler();

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Não autorizado" },
        { status: 401 }
      );
    }

    const data = await req.json();
    await connectDB();

    const rule = await AutomationRule.create({
      ...data,
      createdBy: session.user.id
    });

    if (rule.trigger.type === 'schedule') {
      scheduler.scheduleAutomation(rule);
    }

    return NextResponse.json(rule, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar regra de automação:", error);
    return NextResponse.json(
      { message: "Erro ao criar regra de automação" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Não autorizado" },
        { status: 401 }
      );
    }

    await connectDB();
    const rules = await AutomationRule.find({ createdBy: session.user.id });
    
    return NextResponse.json(rules);
  } catch (error) {
    console.error("Erro ao buscar regras de automação:", error);
    return NextResponse.json(
      { message: "Erro ao buscar regras de automação" },
      { status: 500 }
    );
  }
}