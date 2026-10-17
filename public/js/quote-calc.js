/**
 * REINWERK Cleanroom Specification & Estimator Calculator
 */

document.addEventListener("DOMContentLoaded", () => {
  const quoteForm = document.getElementById("cleanroomQuoteForm");
  if (!quoteForm) return;

  const lengthInput = document.getElementById("roomLength");
  const widthInput = document.getElementById("roomWidth");
  const heightInput = document.getElementById("roomHeight");
  const isoSelect = document.getElementById("targetStandard");
  const airlockInput = document.getElementById("airlockCount");

  // Output display elements
  const areaDisplay = document.getElementById("calcArea");
  const volumeDisplay = document.getElementById("calcVolume");
  const achDisplay = document.getElementById("calcACH");
  const airflowDisplay = document.getElementById("calcAirflow");
  const ffuDisplay = document.getElementById("calcFFU");

  // Cleanroom standard parameters mapping
  const standardSpecs = {
    "ISO 4 (GMP Grade A Equivalent)": { ach: 300, coverage: 75, flowType: "Laminar Flow (Unidirectional)" },
    "ISO 5 (GMP Grade B/A localized)": { ach: 120, coverage: 50, flowType: "Laminar / High-Velocity Turbulent" },
    "ISO 6 (GMP Grade B/C)": { ach: 60, coverage: 30, flowType: "Turbulent Mixing" },
    "ISO 7 (GMP Grade C / Class 10,000)": { ach: 35, coverage: 20, flowType: "Turbulent Mixing" },
    "ISO 8 (GMP Grade D / Class 100,000)": { ach: 20, coverage: 12, flowType: "Standard Dilution Flow" },
    "ISO 9 (Standard Controlled)": { ach: 10, coverage: 6, flowType: "Controlled Ambient" }
  };

  function recalculateMetrics() {
    const l = parseFloat(lengthInput.value) || 0;
    const w = parseFloat(widthInput.value) || 0;
    const h = parseFloat(heightInput.value) || 0;
    const standardKey = isoSelect.value;
    const spec = standardSpecs[standardKey] || standardSpecs["ISO 7 (GMP Grade C / Class 10,000)"];

    const area = l * w;
    const volume = area * h;
    const totalAirflowM3h = Math.round(volume * spec.ach);
    // Standard 1200x600 FFU typically moves ~900-1100 m³/h
    const estimatedFFUs = Math.max(1, Math.ceil(totalAirflowM3h / 1000));

    if (areaDisplay) areaDisplay.textContent = `${area.toFixed(1)} m²`;
    if (volumeDisplay) volumeDisplay.textContent = `${volume.toFixed(1)} m³`;
    if (achDisplay) achDisplay.textContent = `${spec.ach} ACH`;
    if (airflowDisplay) airflowDisplay.textContent = `${totalAirflowM3h.toLocaleString()} m³/h`;
    if (ffuDisplay) ffuDisplay.textContent = `~${estimatedFFUs} units`;
  }

  [lengthInput, widthInput, heightInput, isoSelect, airlockInput].forEach(el => {
    if (el) {
      el.addEventListener("input", recalculateMetrics);
      el.addEventListener("change", recalculateMetrics);
    }
  });

  // Run initial calculation
  recalculateMetrics();

  // Quote Form Submission with Invisible Google reCAPTCHA
  let isQuoteSubmitting = false;

  async function executeQuotePost(token) {
    if (isQuoteSubmitting) return;
    isQuoteSubmitting = true;

    const submitBtn = quoteForm.querySelector("button[type=submit]");
    const originalText = submitBtn ? submitBtn.innerHTML : "Submit RFQ Specification";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation:spin 1s linear infinite; width:16px; height:16px; margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10"></circle>
        </svg> Processing Specification...
      `;
    }

    try {
      const formData = new FormData(quoteForm);
      const data = Object.fromEntries(formData.entries());
      if (token) {
        data.recaptchaToken = token;
      }

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        window.showToast(result.message, "success");
        quoteForm.reset();
        recalculateMetrics();
        if (typeof grecaptcha !== "undefined" && typeof grecaptcha.reset === "function") {
          try { grecaptcha.reset(); } catch (e) {}
        }
      } else {
        window.showToast(result.message || "Failed to submit quote. Please check your inputs.", "error");
      }
    } catch (err) {
      console.error("Quote submission error:", err);
      window.showToast("Server communication error. Please try again or call us.", "error");
    } finally {
      isQuoteSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  }

  // Global callback for invisible reCAPTCHA
  window.onQuoteCaptchaSuccess = function (token) {
    executeQuotePost(token);
  };

  quoteForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      return;
    }

    if (typeof grecaptcha !== "undefined" && typeof grecaptcha.execute === "function" && window.REINWERK_RECAPTCHA_KEY) {
      try {
        grecaptcha.execute();
        setTimeout(() => {
          if (!isQuoteSubmitting) {
            executeQuotePost("dev-bypass");
          }
        }, 3500);
        return;
      } catch (err) {
        console.warn("[reCAPTCHA] Execution fallback:", err);
      }
    }

    executeQuotePost("dev-bypass");
  });
});

