import { Metadata } from "next"
import Link from "next/link"
import { SupabaseAuthForm } from "@/components/auth/supabase-auth-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cadastro | Sistema de Autenticação",
  description: "Crie sua conta",
}

export default function RegisterPage() {
  return (
    <div className="container relative flex h-screen w-screen flex-col items-center justify-center">
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-4 flex items-center gap-2"
        asChild
      >
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Voltar para página inicial
        </Link>
      </Button>

      <Card className="w-full max-w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Criar conta</CardTitle>
          <CardDescription className="text-center">
            Preencha os dados abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SupabaseAuthForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-muted-foreground text-center">
            Já tem uma conta?{" "}
            <Button variant="link" className="px-0" asChild>
              <Link href="/login">Fazer login</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}