/* ===== Why Choose Us rotating card ===== */
const values = [
    { icon: "🛡️", title: "Professional Support",  description: "Our experienced team is always ready to provide fast and reliable technical support." },
    { icon: "💰", title: "Affordable Solutions",   description: "High-quality IT services that fit your budget without compromising quality." },
    { icon: "⚡", title: "Fast Project Delivery",  description: "Projects are completed on time with efficiency and attention to detail." },
    { icon: "🔒", title: "Secure Technology",      description: "We implement secure systems to protect your business and data." },
    { icon: "📈", title: "Scalable Systems",       description: "Solutions designed to grow together with your business." },
    { icon: "🤝", title: "Customer Focused",       description: "Your success is our priority. We build lasting relationships through excellent service." }
];

let current = 0;

const icon = document.getElementById("icon");
const title = document.getElementById("title");
const description = document.getElementById("description");
const card = document.getElementById("valueCard");
const dots = document.querySelectorAll(".dot");

function changeCard() {
    card.classList.add("fade");

    setTimeout(() => {
        current = (current + 1) % values.length;

        icon.textContent = values[current].icon;
        title.textContent = values[current].title;
        description.textContent = values[current].description;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[current].classList.add("active");

        card.classList.remove("fade");
    }, 300);
}

setInterval(changeCard, 2500);

/* ===== Copyright year (replaces PHP date('Y')) ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== Contact form: redirect target + status banner (replaces PHP) ===== */
// After FormSubmit sends the email it redirects back to this page with ?status=success
const nextUrl = document.getElementById("nextUrl");
if (nextUrl) {
    nextUrl.value = window.location.origin + window.location.pathname + "?status=success#contact";
}

const statusMessages = {
    success: { type: "success", text: "Message sent! We will get back to you shortly." },
    error:   { type: "error",   text: "Something went wrong. Please try again or email us directly." }
};

const statusKey = new URLSearchParams(window.location.search).get("status");
const banner = document.getElementById("statusBanner");

if (banner && statusMessages[statusKey]) {
    banner.textContent = statusMessages[statusKey].text;
    banner.classList.add("status-" + statusMessages[statusKey].type);
    banner.hidden = false;
    // Clean the URL so the banner doesn't reappear on refresh
    history.replaceState(null, "", window.location.pathname + window.location.hash);
}
