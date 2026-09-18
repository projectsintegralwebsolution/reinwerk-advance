export interface CleanroomIndustry {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  isoClass: string;
  gmpGrade: string;
  icon: string;
  keyChallenges: string[];
  reinwerkSolutions: string[];
  typicalApplications: string[];
  complianceStandards: string[];
}

export const industriesData: CleanroomIndustry[] = [
  {
    id: "pharmaceutical-biotech",
    slug: "pharmaceutical-biotech",
    title: "Pharmaceutical & Biotechnology",
    shortDescription: "Aseptic compounding suites, sterile fill-finish operations, and bioprocessing cleanrooms engineered to EU-GMP Annex 1 & FDA 21 CFR Part 211.",
    heroImage: "/images/cleanrooms/industry-pharma.jpg",
    isoClass: "ISO 4 to ISO 8",
    gmpGrade: "GMP Grade A, B, C & D",
    icon: "activity",
    keyChallenges: [
      "Strict microbial and viable particle contamination control",
      "Rigorous cleaning with corrosive chemical agents and VHP gas",
      "Airflow turbulence risking cross-contamination between products",
      "Stringent regulatory audits from FDA, EMA, and national bodies"
    ],
    reinwerkSolutions: [
      "Monobloc flush wall panels with welded PVC or coved seamless floors",
      "Continuous positive/negative pressure cascades with automated alarms",
      "Integrated Grade A laminar airflow hoods over sterile filling zones",
      "Full DQ/IQ/OQ/PQ validation protocol dossiers with particle counters"
    ],
    typicalApplications: [
      "Sterile injectable filling lines (vials, ampoules, syringes)",
      "Monoclonal antibody (mAb) and protein synthesis suites",
      "Cell & Gene therapy (CAR-T) production laboratories",
      "Active Pharmaceutical Ingredient (API) isolation booths"
    ],
    complianceStandards: [
      "EU-GMP Annex 1 (Manufacture of Sterile Medicinal Products)",
      "FDA 21 CFR Part 211 (cGMP for Finished Pharmaceuticals)",
      "DIN EN ISO 14644-1:2015 & ISO 14644-2",
      "ISPE Good Practice Guides"
    ]
  },
  {
    id: "semiconductor-microelectronics",
    slug: "semiconductor-microelectronics",
    title: "Semiconductor & Microelectronics",
    shortDescription: "Ultra-clean environments with sub-micron particle filtration, electrostatic discharge (ESD) mitigation, and Airborne Molecular Contamination (AMC) control.",
    heroImage: "/images/cleanrooms/industry-semiconductor.jpg",
    isoClass: "ISO 1 to ISO 5",
    gmpGrade: "N/A (Industrial Micro-tech)",
    icon: "cpu",
    keyChallenges: [
      "Particles as small as 0.1 µm causing catastrophic wafer defects",
      "Electrostatic discharge (ESD) destroying sensitive gate oxide layers",
      "Airborne Molecular Contamination (AMC) causing chemical poisoning",
      "Severe micro-vibration from heavy HVAC machinery impacting lithography"
    ],
    reinwerkSolutions: [
      "Full-coverage ceiling ULPA filtration grids with low-vibration EC fans",
      "Perforated raised access floors with laminar air return plenums",
      "Static-dissipative dissipative wall finishes (ESD resistivity 10^6 - 10^9 Ω)",
      "Chemical gas-phase filtration (activated carbon/chemisorption) for AMCs"
    ],
    typicalApplications: [
      "Silicon wafer photolithography and etching chambers",
      "Advanced packaging and wire bonding cleanrooms",
      "MEMS (Micro-Electro-Mechanical Systems) development",
      "Quantum computing chip research & fabrication"
    ],
    complianceStandards: [
      "DIN EN ISO 14644-1 (ISO Class 1 - ISO Class 5)",
      "SEMI Standards (S2, S8, F21 Airborne Molecular Contamination)",
      "IEC 61340-5-1 (Electrostatics protection)"
    ]
  },
  {
    id: "medical-devices",
    slug: "medical-devices",
    title: "Medical Device Manufacturing",
    shortDescription: "Controlled environments for the precision assembly, packaging, and bioburden inspection of implantable devices and sterile disposables.",
    heroImage: "/images/cleanrooms/industry-medtech.jpg",
    isoClass: "ISO 6 to ISO 8",
    gmpGrade: "GMP Grade C & D compliant",
    icon: "heart-pulse",
    keyChallenges: [
      "Strict control over non-viable and viable bioburden counts",
      "Particulate shedding from packaging materials and manual handling",
      "Complex workflow requiring separation of raw components and assembly",
      "Compliance with ISO 13485 and European MDR 2017/745"
    ],
    reinwerkSolutions: [
      "Cleanable modular hardwall panels with scratch-resistant surfaces",
      "Custom personnel airlocks with step-over benches and hands-free doors",
      "High air change rates (25-45 ACH) with rapid recovery times (<15 min)",
      "Seamless integration of ultrasonic cleaners and sterile pouch sealers"
    ],
    typicalApplications: [
      "Orthopedic joint implants and surgical fixation screws",
      "Cardiovascular catheters, stents, and heart valves",
      "In-vitro diagnostic (IVD) test kits and cartridge assembly",
      "Ophthalmic intraocular lens manufacturing"
    ],
    complianceStandards: [
      "DIN EN ISO 14644-1 & ISO 14644-3",
      "ISO 13485 (Medical devices - Quality management systems)",
      "ISO 14698-1/2 (Biocontamination control in cleanrooms)",
      "EU Medical Device Regulation (MDR 2017/745)"
    ]
  },
  {
    id: "aerospace-optical",
    slug: "aerospace-optical",
    title: "Aerospace, Defense & Precision Optics",
    shortDescription: "Large-span cleanrooms with overhead crane integration, outgassing-free materials, and laminar airflow for satellite and laser optics assembly.",
    heroImage: "/images/cleanrooms/industry-aerospace.jpg",
    isoClass: "ISO 5 to ISO 8",
    gmpGrade: "N/A (High-precision technical)",
    icon: "compass",
    keyChallenges: [
      "Large vertical clearances required for satellite and spacecraft bodies",
      "Volatile organic compound (VOC) outgassing depositing on optical lenses",
      "Heavy load requirements for overhead hoists and ground assembly jigs",
      "Temperature gradients across large high-bay volumes"
    ],
    reinwerkSolutions: [
      "High-bay modular structures with integrated crane rail support beams",
      "Ultra-low outgassing sealants and solvent-free panel coatings",
      "Stratified climate control delivering uniform temperature top-to-bottom",
      "Mobile clean enclosures and clean tents for localized component staging"
    ],
    typicalApplications: [
      "Satellite payload integration and sensor calibration",
      "High-power laser mirrors and optical prism coating",
      "Avionics gyroscope and inertial guidance system assembly",
      "Space mission planetary protection cleanrooms"
    ],
    complianceStandards: [
      "ECSS-Q-ST-70-01C (ESA Space product assurance)",
      "NASA-STD-6016 (Standard materials and processes for space vehicles)",
      "DIN EN ISO 14644-1 (ISO Class 5 - ISO Class 8)"
    ]
  },
  {
    id: "healthcare-laboratories",
    slug: "healthcare-laboratories",
    title: "Healthcare, Compounding & Research Laboratories",
    shortDescription: "Specialized containment suites, hospital sterile compounding pharmacies, and BSL-2/BSL-3 biocontainment laboratories.",
    heroImage: "/images/cleanrooms/industry-lab.jpg",
    isoClass: "ISO 5 to ISO 7",
    gmpGrade: "GMP Grade B & C",
    icon: "shield",
    keyChallenges: [
      "Dual requirement: protecting product from contamination and operator from hazardous drugs",
      "Negative pressure cascades required for toxic oncological compounding",
      "Aseptic manipulation requiring certified localized Class 5 environments",
      "Hospital space constraints demanding compact architectural footprints"
    ],
    reinwerkSolutions: [
      "Reversible positive/negative pressure differential control suites",
      "HEPA-filtered exhaust air with safe-change Bag-In / Bag-Out (BIBO) housings",
      "Compact modular designs fitting existing hospital room envelopes",
      "Integrated emergency intercoms, monitoring consoles, and observation glass"
    ],
    typicalApplications: [
      "Hospital cytotoxic compounding and radiopharmacy suites",
      "IV admixture and Total Parenteral Nutrition (TPN) preparation",
      "Stem cell processing and cord blood cryo-banking",
      "Biosafety Level 3 (BSL-3) infectious pathogen research"
    ],
    complianceStandards: [
      "USP <797> (Pharmaceutical Compounding - Sterile Preparations)",
      "USP <800> (Hazardous Drugs - Handling in Healthcare Settings)",
      "CDC / NIH Biosafety in Microbiological and Biomedical Laboratories (BMBL)",
      "DIN EN 12469 (Biotechnology - Performance criteria for microbiological safety cabinets)"
    ]
  }
];

export function getIndustryBySlug(slug: string): CleanroomIndustry | undefined {
  return industriesData.find(industry => industry.slug === slug);
}
