const botaoMenu = document.querySelector(".botao-menu");
const iconMenu = document.querySelector(".icon-menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector('.overlay');

botaoMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("ativo");
  sidebar.classList.toggle("ativo");
  overlay.classList.toggle("ativo");
});

overlay.addEventListener('click', () => {
  iconMenu.classList.toggle("ativo");
  sidebar.classList.toggle("ativo");
  overlay.classList.toggle("ativo");
})
