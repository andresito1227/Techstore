import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Auriculares JBL",
    category: "AUDIO",
    price: 90000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    bgColor: "from-slate-700 to-slate-900",
  },
  {
    id: 2,
    name: "Galaxy Watch 8",
    category: "WATCH",
    price: 490000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    bgColor: "from-stone-600 to-stone-800",
  },
  {
    id: 3,
    name: "iPhone 17 Pro Max",
    category: "SMARTPHONES",
    price: 8150000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    bgColor: "from-orange-500 to-orange-700",
  },
  {
    id: 4,
    name: "Teclado Gaming RGB",
    category: "GAMING",
    price: 239900,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
    bgColor: "from-blue-600 to-blue-900",
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function PopularProducts() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Lo más popular
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre los productos más vendidos y mejor valorados por nuestros clientes
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-card overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className={`relative aspect-square bg-gradient-to-br ${product.bgColor} p-6`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-semibold text-foreground mt-1 mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <Button size="icon" className="h-9 w-9 rounded-full bg-primary hover:bg-primary/90">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
