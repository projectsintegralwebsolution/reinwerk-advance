import { Router, Request, Response } from "express";
import { servicesData, getServiceBySlug } from "../data/services.js";
import { industriesData, getIndustryBySlug } from "../data/industries.js";
import { projectsData, getProjectBySlug } from "../data/projects.js";
import { processStepsData } from "../data/process.js";

export const pagesRouter = Router();

// Helper to inject common layout data
function getCommonData(activeRoute: string, title: string, description: string) {
  return {
    activeRoute,
    metaTitle: `${title} | REINWERK Reinraum- und Anlagentechnik`,
    metaDescription: description,
    servicesList: servicesData,
    industriesList: industriesData,
    currentYear: new Date().getFullYear()
  };
}

// 1. Home Page
pagesRouter.get("/", (req: Request, res: Response) => {
  res.render("pages/index", {
    ...getCommonData(
      "home",
      "German-Engineered Turnkey Cleanrooms & Controlled Environments",
      "REINWERK engineers, manufactures, and validates certified modular cleanrooms, HVAC air handling systems, and material airlocks compliant with ISO 14644 and EU-GMP standards."
    ),
    services: servicesData,
    industries: industriesData,
    featuredProjects: projectsData.slice(0, 3),
    processSteps: processStepsData
  });
});

// 2. About Us Page
pagesRouter.get("/about", (req: Request, res: Response) => {
  res.render("pages/about", {
    ...getCommonData(
      "about",
      "About Us - Precision Cleanroom & Facility Engineering",
      "Learn about REINWERK Reinraum- und Anlagentechnik, our German engineering heritage, core values, quality assurance standards, and turnkey project delivery."
    )
  });
});

// 3. Products / Services Overview
pagesRouter.get("/services", (req: Request, res: Response) => {
  res.render("pages/services", {
    ...getCommonData(
      "services",
      "Cleanroom Engineering Services & Modular Systems",
      "Comprehensive cleanroom services: Modular hardwall and monobloc envelopes, HVAC air filtration, airlocks, dynamic pass-throughs, and DQ/IQ/OQ/PQ validation."
    ),
    services: servicesData
  });
});

// 4. Product / Service Details (Modular, HVAC, Equipment, Validation)
pagesRouter.get("/services/:slug", (req: Request, res: Response) => {
  const service = getServiceBySlug(req.params.slug);
  if (!service) {
    return res.status(404).render("pages/404", {
      ...getCommonData("404", "Service Not Found", "The requested cleanroom service could not be found.")
    });
  }

  res.render("pages/service-detail", {
    ...getCommonData(
      "services",
      service.title,
      service.shortDescription
    ),
    service,
    allServices: servicesData
  });
});

// 5. Industries / Applications
pagesRouter.get("/industries", (req: Request, res: Response) => {
  res.render("pages/industries", {
    ...getCommonData(
      "industries",
      "Cleanroom Solutions by Industry & Sector",
      "Tailored contamination control solutions for Pharmaceuticals, Biotech, Semiconductor, Medical Devices, Aerospace, and Healthcare laboratories."
    ),
    industries: industriesData
  });
});

// 6. Why Choose Us / Quality & Compliance
pagesRouter.get("/why-choose-us", (req: Request, res: Response) => {
  res.render("pages/why-choose-us", {
    ...getCommonData(
      "why-choose-us",
      "Why Choose REINWERK - German Engineering & Regulatory Compliance",
      "Discover the REINWERK advantage: Off-site precision prefabrication, strict ISO 14644 & cGMP compliance, GAMP 5 validation protocols, and turnkey single-source accountability."
    )
  });
});

// 7. Projects / Solutions Showcase
pagesRouter.get("/projects", (req: Request, res: Response) => {
  res.render("pages/projects", {
    ...getCommonData(
      "projects",
      "Turnkey Cleanroom Projects & Case Studies",
      "Explore REINWERK's portfolio of completed turnkey cleanroom facilities across Europe, from GMP Grade B biopharma suites to ISO Class 4 semiconductor labs."
    ),
    projects: projectsData
  });
});

// 8. Process & Technology
pagesRouter.get("/process", (req: Request, res: Response) => {
  res.render("pages/process", {
    ...getCommonData(
      "process",
      "Our 5-Stage Cleanroom Engineering Methodology",
      "From conceptual URS formulation and 3D BIM clash detection to off-site prefabrication, air balancing, and formal DQ/IQ/OQ/PQ validation."
    ),
    steps: processStepsData
  });
});

// 9. Contact Us
pagesRouter.get("/contact", (req: Request, res: Response) => {
  res.render("pages/contact", {
    ...getCommonData(
      "contact",
      "Contact Cleanroom Engineering Desk",
      "Get in touch with REINWERK's cleanroom consultants and technical engineers for new facility inquiries, revamps, or validation audits."
    )
  });
});

// 10. Request a Quote / Specification Estimator
pagesRouter.get("/quote", (req: Request, res: Response) => {
  res.render("pages/quote", {
    ...getCommonData(
      "quote",
      "Request a Cleanroom Quotation & Specification Estimator",
      "Configure your cleanroom parameters: room dimensions, target ISO classification or GMP grade, airflow design, and wall finishes for an instant preliminary estimate."
    ),
    services: servicesData,
    industries: industriesData
  });
});

// 11. Terms of Use / Nutzungsbedingungen
pagesRouter.get(["/terms", "/agb"], (req: Request, res: Response) => {
  const isDe = res.locals.currentLang === "de";
  res.render("pages/terms", {
    ...getCommonData(
      "terms",
      isDe ? "Allgemeine Nutzungsbedingungen" : "General Terms of Use",
      isDe ? "Nutzungsbedingungen der REINWERK Reinraum- und Anlagentechnik GmbH." : "Terms and conditions governing access to REINWERK website."
    )
  });
});

// 12. Privacy Policy / Datenschutzerklärung (DSGVO)
pagesRouter.get(["/privacy", "/datenschutz"], (req: Request, res: Response) => {
  const isDe = res.locals.currentLang === "de";
  res.render("pages/privacy", {
    ...getCommonData(
      "privacy",
      isDe ? "Datenschutzerklärung (DSGVO)" : "Privacy Policy (GDPR)",
      isDe ? "Informationen über die Verarbeitung personenbezogener Daten bei der REINWERK Reinraum- und Anlagentechnik GmbH." : "Information on processing of personal data in compliance with EU GDPR."
    )
  });
});

// 13. Disclaimer / Impressum & Rechtliche Hinweise (§ 5 DDG)
pagesRouter.get(["/disclaimer", "/impressum"], (req: Request, res: Response) => {
  const isDe = res.locals.currentLang === "de";
  res.render("pages/disclaimer", {
    ...getCommonData(
      "disclaimer",
      isDe ? "Impressum & Rechtliche Hinweise (§ 5 DDG)" : "Disclaimer & Legal Notice",
      isDe ? "Gesetzliche Anbieterkennzeichnung nach § 5 DDG und Haftungsausschluss der REINWERK Reinraum- und Anlagentechnik GmbH." : "Statutory Imprint under § 5 DDG and disclaimer for REINWERK Reinraum- und Anlagentechnik GmbH."
    )
  });
});

