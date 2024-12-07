"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

export default function AutomationTestPage() {
  const [isLoading, setIsLoading] = useState(false);

  const createTestRule = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/automation/test", {
        method: "POST",
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message);
      }

      toast({
        title: "Sucesso",
        description: "Regra de automação de teste criada com sucesso!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message || "Erro ao criar regra de teste",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Teste de Automação</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Esta página permite testar o sistema de automação criando uma regra de teste
            que será executada imediatamente.
          </p>
          <Button 
            onClick={createTestRule} 
            disabled={isLoading}
          >
            {isLoading ? "Criando..." : "Criar Regra de Teste"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}