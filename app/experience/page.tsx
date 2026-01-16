// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { TrendingUp, Award, Heart, Zap, CheckCircle, Star, ArrowRight } from "lucide-react"
// import Link from "next/link"

// const customerBenefits = [
//   "Accès prioritaire aux nouveaux véhicules",
//   "Événements exclusifs réservés aux membres",
//   "Entretien véhicule offert",
//   "Programme de fidélité récompenses",
//   "Service VIP navette aéroport",
//   "Périodes d'essai prolongées",
// ]

// const testimonials = [
//   {
//     name: "Fama DIOP",
//     role: "Dirigeant d'Entreprise",
//     text: "Le niveau de service est inégalé. De la sélection à la livraison, tout était fluide et professionnel.",
//     rating: 5,
//   },
//   {
//     name: "Pape Malick SAMB",
//     role: "Entrepreneure",
//     text: "Je loue chez B-M-N depuis des années. La qualité des véhicules et l'attention aux détails me font revenir.",
//     rating: 5,
//   },
//   {
//     name: "Lamine SECK",
//     role: "Réalisateur",
//     text: "Quand j'ai besoin de véhicules de luxe pour mes productions, B-M-N est mon seul choix. Flotte et service impeccables.",
//     rating: 5,
//   },
// ]

// export default function ExperiencePage() {
//   return (
//     <main className="min-h-screen bg-[var(--color-charcoal)]">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <img
//           src="/luxury-car-dealership-showroom-interior.jpg"
//           alt="Expérience B-M-N"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/90 via-[var(--color-charcoal)]/70 to-[var(--color-charcoal)]" />

//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">LA DIFFÉRENCE B-M-N</p>
//           <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--color-cream)] leading-tight mb-8">
//             <span className="italic">Redéfinir</span>
//             <br />
//             LE LUXE
//             <br />
//             AUTOMOBILE
//           </h1>
//           <p className="text-[var(--color-gray-200)] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
//             Nous ne vendons pas simplement des voitures. Nous créons des expériences qui élèvent votre voyage.
//           </p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-32 bg-[var(--color-cream)]">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
//               En <span className="italic">Chiffres</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
//             <div className="text-center">
//               <div className="flex justify-center mb-4">
//                 <TrendingUp className="w-10 h-10 text-[var(--color-orange)]" />
//               </div>
//               <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">50+</p>
//               <p className="text-[var(--color-gray-500)] text-sm tracking-widest">VÉHICULES PREMIUM</p>
//             </div>
//             <div className="text-center">
//               <div className="flex justify-center mb-4">
//                 <Award className="w-10 h-10 text-[var(--color-orange)]" />
//               </div>
//               <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">5</p>
//               <p className="text-[var(--color-gray-500)] text-sm tracking-widest">ANNÉES D'EXPÉRIENCE</p>
//             </div>
//             <div className="text-center">
//               <div className="flex justify-center mb-4">
//                 <Heart className="w-10 h-10 text-[var(--color-orange)]" />
//               </div>
//               <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">98%</p>
//               <p className="text-[var(--color-gray-500)] text-sm tracking-widest">TAUX DE SATISFACTION</p>
//             </div>
//             <div className="text-center">
//               <div className="flex justify-center mb-4">
//                 <Zap className="w-10 h-10 text-[var(--color-orange)]" />
//               </div>
//               <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">24/7</p>
//               <p className="text-[var(--color-gray-500)] text-sm tracking-widest">SUPPORT DISPONIBLE</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Member Benefits */}
//       <section className="py-32 bg-[var(--color-charcoal)]">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">ACCÈS EXCLUSIF</p>
//               <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-cream)] mb-8 leading-tight">
//                 Privilèges
//                 <br />
//                 <span className="italic">Membres</span>
//               </h2>
//               <p className="text-[var(--color-gray-200)] text-xl leading-relaxed mb-12">
//                 Rejoignez notre club exclusif et débloquez des avantages conçus pour ceux qui apprécient le raffinement.
//               </p>

//               <div className="space-y-4">
//                 {customerBenefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-4 group">
//                     <CheckCircle className="w-6 h-6 text-[var(--color-orange)] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
//                     <p className="text-[var(--color-gray-200)] text-lg">{benefit}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative h-[600px] rounded-3xl overflow-hidden">
//               <img
//                 src="/luxury-sports-car-in-dark-showroom-with-dramatic-l.jpg"
//                 alt="Avantages membres"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-orange)]/30 to-transparent" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-32 bg-[var(--color-cream)]">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
//               Témoignages <span className="italic">Clients</span>
//             </h2>
//             <p className="text-[var(--color-gray-500)] text-xl max-w-2xl mx-auto">
//               Ne nous croyez pas sur parole. Écoutez nos clients satisfaits.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300">
//                 <div className="flex gap-1 mb-6">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-[var(--color-orange)] text-[var(--color-orange)]" />
//                   ))}
//                 </div>

//                 <p className="text-[var(--color-gray-500)] text-lg leading-relaxed mb-8 italic">"{testimonial.text}"</p>

//                 <div>
//                   <p className="text-[var(--color-charcoal)] font-bold text-lg">{testimonial.name}</p>
//                   <p className="text-[var(--color-gray-400)] text-sm">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Journey CTA Section */}
//       <section className="py-32 bg-[var(--color-charcoal)]">
//         <div className="container mx-auto px-6">
//           <div className="relative rounded-3xl overflow-hidden">
//             <img
//               src="/luxury-car-dealership-showroom-interior.jpg"
//               alt="Rejoignez-nous"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] via-[var(--color-charcoal)]/90 to-[var(--color-charcoal)]/60" />

