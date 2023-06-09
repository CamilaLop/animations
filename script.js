const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");
// selecionando os elementos que serão usados

let currentSlide = 0; // criando variável para determinar slider ativo no momento

function hideSlider() {
  // função para esconder o slider
  slider.forEach((item) => item.classList.remove("on"));
}
function showSlider() {
  // função para mostrar o slider
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}
function prevSlider() {
  hideSlider(); // esconde o slider on
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);
