$(document).ready(function () {
  // Função para criar um novo botão nos registros criados
  function criarBotao(nomeCompleto, svgPath) {
    const novoBotao = `
      <button>
        <div class="block-registros">
        ${svgPath}
        </div>
        ${nomeCompleto}
      </button>`;

    // Adiciona o novo botão à div registrosCriadosContainer
    $("#registrosCriados").append(novoBotao);
  }

  // Manipula o envio do formulário pessoa física
  $("#form-ps").submit(function (event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Obtém o valor do campo de nome completo
    const nomeCompleto = $("#form-ps input[placeholder='Digite o nome completo']").val();

    // Cria um novo botão com o nome completo e adiciona à lista de registros
    criarBotao(nomeCompleto, `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 9.58482C10.2056 9.58482 11.9937 7.43918 11.9937 4.79241C11.9937 2.14563 10.2056 0 8 0C5.79435 0 4.00632 2.14563 4.00632 4.79241C4.00632 7.43918 5.79435 9.58482 8 9.58482Z" fill="#FCFDFE"/>
        <path d="M15.8276 13.6584C15.1087 12.2206 13.7509 11.0225 11.9937 10.3037C11.5144 10.1439 10.9553 10.1439 10.556 10.3836C9.75722 10.8628 8.95848 11.1024 8 11.1024C7.04152 11.1024 6.24278 10.8628 5.44405 10.3836C5.04468 10.2238 4.48557 10.1439 4.00633 10.3836C2.24911 11.1024 0.891262 12.3005 0.1724 13.7382C-0.386714 14.7766 0.491894 15.9747 1.69 15.9747H14.31C15.5081 15.9747 16.3867 14.7766 15.8276 13.6584Z" fill="#FCFDFE"/>
      </svg>`
    );

    // Limpa os campos do formulário
    $("#form-ps")[0].reset();
  });

  // Manipula o envio do formulário pessoa jurídica
  $("#form-pj").submit(function (event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Obtém o valor do campo de nome da empresa
    const nomeEmpresa = $("#form-pj input[placeholder='Digite o nome da empresa']").val();

    // Cria um novo botão com o nome da empresa e adiciona à lista de registros
    criarBotao(nomeEmpresa, `
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
    <path d="M13.74 2.11938L5.56 0.0193815C5.16 -0.0806185 4.78 0.219381 4.78 0.619381V15.8794H14.2V2.71938C14.22 2.43938 14.02 2.19938 13.74 2.11938ZM8.8 3.79938C8.8 3.71938 8.86 3.63938 8.96 3.63938H10.04C10.12 3.63938 10.2 3.69938 10.2 3.79938V4.81938C10.2 4.89938 10.14 4.97938 10.04 4.97938H8.96C8.88 4.97938 8.8 4.91938 8.8 4.81938V3.79938ZM8.8 6.51938C8.8 6.43938 8.86 6.35938 8.96 6.35938H10.04C10.12 6.35938 10.2 6.41938 10.2 6.51938V7.53938C10.2 7.61938 10.14 7.69938 10.04 7.69938H8.96C8.88 7.69938 8.8 7.63938 8.8 7.53938V6.51938ZM8.8 9.23938C8.8 9.15938 8.86 9.07938 8.96 9.07938H10.04C10.12 9.07938 10.2 9.13938 10.2 9.23938V10.2594C10.2 10.3394 10.14 10.4194 10.04 10.4194H8.96C8.88 10.4194 8.8 10.3594 8.8 10.2594V9.23938ZM6.2 3.79938C6.2 3.71938 6.26 3.63938 6.36 3.63938H7.44C7.52 3.63938 7.6 3.69938 7.6 3.79938V4.81938C7.6 4.89938 7.54 4.97938 7.44 4.97938H6.36C6.28 4.97938 6.2 4.91938 6.2 4.81938V3.79938ZM6.2 6.51938C6.2 6.43938 6.26 6.35938 6.36 6.35938H7.44C7.52 6.35938 7.6 6.41938 7.6 6.51938V7.53938C7.6 7.61938 7.54 7.69938 7.44 7.69938H6.36C6.28 7.69938 6.2 7.63938 6.2 7.53938V6.51938ZM7.42 10.4194H6.34C6.26 10.4194 6.18 10.3594 6.18 10.2594V9.23938C6.18 9.15938 6.24 9.07938 6.34 9.07938H7.42C7.5 9.07938 7.58 9.13938 7.58 9.23938V10.2594C7.58 10.3594 7.5 10.4194 7.42 10.4194ZM9.32 14.3194C9.32 14.3994 9.26 14.4794 9.16 14.4794H7.72C7.64 14.4794 7.56 14.4194 7.56 14.3194V11.9594C7.56 11.8794 7.62 11.7994 7.72 11.7994H9.16C9.24 11.7994 9.32 11.8594 9.32 11.9594V14.3194ZM11.42 14.3194C11.42 14.3994 11.36 14.4794 11.26 14.4794H9.82C9.74 14.4794 9.66 14.4194 9.66 14.3194V11.9594C9.66 11.8794 9.72 11.7994 9.82 11.7994H11.26C11.34 11.7994 11.42 11.8594 11.42 11.9594V14.3194ZM12.82 10.2794C12.82 10.3594 12.76 10.4394 12.66 10.4394H11.58C11.5 10.4394 11.42 10.3794 11.42 10.2794V9.25938C11.42 9.17938 11.48 9.09938 11.58 9.09938H12.66C12.74 9.09938 12.82 9.15938 12.82 9.25938V10.2794ZM12.82 7.53938C12.82 7.61938 12.76 7.69938 12.66 7.69938H11.58C11.5 7.69938 11.42 7.63938 11.42 7.53938V6.51938C11.42 6.43938 11.48 6.35938 11.58 6.35938H12.66C12.74 6.35938 12.82 6.41938 12.82 6.51938V7.53938ZM12.82 4.81938C12.82 4.89938 12.76 4.97938 12.66 4.97938H11.58C11.5 4.97938 11.42 4.91938 11.42 4.81938V3.79938C11.42 3.71938 11.48 3.63938 11.58 3.63938H12.66C12.74 3.63938 12.82 3.69938 12.82 3.79938V4.81938Z" fill="#FCFDFE"/>
    <path d="M0 5.43938V15.2594C0 15.5994 0.28 15.8794 0.62 15.8794H4.18V3.77938L0.44 4.85938C0.18 4.91938 0 5.17938 0 5.43938ZM1.4 6.51938C1.4 6.43938 1.46 6.35938 1.56 6.35938H2.64C2.72 6.35938 2.8 6.41938 2.8 6.51938V7.53938C2.8 7.61938 2.74 7.69938 2.64 7.69938H1.56C1.48 7.69938 1.4 7.63938 1.4 7.53938V6.51938ZM1.4 9.23938C1.4 9.15938 1.46 9.07938 1.56 9.07938H2.64C2.72 9.07938 2.8 9.13938 2.8 9.23938V10.2594C2.8 10.3394 2.74 10.4194 2.64 10.4194H1.56C1.48 10.4194 1.4 10.3594 1.4 10.2594V9.23938ZM1.4 11.9594C1.4 11.8794 1.46 11.7994 1.56 11.7994H2.64C2.72 11.7994 2.8 11.8594 2.8 11.9594V12.9794C2.8 13.0594 2.74 13.1394 2.64 13.1394H1.56C1.48 13.1394 1.4 13.0794 1.4 12.9794V11.9594Z" fill="#FCFDFE"/>
    <path d="M18.38 4.97938H14.82V15.8794H18.38C18.72 15.8794 19 15.5994 19 15.2594V5.59938C19 5.25938 18.72 4.97938 18.38 4.97938ZM17.6 12.9994C17.6 13.0794 17.54 13.1594 17.44 13.1594H16.36C16.28 13.1594 16.2 13.0994 16.2 12.9994V11.9794C16.2 11.8994 16.26 11.8194 16.36 11.8194H17.44C17.52 11.8194 17.6 11.8794 17.6 11.9794V12.9994ZM17.6 10.2794C17.6 10.3594 17.54 10.4394 17.44 10.4394H16.36C16.28 10.4394 16.2 10.3794 16.2 10.2794V9.25938C16.2 9.17938 16.26 9.09938 16.36 9.09938H17.44C17.52 9.09938 17.6 9.15938 17.6 9.25938V10.2794ZM17.6 7.53938C17.6 7.61938 17.54 7.69938 17.44 7.69938H16.36C16.28 7.69938 16.2 7.63938 16.2 7.53938V6.51938C16.2 6.43938 16.26 6.35938 16.36 6.35938H17.44C17.52 6.35938 17.6 6.41938 17.6 6.51938V7.53938Z" fill="#FCFDFE"/>
    </svg>`
    );

    // Limpa os campos do formulário
    $("#form-pj")[0].reset();
  });
});

