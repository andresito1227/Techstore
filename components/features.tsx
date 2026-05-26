import { Truck, ShieldCheck, CreditCard, Headset } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envíos gratis",
    description: "En compras superiores a 100.000",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Protección garantizada",
    bgColor: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: CreditCard,
    title: "Pago flexible",
    description: "Hasta 12 sin intereses",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Headset,
    title: "Soporte 24/7",
    description: "Siempre estamos para ayudarte",
    bgColor: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
  },
]

export function Features() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bgColor}`}>
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
