"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-12 md:px-12 md:py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-4">
            Mantente actualizado
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas, novedades y las 
            últimas tendencias en tecnología
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <Input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Suscribirse
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="text-sm text-blue-200">
            Al suscribirte aceptas nuestra política de privacidad
          </p>
        </div>
      </div>
    </section>
  )
}
