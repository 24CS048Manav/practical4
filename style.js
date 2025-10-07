// ===== Static JSON for FAQs =====
const faqs = [
  {
    question: "What is My Portal?",
    answer: "My Portal is an online system designed for students to register, view events, and access resources."
  },
  {
    question: "How can I register for an event?",
    answer: "You can register through the registration page or event popup when events are live."
  },
  {
    question: "Is the website responsive?",
    answer: "Yes, the portal is fully responsive and works on mobile, tablet, and desktop devices."
  }
];

// ===== Load FAQs Dynamically =====
const faqContainer = document.getElementById("faq-container");

faqs.forEach((faq, index) => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  faqItem.innerHTML = `
    <div class="faq-question">${faq.question}</div>
    <div class="faq-answer">${faq.answer}</div>
  `;

  faqContainer.appendChild(faqItem);
});

// ===== Collapsible FAQs =====
faqContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("faq-question")) {
    const answer = e.target.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  }
});

// ===== Popup Modal Logic =====
const popup = document.getElementById("popupModal");
const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");

openPopupBtn.addEventListener("click", () => popup.style.display = "block");
closePopupBtn.addEventListener("click", () => popup.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});

// ===== Image Slider =====
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", () => changeSlide(1));
document.getElementById("prev").addEventListener("click", () => changeSlide(-1));

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Auto Slide every 4 seconds
setInterval(() => changeSlide(1), 4000);
