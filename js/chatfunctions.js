const showChatFunctions = document.querySelector('.toggle-back-button');
const backChatFunctions = document.querySelector('.toggle-functions');
const chatFunctions = document.querySelector('.chat-functions');
const overlay2 = document.querySelector('.overlay2');
const conteudoFunctions = document.querySelector('.conteudo-functions');

showChatFunctions.addEventListener('click', (event) => {
  event.stopPropagation();
  chatFunctions.classList.toggle('ativo');
  overlay2.classList.toggle('ativo');
  conteudoFunctions.classList.toggle('ativo');
})

backChatFunctions.addEventListener('click', () => {
  chatFunctions.classList.toggle('ativo');
  overlay2.classList.toggle('ativo');
  conteudoFunctions.classList.toggle('ativo');
})

overlay2.addEventListener('click', () => {
  chatFunctions.classList.toggle('ativo');
  overlay2.classList.toggle('ativo');
  conteudoFunctions.classList.toggle('ativo');
})

document.addEventListener('click', (event) => {
  const isClickInside = showChatFunctions.contains(event.target) || chatFunctions.contains(event.target);

  if (!isClickInside) {
    chatFunctions.classList.remove('ativo');
    overlay2.classList.remove('ativo');
  }
});

// Registros e Arquivos

const registros = document.querySelector('.registros');
const arquivos = document.querySelector('.arquivos');

registros.addEventListener('click', () => {
  registros.classList.add('ativo');
  arquivos.classList.remove('ativo');
})

arquivos.addEventListener('click', () => {
  arquivos.classList.add('ativo');
  registros.classList.remove('ativo');
})