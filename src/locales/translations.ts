export type SupportedLanguage = "de" | "en";

export interface LocaleStrings {
  [key: string]: string;
}

export const translations: Record<SupportedLanguage, LocaleStrings> = {
  de: {
    // Top Announcement Bar
    "topbar.certified": "Zertifiziert nach DIN EN ISO 14644-1:2015 & EU-GMP Annex 1",
    "topbar.precision": "Deutsche Ingenieurspräzision",
    "topbar.phone": "+49 (0) 711 8947 200",
    "topbar.email": "info@reinwerk-cleanroom.com",

    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.services": "Produkte & Leistungen",
    "nav.allServices": "Alle Leistungen im Überblick",
    "nav.allServicesDesc": "Entdecken Sie unser gesamtes Reinraum-Leistungsspektrum",
    "nav.industries": "Branchen",
    "nav.allIndustries": "Branchenlösungen",
    "nav.allIndustriesDesc": "Maßgeschneiderte Reinräume für Ihre Industrie",
    "nav.whyChooseUs": "Warum REINWERK",
    "nav.projects": "Projekte",
    "nav.process": "Unser Prozess",
    "nav.contact": "Kontakt",
    "nav.quoteBtn": "Angebot anfordern",
    "nav.isoModalBtn": "ISO-Klassen Leitfaden",

    // Common Buttons & Actions
    "btn.requestQuote": "Angebot anfordern",
    "btn.contactUs": "Kontakt aufnehmen",
    "btn.exploreServices": "Leistungen entdecken",
    "btn.viewSpecs": "Technische Details",
    "btn.fullSpecs": "Vollständige Spezifikationen",
    "btn.calcEstimate": "Reinraum-Konfigurator starten",
    "btn.submitInquiry": "Anfrage absenden",
    "btn.submitRfq": "Spezifikation übermitteln",
    "btn.close": "Schließen",
    "btn.backToTop": "Nach oben scrollen",

    // Footer
    "footer.desc": "REINWERK Reinraum- und Anlagentechnik ist ein führendes Ingenieurunternehmen für schlüsselfertige modulare Reinraumsysteme, präzise HLK-Klimatechnik und regulatorische Qualifizierung nach ISO 14644 und EU-GMP für Pharmazie, Halbleitertechnik und Medizintechnik.",
    "footer.configureBtn": "Reinraum konfigurieren",
    "footer.isoGuideBtn": "ISO Leitfaden",
    "footer.colServices": "Produkte & Leistungen",
    "footer.colIndustries": "Branchen & Märkte",
    "footer.colContact": "Technisches Büro",
    "footer.address": "Industriestraße 42, 70565 Stuttgart, Deutschland",
    "footer.hours": "Mo – Fr: 08:00 – 18:00 Uhr MEZ",
    "footer.hoursEmergency": "24/7 Notdienst für Vertragskunden",
    "footer.copyright": "© {year} REINWERK Reinraum- und Anlagentechnik GmbH. Alle Rechte vorbehalten.",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzerklärung",
    "footer.disclaimer": "Impressum & Haftungsausschluss",

    // Legal Pages Header & Titles
    "legal.termsTitle": "Allgemeine Nutzungsbedingungen",
    "legal.privacyTitle": "Datenschutzerklärung (DSGVO)",
    "legal.disclaimerTitle": "Impressum & Rechtliche Hinweise",
    "legal.lastUpdated": "Stand: September 2026",

    // CTA Banner
    "cta.eyebrow": "Planen Sie ein Reinraumprojekt?",
    "cta.title": "Lassen Sie uns Ihre Spezifikationen analysieren",
    "cta.desc": "Unsere leitenden Projektingenieure stehen Ihnen bei der Konzeption, URS-Erstellung und Validierung zur Seite.",
    "cta.callUs": "Jetzt direkt anrufen",
    "cta.bookConsultation": "Erstberatung vereinbaren",

    // Forms
    "form.fullName": "Vollständiger Name",
    "form.email": "Geschäftliche E-Mail-Adresse",
    "form.phone": "Telefonnummer",
    "form.company": "Unternehmen / Institution",
    "form.sector": "Branche",
    "form.serviceInterest": "Gewünschter Leistungsbereich",
    "form.message": "Projektanforderungen & Spezifikationen",
    "form.sendInquiry": "Technische Anfrage absenden",
    "form.securityNotice": "Geschützt durch SSL-Verschlüsselung und Google reCAPTCHA. Vertraulichkeit nach NDA-Standards garantiert."
  },
  en: {
    // Top Announcement Bar
    "topbar.certified": "Certified to DIN EN ISO 14644-1:2015 & EU-GMP Annex 1",
    "topbar.precision": "German Engineering Precision",
    "topbar.phone": "+49 (0) 711 8947 200",
    "topbar.email": "info@reinwerk-cleanroom.com",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Products & Services",
    "nav.allServices": "All Services Overview",
    "nav.allServicesDesc": "Explore our complete cleanroom capabilities",
    "nav.industries": "Industries",
    "nav.allIndustries": "All Industry Sectors",
    "nav.allIndustriesDesc": "Custom cleanrooms tailored to your sector",
    "nav.whyChooseUs": "Why Choose Us",
    "nav.projects": "Projects",
    "nav.process": "Our Process",
    "nav.contact": "Contact Us",
    "nav.quoteBtn": "Request a Quote",
    "nav.isoModalBtn": "ISO Guide",

    // Common Buttons & Actions
    "btn.requestQuote": "Request a Quote",
    "btn.contactUs": "Contact Us",
    "btn.exploreServices": "Explore Services",
    "btn.viewSpecs": "Technical Details",
    "btn.fullSpecs": "Full Technical Specs",
    "btn.calcEstimate": "Launch Cleanroom Estimator",
    "btn.submitInquiry": "Send Engineering Inquiry",
    "btn.submitRfq": "Submit RFQ Specification",
    "btn.close": "Close",
    "btn.backToTop": "Scroll to Top",

    // Footer
    "footer.desc": "REINWERK Reinraum- und Anlagentechnik is an international cleanroom engineering firm specializing in turnkey modular cleanrooms, precision HVAC air filtration systems, and regulatory validation for pharmaceutical, semiconductor, and medical device leaders worldwide.",
    "footer.configureBtn": "Configure Cleanroom",
    "footer.isoGuideBtn": "ISO Guide",
    "footer.colServices": "Products & Services",
    "footer.colIndustries": "Industries",
    "footer.colContact": "Engineering Desk",
    "footer.address": "Industriestraße 42, 70565 Stuttgart, Germany",
    "footer.hours": "Mon – Fri: 08:00 – 18:00 CET",
    "footer.hoursEmergency": "24/7 emergency response for contracted facilities",
    "footer.copyright": "© {year} REINWERK Reinraum- und Anlagentechnik GmbH. All rights reserved.",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy Policy",
    "footer.disclaimer": "Disclaimer & Imprint",

    // Legal Pages Header & Titles
    "legal.termsTitle": "Terms of Use",
    "legal.privacyTitle": "Privacy Policy (GDPR)",
    "legal.disclaimerTitle": "Disclaimer & Legal Notice",
    "legal.lastUpdated": "Last updated: September 2026",

    // CTA Banner
    "cta.eyebrow": "Planning a Controlled Environment?",
    "cta.title": "Let Us Engineer Your Contamination Control Solution",
    "cta.desc": "Speak directly with a senior cleanroom systems engineer to discuss your target ISO classification, BIM clash detection, and turnkey commissioning timeline.",
    "cta.callUs": "Call Engineering Desk",
    "cta.bookConsultation": "Schedule Technical Consultation",

    // Forms
    "form.fullName": "Full Name",
    "form.email": "Work Email Address",
    "form.phone": "Phone Number",
    "form.company": "Company / Institution",
    "form.sector": "Industry Sector",
    "form.serviceInterest": "Area of Primary Interest",
    "form.message": "Project Details & Requirements",
    "form.sendInquiry": "Send Engineering Inquiry",
    "form.securityNotice": "Protected by SSL encryption and Google reCAPTCHA. Confidentiality guaranteed under NDA standards."
  }
};

export function t(lang: SupportedLanguage | string, key: string, fallback?: string): string {
  const selectedLang: SupportedLanguage = lang === "en" ? "en" : "de";
  const dict = translations[selectedLang];
  if (dict && dict[key]) {
    return dict[key];
  }
  // Fallback to German, then English, then provided fallback or key
  if (translations.de[key]) {
    return translations.de[key];
  }
  if (translations.en[key]) {
    return translations.en[key];
  }
  return fallback || key;
}
