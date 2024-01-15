const buttonsCriatividade = document.querySelectorAll('.creativity-button');

buttonsCriatividade.forEach(function(item) {
  item.addEventListener('click', function() {
    buttonsCriatividade.forEach(function(button) {
      button.classList.remove('ativo');
    });
    this.classList.add('ativo');
  });
});
