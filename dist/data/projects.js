export const projectsData = [
    {
        id: "project-biopharma-suite",
        slug: "biopharma-sterile-fill-finish",
        title: "Biopharmaceutical Aseptic Fill-Finish Suite",
        clientSector: "Pharmaceutical",
        location: "Bavaria, Germany",
        area: "650 m²",
        isoClass: "ISO 5 / ISO 7",
        gmpGrade: "GMP Grade B & C with Grade A RABS",
        completionYear: "2025",
        thumbnail: "/images/cleanrooms/project-biopharma.jpg",
        summary: "Turnkey design, prefabrication, and validation of a multi-room biopharmaceutical filling facility with integrated restricted access barrier systems (RABS) and automated continuous environmental monitoring.",
        scopeOfWork: [
            "Monobloc wall panels with flush-mounted double-glazed vision panels",
            "Ducted HVAC with H14 terminal HEPA filters and 45 air changes/hour (ACH)",
            "Automated pressure cascade system with 15 Pa increments between zones",
            "Dynamic material pass-through airlocks with internal VHP decontamination ports",
            "Full DQ/IQ/OQ/PQ validation protocol dossier complying with EU-GMP Annex 1"
        ],
        results: [
            { metric: "650 m²", label: "Cleanroom Floor Area" },
            { metric: "0 Viable CFU", label: "Baseline Particle Audits" },
            { metric: "< 12 min", label: "Air Cleanliness Recovery Time" },
            { metric: "14 Weeks", label: "Fabrication to IQ Handover" }
        ]
    },
    {
        id: "project-semiconductor-fab",
        slug: "semiconductor-photolithography-lab",
        title: "High-Precision Photolithography Cleanroom",
        clientSector: "Semiconductor",
        location: "Dresden Silicon Saxony, Germany",
        area: "340 m²",
        isoClass: "ISO Class 4 (Class 10)",
        gmpGrade: "N/A",
        completionYear: "2024",
        thumbnail: "/images/cleanrooms/project-semiconductor.jpg",
        summary: "High-performance microelectronics cleanroom engineered for sub-micron photolithography and wafer inspection with perforated raised access floor and active chemical filtration.",
        scopeOfWork: [
            "100% ceiling coverage with low-vibration EC Fan Filter Units (FFUs)",
            "Raised airflow plenum floor with conductive anti-static vinyl tiles (ESD safe)",
            "Precision temperature control (21.0°C ± 0.1°C) and humidity control (45% ± 1.5% RH)",
            "Airborne Molecular Contamination (AMC) chemisorption filters for acid and base vapors",
            "Vibration dampening structural isolation pads for lithography stepper machines"
        ],
        results: [
            { metric: "ISO 4", label: "Certified Particle Cleanliness" },
            { metric: "± 0.1°C", label: "Thermal Stability Margin" },
            { metric: "10^7 Ω", label: "ESD Surface Resistivity" },
            { metric: "99.9995%", label: "U15 ULPA Efficiency" }
        ]
    },
    {
        id: "project-medtech-facility",
        slug: "orthopedic-implant-manufacturing",
        title: "Orthopedic Implant Precision Assembly Plant",
        clientSector: "Medical Device",
        location: "Tuttlingen, Germany",
        area: "480 m²",
        isoClass: "ISO Class 7 (Class 10,000)",
        gmpGrade: "Grade C Compliant",
        completionYear: "2025",
        thumbnail: "/images/cleanrooms/project-medtech.jpg",
        summary: "Controlled environment cleanroom facility for robotic polishing, automated ultrasonic cleaning, and sterile blister packaging of titanium spinal and orthopedic implants.",
        scopeOfWork: [
            "HPL hardwall modular partition system with flush siliconized seams",
            "Cleanroom ceiling with energy-efficient LED tear-drop lighting (1000 lux)",
            "3-stage personnel gowning airlock sequence with step-over benches and sole cleaners",
            "Integrated laminar flow clean benches for manual blister packaging inspection",
            "Complete ISO 13485 and ISO 14644-1:2015 certification"
        ],
        results: [
            { metric: "480 m²", label: "Turnkey Footprint" },
            { metric: "35 ACH", label: "Air Change Rate" },
            { metric: "Zero Defect", label: "MDR Audit Clearance" },
            { metric: "11 Weeks", label: "On-site Build Duration" }
        ]
    },
    {
        id: "project-cell-therapy",
        slug: "cell-gene-therapy-modular-facility",
        title: "Modular Cell & Gene Therapy GMP Laboratory",
        clientSector: "Biotech",
        location: "Basel Region, Switzerland",
        area: "220 m²",
        isoClass: "ISO Class 6 / ISO Class 7",
        gmpGrade: "GMP Grade B Suite",
        completionYear: "2024",
        thumbnail: "/images/cleanrooms/project-celltherapy.jpg",
        summary: "Rapid-deployment modular cleanroom facility designed for autologous cell therapy processing, equipped with biosafety cabinets and independent HVAC zoning.",
        scopeOfWork: [
            "Prefabricated demountable cassette wall panels with antimicrobial powder coating",
            "Dedicated air handling unit with 100% fresh air option and active exhaust filtration",
            "Interlocked magnetic doors with contactless wave sensors and emergency release",
            "Continuous optical particle counter manifold integrated with cleanroom SCADA",
            "Vaporized Hydrogen Peroxide (VHP) resistant construction throughout"
        ],
        results: [
            { metric: "220 m²", label: "Cell Therapy Area" },
            { metric: "GMP Grade B", label: "Certified Environment" },
            { metric: "100%", label: "VHP Cycle Resistance" },
            { metric: "8 Weeks", label: "Fast-Track Deployment" }
        ]
    },
    {
        id: "project-aerospace-optics",
        slug: "satellite-optics-integration-facility",
        title: "High-Bay Satellite Optics Integration Cleanroom",
        clientSector: "Aerospace",
        location: "Friedrichshafen, Germany",
        area: "520 m²",
        isoClass: "ISO Class 5 / ISO Class 6",
        gmpGrade: "N/A",
        completionYear: "2023",
        thumbnail: "/images/cleanrooms/project-aerospace.jpg",
        summary: "Custom high-clearance cleanroom engineered for satellite telescope payload integration with overhead crane rails and zero-outgassing structural envelopes.",
        scopeOfWork: [
            "7.5-meter internal clear height modular steel frame structure",
            "Integrated 5-tonne overhead gantry crane sealed with cleanroom-rated bellow skirts",
            "Low-outgassing panels, non-VOC joint sealants certified to ESA ECSS standards",
            "Laminar flow downflow canopy over primary optical alignment bench",
            "Comprehensive particle and airborne molecular contamination (AMC) monitoring"
        ],
        results: [
            { metric: "7.5 m", label: "Internal Clear Height" },
            { metric: "5 Tonne", label: "Overhead Crane Capacity" },
            { metric: "ISO 5", label: "Target Cleanliness Handover" },
            { metric: "Zero VOC", label: "Surface Outgassing" }
        ]
    }
];
export function getProjectBySlug(slug) {
    return projectsData.find(project => project.slug === slug);
}
