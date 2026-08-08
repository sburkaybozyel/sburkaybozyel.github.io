const deck = document.getElementById("deck");
const slides = [...document.querySelectorAll(".slide")];
const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");
const progressBar = document.getElementById("progressBar");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const overviewButton = document.getElementById("overviewButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const sourcesPanel = document.getElementById("sourcesPanel");
const sourcesButton = document.getElementById("sourcesButton");
const sourcesClose = document.getElementById("sourcesClose");
let activeIndex = 0;

totalSlides.textContent = String(slides.length).padStart(2, "0");

const setActive = index => {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === activeIndex));
  currentSlide.textContent = String(activeIndex + 1).padStart(2, "0");
  progressBar.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
  document.title = `${slides[activeIndex].dataset.title} | Amazon Operasyon Planı`;
};

const goTo = index => {
  if (document.body.classList.contains("overview")) toggleOverview(false);
  slides[Math.max(0, Math.min(index, slides.length - 1))].scrollIntoView({ behavior: "smooth" });
};

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActive(slides.indexOf(visible.target));
}, { root: deck, threshold: [.55, .72] });

slides.forEach(slide => observer.observe(slide));
prevButton.addEventListener("click", () => goTo(activeIndex - 1));
nextButton.addEventListener("click", () => goTo(activeIndex + 1));

document.addEventListener("keydown", event => {
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    goTo(activeIndex + 1);
  }
  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    goTo(activeIndex - 1);
  }
  if (event.key === "Home") goTo(0);
  if (event.key === "End") goTo(slides.length - 1);
  if (event.key.toLowerCase() === "o") toggleOverview();
  if (event.key.toLowerCase() === "f") toggleFullscreen();
  if (event.key === "Escape") closeSources();
});

const toggleOverview = force => {
  const nextState = typeof force === "boolean" ? force : !document.body.classList.contains("overview");
  document.body.classList.toggle("overview", nextState);
  overviewButton.setAttribute("aria-pressed", String(nextState));
  overviewButton.textContent = nextState ? "Sunuma dön" : "Genel görünüm";
};

overviewButton.addEventListener("click", () => toggleOverview());
slides.forEach((slide, index) => slide.addEventListener("click", () => {
  if (document.body.classList.contains("overview")) goTo(index);
}));

const toggleFullscreen = async () => {
  if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
  else await document.exitFullscreen();
};

fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", () => {
  fullscreenButton.textContent = document.fullscreenElement ? "Tam ekrandan çık" : "Tam ekran";
});

const openSources = () => {
  sourcesPanel.classList.add("open");
  sourcesPanel.setAttribute("aria-hidden", "false");
};

const closeSources = () => {
  sourcesPanel.classList.remove("open");
  sourcesPanel.setAttribute("aria-hidden", "true");
};

sourcesButton.addEventListener("click", openSources);
sourcesClose.addEventListener("click", closeSources);

const searchTerms = ["cotton duvet cover", "king size bedding set", "premium cotton sheets", "hotel quality duvet"];
let termIndex = 0;
setInterval(() => {
  termIndex = (termIndex + 1) % searchTerms.length;
  const target = document.getElementById("searchTerm");
  target.animate([{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-8px)" }, { opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 650 });
  window.setTimeout(() => { target.textContent = searchTerms[termIndex]; }, 310);
}, 3400);

setActive(0);
