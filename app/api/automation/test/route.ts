import { NextResponse } from "next/server";
import { AutomationScheduler } from "@/lib/automation/scheduler";
import { AutomationRule } from "@/lib/automation/types";

const scheduler = new AutomationScheduler();

export async function POST(req: Request) {
  try {
    const testRule: AutomationRule = {
      id: Date.now().toString(),
      name: "Test Automation",
      trigger: {
        type: "schedule",
        config: {
          frequency: "daily",
          time: new Date().toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })
        }
      },
      actions: [
        {
          type: "sendNotification",
          params: {
            message: "Teste de automação executado com sucesso!"
          }
        }
      ],
      isActive: true,
      createdBy: "test-user",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    scheduler.scheduleAutomation(testRule);

    return NextResponse.json({
      message: "Regra de teste criada com sucesso",
      rule: testRule
    }, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar regra de teste:", error);
    return NextResponse.json(
      { message: "Erro ao criar regra de teste" },
      { status: 500 }
    );
  }
}