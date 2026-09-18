/**
 * REINWERK ISO 14644-1 vs. EU-GMP Annex 1 Interactive Classifier
 */

const isoTableData = [
  {
    iso: "ISO 3",
    fedStd: "Class 1",
    gmp: "Beyond Grade A",
    p01: "1,000",
    p05: "35",
    p50: "0",
    ach: "360 - 540",
    airflow: "Unidirectional Laminar (0.45 m/s)",
    filter: "U16 - U17 ULPA (99.999995%)",
    typicalApp: "Semiconductor EUV Photolithography, Nanotech"
  },
  {
    iso: "ISO 4",
    fedStd: "Class 10",
    gmp: "Grade A (At-Rest)",
    p01: "10,000",
    p05: "352",
    p50: "0",
    ach: "240 - 360",
    airflow: "Unidirectional Laminar",
    filter: "U15 ULPA (99.9995%)",
    typicalApp: "Aseptic Fill-Finish, Advanced Microelectronics"
  },
  {
    iso: "ISO 5",
    fedStd: "Class 100",
    gmp: "Grade A / Grade B (At-Rest)",
    p01: "100,000",
    p05: "3,520",
    p50: "29",
    ach: "120 - 240",
    airflow: "Laminar or High-Velocity Turbulent",
    filter: "H14 HEPA (99.995%)",
    typicalApp: "Biopharma Sterile Vials, Surgical Implants"
  },
  {
    iso: "ISO 6",
    fedStd: "Class 1,000",
    gmp: "Grade B (In-Operation)",
    p01: "1,000,000",
    p05: "35,200",
    p50: "293",
    ach: "60 - 90",
    airflow: "Turbulent (Non-unidirectional)",
    filter: "H14 HEPA",
    typicalApp: "Biotech Cell Culture, Precision Optics"
  },
  {
    iso: "ISO 7",
    fedStd: "Class 10,000",
    gmp: "Grade C",
    p01: "Not defined",
    p05: "352,000",
    p50: "2,930",
    ach: "30 - 60",
    airflow: "Turbulent (Non-unidirectional)",
    filter: "H13 - H14 HEPA",
    typicalApp: "Medical Device Assembly, Clean Packaging"
  },
  {
    iso: "ISO 8",
    fedStd: "Class 100,000",
    gmp: "Grade D",
    p01: "Not defined",
    p05: "3,520,000",
    p50: "29,300",
    ach: "15 - 25",
    airflow: "Turbulent (Dilution)",
    filter: "E11 - H13 HEPA",
    typicalApp: "General Pharmaceutical Prep, CNC Cleanparts"
  },
  {
    iso: "ISO 9",
    fedStd: "Room Air",
    gmp: "Controlled CNC",
    p01: "Not defined",
    p05: "35,200,000",
    p50: "293,000",
    ach: "10 - 15",
    airflow: "Standard Controlled Ventilation",
    filter: "ePM1 (F8 - F9)",
    typicalApp: "Gowning Ante-rooms, Raw Material Staging"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("isoComparisonTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = isoTableData.map(row => `
    <tr>
      <td style="font-weight:700; color:var(--primary-navy);">${row.iso}</td>
      <td><span class="deliverable-tag">${row.fedStd}</span></td>
      <td style="font-weight:600; color:var(--accent-red);">${row.gmp}</td>
      <td>${row.p05}</td>
      <td>${row.p50}</td>
      <td>${row.ach}</td>
      <td>${row.filter}</td>
      <td style="font-size:12px; color:var(--slate-600);">${row.typicalApp}</td>
    </tr>
  `).join("");
});

