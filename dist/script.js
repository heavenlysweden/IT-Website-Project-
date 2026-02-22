let index=0;
let slides=document.querySelectorAll(".slides img");

function showSlide(i){
slides.forEach(slide=>slide.classList.remove("active"));
slides[i].classList.add("active");
}

function nextSlide(){
index=(index+1)%slides.length;
showSlide(index);
}

function prevSlide(){
index=(index-1+slides.length)%slides.length;
showSlide(index);
}
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function sendMessage(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
    `Hello TechNova IT Solutions,%0A` +
    `Name: ${name}%0AEmail: ${email}%0A` +
    `Message: ${message}`;

  window.open(
    `https://wa.me/254712820937?text=${whatsappMessage}`,
    "_blank"
  );
}

document.getElementById("year").textContent =
  new Date().getFullYear();



// let index = 0;
// const slides = document.querySelectorAll(".slider img");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

// function showSlide(i) {
//     slides.forEach(slide => slide.classList.remove("active"));
//     slides[i].classList.add("active");
// }

// nextBtn.addEventListener("click", () => {
//     index = (index + 1) % slides.length;
//     showSlide(index);
// });

// prevBtn.addEventListener("click", () => {
//     index = (index - 1 + slides.length) % slides.length;
//     showSlide(index);
// });