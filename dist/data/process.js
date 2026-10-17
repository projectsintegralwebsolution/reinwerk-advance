export const processStepsData = [
    {
        stepNumber: "01",
        title: "Consultation & URS Definition",
        subtitle: "Strategic Requirement Engineering",
        description: "Every successful cleanroom starts with a rigorous assessment of process requirements, contamination risks, personnel flows, and regulatory boundaries. We formulate an auditable User Requirement Specification (URS) and establish the architectural baseline.",
        keyActivities: [
            "Process flow analysis and contamination risk assessment (FMEA)",
            "Zoning of cleanliness grades (ISO 14644-1 and EU-GMP Annex 1)",
            "Formulation of User Requirement Specifications (URS)",
            "Space planning, structural feasibility, and utility connection audits"
        ],
        deliverables: [
            "User Requirement Specification (URS) Dossier",
            "Conceptual Cleanroom Zoning Layout",
            "Classification & Pressure Cascade Matrix",
            "Preliminary Capital Budget & Timeline"
        ],
        standards: ["ISO 14644-4 (Design & Construction)", "ISPE Baseline Guides"],
        duration: "1 - 3 Weeks",
        icon: "compass"
    },
    {
        stepNumber: "02",
        title: "3D BIM Engineering & Simulation",
        subtitle: "Clash-Free Digital Modeling & CFD Airflow",
        description: "Using cutting-edge Building Information Modeling (BIM Level 2) and Computational Fluid Dynamics (CFD), we design the architectural envelope, HVAC ductwork, ceiling grids, and piping in millimeter precision before fabrication.",
        keyActivities: [
            "Multi-disciplinary 3D BIM modeling (LOD 350 / 400)",
            "CFD airflow simulation to identify dead zones and ensure laminar uniformity",
            "Clash detection between structural beams, ductwork, and process piping",
            "Detailed bill of materials (BOM) and fabrication shop drawings"
        ],
        deliverables: [
            "3D BIM Model (Revit / IFC format)",
            "CFD Aerodynamic Airflow Analysis Report",
            "HVAC Thermodynamic Load Calculations",
            "Approved Fabrication & Installation Drawings"
        ],
        standards: ["DIN EN ISO 14644-4", "VDI 2083 Part 1-3", "Eurovent Ductwork Standards"],
        duration: "2 - 4 Weeks",
        icon: "layers"
    },
    {
        stepNumber: "03",
        title: "Off-site Prefabrication & Construction",
        subtitle: "Precision German Manufacturing & Swift Erection",
        description: "Cleanroom components are precision-manufactured under factory-controlled conditions. On-site installation is carried out by certified cleanroom assemblers using non-particulate methods, slashing on-site construction time by up to 50%.",
        keyActivities: [
            "CNC precision fabrication of monobloc and cassette wall panels",
            "Factory assembly of dynamic pass-through boxes and air showers",
            "Rapid on-site installation of wall partitions, walkable ceiling, and doors",
            "Application of seamless coved epoxy or welded static-dissipative vinyl flooring"
        ],
        deliverables: [
            "Factory Acceptance Test (FAT) Certificates",
            "Installed Architectural Cleanroom Shell",
            "Airtight Envelope Pressure Test Report",
            "Clean Construction Protocol Compliance Log"
        ],
        standards: ["EN 13501-1 (Fire Classification)", "EN 12207 (Airtightness)"],
        duration: "4 - 8 Weeks",
        icon: "tool"
    },
    {
        stepNumber: "04",
        title: "HVAC Commissioning & Air Balancing",
        subtitle: "System Integration & Microclimate Calibration",
        description: "With the physical envelope sealed, our mechanical engineers install terminal HEPA/ULPA filters, calibrate airflow velocities, balance room pressure cascades, and tune precision climate controls to achieve stable steady-state conditions.",
        keyActivities: [
            "Installation and leak scanning of terminal H14 HEPA / U15 ULPA filters",
            "Airflow velocity balancing across all supply diffusers and return air grilles",
            "Calibration of room differential pressure cascades (10 to 25 Pa deltas)",
            "Fine-tuning of PID controllers for temperature (±0.2°C) and humidity (±2% RH)"
        ],
        deliverables: [
            "Air Balancing & Flow Rate Report",
            "Differential Pressure Cascade Map",
            "Temperature & Humidity Stability Logs",
            "Terminal Filter DEHS Scan Certificates"
        ],
        standards: ["DIN EN ISO 14644-3 (Test Methods)", "VDI 2083 Part 4"],
        duration: "1 - 2 Weeks",
        icon: "wind"
    },
    {
        stepNumber: "05",
        title: "Validation, Qualification & Handover",
        subtitle: "Audit-Ready DQ / IQ / OQ / PQ Certification",
        description: "Our certified validation engineers conduct comprehensive qualification testing following GAMP 5 and ISO 14644 standards. We provide an audit-ready qualification dossier and hands-on staff training before final operational handover.",
        keyActivities: [
            "Airborne particle count sampling 'at-rest' and 'in-operation' (ISO 14644-1:2015)",
            "Smoke pattern visualization studies (airflow direction and turbulence profiling)",
            "Cleanliness recovery rate testing (measuring 100:1 particle purge time)",
            "Compilation of comprehensive DQ, IQ, OQ, and PQ validation dossiers"
        ],
        deliverables: [
            "Formal Cleanroom ISO 14644-1 Classification Certificate",
            "Complete IQ / OQ / PQ Qualification Dossier",
            "Airflow Visualization Video Documentation",
            "Facility Operation & Preventative Maintenance Manuals"
        ],
        standards: ["DIN EN ISO 14644-1:2015", "EU-GMP Annex 1", "FDA 21 CFR Part 211", "GAMP 5"],
        duration: "1 - 2 Weeks",
        icon: "award"
    }
];
