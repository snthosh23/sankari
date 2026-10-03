const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach(btn => btn.addEventListener("click", () => {
  document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
}));

const modal = document.getElementById("letterModal");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const closeLetterTop = document.getElementById("closeLetterTop");

openLetter.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
});
function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
closeLetter.addEventListener("click", closeModal);
closeLetterTop.addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if(e.key==="Escape") closeModal(); });

const toast = document.getElementById("toast");
const chocoNote = document.getElementById("chocoNote");
document.querySelectorAll(".choco").forEach(choco => {
  choco.addEventListener("click", () => {
    chocoNote.textContent = choco.dataset.note;
    choco.animate([{transform:"scale(.96)"},{transform:"scale(1)"}],{duration:280});
  });
});

document.getElementById("giftBtn").addEventListener("click", () => {
  document.getElementById("giftMessage").classList.add("show");
  toast.textContent = "Your surprise is waiting in real life ❤️";
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2800);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
