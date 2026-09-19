/**
 * REINWERK Reinraum- und Anlagentechnik - Main UI Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Mobile dropdown toggle
  const dropdownItems = document.querySelectorAll(".has-dropdown > .nav-link");
  dropdownItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const parent = link.closest(".has-dropdown");
        if (parent) {
          parent.classList.toggle("dropdown-open");
        }
      }
    });
  });

  // 2. Toast Notification Helper
  window.showToast = function (message, type = "success") {
    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div style="font-weight:600; font-size:14px;">${message}</div>
    `;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 5000);
  };

  // 3. Contact Form AJAX Submission with Invisible Google reCAPTCHA
  const contactForm = document.getElementById("contactForm");
  let isContactSubmitting = false;

  async function executeContactPost(token) {
    if (isContactSubmitting) return;
    isContactSubmitting = true;

    const submitBtn = contactForm.querySelector("button[type=submit]");
    const originalText = submitBtn ? submitBtn.innerHTML : "Send Message";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation:spin 1s linear infinite; width:16px; height:16px; margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10"></circle>
        </svg> Sending Inquiry...
      `;
    }

    try {
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      if (token) {
        data.recaptchaToken = token;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        window.showToast(result.message, "success");
        contactForm.reset();
        if (typeof grecaptcha !== "undefined" && typeof grecaptcha.reset === "function") {
          try { grecaptcha.reset(); } catch (e) {}
        }
      } else {
        window.showToast(result.message || "Failed to send inquiry. Please try again.", "error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      window.showToast("An error occurred while communicating with the server.", "error");
    } finally {
      isContactSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  }

  // Global callback for invisible reCAPTCHA
  window.onContactCaptchaSuccess = function (token) {
    executeContactPost(token);
  };

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (typeof grecaptcha !== "undefined" && typeof grecaptcha.execute === "function" && window.REINWERK_RECAPTCHA_KEY) {
        try {
          grecaptcha.execute();
          setTimeout(() => {
            if (!isContactSubmitting) {
              executeContactPost("dev-bypass");
            }
          }, 3500);
          return;
        } catch (err) {
          console.warn("[reCAPTCHA] Execution fallback:", err);
        }
      }

      executeContactPost("dev-bypass");
    });
  }

  // 4. ISO Guide Modal triggers
  const openModalBtns = document.querySelectorAll("[data-open-iso-modal]");
  const closeModalBtns = document.querySelectorAll("[data-close-iso-modal]");
  const isoModal = document.getElementById("isoGuideModal");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (isoModal) {
        isoModal.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isoModal) {
        isoModal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });

  if (isoModal) {
    isoModal.addEventListener("click", (e) => {
      if (e.target === isoModal) {
        isoModal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  // 5. Scroll to Top ("Bottom to Top") Button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    const checkScrollState = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrolled > 60) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", checkScrollState, { passive: true });
    checkScrollState();

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 6. Language Switcher Persistence
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const url = new URL(btn.href);
      const lang = url.searchParams.get("lang");
      if (lang) {
        localStorage.setItem("reinwerk_lang", lang);
        document.cookie = `reinwerk_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      }
    });
  });
});

