//components/footer.tsx

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { getConfig, getSocialLinks, getContactInfo } from "@/lib/data"

export function Footer() {
  const config = getConfig()
  const social = getSocialLinks()
  const contact = getContactInfo()

  return (
    <footer className="bg-[var(--color-charcoal)] border-t border-[var(--color-cream)]/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/bmn-logo.png"
                alt={config.business.name}
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[var(--color-gray-200)] text-sm leading-relaxed">
              Votre partenaire de confiance pour la vente et location de véhicules premium à Dakar.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-[var(--color-cream)] font-bold text-sm mb-4 tracking-widest">LIENS RAPIDES</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/voitures-location-vente-dakar"
                  className="text-[var(--color-gray-200)] text-sm hover:text-[var(--color-orange)] transition-colors"
                >
                  Nos Véhicules
                </Link>
              </li>
              <li>
                <Link
                  href="/location-voiture-luxe-dakar"
                  className="text-[var(--color-gray-200)] text-sm hover:text-[var(--color-orange)] transition-colors"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--color-gray-200)] text-sm hover:text-[var(--color-orange)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Réseaux Sociaux */}
          <div>
            <h3 className="text-[var(--color-cream)] font-bold text-sm mb-4 tracking-widest">CONTACTEZ-NOUS</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--color-orange)] flex-shrink-0" />
                <a 
                  href={`tel:${contact.phoneRaw}`}
                  className="text-[var(--color-gray-200)] text-sm hover:text-[var(--color-orange)] transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--color-orange)] flex-shrink-0" />
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-[var(--color-gray-200)] text-sm hover:text-[var(--color-orange)] transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--color-orange)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-gray-200)] text-sm">
                  {contact.address}
                </span>
              </li>
            </ul>

            {/* Réseaux Sociaux */}
            <div className="flex items-center gap-3">
              
            <a href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-gray-800)] rounded-full flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-orange)] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              
               <a href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-gray-800)] rounded-full flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-orange)] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              
               <a href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-gray-800)] rounded-full flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-orange)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--color-cream)]/10 text-center">
          <p className="text-[var(--color-gray-200)] text-sm"> AFK
            © {new Date().getFullYear()} {config.business.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}