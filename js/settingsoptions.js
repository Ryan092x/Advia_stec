const buttonsShowSettingsBar = document.querySelectorAll(".settings-button");
const showBarSettings = document.querySelector(".settings-barshow");
const rotateArrows = document.querySelectorAll(".fill-svg.rotate");

buttonsShowSettingsBar.forEach((button, index) => {
  button.addEventListener("click", () => {
    showBarSettings.classList.toggle("ativo");
    rotateArrows[index].classList.toggle("show");
  });
});

//click no input file

document.getElementById("btnAbrirFile").addEventListener("click", function () {
  document.getElementById("inputFile").click();
});

// Senha fill icon

let passwordIcon = document.querySelector(".passwordIcon1");
let passwordIconz = document.querySelector(".passwordIcon2");

document.getElementById("novaSenhaInput").addEventListener("input", function () {
  if (this.value.trim() !== "") {
    passwordIcon.style.fill = "#fcfdfe";
  } else {
    passwordIcon.style.fill = "#393e44";
  }
});

document.getElementById("novaSenhaInputz").addEventListener("input", function () {
  if (this.value.trim() !== "") {
    passwordIconz.style.fill = "#fcfdfe";
  } else {
    passwordIconz.style.fill = "#393e44";
  }
});

// Checkbox

document.getElementById('masterCheckbox').addEventListener('change', function() {
  const masterCheckbox = this.checked;

  const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

  checkboxes.forEach(function(checkbox) {
    checkbox.checked = masterCheckbox;
  });
});