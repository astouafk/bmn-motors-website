// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import Link from "next/link"
// import { Calendar, Clock, MapPin, Shield, ArrowRight, Phone } from "lucide-react"

// const rentalBenefits = [
//   {
//     icon: Shield,
//     title: "Assurance Complète",
//     description: "Protection totale incluse dans toutes les locations",
//   },
//   {
//     icon: Clock,
//     title: "Durée Flexible",
//     description: "Options horaires, journalières, hebdomadaires ou mensuelles",
//   },
//   {
//     icon: MapPin,
//     title: "Livraison & Récupération",
//     description: "Livraison gratuite dans les limites de la ville",
//   },
//   {
//     icon: Calendar,
//     title: "Réservation Facile",
//     description: "Réservez en ligne ou via WhatsApp instantanément",
//   },
// ]

// const rentalCategories = [
//   {
//     name: "BERLINES EXECUTIVES",
//     description: "Confort premium pour affaires et loisirs",
//     price: "À partir de 85.000 FCFA/jour",
//     image: "/luxury-mercedes-s-class-sedan-black.jpg",
//     vehicles: ["Mercedes Classe S", "BMW Série 7", "Audi A8"],
//   },
//   {
//     name: "SUV DE LUXE",
//     description: "Espace et sophistication combinés",
//     price: "À partir de 95.000 FCFA/jour",
//     image: "/range-rover-sport-suv-white.jpg",
//     vehicles: ["Range Rover Sport", "BMW X7", "Mercedes GLS"],
//   },
//   {
//     name: "PERFORMANCES SPORTIVES",
//     description: "Conduite exaltante pour occasions spéciales",
//     price: "À partir de 120.000 FCFA/jour",
//     image: "/porsche-cayenne-suv-gray.jpg",
//     vehicles: ["Porsche Cayenne", "BMW M4", "Mercedes AMG GT"],
//   },
//   {
//     name: "FAMILLE & GROUPE",
//     description: "Véhicules spacieux pour grands groupes",
//     price: "À partir de 90.000 FCFA/jour",
//     image: "/mercedes-v-class-minibus-black.jpg",
//     vehicles: ["Mercedes Classe V", "Toyota Land Cruiser", "VW Multivan"],
//   },
// ]

// export default function RentalsPage() {
//   return (
//     <main className="min-h-screen bg-[var(--color-charcoal)]">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <img
//           src="/luxury-sports-car-keys-on-marble-table.jpg"
//           alt="Location de voitures"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/80 via-[var(--color-charcoal)]/60 to-[var(--color-charcoal)]" />

