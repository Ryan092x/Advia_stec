const buttons = document.querySelectorAll(".settings-button");
const elementosSel = document.querySelectorAll(".sel");
const conteudoSel = document.querySelectorAll(".cont-sel");
const showBarSettingsClose = document.querySelector(".settings-barshow");

elementosSel.forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    elementosSel.forEach(function (e) {
      e.classList.remove("selected");
    });

    buttons.forEach(function (btn) {
      btn.parentElement.classList.remove("db");
    });

    conteudoSel.forEach(function (conteudo) {
      conteudo.classList.remove("db");
    });

    showBarSettingsClose.classList.toggle("ativo");
    this.classList.add("selected");

    let editPerfilElement = document.getElementById("edit-perfil");
    let editSenhaElement = document.getElementById("edit-senha");
    let editNotElement = document.getElementById("edit-not");
    let deletarContaElement = document.getElementById("deletar-conta");
    
    if (this.id === "edit-perfil-sel" && this.classList.contains("selected")) {
      editPerfilElement.classList.add("db");
    }
    if (this.id === "edit-senha-sel" && this.classList.contains("selected")) {
      editSenhaElement.classList.add("db");
    }
    if (this.id === "edit-not-sel" && this.classList.contains("selected")) {
      editNotElement.classList.add("db");
    }
    if (this.id === "deletar-conta-sel" && this.classList.contains("selected")) {
      deletarContaElement.classList.add("db");
    }

    let editPerfilConteudo = document.getElementById("edit-perfil-cont");
    let editSenhaConteudo = document.getElementById("edit-senha-cont");
    let editNotConteudo = document.getElementById("edit-not-cont");
    let deletarContaConteudo = document.getElementById("deletar-conta-cont");

    if (this.id === "edit-perfil-sel" && this.classList.contains("selected")) {
      editPerfilConteudo.classList.add("db");
    }
    if (this.id === "edit-senha-sel" && this.classList.contains("selected")) {
      editSenhaConteudo.classList.add("db");
    }
    if (this.id === "edit-not-sel" && this.classList.contains("selected")) {
      editNotConteudo.classList.add("db");
    }
    if (this.id === "deletar-conta-sel" && this.classList.contains("selected")) {
      deletarContaConteudo.classList.add("db");
    }
  });
});
