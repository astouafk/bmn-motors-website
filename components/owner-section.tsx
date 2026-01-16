// import Image from "next/image"

// const values = [
//   {
//     tag: "VISION",
//     title: "Notre Vision",
//     description:
//       "Devenir la référence de la mobilité premium au Sénégal avec un service d'exception.",
//   },
//   {
//     tag: "MISSION",
//     title: "Notre Mission",
//     description:
//       "Faciliter l'accès aux véhicules avec transparence, flexibilité et excellence.",
//   },
//   {
//     tag: "VALEURS",
//     title: "Nos Valeurs",
//     description:
//       "Intégrité, Excellence et Satisfaction Client dans chaque transaction.",
//   },
// ]

// export function OwnerSection() {
//   return (
//     <section className="py-20 bg-[var(--color-gray-900)] relative overflow-hidden"> {/* ✅ bg-[var(--color-cream)] → bg-[var(--color-charcoal)] */}
//       {/* Decorative Elements */}
//       <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--color-orange)]/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--color-teal)]/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left: Photo du propriétaire */}
//           <div className="relative">
//             <div className="relative aspect-square lg:aspect-[4/5] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/owner/bmn-photo.png"
//                 alt="Birane Michel NDIAYE - Fondateur B-M-N Motors"
//                 fill
//                 className="object-cover object-center"
//                 priority
//               />
//               {/* Overlay gradient subtil */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/20 to-transparent" />
//             </div>

//             {/* Badge flottant */}
//             {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-bottom-4 lg:-right-4 bg-[var(--color-orange)] text-[var(--color-cream)] px-6 py-4 rounded-2xl shadow-xl">
//               <p className="font-serif text-2xl font-bold">5+</p>
//               <p className="text-xs tracking-widest">ANNÉES</p>
//             </div> */}
//           </div>

//           {/* Right: Message et valeurs */}
//           <div className="space-y-6">
//             <div>
//               <p className="text-[var(--color-orange)] text-sm font-bold mb-3 tracking-widest">
//                 MOT DU FONDATEUR
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)] mb-4 leading-tight"> {/* ✅ text-[var(--color-charcoal)] → text-[var(--color-cream)] */}
//                 Birane Michel
//                 <br />
//                 <span className="italic">NDIAYE</span>
//               </h2>
//               <p className="text-[var(--color-gray-200)] text-base leading-relaxed"> {/* ✅ text-[var(--color-gray-500)] → text-[var(--color-gray-200)] */}
//                 <span className="text-[var(--color-cream)] font-semibold"> {/* ✅ text-[var(--color-charcoal)] → text-[var(--color-cream)] */}
//                   "Depuis des années, ma passion pour l'automobile d'exception m'anime quotidiennement.
//                 </span>{" "}
//                 J'ai fondé B-M-N Motors avec une conviction : démocratiser l'accès aux véhicules premium tout en
//                 maintenant un service digne des plus grandes enseignes. Chaque client est traité comme un membre de
//                 notre famille."
//               </p>
//             </div>

//             {/* Tags Vision - Mission - Valeurs */}
//             <div className="space-y-4 pt-6 border-t border-[var(--color-cream)]/10"> {/* ✅ border-[var(--color-charcoal)]/10 → border-[var(--color-cream)]/10 */}
//               {values.map((value, index) => (
//                 <div
//                   key={index}
//                   className="group bg-[var(--color-gray-900)] p-4 rounded-xl hover:shadow-2xl transition-all duration-300 border border-[var(--color-gray-800)] hover:border-[var(--color-orange)]/50" // ✅ bg-white → bg-[var(--color-gray-900)], border transparent → border-[var(--color-gray-800)]
//                 >
//                   <div className="flex items-start gap-3">
//                     {/* Tag Badge */}
//                     <div className="flex-shrink-0">
//                       <span className="inline-block px-3 py-1 bg-[var(--color-orange)]/10 text-[var(--color-orange)] text-xs font-bold rounded-full tracking-wider">
//                         {value.tag}
//                       </span>
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1">
//                       <h3 className="text-[var(--color-cream)] text-lg font-bold mb-1 group-hover:text-[var(--color-orange)] transition-colors"> {/* ✅ text-[var(--color-charcoal)] → text-[var(--color-cream)] */}
//                         {value.title}
//                       </h3>
//                       <p className="text-[var(--color-gray-200)] text-sm leading-relaxed">{value.description}</p> {/* ✅ text-[var(--color-gray-500)] → text-[var(--color-gray-200)] */}
//                     </div>
//                   </div>

//                   {/* Hover Line */}
//                   <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-teal)] group-hover:w-full transition-all duration-500" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





import Image from "next/image"
import { getOwnerInfo } from "@/lib/data"

const values = [
  {
    tag: "VISION",
    title: "Notre Vision",
    description:
      "Devenir la référence de la mobilité au Sénégal avec un service d'exception.",
  },
  {
    tag: "MISSION",
    title: "Notre Mission",
    description:
      "Faciliter l'accès aux véhicules avec transparence, flexibilité et excellence.",
  },
  {
    tag: "VALEURS",
    title: "Nos Valeurs",
    description:
      "Intégrité, Excellence et Satisfaction Client dans chaque transaction.",
  },
]

export function OwnerSection() {
  const owner = getOwnerInfo()

  return (
    <section className="py-20 bg-[var(--color-gray-900)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--color-orange)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--color-teal)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo du propriétaire */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-[4/5] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={owner.photo}
                alt={`${owner.name} - Fondateur B-M-N Motors`}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Overlay gradient subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/20 to-transparent" />
            </div>
          </div>

          {/* Right: Message et valeurs */}
          <div className="space-y-6">
            <div>
              <p className="text-[var(--color-orange)] text-sm font-bold mb-3 tracking-widest">
                MOT DU FONDATEUR
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)] mb-4 leading-tight">
                {owner.name.split(' ').slice(0, 2).join(' ')}
                <br />
                <span className="italic">{owner.name.split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-[var(--color-gray-200)] text-base leading-relaxed">
                <span className="text-[var(--color-cream)] font-semibold">
                  "Depuis des années, ma passion pour l'automobile d'exception m'anime quotidiennement.
                </span>{" "} <br />
                J'ai fondé <b>B-M-N Motors</b> avec une conviction : démocratiser l'accès aux véhicules premium tout en
                maintenant un service digne des plus grandes enseignes. Chaque client est traité comme un membre de
                notre famille."
              </p>
            </div>

            {/* Tags Vision - Mission - Valeurs */}
            <div className="space-y-4 pt-6 border-t border-[var(--color-cream)]/10">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-[var(--color-gray-900)] p-4 rounded-xl hover:shadow-xl transition-all duration-300 border border-[var(--color-gray-800)] hover:border-[var(--color-orange)]/50"
                >
                  <div className="flex items-start gap-3">
                    {/* Tag Badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-[var(--color-orange)]/10 text-[var(--color-orange)] text-xs font-bold rounded-full tracking-wider">
                        {value.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-[var(--color-cream)] text-lg font-bold mb-1 group-hover:text-[var(--color-orange)] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-[var(--color-gray-200)] text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-teal)] group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}