//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">LOCATIONS PREMIUM</p>
//           <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--color-cream)] leading-tight mb-8">
//             Conduisez Vos
//             <br />
//             <span className="italic">Rêves</span>
//           </h1>
//           <p className="text-[var(--color-gray-200)] text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
//             Vivez le luxe à vos conditions. Locations flexibles pour toutes les occasions.
//           </p>
//           <Link
//             href="#categories"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
//           >
//             EXPLORER LA FLOTTE
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-32 bg-[var(--color-cream)]">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
//               Pourquoi Louer <span className="italic">Avec Nous</span>
//             </h2>
//             <p className="text-[var(--color-gray-500)] text-xl max-w-2xl mx-auto">
//               Nous rendons le luxe accessible avec des tarifs transparents et un service exceptionnel
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {rentalBenefits.map((benefit, index) => (
//               <div key={index} className="bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group">
//                 <div className="w-14 h-14 bg-[var(--color-orange)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-orange)] transition-all">
//                   <benefit.icon className="w-7 h-7 text-[var(--color-orange)] group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="text-[var(--color-charcoal)] text-xl font-bold mb-3">{benefit.title}</h3>
//                 <p className="text-[var(--color-gray-500)] leading-relaxed">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Rental Categories */}
//       <section id="categories" className="py-32 bg-[var(--color-charcoal)]">
//         <div className="container mx-auto px-6">
//           <div className="mb-20">
//             <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-cream)] mb-6">
//               <span className="italic">Catégories</span> de Location
//             </h2>
//             <p className="text-[var(--color-gray-200)] text-xl max-w-3xl">
//               Choisissez parmi notre sélection de véhicules premium pour tous vos besoins
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {rentalCategories.map((category, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-3xl h-[500px]">
//                 <img
//                   src={category.image || "/placeholder.svg"}
//                   alt={category.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/60 to-transparent" />

//                 <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
//                   {/* <p className="text-[var(--color-orange)] text-sm font-bold mb-4 tracking-widest">{category.price}</p> */}
//                   <h3 className="font-serif text-4xl text-[var(--color-cream)] mb-4">{category.name}</h3>
//                   <p className="text-[var(--color-gray-200)] mb-6">{category.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {category.vehicles.map((vehicle, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-[var(--color-cream)]/10 backdrop-blur-sm text-[var(--color-cream)] text-xs rounded-full border border-[var(--color-cream)]/20"
//                       >
//                         {vehicle}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-32 bg-[var(--color-cream)]">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
//               Comment <span className="italic">Ça Marche</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-[var(--color-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="font-serif text-3xl text-white">1</span>
//               </div>
//               <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4">Choisir le Véhicule</h3>
//               <p className="text-[var(--color-gray-500)] leading-relaxed">
//                 Parcourez notre flotte et sélectionnez votre véhicule idéal
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-[var(--color-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="font-serif text-3xl text-white">2</span>
//               </div>
//               <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4">Réservation Rapide</h3>
//               <p className="text-[var(--color-gray-500)] leading-relaxed">
//                 Réservez instantanément via Whatsap avec Birane Michel 
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-[var(--color-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="font-serif text-3xl text-white">3</span>
//               </div>
//               <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4">Prenez la Route</h3>
//               <p className="text-[var(--color-gray-500)] leading-relaxed">
//                 Récupérez votre véhicule ou faites-vous le livrer
//               </p>
//             </div>
//           </div>

//           <div className="text-center mt-16">
//             <Link
//               href="/vehicules"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
//             >
//               COMMENCER LA RÉSERVATION
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 bg-[var(--color-charcoal)] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <img
//             src="/luxury-sports-car-in-dark-showroom-with-dramatic-l.jpg"
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)] via-transparent to-[var(--color-charcoal)]" />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">PRÊT À CONDUIRE ?</p>
//             <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-cream)] mb-8 leading-tight">
//               Votre Véhicule Parfait
//               <br />
//               <span className="italic">Vous Attend</span>
//             </h2>
//             <p className="text-[var(--color-gray-200)] text-xl leading-relaxed mb-12">
//               Parcourez notre flotte, sélectionnez votre véhicule de rêve et prenez la route en quelques minutes. Notre
//               équipe est prête à réaliser votre projet.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <Link
//                 href="/vehicules"
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
//               >
//                 VOIR TOUS LES VÉHICULES
//                 <ArrowRight className="w-5 h-5" />
//               </Link>

              
//                <a href="https://wa.me/221775889976"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)] transition-all"
//               >
//                 <Phone className="w-5 h-5" />
//                 APPELEZ-NOUS
//               </a>
//             </div>

//             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <p className="font-serif text-4xl text-[var(--color-orange)] mb-2">2H</p>
//                 <p className="text-[var(--color-gray-200)] text-sm">Temps de Réponse Moyen</p>
//               </div>
//               <div>
//                 <p className="font-serif text-4xl text-[var(--color-orange)] mb-2">100%</p>
//                 <p className="text-[var(--color-gray-200)] text-sm">Tarification Transparente</p>
//               </div>
//               <div>
//                 <p className="font-serif text-4xl text-[var(--color-orange)] mb-2">24/7</p>
//                 <p className="text-[var(--color-gray-200)] text-sm">Support Client</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }





import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock, MapPin, Shield, ArrowRight, Phone } from "lucide-react"
import { getRentalBenefits, getRentalCategories, getContactInfo } from "@/lib/data"

export default function RentalsPage() {
  const rentalBenefits = getRentalBenefits()
  const rentalCategories = getRentalCategories()
  const contact = getContactInfo()

  // Mapping des icônes
  const iconMap: Record<string, any> = {
    Shield,
    Clock,
    MapPin,
    Calendar,
  }

  return (
    <main className="min-h-screen bg-[var(--color-charcoal)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/luxury-sports-car-keys-on-marble-table.jpg"
          alt="Location de voitures"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/80 via-[var(--color-charcoal)]/60 to-[var(--color-charcoal)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">LOCATIONS PREMIUM</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--color-cream)] leading-tight mb-8">
            Conduisez Vos
            <br />
            <span className="italic">Rêves</span>
          </h1>
          <p className="text-[var(--color-gray-200)] text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            Vivez le luxe en fonction de vos moyens. Locations flexibles pour toutes les occasions.
          </p>
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all">
            Locations & Vente de Voitures à Dakar
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
              Pourquoi Louer <span className="italic">Avec Nous</span>
            </h2>
            <p className="text-[var(--color-gray-500)] text-xl max-w-2xl mx-auto">
              Nous rendons la qualité accessible avec des tarifs transparents et un service exceptionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalBenefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Shield
              return (
                <div key={index} className="bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-[var(--color-orange)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-orange)] transition-all">
                    <Icon className="w-7 h-7 text-[var(--color-orange)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[var(--color-charcoal)] text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-[var(--color-gray-500)] leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rental Categories */}
      <section id="categories" className="py-32 bg-[var(--color-charcoal)]">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-cream)] mb-6">
              <span className="italic">Catégories</span> de Location
            </h2>
            <p className="text-[var(--color-gray-200)] text-xl max-w-3xl">
              Choisissez parmi notre sélection de véhicules premium pour tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rentalCategories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl h-[500px]">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/60 to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                  <p className="text-[var(--color-orange)] text-sm font-bold mb-4 tracking-widest">{category.price}</p>
                  <h3 className="font-serif text-4xl text-[var(--color-cream)] mb-4">{category.name}</h3>
                  <p className="text-[var(--color-gray-200)] mb-6">{category.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.vehicles.map((vehicle, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[var(--color-cream)]/10 backdrop-blur-sm text-[var(--color-cream)] text-xs rounded-full border border-[var(--color-cream)]/20"
                      >
                        {vehicle}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
              Comment <span className="italic">Ça Marche</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--color-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-3xl text-white">1</span>
              </div>
              <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4">Choisir le Véhicule</h3>
              <p className="text-[var(--color-gray-500)] leading-relaxed">
                Parcourez notre flotte et sélectionnez votre véhicule idéal
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--color-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-3xl text-white">2</span>
              </div>
              <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4">Réserver & Payer</h3>
              <p className="text-[var(--color-gray-500)] leading-relaxed">
                Votre choix est fait ? Contactez-nous pour la validation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--color-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-3xl text-white">3</span>
              </div>
              <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4">Prenez la Route</h3>
              <p className="text-[var(--color-gray-500)] leading-relaxed">
                Récupérez votre véhicule ou faites-vous le livrer
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/vehicules"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
            >
              COMMENCER LA RÉSERVATION
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/luxury-sports-car-in-dark-showroom-with-dramatic-l.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)] via-transparent to-[var(--color-charcoal)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">PRÊT À CONDUIRE ?</p>
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-cream)] mb-8 leading-tight">
              Votre Véhicule Parfait
              <br />
              <span className="italic">Vous Attend</span>
            </h2>
            <p className="text-[var(--color-gray-200)] text-xl leading-relaxed mb-12">
              Parcourez notre flotte, sélectionnez votre véhicule de rêve et prenez la route en quelques minutes. Notre
              équipe est prête à réaliser votre projet.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/vehicules"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
              >
                VOIR TOUS LES VÉHICULES
                <ArrowRight className="w-5 h-5" />
              </Link>

              
               <a href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)] transition-all"
              >
                <Phone className="w-5 h-5" />
                APPELEZ-NOUS
              </a>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-serif text-4xl text-[var(--color-orange)] mb-2">2H</p>
                <p className="text-[var(--color-gray-200)] text-sm">Temps de Réponse Moyen</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-[var(--color-orange)] mb-2">100%</p>
                <p className="text-[var(--color-gray-200)] text-sm">Tarification Transparente</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-[var(--color-orange)] mb-2">24/7</p>
                <p className="text-[var(--color-gray-200)] text-sm">Support Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}