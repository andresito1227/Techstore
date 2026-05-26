"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { useCart } from "@/app/context/CartContext"

export default function CartPage() {

  const router = useRouter()
  const { cart, removeFromCart, addToCart, decreaseQty, getTotal } = useCart()

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState("")
  const [orderId, setOrderId] = useState(null)

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const formatPrice = (v) => v.toLocaleString("es-CO")

  const generateOrderId = () =>
    "TS-" + Math.floor(Math.random() * 900000 + 100000)

  const handlePayment = () => {

    if (!user.name || !user.phone || !user.email) {
      alert("Completa los datos")
      return
    }

    if (!paymentMethod) {
      alert("Selecciona método de pago")
      return
    }

    setLoading(true)

    setTimeout(() => {

      const id = generateOrderId()
      setOrderId(id)

      const order = {
        id,
        user,
        paymentMethod,
        total: getTotal()
      }


      localStorage.setItem("lastOrder", JSON.stringify(order))

      setLoading(false)
      setSuccess(true)

      cart.forEach(i => removeFromCart(i.id))

      setTimeout(() => router.push("/"), 3500)

    }, 2000)
  }

  const btnQty = {
    padding: "5px 10px",
    background: "#333",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

  const btnPlus = {
    padding: "5px 10px",
    background: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

  const btnDelete = {
    padding: "5px 10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

  return (
    <>
      <Header />

      <div style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        padding: "30px"
      }}>

        <h1>🛒 Checkout</h1>

        {step === 1 && (
          <>
            {cart.map(item => {

              const price = Number(item.price.replace(/\D/g, ""))

              return (
                <div key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "#111",
                    padding: "15px",
                    borderRadius: "12px",
                    marginBottom: "10px"
                  }}
                >

                  <div>
                    <h3>{item.name}</h3>
                    <p style={{ color: "#3b82f6" }}>
                      ${formatPrice(price * item.quantity)}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button style={btnQty} onClick={() => decreaseQty(item.id)}>-</button>
                    <button style={btnPlus} onClick={() => addToCart(item)}>+</button>
                    <button style={btnDelete} onClick={() => removeFromCart(item.id)}>X</button>
                  </div>

                </div>
              )
            })}

            <h2>Total: ${formatPrice(getTotal())}</h2>

            <button
              onClick={() => setStep(2)}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                background: "#3b82f6",
                border: "none",
                borderRadius: "10px",
                color: "white"
              }}
            >
              Continuar
            </button>
          </>
        )}


        {step === 2 && (
          <div style={{ background: "#111", padding: "20px", borderRadius: "12px" }}>

            <h2>Datos cliente</h2>

            <input placeholder="Nombre"
              style={{ width: "100%", padding: 10, margin: 5 }}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />

            <input placeholder="Teléfono"
              style={{ width: "100%", padding: 10, margin: 5 }}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />

            <input placeholder="Email"
              style={{ width: "100%", padding: 10, margin: 5 }}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <button onClick={() => setStep(3)}
              style={{ marginTop: 10, background: "#3b82f6", color: "white", padding: 10, borderRadius: "12px" }}
            >
              Ir al pago
            </button>

          </div>
        )}

        {step === 3 && (
          <div style={{ background: "#111", padding: "20px", borderRadius: "12px" }}>

            <h2>Método de pago</h2>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

              {["nequi", "daviplata", "pse", "tarjeta"].map(m => (
                <button
                  key={m}
                  onClick={() => setPaymentMethod(m)}
                  style={{
                    padding: "10px",
                    background: paymentMethod === m ? "#22c55e" : "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "8px"
                  }}
                >
                  {m.toUpperCase()}
                </button>
              ))}

            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              style={{
                marginTop: "20px",
                background: "#22c55e",
                padding: "12px",
                color: "white",
                border: "none",
                borderRadius: "10px"
              }}
            >
              {loading ? "Procesando..." : "Confirmar compra"}
            </button>

          </div>
        )}

        {success && (
          <div style={{
            marginTop: 20,
            background: "#111",
            padding: 15,
            borderRadius: 12,
            border: "1px solid #22c55e"
          }}>
            ✔ Orden creada <br />
            🧾 {orderId} <br />
            👤 {user.name} <br />
            📱 {user.phone} <br />
            💳 {paymentMethod} <br />
            🔁 Redirigiendo...
          </div>
        )}

      </div>
    </>
  )
}