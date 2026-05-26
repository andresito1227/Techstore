"use client"

import Link from "next/link"
import { Search, User, ShoppingCart } from "lucide-react"
import { useCart } from "@/app/context/CartContext"

export function Header() {

  const { cart } = useCart()

  const cartCount = cart.length

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* LOGO */}
        <div className="flex items-center gap-8">

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">T</span>
            </div>

            <span className="text-xl font-semibold text-foreground">
              Tech<span className="text-primary">Store</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Productos
            </Link>

            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Categorías
            </Link>

            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ofertas
            </Link>

            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
          </nav>

        </div>

        {/* ICONOS */}
        <div className="flex items-center gap-4">

          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-5 w-5" />
          </button>

          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <User className="h-5 w-5" />
          </button>


          <Link href="/cart" className="relative p-2">

            <ShoppingCart className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />

            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  background: "red",
                  color: "white",
                  fontSize: "10px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}

          </Link>

        </div>

      </div>
    </header>
  )
}