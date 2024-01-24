const profileMenu = document.querySelector('.icon-avatar');
const profileMenuShow = document.querySelector('.profile-bar');
const profileMenuShowPc = document.querySelector('.profile-bar-pc');
const profileMenuPc = document.querySelector('#user-profile-pc');

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

profileMenuPc.addEventListener('click', (event) => {
  event.stopPropagation();
  profileMenuShowPc.classList.toggle('ativo');
})

document.addEventListener('click', (event) => {
  const isClickInside = profileMenuPc.contains(event.target) || chatDropShow.contains(event.target);

  if (!isClickInside) {
    profileMenuShowPc.classList.remove('ativo');
  }
});
