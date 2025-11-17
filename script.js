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
   CTA PARTICLES
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

/* =====================================================
   SCROLL REVEAL ANIMATION (NO CSS NEEDED)
===================================================== */
const revealElements = document.querySelectorAll(".box, .why-item, .service-boxes, .hero-text, .about, .contact");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < trigger) el.classList.add("reveal");
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Auto-apply basic reveal animation using JS */
document.head.insertAdjacentHTML("beforeend", `
<style>
.reveal {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: 0.9s ease;
}
.box, .why-item, .service-boxes, .hero-text, .about, .contact {
    opacity: 0;
    transform: translateY(40px);
}
</style>
`);

/* =====================================================
   BUTTON RIPPLE EFFECT (NO CSS REQUIRED)
===================================================== */
document.querySelectorAll("button, .btn-primary, .btn-secondary, .cta-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        const ripple = document.createElement("span");
        ripple.className = "ripple";

        const size = Math.max(btn.offsetWidth, btn.offsetHeight);
        ripple.style.width = ripple.style.height = size + "px";

        const rect = btn.getBoundingClientRect();
        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

/* Ripple CSS (auto injected) */
document.head.insertAdjacentHTML("beforeend", `
<style>
.ripple {
    position: absolute;
    background: rgba(255,255,255,0.35);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out forwards;
    pointer-events: none;
}
@keyframes rippleEffect {
    to { transform: scale(3); opacity: 0; }
}
.btn-primary, .btn-secondary, .cta-btn, button {
    position: relative;
    overflow: hidden;
}
</style>
`);

/* =====================================================
   SMOOTH SCROLL PROGRESS BAR (AUTO ADDED)
===================================================== */
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = 0;
progressBar.style.left = 0;
progressBar.style.height = "4px";
progressBar.style.background = "#2d80ff";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999999";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollTop / height) * 100 + "%";
});
