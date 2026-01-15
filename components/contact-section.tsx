// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "sales",
//     message: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("[v0] Formulaire soumis:", formData)
//     // Handle form submission
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleWhatsAppContact = () => {
//     const message = encodeURIComponent(
//       `Bonjour B-M-N Motors! Je souhaite obtenir plus d'informations.`,
//     )
//     window.open(`https://wa.me/221XXXXXXXXX?text=${message}`, "_blank")
//   }

//   return (
//     <section id="contact" className="py-32 bg-[var(--color-charcoal)] relative">
//       <div className="container mx-auto px-6">
//         {/* Titre de la section */}
//         <div className="text-center mb-16">
//           {/* <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-cream)] leading-tight mb-6">
//             Parlons de Votre
//             <br />
//             <span className="italic text-[var(--color-orange)]">Projet</span>
//           </h2> */}
//           <p className="text-[var(--color-gray-200)] text-xl max-w-2xl mx-auto">
//             Notre équipe est à votre écoute pour répondre à toutes vos questions
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Column - Info */}
//           <div>
//             <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] mb-8">
//               Démarrez Votre
//               <br />
//               <span className="italic text-[var(--color-orange)]">Aventure</span>
//             </h3>
//             <p className="text-[var(--color-gray-200)] text-lg leading-relaxed mb-12">
//               Que vous cherchiez à acheter, louer ou simplement explorer notre collection, notre équipe est prête à vous
//               assister.
//             </p>

//             {/* Contact Details */}
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-5 h-5 text-[var(--color-orange)]" />
//                 </div>
//                 <div>
//                   <p className="text-[var(--color-cream)] font-bold mb-1">TÉLÉPHONE</p>
                  
//                    <a href="tel:+221775889976"
//                     className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)] transition-colors"
//                   >
//                     +221 77 588 99 76
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-5 h-5 text-[var(--color-orange)]" />
//                 </div>
//                 <div>
//                   <p className="text-[var(--color-cream)] font-bold mb-1">EMAIL</p>
                  
//                    <a href="mailto:contact@bmn-motors.com"
//                     className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)] transition-colors"
//                   >
//                     contact@bmn-motors.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-5 h-5 text-[var(--color-orange)]" />
//                 </div>
//                 <div>
//                   <p className="text-[var(--color-cream)] font-bold mb-1">SHOWROOM</p>
//                   <p className="text-[var(--color-gray-200)]">
//                     Dakar, Sénégal
//                   </p>
//                 </div>
//               </div>

//               {/* WhatsApp Button */}
//               <div className="pt-6">
//                 <button
//                   onClick={handleWhatsAppContact}
//                   className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-lg hover:scale-105"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                   Contactez-nous via WhatsApp
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Form */}
//           <div className="bg-[var(--color-gray-900)] p-8 lg:p-12 rounded-2xl border border-[var(--color-gray-800)]">
//             <h3 className="font-serif text-2xl text-[var(--color-cream)] mb-8">Envoyez-nous un Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
//                   NOM COMPLET
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
//                   placeholder="Jean Dupont"
//                 />
//               </div>

//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="email" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
//                     EMAIL
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
//                     placeholder="jean@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
//                     TÉLÉPHONE
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
//                     placeholder="+221 XX XXX XX XX"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="interest" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
//                   JE SUIS INTÉRESSÉ(E) PAR
//                 </label>
//                 <select
//                   id="interest"
//                   name="interest"
//                   value={formData.interest}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
//                 >
//                   <option value="sales">ACHAT D'UN VÉHICULE</option>
//                   <option value="rentals">LOCATION D'UN VÉHICULE</option>
//                   <option value="test-drive">ESSAI ROUTIER</option>
//                   <option value="general">DEMANDE GÉNÉRALE</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
//                   MESSAGE
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors resize-none"
//                   placeholder="Parlez-nous de vos besoins..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-6 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 hover:scale-105 transition-all"
//               >
//                 ENVOYER LE MESSAGE
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }







"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { getContactInfo, getWhatsAppLink } from "@/lib/data"

export function ContactSection() {
  const contact = getContactInfo()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "sales",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Formulaire soumis:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleWhatsAppContact = () => {
    const message = "Bonjour B-M-N Motors! Je souhaite obtenir plus d'informations."
    const whatsappUrl = getWhatsAppLink(message)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-32 bg-[var(--color-charcoal)] relative">
      <div className="container mx-auto px-6">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-cream)] leading-tight mb-6">
            Parlons de Votre
            <br />
            <span className="italic text-[var(--color-orange)]">Projet</span>
          </h2>
          {/* <p className="text-[var(--color-gray-200)] text-xl max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] mb-8">
              Démarrez Votre
              <br />
              <span className="italic text-[var(--color-orange)]">Aventure</span>
            </h3>
            <p className="text-[var(--color-gray-200)] text-lg leading-relaxed mb-12">
              Que vous cherchiez à acheter, louer ou simplement explorer notre collection, notre équipe est prête à vous
              assister.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-[var(--color-cream)] font-bold mb-1">TÉLÉPHONE</p>
                  
                  <a href={`tel:${contact.phoneRaw}`}
                    className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-[var(--color-cream)] font-bold mb-1">EMAIL</p>
                  
                   <a href={`mailto:${contact.email}`}
                    className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)] transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-[var(--color-cream)] font-bold mb-1">SHOWROOM</p>
                  <p className="text-[var(--color-gray-200)]">
                    {contact.address}
                  </p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-6">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-lg hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactez-nous via WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[var(--color-gray-900)] p-8 lg:p-12 rounded-2xl border border-[var(--color-gray-800)]">
            <h3 className="font-serif text-2xl text-[var(--color-cream)] mb-8">Envoyez-nous un Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
                  NOM COMPLET
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                    placeholder="jean@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
                    TÉLÉPHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                    placeholder={contact.phone}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
                  JE SUIS INTÉRESSÉ(E) PAR
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                >
                  <option value="sales">ACHAT D'UN VÉHICULE</option>
                  <option value="rentals">LOCATION D'UN VÉHICULE</option>
                  <option value="test-drive">ESSAI ROUTIER</option>
                  <option value="general">DEMANDE GÉNÉRALE</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[var(--color-cream)] text-sm font-bold mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-orange)] transition-colors resize-none"
                  placeholder="Parlez-nous de vos besoins..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 hover:scale-105 transition-all"
              >
                ENVOYER LE MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}