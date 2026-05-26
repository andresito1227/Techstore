import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Tecnología que{" "}
              <span className="text-primary">inspira</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Descubre los últimos dispositivos y accesorios tecnológicos. 
              Innovación y diseño al alcance de tu mano.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explora productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                Ver ofertas
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&h=500&fit=crop"
                alt="Espacio de trabajo tecnológico con monitor"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm text-foreground">
                2:06 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
