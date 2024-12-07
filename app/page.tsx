import { HeroSection } from "@/components/ui/hero-section"
import { FeaturesSection } from "@/components/ui/features-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b border-border/5 fixed w-full bg-background/80 backdrop-blur-sm z-50">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Floripa Turismo</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/cadastro">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <FeaturesSection />

      <footer className="border-t border-border/5 py-12 mt-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@ianovar.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(34) 99998-3213</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/faq" className="block text-muted-foreground hover:text-primary transition-colors">
                Dúvidas Frequentes
              </Link>
              <Link href="/contato" className="block text-muted-foreground hover:text-primary transition-colors">
                Fale Conosco
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}