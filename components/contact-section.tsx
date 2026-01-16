// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
// import { getContactInfo, getWhatsAppLink } from "@/lib/data"

// export function ContactSection() {
//   const contact = getContactInfo()

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
//     const message = "Bonjour B-M-N Motors! Je souhaite obtenir plus d'informations."
//     const whatsappUrl = getWhatsAppLink(message)
//     window.open(whatsappUrl, "_blank")
//   }

//   return (
//     <section id="contact" className=" bg-[var(--color-charcoal)] relative">
//       <div className="container mx-auto px-6">
//         {/* Titre de la section */}
      

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Column - Info */}
//           <div>
//             <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] mb-8">
//               Démarrez Votre
//               <br />
//               <span className="italic text-[var(--color-orange)]">Aventure!</span>
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
                  
//                   <a href={`tel:${contact.phoneRaw}`}
//                     className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)] transition-colors"
//                   >
//                     {contact.phone}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-5 h-5 text-[var(--color-orange)]" />
//                 </div>
//                 <div>
//                   <p className="text-[var(--color-cream)] font-bold mb-1">EMAIL</p>
                  
//                    <a href={`mailto:${contact.email}`}
//                     className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)] transition-colors"
//                   >
//                     {contact.email}
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
//                     {contact.address}
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
//                     placeholder={contact.phone}
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
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, Loader2 } from "lucide-react"
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

  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showButtonConfirmation, setShowButtonConfirmation] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Démarrage du chargement
    setIsLoading(true)

    console.log("[v0] Formulaire soumis (fake):", formData)

    // Simulation d'envoi (2 secondes)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Fin du chargement
    setIsLoading(false)

    // Affichage de la confirmation sous le bouton
    setShowButtonConfirmation(true)

    // Affichage popup de confirmation (coin supérieur droit)
    setShowSuccess(true)

    // Disparition automatique du popup
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)

    // Disparition de la confirmation bouton après 4 secondes
    setTimeout(() => {
      setShowButtonConfirmation(false)
    }, 4000)

    // Reset du formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "sales",
      message: "",
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      {/* POPUP CONFIRMATION (coin supérieur droit) */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-4 bg-[var(--color-gray-900)] border border-green-500/30 px-6 py-4 rounded-2xl shadow-2xl">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className="text-[var(--color-cream)] font-bold">
                Message envoyé !
              </p>
              <p className="text-sm text-[var(--color-gray-200)]">
                Nous vous répondrons rapidement.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] mb-8">
              Démarrez Votre
              <br />
              <span className="italic text-[var(--color-orange)]">Aventure!</span>
            </h3>

            <p className="text-[var(--color-gray-200)] text-lg mb-12">
              Que vous cherchiez à acheter, louer ou simplement explorer notre
              collection, notre équipe est prête à vous assister.
            </p>

            <div className="space-y-6">
              {/* PHONE */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-[var(--color-cream)] font-bold">TÉLÉPHONE</p>
                  
                   <a href={`tel:${contact.phoneRaw}`}
                    className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)]"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-[var(--color-cream)] font-bold">EMAIL</p>
                  
                  <a href={`mailto:${contact.email}`}
                    className="text-[var(--color-gray-200)] hover:text-[var(--color-orange)]"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange)]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-[var(--color-cream)] font-bold">SHOWROOM</p>
                  <p className="text-[var(--color-gray-200)]">
                    {contact.address}
                  </p>
                </div>
              </div>

              {/* WHATSAPP */}
              <button
                onClick={handleWhatsAppContact}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Contactez-nous via WhatsApp
              </button>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[var(--color-gray-900)] p-8 lg:p-12 rounded-2xl border border-[var(--color-gray-800)]">
            <h3 className="font-serif text-2xl text-[var(--color-cream)] mb-8">
              Envoyez-nous un Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom complet"
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)]"
                disabled={isLoading}
              />

              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)]"
                disabled={isLoading}
              />

              <input
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Téléphone"
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)]"
                disabled={isLoading}
              />

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)]"
                disabled={isLoading}
              >
                <option value="sales">Achat</option>
                <option value="rental">Location</option>
                <option value="info">Information</option>
              </select>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-gray-800)] rounded-lg text-[var(--color-cream)] resize-none"
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    ENVOI EN COURS...
                  </>
                ) : (
                  "ENVOYER LE MESSAGE"
                )}
              </button>

              {/* MESSAGE DE CONFIRMATION sous le bouton */}
              {showButtonConfirmation && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center justify-center gap-2 text-green-500 bg-green-500/10 border border-green-500/30 px-4 py-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">
                      Votre message a été envoyé avec succès !
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}