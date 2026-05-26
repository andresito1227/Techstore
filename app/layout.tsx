import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import Providers from "./providers"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">

        <Providers>
          {children}
        </Providers>

        {process.env.NODE_ENV === "production" && <Analytics />}

        <Script
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://files.bpcontent.cloud/2026/04/26/15/20260426155727-QIF9J4ZC.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  )
}