const profileMenu = document.querySelector('.icon-avatar');
const profileMenuShow = document.querySelector('.profile-bar');

profileMenu.addEventListener('click', (event) => {
  event.stopPropagation();
  profileMenuShow.classList.toggle('ativo');
})

document.addEventListener('click', (event) => {
  const isClickInside = profileMenu.contains(event.target) || chatDropShow.contains(event.target);

  if (!isClickInside) {
    profileMenuShow.classList.remove('ativo');
  }
});