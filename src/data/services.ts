export interface CleanroomService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  isoRange: string;
  gmpGrades: string;
  icon: string;
  overview: string[];
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: CleanroomService[] = [
  {
    id: "modular-cleanrooms",
    slug: "modular-cleanrooms",
    title: "Modular Cleanroom Systems",
    shortDescription: "Turnkey hardwall, monobloc, and demountable cassette cleanroom structures engineered for swift installation and maximum operational flexibility.",
    heroHeadline: "Next-Generation Modular Cleanroom Architecture",
    heroSubheadline: "Precision-manufactured off-site with German engineering rigor. Scalable, demountable, and compliant with ISO 14644-1 and EU-GMP Annex 1.",
    heroImage: "/images/cleanrooms/modular-suite.jpg",
    isoRange: "ISO Class 3 to ISO Class 9",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "layers",
    overview: [
      "REINWERK designs, fabricates, and installs high-performance modular cleanroom envelopes engineered for critical contamination control. Our modular systems provide superior thermal insulation, seamless flush jointing, and effortless future reconfigurability.",
      "By pre-fabricating up to 90% of architectural elements in our controlled facilities, we reduce on-site installation timelines by up to 50% compared to traditional construction methods—minimizing downtime and facility disruption."
    ],
    keyFeatures: [
      {
        title: "Flush Architectural Surface",
        description: "Monobloc and cassette wall panels with coplanar flush-glazed vision panels and airtight silicone-free dry gasket seams to prevent particle accumulation.",
        icon: "maximize-2"
      },
      {
        title: "Walk-on Ceiling Grids",
        description: "Heavy-duty walkable ceiling grids capable of supporting maintenance personnel, integrated LED tear-drop lighting, and direct-mount Fan Filter Units (FFUs).",
        icon: "shield"
      },
      {
        title: "Chemical & Decontamination Resistant",
        description: "Panel facings available in High-Pressure Laminate (HPL), powder-coated galvanized steel, or 316L stainless steel, fully resistant to Vaporized Hydrogen Peroxide (VHP).",
        icon: "check-circle"
      },
      {
        title: "Integrated Utility Raceways",
        description: "Pre-routed conduits for electrical wiring, process gases, data cables, and sensor lines built seamlessly inside wall cavities.",
        icon: "cpu"
      }
    ],
    specifications: [
      { label: "Standard Wall Core", value: "Aluminum honeycomb, PIR (Polyisocyanurate), or Mineral Wool" },
      { label: "Panel Thickness", value: "50 mm / 60 mm / 80 mm / 100 mm options" },
      { label: "Surface Finishes", value: "Anti-static HPL, PVDF coating, or 304/316L Stainless Steel" },
      { label: "Floor System", value: "Static-dissipative conductive vinyl or coved seamless epoxy" },
      { label: "Fire Resistance", value: "EN 13501-1 Class A2-s1,d0 or B-s1,d0" },
      { label: "Airtightness", value: "Class 4 according to EN 12207 (differential pressure to 100 Pa)" }
    ],
    applications: [
      "Biopharmaceutical Manufacturing",
      "Sterile Compounding Suites",
      "Semiconductor & MEMS Packaging",
      "Medical Device Assembly",
      "Advanced Cell & Gene Therapy"
    ],
    processSteps: [
      { step: "01", title: "Conceptual URS & Layout", description: "Analyzing particle cleanliness criteria, pressure cascades, material transfer flows, and HVAC capacity." },
      { step: "02", title: "3D BIM & Clash Detection", description: "Developing millimeter-accurate digital models coordinating structural, mechanical, electrical, and process piping." },
      { step: "03", title: "Precision Off-site Fabrication", description: "Manufacturing wall panels, ceiling elements, and door interlocks under rigorous quality standards." },
      { step: "04", title: "Rapid Turnkey Erection", description: "Rapid on-site installation by specialized cleanroom technicians with zero dust generation." }
    ],
    faqs: [
      {
        question: "Can modular cleanrooms be relocated or expanded in the future?",
        answer: "Yes. REINWERK modular cleanrooms are designed with non-progressive cassette panel joints, enabling individual walls to be modified, expanded, or relocated without disturbing adjacent zones."
      },
      {
        question: "How does modular construction compare to traditional drywall?",
        answer: "Modular cleanrooms eliminate particulate dust during assembly, cure time for paints, and uneven surfaces. They are 100% factory-finished, chemically inert, and significantly faster to validate."
      }
    ]
  },
  {
    id: "hvac-air-handling",
    slug: "hvac-air-handling",
    title: "Cleanroom HVAC & Precision Air Handling",
    shortDescription: "Custom-engineered air handling units (AHUs), HEPA/ULPA H14-U17 filtration, differential pressure cascades, and climate control.",
    heroHeadline: "Precision Cleanroom HVAC & Microclimate Engineering",
    heroSubheadline: "Engineered laminar and turbulent airflow systems delivering micro-filtered air, continuous pressure differentials, and precise temperature & humidity regulation.",
    heroImage: "/images/cleanrooms/hvac-filtration.jpg",
    isoRange: "ISO Class 1 to ISO Class 9",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "wind",
    overview: [
      "Contamination control begins with flawless aerodynamic engineering. REINWERK designs and integrates turnkey cleanroom HVAC systems that ensure unyielding particle removal, continuous positive/negative differential pressure, and stringent microclimate stability.",
      "Our systems utilize state-of-the-art electronically commutated (EC) fan technology, demand-controlled ventilation (DCV), and high-efficiency heat recovery wheels—reducing energy consumption by up to 35% while maintaining regulatory compliance 24/7."
    ],
    keyFeatures: [
      {
        title: "Multi-Stage HEPA & ULPA Filtration",
        description: "Pre-filtration (ISO Coarse / ePM1) coupled with terminal H14 HEPA (99.995% @ 0.3 µm) and U15-U17 ULPA filters for ultra-critical particle trapping.",
        icon: "filter"
      },
      {
        title: "Differential Pressure Cascades",
        description: "Automated active pressure regulation maintaining 10 Pa to 25 Pa pressure differentials between adjacent classification zones to prevent cross-contamination.",
        icon: "activity"
      },
      {
        title: "Stringent Climate Regulation",
        description: "Precision temperature control down to ±0.2°C and relative humidity regulation down to ±2% RH for sensitive electronic, chemical, and biologics processes.",
        icon: "thermometer"
      },
      {
        title: "Real-time BMS Integration",
        description: "Continuous monitoring of airflow velocities, filter differential pressure (dP), room temperatures, and humidity with automated audit logging.",
        icon: "sliders"
      }
    ],
    specifications: [
      { label: "Terminal Filtration", value: "EN 1822 certified H14 HEPA (99.995%) or U15-U17 ULPA (99.99995%)" },
      { label: "Air Change Rates", value: "From 15 to over 300 Air Changes per Hour (ACH) depending on ISO class" },
      { label: "Temperature Stability", value: "Standard: 20°C ± 1°C; Precision option: ± 0.2°C" },
      { label: "Humidity Stability", value: "Standard: 45% ± 5% RH; Low-dewpoint options to < 1% RH" },
      { label: "Fan Technology", value: "Direct-drive backward curved EC centrifugal blowers (IE5 efficiency)" },
      { label: "Acoustic Levels", value: "< 55 dB(A) in operating room zones via integrated silencers" }
    ],
    applications: [
      "Aseptic Filling & Bio-Processing",
      "Wafer Fabrication & Nanotechnology",
      "API Synthesis & Hazardous Chemical Handling",
      "Optics & Satellite Component Testing",
      "Sterile Injectables Production"
    ],
    processSteps: [
      { step: "01", title: "Thermodynamic & CFD Modeling", description: "Calculating heat loads, air change volumes, and simulating particle dispersion vectors in computational fluid dynamics." },
      { step: "02", title: "AHU & Ductwork Specification", description: "Selecting hygiene-certified air handling units with double-skinned insulated casing and zero-leakage dampers." },
      { step: "03", title: "Ductwork Erection & Leak Testing", description: "Installing airtight stainless or galvanized ductwork sealed to Eurovent Class C/D standards." },
      { step: "04", title: "Air Balancing & Smoke Studies", description: "Balancing air velocities and performing visual airflow smoke testing to verify laminar flow uniformity." }
    ],
    faqs: [
      {
        question: "What is the difference between laminar airflow and turbulent airflow?",
        answer: "Laminar (unidirectional) airflow moves filtered air in parallel streams at uniform velocity (typically 0.36 to 0.45 m/s), sweeping particles directly away from critical zones (e.g. ISO 5 / GMP Grade A). Turbulent (non-unidirectional) airflow mixes conditioned air to dilute particulate concentration (typical in ISO 6 to 8)."
      },
      {
        question: "How does REINWERK optimize cleanroom energy consumption?",
        answer: "Cleanroom HVAC is energy-intensive. We integrate variable-speed EC fans, automated night setback modes, high-efficiency enthalpy heat recovery, and intelligent damper modulation that adjust air volume in real time based on occupancy."
      }
    ]
  },
  {
    id: "cleanroom-equipment",
    slug: "cleanroom-equipment",
    title: "Cleanroom Equipment & Material Airlocks",
    shortDescription: "Dynamic pass-through boxes, decontamination air showers, laminar flow workstations, interlock systems, and gowning furniture.",
    heroHeadline: "Airlocks, Pass-Throughs & Clean Air Equipment",
    heroSubheadline: "Protecting controlled perimeters during personnel and material ingress. Engineered in 304 and 316L stainless steel for effortless sanitization.",
    heroImage: "/images/cleanrooms/equipment-passbox.jpg",
    isoRange: "ISO Class 3 to ISO Class 8",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "box",
    overview: [
      "Over 80% of contamination in cleanroom environments is introduced during the transfer of personnel and materials. REINWERK engineers robust barrier equipment and dynamic airlock systems that isolate critical processes from external particulate contamination.",
      "From high-velocity HEPA air showers that dislodge surface dust to motorized dynamic pass-through hatches with UV-C and VHP ports, our equipment provides unyielding barrier protection."
    ],
    keyFeatures: [
      {
        title: "Personnel Air Showers",
        description: "High-velocity air nozzles (25-30 m/s) delivering filtered air jets to purge micro-particles from cleanroom garments prior to entry.",
        icon: "wind"
      },
      {
        title: "Dynamic Pass-Through Boxes",
        description: "Equipped with internal HEPA recirculation, electronic magnetic door interlocks, differential pressure monitoring, and UV sterilization.",
        icon: "refresh-cw"
      },
      {
        title: "Laminar Flow Workstations",
        description: "Horizontal and vertical clean benches providing localized ISO Class 3/4 (GMP Grade A) operating conditions on standard laboratory benchtops.",
        icon: "cpu"
      },
      {
        title: "Aseptic Gowning Furniture",
        description: "Stainless steel step-over benches, garment storage cabinets with internal HEPA purge, and hands-free touchless wash sinks.",
        icon: "user-check"
      }
    ],
    specifications: [
      { label: "Material Construction", value: "AISI 304 or AISI 316L electro-polished stainless steel (Ra < 0.4 µm)" },
      { label: "Door Interlocking", value: "Fail-safe electromagnetic interlocks with emergency override buttons" },
      { label: "Air Velocity (Air Showers)", value: "25 m/s to 30 m/s across adjustable nozzles" },
      { label: "Internal Filtration", value: "Self-contained H14 HEPA (99.995%) with mini-pleat technology" },
      { label: "Control System", value: "Siemens PLC with touchscreen HMI and customizable cycle timers" },
      { label: "Integration", value: "Flush installation into REINWERK modular wall panels" }
    ],
    applications: [
      "Material Airlocks (MAL) & Personnel Airlocks (PAL)",
      "Sterile Filling & Packaging Lines",
      "Pharmaceutical API Dispensing Booths",
      "Electronic Wafer Transfer Hatches",
      "Biosafety Level 2 and Level 3 Airlocks"
    ],
    processSteps: [
      { step: "01", title: "Flow Pattern Analysis", description: "Mapping personnel gowning routes and material transfer staging points to eliminate cross-contamination risks." },
      { step: "02", title: "Custom Engineering", description: "Sizing pass-through boxes and air showers to accommodate specific tote dimensions, carts, or pallets." },
      { step: "03", title: "Precision Fabrication", description: "Laser cutting, seamless orbital welding, and electro-polishing in sanitary 316L stainless steel." },
      { step: "04", title: "Factory Acceptance Test (FAT)", description: "Rigorous testing of interlock sequences, air velocities, and particle leakage before delivery." }
    ],
    faqs: [
      {
        question: "What is the difference between static and dynamic pass-through boxes?",
        answer: "Static pass boxes have mechanical or magnetic door interlocks without active air filtration, suitable for non-critical transfers between similar cleanliness grades. Dynamic pass boxes feature active HEPA filtration, laminar airflow, and differential pressure to maintain positive pressure and purge particles during door opening."
      },
      {
        question: "Can pass-through boxes accommodate VHP bio-decontamination?",
        answer: "Yes, REINWERK supplies VHP-ready dynamic pass boxes equipped with airtight pneumatic gasket seals, injection/sampling ports, and automated cycle communication with external VHP generators."
      }
    ]
  },
  {
    id: "validation-maintenance",
    slug: "validation-maintenance",
    title: "Validation, Testing & Lifecycle Maintenance",
    shortDescription: "Complete DQ/IQ/OQ/PQ certification, airborne particle counts, filter integrity (DOP/DEHS) testing, and preventative service agreements.",
    heroHeadline: "ISO 14644 & GMP Cleanroom Validation & Servicing",
    heroSubheadline: "Independent, auditable testing and regulatory certification ensuring continuous compliance, operational longevity, and minimal plant downtime.",
    heroImage: "/images/cleanrooms/validation-testing.jpg",
    isoRange: "ISO Class 1 to ISO Class 9",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "award",
    overview: [
      "Regulatory bodies (FDA, EMA, WHO) demand rigorous validation documentation before any cleanroom can begin commercial production. REINWERK provides comprehensive validation services following the international Good Automated Manufacturing Practice (GAMP 5) lifecycle model.",
      "Our certified cleanroom metrology engineers perform all on-site qualification testing with calibrated state-of-the-art instruments, providing tamper-proof audit-ready documentation and customized preventative maintenance programs."
    ],
    keyFeatures: [
      {
        title: "Complete Qualification (DQ / IQ / OQ / PQ)",
        description: "Structured protocols establishing documented evidence that facilities and systems perform consistently according to User Requirement Specifications (URS).",
        icon: "clipboard"
      },
      {
        title: "HEPA / ULPA Filter Integrity Testing",
        description: "DOP / DEHS aerosol challenge testing and photometer scanning to detect pinhole leaks in filter media, gel seals, and clamping frames.",
        icon: "shield-check"
      },
      {
        title: "Airborne Particle Counting",
        description: "Optical particle counter sampling according to ISO 14644-1:2015 at rest and in operational states for particles ≥0.1 µm, ≥0.5 µm, and ≥5.0 µm.",
        icon: "target"
      },
      {
        title: "Airflow Visualization & Recovery Tests",
        description: "High-purity DI water smoke studies to document unidirectional airflow, turbulence zones, and recovery rate measurements (typically <15 minutes).",
        icon: "play-circle"
      }
    ],
    specifications: [
      { label: "Testing Standard", value: "DIN EN ISO 14644-1, 2, 3:2019, EU-GMP Annex 1, VDI 2083" },
      { label: "Instrumentation", value: "NIST-traceable calibrated optical particle counters, hot-wire anemometers, and aerosol generators" },
      { label: "Aerosol Challenge", value: "DEHS (Di-Ethyl-Hexyl-Sebacat) or Emery 3004 / PAO" },
      { label: "Air Velocity Range", value: "0.1 m/s to 30 m/s with ±2% accuracy" },
      { label: "Report Delivery", value: "GMP-compliant audit-ready digital certificates and comprehensive protocol dossiers" },
      { label: "Service Intervals", value: "Quarterly, bi-annual, or annual re-certification contracts" }
    ],
    applications: [
      "Pre-handover Commissioning of New Cleanrooms",
      "Routine Bi-annual & Annual ISO Re-certification",
      "Post-filter Replacement Integrity Verification",
      "FDA / EMA Regulatory Audit Preparation",
      "Facility Modifications & Troubleshooting"
    ],
    processSteps: [
      { step: "01", title: "Validation Master Plan (VMP)", description: "Defining testing boundaries, sampling grids, acceptance criteria, and qualification schedules." },
      { step: "02", title: "Installation Qualification (IQ)", description: "Verifying that all equipment, ductwork, filter models, and building materials match design specifications." },
      { step: "03", title: "Operational Qualification (OQ)", description: "Testing functional parameters: air change rates, pressure cascades, temperature/humidity control, and filter integrity." },
      { step: "04", title: "Performance Qualification (PQ)", description: "Proving repeatable cleanliness and environmental control under simulated or actual manufacturing loads." }
    ],
    faqs: [
      {
        question: "How often does an ISO 14644 cleanroom need to be re-certified?",
        answer: "According to ISO 14644-2:2015, airborne particle concentration testing should be demonstrated at least once every 12 months for ISO 6 through 9, and at least every 6 months for ISO 5 and cleaner. Filter integrity and differential pressure should be verified continuously or on a scheduled schedule."
      },
      {
        question: "What happens if a HEPA filter fails the aerosol leak test?",
        answer: "If a minor leak is detected, it can often be repaired using FDA-approved silicone-free cleanroom patch sealant within standard surface area allowances. If the leak exceeds permissible limits, REINWERK technicians immediately replace the filter element with a factory-tested replacement."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): CleanroomService | undefined {
  return servicesData.find(service => service.slug === slug);
}
