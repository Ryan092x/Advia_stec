// Like e Deslike

function likeDislikeClick(button) {
  const container = button.closest('.buttons-mscontent'); // Assumindo que .resposta seja o contêiner comum dos botões
  const likeButtons = container.querySelectorAll('.like');
  const dislikeButtons = container.querySelectorAll('.deslike');

  if (button.classList.contains('like')) {
    likeButtons.forEach(likeButton => {
      if (likeButton === button) {
        likeButton.classList.toggle('click');
      } else {
        likeButton.classList.remove('click');
      }
    });
    dislikeButtons.forEach(dislikeButton => dislikeButton.classList.remove('click'));
  } else if (button.classList.contains('deslike')) {
    dislikeButtons.forEach(dislikeButton => {
      if (dislikeButton === button) {
        dislikeButton.classList.toggle('click');
      } else {
        dislikeButton.classList.remove('click');
      }
    });
    likeButtons.forEach(likeButton => likeButton.classList.remove('click'));
  }
}

// Opções do header

// Função para lidar com o clique no botão
function handleButtonClick(event) {
  event.stopPropagation(); // Evita que o clique no botão seja capturado pelo documento
  const opcoesChatHeader = document.querySelector('.options-chat-header-button');
  const optionsChatShow = document.querySelector('.options-chat-header-show');

  opcoesChatHeader.classList.toggle('click');

  if (opcoesChatHeader.classList.contains('click')) {
    optionsChatShow.classList.add('ativo');
  } else {
    optionsChatShow.classList.remove('ativo');
  }
}

// Adicionar ouvinte de evento no documento
document.addEventListener('click', (event) => {
  const optionsChatShow = document.querySelector('.options-chat-header-show');

  // Verifica se o elemento está presente e se contém o alvo do clique
  if (optionsChatShow && event.target && !optionsChatShow.contains(event.target)) {
    const opcoesChatHeader = document.querySelector('.options-chat-header-button');
    opcoesChatHeader.classList.remove('click');
    optionsChatShow.classList.remove('ativo');
  }
});
