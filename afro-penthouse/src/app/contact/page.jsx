import React from 'react'
import ContactForm from '@/components/contact/ContactHero'
import OfficeLocations from '@/components/contact/Locations'
import FAQSection from '@/components/contact/Questions'


export default function page() {
  return (
    <div>
        <ContactForm />
        <OfficeLocations />
        <FAQSection />
    </div>
  )
}
