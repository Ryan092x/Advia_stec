const buttonShowSettingsBar = document.querySelector('.settings-button');
const showBarSettings = document.querySelector('.settings-barshow');
const rotateArrow = document.querySelector('.fill-svg.rotate');

buttonShowSettingsBar.addEventListener('click', () => {
  showBarSettings.classList.toggle('ativo');
  rotateArrow.classList.toggle('show');
});

//click no input file

document.getElementById('btnAbrirFile').addEventListener('click', function() {
  document.getElementById('inputFile').click();
});