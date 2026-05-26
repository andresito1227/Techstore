"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: "iphone",
    name: "iPhone 17 Pro",
    price: "$8.150.000",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    qr: "/qr/iphone.png",

    description:
      "El nuevo iPhone 17 Pro Max incorpora inteligencia artificial avanzada y cámara cinematográfica.",

    color: "Titanio Negro",

    storage: "512 GB",

    ram: "12 GB",

    battery: "5200 mAh",

    processor: "A19 Pro",

    screen: "6.9 OLED 120Hz",
  },

  {
    id: "jbl",
    name: "Auriculares JBL",
    price: "$90.000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    qr: "/qr/jbl.png",

    description:
      "Auriculares JBL inalámbricos con sonido envolvente, cancelación de ruido y batería de larga duración para una experiencia inmersiva.",

    color: "Negro Mate",

    storage: "No aplica",

    ram: "No aplica",

    battery: "40 horas",

    processor: "JBL Signature Audio",

    screen: "No aplica",
  },

  {
    id: "watch",
    name: "Galaxy Watch",
    price: "$490.000",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    qr: "/qr/watch.png",
    description:
      "Smartwatch Galaxy Watch 8 con monitoreo avanzado de salud, resistencia al agua y conectividad inteligente para el día a día.",

    color: "Plateado Espacial",

    storage: "32 GB",

    ram: "2 GB",

    battery: "48 horas",

    processor: "Exynos W1000",

    screen: "1.5 AMOLED Full HD",
  },

  {
    id: "ipad",
    name: "iPad Pro",
    price: "$5.200.000",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
    qr: "/qr/ipad.png",
  },

  {
    id: "ps5",
    name: "PlayStation 5",
    price: "$2.900.000",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600",
    qr: "/qr/ps5.png",
  },

  {
    id: "xbox",
    name: "Xbox Series X",
    price: "$2.700.000",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600",
    qr: "/qr/xbox.png",
  },

  {
    id: "nintendo",
    name: "Nintendo Switch",
    price: "$1.800.000",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600",
    qr: "/qr/nintendo.png",
  },

  {
    id: "razer",
    name: "Mouse Razer",
    price: "$350.000",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600",
    qr: "/qr/razer.png",
  },

  {
    id: "keyboard",
    name: "Teclado RGB",
    price: "$240.000",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
    qr: "/qr/keyboard.png",
  },

  {
    id: "drone",
    name: "Drone DJI Mini",
    price: "$3.400.000",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600",
    qr: "/qr/drone.png",
  },

  {
    id: "camera",
    name: "Canon EOS R5",
    price: "$11.000.000",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    qr: "/qr/camera.png",
  },

  {
    id: "speaker",
    name: "Speaker Bose",
    price: "$1.200.000",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600",
    qr: "/qr/speaker.png",
  },

  {
    id: "monitor",
    name: "Monitor Gamer 240Hz",
    price: "$1.950.000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
    qr: "/qr/monitor.png",
  },

  {
    id: "vr",
    name: "Meta Quest 4",
    price: "$2.400.000",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600",
    qr: "/qr/vr.png",
  },

  {
    id: "airpods",
    name: "AirPods Pro",
    price: "$1.150.000",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600",
    qr: "/qr/airpods.png",
  },

  {
    id: "smarttv",
    name: "Smart TV 65”",
    price: "$4.800.000",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600",
    qr: "/qr/smarttv.png",
  },

  {
    id: "router",
    name: "Router WiFi 6",
    price: "$420.000",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600",
    qr: "/qr/router.png",
  },

  {
    id: "microphone",
    name: "Micrófono HyperX",
    price: "$580.000",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600",
    qr: "/qr/microphone.png",
  },

  {
    id: "webcam",
    name: "Webcam Logitech",
    price: "$390.000",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
    qr: "/qr/webcam.png",
  },

  {
    id: "gpu",
    name: "RTX 5090",
    price: "$9.900.000",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600",
    qr: "/qr/gpu.png",
  },

  {
    id: "cpu",
    name: "Intel i9 Ultra",
    price: "$2.800.000",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    qr: "/qr/cpu.png",
  },

  {
    id: "smartphone",
    name: "Samsung S26 Ultra",
    price: "$6.900.000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    qr: "/qr/smartphone.png",
  },

  {
    id: "printer",
    name: "Impresora Epson",
    price: "$760.000",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600",
    qr: "/qr/printer.png",
  },

  {
    id: "projector",
    name: "Proyector 4K",
    price: "$2.100.000",
    image: "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?w=600",
    qr: "/qr/projector.png",
  },

  {
    id: "laptop",
    name: "ASUS ROG Laptop",
    price: "$7.400.000",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    qr: "/qr/laptop.png",
  },
];

export default function ProductsPage() {

  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [toast, setToast] = useState(null)

  const handleAddToCart = (product) => {
    addToCart(product)

    setToast(`🛒 ${product.name} agregado al carrito`)

    setTimeout(() => {
      setToast(null)
    }, 2000)
  }

  return (
    <>
      <Header />

      {/* TOAST */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#22c55e",
            color: "white",
            padding: "12px 18px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            zIndex: 99999,
            fontWeight: "bold",
          }}
        >
          {toast}
        </div>
      )}

      <div
        style={{
          minHeight: "100vh",
          background: "#000",
          padding: "30px",
        }}
      >
        <h1 style={{
          color: "white",
          fontSize: "32px",
          marginBottom: "30px",
          fontWeight: "bold",
        }}>
          Productos
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              style={{
                cursor: "pointer",
                background: "#111",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 0 15px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "12px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  <div>
                    <h2 style={{ color: "white", fontSize: "16px" }}>
                      {product.name}
                    </h2>

                    <p style={{
                      color: "#3b82f6",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}>
                      {product.price}
                    </p>
                  </div>

                  <img
                    src={product.qr}
                    alt="QR"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "900px",
              background: "#111",
              borderRadius: "20px",
              padding: "30px",
              display: "flex",
              gap: "30px",
              color: "white",
            }}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "350px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: "40px" }}>
                {selectedProduct.name}
              </h1>

              <p style={{
                color: "#3b82f6",
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}>
                {selectedProduct.price}
              </p>

              <p style={{ color: "#aaa", marginBottom: "20px" }}>
                {selectedProduct.description}
              </p>

              {/* ESPECIFICACIONES RESTAURADAS */}
              <div style={{ marginBottom: "20px", color: "#ddd" }}>
                <p><strong>Color:</strong> {selectedProduct.color}</p>
                <p><strong>RAM:</strong> {selectedProduct.ram}</p>
                <p><strong>Storage:</strong> {selectedProduct.storage}</p>
                <p><strong>Batería:</strong> {selectedProduct.battery}</p>
                <p><strong>Procesador:</strong> {selectedProduct.processor}</p>
                <p><strong>Pantalla:</strong> {selectedProduct.screen}</p>
              </div>

              {/* QR RESTAURADO */}
              <img
                src={selectedProduct.qr}
                alt="QR"
                style={{
                  width: "140px",
                  background: "white",
                  padding: "10px",
                  borderRadius: "12px",
                  marginBottom: "20px",
                }}
              />

              <button
                onClick={() => handleAddToCart(selectedProduct)}
                style={{
                  padding: "14px 20px",
                  background: "#3b82f6",
                  border: "none",
                  borderRadius: "12px",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}