import { Smartphone, Headphones, Camera, Monitor, Watch, Gamepad2 } from "lucide-react"

const categories = [
  { icon: Smartphone, name: "Smartphones", count: 12 },
  { icon: Headphones, name: "Audio", count: 5 },
  { icon: Camera, name: "Fotografía", count: 6 },
  { icon: Monitor, name: "Computadoras", count: 10 },
  { icon: Watch, name: "Watch", count: 4 },
  { icon: Gamepad2, name: "Gaming", count: 8 },
]

export function Categories() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Explora por categoría
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra exactamente lo que necesitas navegando por nuestras categorías
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer rounded-2xl bg-secondary p-6 text-center transition-all hover:bg-secondary/80 hover:scale-105"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} productos</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
