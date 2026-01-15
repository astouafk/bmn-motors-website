// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, X } from "lucide-react"
// import { getConfig } from "@/lib/data"

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
//   const config = getConfig()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled || isMobileMenuOpen 
//           ? "bg-[var(--color-charcoal)]/98 backdrop-blur-md" 
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center">
//             <div className="rounded-lg px-3 py-2">
//               <Image
//                 src="/logo/bmn-logo.png"
//                 alt={`${config.business.name} Logo`}
//                 width={80}
//                 height={80}
//                 className="h-10 w-auto"
//                 priority
//               />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               href="/"
//               className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
//             >
//               ACCUEIL
//             </Link>
//             <Link
//               href="/vehicules"
//               className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
//             >
//               VÉHICULES
//             </Link>
//             <Link
//               href="/rentals"
//               className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
//             >
//               LOCATIONS
//             </Link>
//             <Link
//               href="/experience"
//               className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
//             >
//               EXPÉRIENCE
//             </Link>
//             <Link
//               href="/contact"
//               className="px-6 py-2 bg-[var(--color-orange)] text-[var(--color-cream)] text-sm font-semibold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
//             >
//               CONTACT
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-[var(--color-cream)] p-2 bg-[var(--color-charcoal)]/80 backdrop-blur-sm rounded-lg"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden pt-4 pb-6 space-y-4 bg-[var(--color-charcoal)]/95 backdrop-blur-md -mx-6 px-6 mt-4 rounded-b-2xl">
//             <Link
//               href="/"
//               className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               ACCUEIL
//             </Link>
//             <Link
//               href="/vehicules"
//               className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               VÉHICULES
//             </Link>
//             <Link
//               href="/rentals"
//               className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               LOCATIONS
//             </Link>
//             <Link
//               href="/experience"
//               className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               EXPÉRIENCE
//             </Link>
//             <Link
//               href="/contact"
//               className="block px-6 py-3 bg-[var(--color-orange)] text-[var(--color-cream)] text-sm font-semibold rounded-full hover:bg-[var(--color-orange)]/90 transition-all text-center mt-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               CONTACT
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { getConfig } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle" // ← Import

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const config = getConfig()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--color-charcoal)]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="rounded-lg px-3 py-2">
              <Image
                src="/logo/bmn-logo.png"
                alt={`${config.business.name} Logo`}
                width={80}
                height={80}
                className="h-10 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
            >
              ACCUEIL
            </Link>
            <Link
              href="/vehicules"
              className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
            >
              VÉHICULES
            </Link>
            <Link
              href="/rentals"
              className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
            >
              LOCATIONS
            </Link>
            <Link
              href="/experience"
              className="text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
            >
              EXPÉRIENCE
            </Link>
      
            <Link
              href="/contact"
              className="px-6 py-2 bg-[var(--color-orange)] text-[var(--color-cream)] text-sm font-semibold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
            >
              CONTACT
            </Link>
             {/* Theme Toggle */}
             <ThemeToggle /> {/* ← Ajouté */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle /> {/* ← Ajouté aussi pour mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--color-cream)] p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ACCUEIL
            </Link>
            <Link
              href="/vehicules"
              className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VÉHICULES
            </Link>
            <Link
              href="/rentals"
              className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LOCATIONS
            </Link>
            <Link
              href="/experience"
              className="block text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-orange)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EXPÉRIENCE
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-2 bg-[var(--color-orange)] text-[var(--color-cream)] text-sm font-semibold rounded-full hover:bg-[var(--color-orange)]/90 transition-all text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}