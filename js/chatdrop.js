const chatDrop = document.querySelector('.icon-chat');
const chatDropShow = document.querySelector('.icon-chat-drop');

chatDrop.addEventListener('click', (event) => {
  event.stopPropagation();
  chatDropShow.classList.toggle('ativo');
});

document.addEventListener('click', (event) => {
  const isClickInside = chatDrop.contains(event.target) || chatDropShow.contains(event.target);

  if (!isClickInside) {
    chatDropShow.classList.remove('ativo');
  }
});