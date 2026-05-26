"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useParams } from "next/navigation"

export default function ARPage() {

  const params = useParams()
  const productId = params.id

  useEffect(() => {
    import("@google/model-viewer")
  }, [])

  const modelPath = `/models/${productId}.glb`

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>

      <Link href="/products">
        <button
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 9999,
            padding: "12px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#111",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Volver a productos
        </button>
      </Link>

      <model-viewer
        src={modelPath}
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        auto-rotate
        autoplay
        shadow-intensity="1"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black"
        }}
      />
    </div>
  )
}