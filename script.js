/* =====================================================
   COPY DISCORD BUTTON
===================================================== */
function copyDiscord() {
    navigator.clipboard.writeText("lewis901");
    showToast("Discord copied: lewis901");
}

/* =====================================================
   CUSTOM TOAST POPUP
===================================================== */
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

/* =====================================================
   CONTACT FORM — SIMPLE "MESSAGE SENT"
===================================================== */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        showToast("Message Sent!");
        contactForm.reset();
    });
}

/* =====================================================
   SMOOTH SCROLL
===================================================== */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        e.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });
    });
});

/* =====================================================
   HERO IMAGE FADE-IN
===================================================== */
window.addEventListener("load", () => {
    const heroImg = document.querySelector(".hero-img img");
    if (!heroImg) return;

    heroImg.style.opacity = "0";
    heroImg.style.transform = "translateY(25px)";

    setTimeout(() => {
        heroImg.style.transition = "0.85s ease";
        heroImg.style.opacity = "1";
        heroImg.style.transform = "translateY(0)";
    }, 150);
});

/* =====================================================
   CTA SECTION PARTICLES
===================================================== */
const ctaParticles = document.getElementById("ctaParticles");

if (ctaParticles) {
    function createCTAParticle() {
        const p = document.createElement("span");
        p.className = "cta-particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = (Math.random() * 3 + 2) + "s";

        ctaParticles.appendChild(p);
        setTimeout(() => p.remove(), 5000);
    }

    setInterval(createCTAParticle, 130);
}
