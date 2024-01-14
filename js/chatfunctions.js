const showChatFunctions = document.querySelector('.toggle-back-button');
const backChatFunctions = document.querySelector('.toggle-functions');
const chatFunctions = document.querySelector('.chat-functions');

showChatFunctions.addEventListener('click', () => {
  chatFunctions.classList.toggle('ativo');
})

backChatFunctions.addEventListener('click', () => {
  chatFunctions.classList.toggle('ativo');
})