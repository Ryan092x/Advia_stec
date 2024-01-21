const showChatFunctions = document.querySelector('.toggle-back-button');
const backChatFunctions = document.querySelector('.toggle-functions');
const chatFunctions = document.querySelector('.chat-functions');
const overlay2 = document.querySelector('.overlay2');
const conteudoFunctions = document.querySelector('.conteudo-functions');

function toggleChatFunctions() {
  chatFunctions.classList.toggle('ativo');
  overlay2.classList.toggle('ativo');
  conteudoFunctions.classList.toggle('ativo', chatFunctions.classList.contains('ativo'));
}

showChatFunctions.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleChatFunctions();
});

backChatFunctions.addEventListener('click', toggleChatFunctions);

overlay2.addEventListener('click', toggleChatFunctions);

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

// PS e PJ

const buttons = document.querySelectorAll('.ps-pj-div button');
const formPS = document.querySelector('.form-ps');
const formPJ = document.querySelector('.form-pj');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('ativo'));
    button.classList.add('ativo');
    
    if (button.classList.contains('ps')) {
      formPJ.classList.remove('ativo');
      formPS.classList.add('ativo');
    } else if (button.classList.contains('pj')) {
      formPS.classList.remove('ativo');
      formPJ.classList.add('ativo');
    }
  });
});

const botaoCriarRegistro = document.querySelector('.criar-registro');
const novoRegistro = document.querySelector('.novo-registro');
const botaoFecharRegistro = document.querySelector('.new-reg-close');
const overlayNR = document.querySelector('.overlaynr');

function toggleNovoRegistro() {
  novoRegistro.classList.toggle('ativo');
  overlayNR.classList.toggle('ativo', novoRegistro.classList.contains('ativo'));
}

botaoCriarRegistro.addEventListener('click', toggleNovoRegistro);

botaoFecharRegistro.addEventListener('click', toggleNovoRegistro);

overlayNR.addEventListener('click', (event) => {
  if (event.target === overlayNR) {
    toggleNovoRegistro();
  }
});