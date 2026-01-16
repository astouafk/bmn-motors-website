// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })
// const _playfair = Playfair_Display({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Elite Motors - Premium Car Sales & Rentals",
//   description: "Discover luxury and performance vehicles. Buy or rent your dream car today.",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode
// // }>) {
// //   return (
// //     <html lang="en" className="light">
// //       <body className={`font-sans antialiased`}>
// //         {children}
// //         <Analytics />
// //       </body>
// //     </html>
// //   )
// // }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               try {
//                 const theme = localStorage.getItem('theme') || 'light';
//                 document.documentElement.classList.add(theme);
//               } catch (e) {}
//             `,
//           }}
//         />
//       </head>
//       <body className={`font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }



import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elite Motors - Premium Car Sales & Rentals",
  description: "Discover luxury and performance vehicles. Buy or rent your dream car today.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  )
}