// Verificar required

document.addEventListener('DOMContentLoaded', function() {
  // Obtém os formulários com a classe "form-ps" e "form-pj"
  const formPS = document.querySelector('.form-ps');
  const formPJ = document.querySelector('.form-pj');

  function focusOnFirstEmptyInput(form) {
    // Verifica se todos os campos obrigatórios estão preenchidos
    var requiredInputs = form.querySelectorAll('[required]');

    requiredInputs.forEach(function(input) {
      if (!input.value.trim()) {
        // Se um campo obrigatório estiver vazio, marca o formulário como inválido
        emptyInput = input;
      }
    });
  }

  // Adiciona um ouvinte de eventos de envio ao formulário PS
  formPS.addEventListener('submit', function(event) {
    focusOnFirstEmptyInput(formPS);

    // Impede o envio do formulário se houver campos obrigatórios vazios
    if (formPS.querySelector('[required]:invalid')) {
      event.preventDefault();
    }
  });

  // Adiciona um ouvinte de eventos de envio ao formulário PJ
  formPJ.addEventListener('submit', function(event) {
    focusOnFirstEmptyInput(formPJ);

    // Impede o envio do formulário se houver campos obrigatórios vazios
    if (formPJ.querySelector('[required]:invalid')) {
      event.preventDefault();
    }
  });
});

// Botao cancel 

document.addEventListener('DOMContentLoaded', function () {
  // Adiciona um evento de clique ao botão "Cancel" na primeira form
  document.querySelector('#form-ps .cancel-send').addEventListener('click', function () {
    // Limpa todos os inputs na primeira form
    document.querySelectorAll('#form-ps input').forEach(function (input) {
      input.value = '';
    });

    // Rola até o topo da form-ps e foca no primeiro input
    document.querySelector('#form-ps').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('#form-ps input:first-child').focus();
  });

  // Adiciona um evento de clique ao botão "Cancel" na segunda form
  document.querySelector('#form-pj .cancel-send').addEventListener('click', function () {
    // Limpa todos os inputs na segunda form
    document.querySelectorAll('#form-pj input').forEach(function (input) {
      input.value = '';
    });

    // Rola até o topo da form-pj e foca no primeiro input
    document.querySelector('#form-pj').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('#form-pj input:first-child').focus();
  });
});