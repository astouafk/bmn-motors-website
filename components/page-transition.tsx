// "use client"

// import { useEffect, useState } from "react"
// import { usePathname } from "next/navigation"

// export function PageTransition({ children }: { children: React.ReactNode }) {
//   const [isVisible, setIsVisible] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     // Reset l'animation à chaque changement de page
//     setIsVisible(false)
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, 50) // Petit délai pour que le reset soit visible

//     return () => clearTimeout(timer)
//   }, [pathname])

//   return (
//     <div
//       className={`transition-all duration-1000 ease-out ${
//         isVisible
//           ? "opacity-100 translate-x-0 blur-0"
//           : "opacity-0 translate-x-8 blur-sm"
//       }`}
//     >
//       {children}
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState<"entering" | "exiting">("entering")
  const pathname = usePathname()

  useEffect(() => {
    // Animation de sortie
    setTransitionStage("exiting")
    
    // Changement de contenu + animation d'entrée
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setTransitionStage("entering")
    }, 350) // Durée optimale pour un effet fluide

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`transition-all duration-[350ms] ease-out ${
        transitionStage === "entering"
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-3 scale-[0.98]"
      }`}
    >
      {displayChildren}
    </div>
  )
}