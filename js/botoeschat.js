// Like e Deslike

function likeDislikeClick(button) {
  const likeButton = document.querySelector('.like');
  const dislikeButton = document.querySelector('.deslike');

  if (button.classList.contains('like')) {
      if (likeButton.classList.contains('click')) {
          likeButton.classList.remove('click');
      } else {
          likeButton.classList.add('click');
          dislikeButton.classList.remove('click');
      }
  } else if (button.classList.contains('deslike')) {
      if (dislikeButton.classList.contains('click')) {
          dislikeButton.classList.remove('click');
      } else {
          dislikeButton.classList.add('click');
          likeButton.classList.remove('click');
      }
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
