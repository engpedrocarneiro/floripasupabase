import { Metadata } from "next"
import Link from "next/link"
import { SupabaseLoginForm } from "@/components/auth/supabase-login-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Login | Sistema de Autenticação",
  description: "Faça login na sua conta",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Bem-vindo de volta</CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SupabaseLoginForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-muted-foreground text-center">
            Ainda não tem uma conta?{" "}
            <Button variant="link" className="px-0" asChild>
              <Link href="/cadastro">Criar conta</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}