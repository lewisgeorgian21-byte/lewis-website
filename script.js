/* =====================================================
   COPY DISCORD BUTTON
===================================================== */
function copyDiscord() {
    navigator.clipboard.writeText("lewis901");
    showPopup("Discord username copied!");
}

/* =====================================================
   CONTACT FORM SUBMIT (TOAST POPUP)
===================================================== */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        setTimeout(() => {
            showPopup("Your message has been sent!");
            contactForm.reset();
        }, 200);
    });
}

/* =====================================================
   CUSTOM POPUP FUNCTION
===================================================== */
function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.innerText = message;

    document.body.appendChild(popup);

    // Fade-in
    setTimeout(() => popup.classList.add("show"), 20);

    // Fade-out
    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => popup.remove(), 300);
    }, 1800);
}

/* =====================================================
   MOBILE BURGER MENU
===================================================== */
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
}

/* =====================================================
   SMOOTH SCROLL NAVIGATION
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
   HERO IMAGE FADE-IN ANIMATION
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
   HOME SECTION PARTICLES
===================================================== */
const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
    function createParticle() {
        const p = document.createElement("span");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = (Math.random() * 3 + 3) + "s";

        particlesContainer.appendChild(p);

        setTimeout(() => p.remove(), 6000);
    }

    setInterval(createParticle, 150);
}

/* =====================================================
   CTA SECTION PARTICLES
===================================================== */
const ctaParticlesBox = document.getElementById("ctaParticles");

if (ctaParticlesBox) {
    function createCTAParticle() {
        const p = document.createElement("span");
        p.className = "cta-particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = (Math.random() * 3 + 3) + "s";

        ctaParticlesBox.appendChild(p);

        setTimeout(() => p.remove(), 6500);
    }

    setInterval(createCTAParticle, 180);
}