//             <div className="relative z-10 py-24 px-8 lg:px-16 max-w-3xl">
//               <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">COMMENCEZ VOTRE VOYAGE</p>
//               <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-cream)] mb-8 leading-tight">
//                 Vivez
//                 <br />
//                 <span className="italic">L'Excellence</span>
//               </h2>
//               <p className="text-[var(--color-gray-200)] text-xl leading-relaxed mb-12">
//                 Rejoignez des milliers de clients satisfaits qui nous font confiance pour leurs besoins automobiles. Que
//                 vous cherchiez à acheter, louer ou simplement explorer, nous sommes là pour dépasser vos attentes.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-6">
//                 <Link
//                   href="/vehicules"
//                   className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
//                 >
//                   EXPLORER LA FLOTTE
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>
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
import { TrendingUp, Award, Heart, Zap, CheckCircle, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getMemberBenefits, getAllTestimonials, getStats } from "@/lib/data"

export default function ExperiencePage() {
  const customerBenefits = getMemberBenefits()
  const testimonials = getAllTestimonials()
  const stats = getStats()

  return (
    <main className="min-h-screen bg-[var(--color-charcoal)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* <img
          src="/luxury-car-dealership-showroom-interior.jpg"
          alt="Expérience B-M-N"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
         <Image
          src="/luxury-car-dealership-showroom-interior.jpg"
          alt="Expérience B-M-N"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/90 via-[var(--color-charcoal)]/70 to-[var(--color-charcoal)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">LA DIFFÉRENCE B-M-N</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--color-cream)] leading-tight mb-8">
            {/* <span className="italic">Redéfinir</span>
            <br /> */}
            LE LUXE
            <br />
            DRIVE
          </h1>
          <p className="text-[var(--color-gray-200)] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-6">
            Nous ne vendons pas simplement des voitures. Nous créons des expériences qui élèvent votre voyage.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all">
            Un bon rapport qualité / prix
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
              En <span className="italic">Chiffres</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-[var(--color-orange)]" />
              </div>
              <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">{stats.vehicles}</p>
              <p className="text-[var(--color-gray-500)] text-sm tracking-widest">VÉHICULES PREMIUM</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-10 h-10 text-[var(--color-orange)]" />
              </div>
              <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">{stats.experience}</p>
              <p className="text-[var(--color-gray-500)] text-sm tracking-widest">ANNÉES D'EXPÉRIENCE</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-10 h-10 text-[var(--color-orange)]" />
              </div>
              <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">{stats.satisfaction}</p>
              <p className="text-[var(--color-gray-500)] text-sm tracking-widest">TAUX DE SATISFACTION</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-10 h-10 text-[var(--color-orange)]" />
              </div>
              <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2">{stats.support}</p>
              <p className="text-[var(--color-gray-500)] text-sm tracking-widest">SUPPORT DISPONIBLE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-32 bg-[var(--color-charcoal)]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">ACCÈS EXCLUSIF</p>
              <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-cream)] mb-8 leading-tight">
                Privilèges
                <br />
                <span className="italic">Membres</span>
              </h2>
              <p className="text-[var(--color-gray-200)] text-xl leading-relaxed mb-12">
                Rejoignez notre club exclusif et débloquez des avantages conçus pour ceux qui apprécient le raffinement.
              </p>

              <div className="space-y-4">
                {customerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <CheckCircle className="w-6 h-6 text-[var(--color-orange)] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-[var(--color-gray-200)] text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <img
                src="/luxury-sports-car-in-dark-showroom-with-dramatic-l.jpg"
                alt="Avantages membres"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-orange)]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mb-6">
              Témoignages <span className="italic">Clients</span>
            </h2>
            <p className="text-[var(--color-gray-500)] text-xl max-w-2xl mx-auto">
              Ne nous croyez pas sur parole. Écoutez nos clients satisfaits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-orange)] text-[var(--color-orange)]" />
                  ))}
                </div>

                <p className="text-[var(--color-gray-500)] text-lg leading-relaxed mb-8 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-[var(--color-gray-400)] text-sm">{testimonial.name}</p>
                </div>        
                <div>
                  <p className="text-[var(--color-gray-400)] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey CTA Section */}
      <section className="py-32 bg-[var(--color-charcoal)]">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/luxury-car-dealership-showroom-interior.jpg"
              alt="Rejoignez-nous"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] via-[var(--color-charcoal)]/90 to-[var(--color-charcoal)]/60" />

            <div className="relative z-10 py-24 px-8 lg:px-16 max-w-3xl">
              <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">COMMENCEZ VOTRE VOYAGE</p>
              <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-cream)] mb-8 leading-tight">
                Vivez
                <br />
                <span className="italic">L'Excellence</span>
              </h2>
              <p className="text-[var(--color-gray-200)] text-xl leading-relaxed mb-12">
                Rejoignez des centaines de clients satisfaits qui nous font confiance pour leurs besoins automobiles. Que
                vous cherchiez à acheter, louer ou simplement explorer, nous sommes là pour dépasser vos attentes.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/vehicules"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all"
                >
                  EXPLORER LA FLOTTE
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}