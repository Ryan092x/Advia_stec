const botaoGerarDocPrompt = document.querySelector('#gerador-doc');
const botaoRevisaoContPrompt = document.querySelector('#revisao-cont');
const botaoProfJurPrompt = document.querySelector('#professor-jur');
const botaoPesquisaJurPrompt = document.querySelector('#pesquisa-jur');
const newChatSumir = document.querySelector('.new-chat');

botaoGerarDocPrompt.addEventListener('click', () => {
  newChatSumir.classList.add('dn');
})

botaoRevisaoContPrompt.addEventListener('click', () => {
  newChatSumir.classList.add('dn');
})

botaoProfJurPrompt.addEventListener('click', () => {
  newChatSumir.classList.add('dn');
})

botaoPesquisaJurPrompt.addEventListener('click', () => {
  newChatSumir.classList.add('dn');
})

// Função para simular o efeito de "digitando"
async function efeitoDigitando(elemento, mensagem) {
  const velocidadeDigitacao = 1; // Velocidade em milissegundos por caractere

  for (let i = 0; i < mensagem.length; i++) {
    await sleep(velocidadeDigitacao);
    elemento.innerHTML += mensagem.charAt(i);
    elemento.scrollTop = elemento.scrollHeight; // Mantém a rolagem automática para baixo
  }
}

// Função para pausar a execução por um determinado tempo
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para iniciar a aba do chat e adicionar a mensagem específica
function iniciarChatGeradorDoc() {
  // Inicializa a aba do chat (se necessário)
  const chatLog = document.getElementById("chat-log");
  let headerAdded = false;

  // Adiciona cabeçalho se ainda não tiver sido adicionado
  if (!headerAdded) {
    chatLog.innerHTML += `<div class="chat-header"><div class="chat-name">Nome do Chat</div><div class="options-chat-header"><button class="options-chat-header-button" onclick="handleButtonClick(event)"><svg width="20" height="20" viewBox="0 0 20 20">
    <path
      d="M8.333 9.997c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm5.833 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm-11.667 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667S2.5 10.917 2.5 9.997z">
    </path>
  </svg>
</button></div>
<button class="share-chat-header">
<span>Compartilhar</span>
</button>
</div>
<div class="options-chat-header-show">
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M18.343 14.553a1.25 1.25 0 0 1 .178 1.644l-.099.122-.834.912c-.676.739-1.608 1.161-2.589 1.161s-1.913-.422-2.588-1.16c-.209-.228-.476-.348-.746-.348-.225 0-.448.084-.637.244l-.109.105a1.25 1.25 0 1 1-1.842-1.69c.676-.737 1.608-1.158 2.588-1.158s1.912.421 2.589 1.16c.208.228.475.349.744.349.224 0 .447-.084.635-.244l.109-.105.833-.912a1.25 1.25 0 0 1 1.766-.079zM12.866 2.509a3.02 3.02 0 0 1 4.268 0 3.02 3.02 0 0 1 0 4.268h0L6.665 17.246l-.33.325-.151.137-.068.056h0l-.141.106-.142.094c-.261.16-.546.278-.843.349l-.097.022h0l-.183.031-.201.018-.259.008-1.751.002a1.25 1.25 0 0 1-1.25-1.25h0l.002-1.781c.006-.299.025-.485.078-.709.071-.298.189-.582.349-.843l.053-.084h0l.107-.152.13-.155.177-.188zm2.5 1.768a.52.52 0 0 0-.732 0h0L4.165 14.746l-.308.314-.037.043-.038.071-.02.062-.009.144-.002.513h.279l.363-.009.077-.023.058-.029.088-.076L15.366 5.009a.52.52 0 0 0 0-.732z"></path></svg></div>Editar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M5.583 8.529a1.25 1.25 0 0 1 .104 1.65l-.104.118-1.179 1.178c-1.139 1.139-1.139 2.986 0 4.125a2.92 2.92 0 0 0 3.965.148l.16-.148 1.179-1.179a1.25 1.25 0 0 1 1.872 1.65l-.104.118-1.179 1.179a5.42 5.42 0 0 1-7.66 0 5.42 5.42 0 0 1-.198-7.452l.198-.209 1.179-1.178a1.25 1.25 0 0 1 1.768 0zm8.22-2.327a1.25 1.25 0 0 1 .104 1.65l-.104.118-5.833 5.833a1.25 1.25 0 0 1-1.872-1.65l.104-.118 5.833-5.833a1.25 1.25 0 0 1 1.768 0zm3.565-3.565a5.42 5.42 0 0 1 .198 7.452l-.198.209-1.178 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118L15.6 8.529c1.139-1.139 1.139-2.986 0-4.125-1.087-1.087-2.819-1.137-3.965-.148l-.16.148-1.179 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118 1.179-1.179a5.42 5.42 0 0 1 7.66 0z"></path></svg></div>Copiar link</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M15.931.413l.462.005.375.013c.562.03.838.106 1.218.3.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218l.013.375.005.462v6.873l-.005.462-.013.375c-.024.45-.078.716-.197.999l-.103.219c-.28.549-.726.995-1.275 1.275l-.219.103c-.283.12-.55.174-.999.197l-.375.013-.731.005h-1.084v1.329l-.005.507-.017.412c-.033.497-.113.802-.295 1.159-.28.549-.726.995-1.275 1.275h0l-.219.103c-.319.135-.616.186-1.177.205h0l-.416.008H3.816l-.457-.011c-.617-.026-.953-.101-1.355-.306-.549-.28-.995-.726-1.275-1.275-.254-.498-.31-.944-.317-1.859h0V8.854c.007-.906.063-1.351.317-1.849.28-.549.726-.995 1.275-1.275.498-.254.944-.31 1.849-.317h0 1.558l.002-1.596.008-.416.018-.338c.036-.458.115-.716.29-1.058.28-.549.726-.995 1.275-1.275.342-.174.6-.254 1.058-.29l.338-.018.416-.008 7.115-.002zm-4.805 7.501H3.873l-.415.009-.229.016-.073.013-.017.006c-.078.04-.142.104-.182.182h0l-.013.047-.012.101-.015.282-.005.294v7.254l.005.299.015.286.012.102.013.047c.04.078.104.142.182.182l.017.006.063.012.191.015.343.01 7.108.002.579-.007.245-.011.127-.015.039-.012c.078-.04.142-.104.182-.182l.006-.017.012-.063.015-.191.01-.343.002-7.108-.007-.579-.011-.245-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182h0l-.047-.013-.101-.012-.282-.015-.294-.005zm4.91-5H8.953l-.534.011-.147.009-.088.011c-.021.004-.035.008-.044.013-.078.04-.142.104-.182.182l-.013.044-.011.088-.013.248-.007.434-.001 1.459h3.225c.83.006 1.274.054 1.726.257l.124.059c.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218h0l.013.375.005.462v3.018l1.613-.002.494-.016.127-.015.039-.012c.078-.04.142-.104.182-.182l.012-.039.015-.127.011-.245.007-.578-.002-7.062-.016-.494-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182l-.018-.007-.115-.018-.248-.013-.434-.007z"></path></svg></div>Duplicar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M17.5 6.45a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0-4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm0 8.958a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0 4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm-9.475-10l-4.589.002-.302.012a1.7 1.7 0 0 0-.747.212c-.392.2-.711.518-.91.91-.192.376-.224.658-.227 1.254v4.404l.007.346c.016.4.066.587.22.888.2.392.519.711.911.91.301.153.487.204.888.22l.558.007 4.213-.001.346-.007c.4-.016.587-.066.888-.22.392-.2.71-.518.91-.91.144-.282.198-.511.217-.859l.01-.395-.002-4.589-.012-.302a1.7 1.7 0 0 0-.212-.747c-.2-.392-.518-.711-.91-.91-.282-.144-.511-.198-.859-.217l-.394-.01zM3.75 12.074V7.908h4.166v4.166H3.75z"></path></svg></div>Dados importados</button>
</div>
<div class="div-button-option-chat-header">
<button class="ultimo"><div><svg width="16" height="16" viewBox="0 0 20 20"><path fill="#FF6C3E" d="M12.5 1.5a1 1 0 0 1 .117 1.993L12.5 3.5h-5a1 1 0 0 1-.117-1.993L7.5 1.5h5zm5 2.5a1 1 0 0 1 .117 1.993L17.5 6h-.731l-.561 8.402-.036.458-.041.394c-.08.67-.195 1.069-.428 1.479a3.5 3.5 0 0 1-1.515 1.417l-.182.083-.089.036-.18.062-.19.05-.101.021-.219.034-.249.025-.288.018-.523.015-.909.006-3.222-.003-.564-.011-.31-.015-.268-.022-.12-.014-.219-.034-.101-.021-.189-.05-.091-.03-.179-.069-.182-.083a3.5 3.5 0 0 1-1.515-1.417l-.095-.176-.08-.174-.068-.18-.03-.095-.053-.204-.045-.231-.039-.266-.035-.309-.033-.36-.032-.42L3.23 6H2.5a1 1 0 0 1-.117-1.993L2.5 4h15zm-2.736 2H5.235l.529 7.92.054.715.026.27.026.221.027.179.029.144.032.116.018.05.039.088.021.04a1.5 1.5 0 0 0 .649.607l.084.036.047.016.107.027.131.022.162.017.2.013.388.013.514.006h3.365l.514-.006.388-.013.2-.013.162-.017.131-.022.107-.027.09-.033.041-.019a1.5 1.5 0 0 0 .649-.607c.025-.045.048-.096.069-.157l.039-.138.035-.175.047-.348.029-.301.067-.924.513-7.7zM8.333 7.75a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1zm3.333 0a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1z"></path></svg></div>Deletar</button>
</div>
</div>
</div>`;
    headerAdded = true;
  }

  // Adiciona a mensagem específica abaixo do cabeçalho
  chatLog.innerHTML += `<div class="gpt-message digitando" id="gerador-doc-msg">
    <div class="gpt-img">
      <img src="img/adviagpt.svg" alt="Advia" width="32" height="32">
    </div>
    <div class="mscontent espacamento-chat-mob digitando"></div>
  </div>`;

  // Chama a função para iniciar o efeito de "digitando"
  const geradorDocMsg = document.getElementById("gerador-doc-msg");
  const mensagemDigitando = "Olá sou a Advia, estou à disposição para auxiliá-lo na elaboração de " +
    "documentos jurídicos. Possuo expertise como assistente jurídico avançado e uma sólida compreensão da " +
    "legislação brasileira. Posso orientá-lo na redação precisa de contratos, petições, recursos e demais " +
    "documentos legais, garantindo o uso adequado da terminologia específica. Para darmos início, seria " +
    "importante entender o propósito do documento que você necessita. Poderia compartilhar seus objetivos e, " +
    "assim, direcionarmos o processo adequadamente? Aguardo suas orientações para avançarmos.";

  efeitoDigitando(geradorDocMsg.querySelector('.mscontent'), mensagemDigitando);
}

// Adiciona um event listener para o clique na div com o ID gerador-doc
document.getElementById("gerador-doc").addEventListener("click", iniciarChatGeradorDoc);

//
//
//
// Revisão Contratos

// Função para iniciar a aba do chat e adicionar a mensagem específica
function iniciarChatRevisaoCont() {
  // Inicializa a aba do chat (se necessário)
  const chatLog = document.getElementById("chat-log");
  let headerAdded = false;

  // Adiciona cabeçalho se ainda não tiver sido adicionado
  if (!headerAdded) {
    chatLog.innerHTML += `<div class="chat-header"><div class="chat-name">Nome do Chat</div><div class="options-chat-header"><button class="options-chat-header-button" onclick="handleButtonClick(event)"><svg width="20" height="20" viewBox="0 0 20 20">
    <path
      d="M8.333 9.997c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm5.833 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm-11.667 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667S2.5 10.917 2.5 9.997z">
    </path>
  </svg>
</button></div>
<button class="share-chat-header">
<span>Compartilhar</span>
</button>
</div>
<div class="options-chat-header-show">
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M18.343 14.553a1.25 1.25 0 0 1 .178 1.644l-.099.122-.834.912c-.676.739-1.608 1.161-2.589 1.161s-1.913-.422-2.588-1.16c-.209-.228-.476-.348-.746-.348-.225 0-.448.084-.637.244l-.109.105a1.25 1.25 0 1 1-1.842-1.69c.676-.737 1.608-1.158 2.588-1.158s1.912.421 2.589 1.16c.208.228.475.349.744.349.224 0 .447-.084.635-.244l.109-.105.833-.912a1.25 1.25 0 0 1 1.766-.079zM12.866 2.509a3.02 3.02 0 0 1 4.268 0 3.02 3.02 0 0 1 0 4.268h0L6.665 17.246l-.33.325-.151.137-.068.056h0l-.141.106-.142.094c-.261.16-.546.278-.843.349l-.097.022h0l-.183.031-.201.018-.259.008-1.751.002a1.25 1.25 0 0 1-1.25-1.25h0l.002-1.781c.006-.299.025-.485.078-.709.071-.298.189-.582.349-.843l.053-.084h0l.107-.152.13-.155.177-.188zm2.5 1.768a.52.52 0 0 0-.732 0h0L4.165 14.746l-.308.314-.037.043-.038.071-.02.062-.009.144-.002.513h.279l.363-.009.077-.023.058-.029.088-.076L15.366 5.009a.52.52 0 0 0 0-.732z"></path></svg></div>Editar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M5.583 8.529a1.25 1.25 0 0 1 .104 1.65l-.104.118-1.179 1.178c-1.139 1.139-1.139 2.986 0 4.125a2.92 2.92 0 0 0 3.965.148l.16-.148 1.179-1.179a1.25 1.25 0 0 1 1.872 1.65l-.104.118-1.179 1.179a5.42 5.42 0 0 1-7.66 0 5.42 5.42 0 0 1-.198-7.452l.198-.209 1.179-1.178a1.25 1.25 0 0 1 1.768 0zm8.22-2.327a1.25 1.25 0 0 1 .104 1.65l-.104.118-5.833 5.833a1.25 1.25 0 0 1-1.872-1.65l.104-.118 5.833-5.833a1.25 1.25 0 0 1 1.768 0zm3.565-3.565a5.42 5.42 0 0 1 .198 7.452l-.198.209-1.178 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118L15.6 8.529c1.139-1.139 1.139-2.986 0-4.125-1.087-1.087-2.819-1.137-3.965-.148l-.16.148-1.179 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118 1.179-1.179a5.42 5.42 0 0 1 7.66 0z"></path></svg></div>Copiar link</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M15.931.413l.462.005.375.013c.562.03.838.106 1.218.3.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218l.013.375.005.462v6.873l-.005.462-.013.375c-.024.45-.078.716-.197.999l-.103.219c-.28.549-.726.995-1.275 1.275l-.219.103c-.283.12-.55.174-.999.197l-.375.013-.731.005h-1.084v1.329l-.005.507-.017.412c-.033.497-.113.802-.295 1.159-.28.549-.726.995-1.275 1.275h0l-.219.103c-.319.135-.616.186-1.177.205h0l-.416.008H3.816l-.457-.011c-.617-.026-.953-.101-1.355-.306-.549-.28-.995-.726-1.275-1.275-.254-.498-.31-.944-.317-1.859h0V8.854c.007-.906.063-1.351.317-1.849.28-.549.726-.995 1.275-1.275.498-.254.944-.31 1.849-.317h0 1.558l.002-1.596.008-.416.018-.338c.036-.458.115-.716.29-1.058.28-.549.726-.995 1.275-1.275.342-.174.6-.254 1.058-.29l.338-.018.416-.008 7.115-.002zm-4.805 7.501H3.873l-.415.009-.229.016-.073.013-.017.006c-.078.04-.142.104-.182.182h0l-.013.047-.012.101-.015.282-.005.294v7.254l.005.299.015.286.012.102.013.047c.04.078.104.142.182.182l.017.006.063.012.191.015.343.01 7.108.002.579-.007.245-.011.127-.015.039-.012c.078-.04.142-.104.182-.182l.006-.017.012-.063.015-.191.01-.343.002-7.108-.007-.579-.011-.245-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182h0l-.047-.013-.101-.012-.282-.015-.294-.005zm4.91-5H8.953l-.534.011-.147.009-.088.011c-.021.004-.035.008-.044.013-.078.04-.142.104-.182.182l-.013.044-.011.088-.013.248-.007.434-.001 1.459h3.225c.83.006 1.274.054 1.726.257l.124.059c.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218h0l.013.375.005.462v3.018l1.613-.002.494-.016.127-.015.039-.012c.078-.04.142-.104.182-.182l.012-.039.015-.127.011-.245.007-.578-.002-7.062-.016-.494-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182l-.018-.007-.115-.018-.248-.013-.434-.007z"></path></svg></div>Duplicar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M17.5 6.45a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0-4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm0 8.958a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0 4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm-9.475-10l-4.589.002-.302.012a1.7 1.7 0 0 0-.747.212c-.392.2-.711.518-.91.91-.192.376-.224.658-.227 1.254v4.404l.007.346c.016.4.066.587.22.888.2.392.519.711.911.91.301.153.487.204.888.22l.558.007 4.213-.001.346-.007c.4-.016.587-.066.888-.22.392-.2.71-.518.91-.91.144-.282.198-.511.217-.859l.01-.395-.002-4.589-.012-.302a1.7 1.7 0 0 0-.212-.747c-.2-.392-.518-.711-.91-.91-.282-.144-.511-.198-.859-.217l-.394-.01zM3.75 12.074V7.908h4.166v4.166H3.75z"></path></svg></div>Dados importados</button>
</div>
<div class="div-button-option-chat-header">
<button class="ultimo"><div><svg width="16" height="16" viewBox="0 0 20 20"><path fill="#FF6C3E" d="M12.5 1.5a1 1 0 0 1 .117 1.993L12.5 3.5h-5a1 1 0 0 1-.117-1.993L7.5 1.5h5zm5 2.5a1 1 0 0 1 .117 1.993L17.5 6h-.731l-.561 8.402-.036.458-.041.394c-.08.67-.195 1.069-.428 1.479a3.5 3.5 0 0 1-1.515 1.417l-.182.083-.089.036-.18.062-.19.05-.101.021-.219.034-.249.025-.288.018-.523.015-.909.006-3.222-.003-.564-.011-.31-.015-.268-.022-.12-.014-.219-.034-.101-.021-.189-.05-.091-.03-.179-.069-.182-.083a3.5 3.5 0 0 1-1.515-1.417l-.095-.176-.08-.174-.068-.18-.03-.095-.053-.204-.045-.231-.039-.266-.035-.309-.033-.36-.032-.42L3.23 6H2.5a1 1 0 0 1-.117-1.993L2.5 4h15zm-2.736 2H5.235l.529 7.92.054.715.026.27.026.221.027.179.029.144.032.116.018.05.039.088.021.04a1.5 1.5 0 0 0 .649.607l.084.036.047.016.107.027.131.022.162.017.2.013.388.013.514.006h3.365l.514-.006.388-.013.2-.013.162-.017.131-.022.107-.027.09-.033.041-.019a1.5 1.5 0 0 0 .649-.607c.025-.045.048-.096.069-.157l.039-.138.035-.175.047-.348.029-.301.067-.924.513-7.7zM8.333 7.75a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1zm3.333 0a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1z"></path></svg></div>Deletar</button>
</div>
</div>
</div>`;
    headerAdded = true;
  }

  // Adiciona a mensagem específica abaixo do cabeçalho
  chatLog.innerHTML += `<div class="gpt-message digitando" id="revisao-cont-msg">
    <div class="gpt-img">
      <img src="img/adviagpt.svg" alt="Advia" width="32" height="32">
    </div>
    <div class="mscontent espacamento-chat-mob digitando"></div>
  </div>`;

  // Chama a função para iniciar o efeito de "digitando"
  const geradorDocMsg = document.getElementById("revisao-cont-msg");
  const mensagemDigitando = `Olá, sou a Advia, e estou aqui para auxiliar na revisão de contratos, identificando potenciais áreas de risco ou responsabilidade. Meu processo inclui a busca por cláusulas ambíguas, inconsistentes ou desatualizadas, garantindo a conformidade do contrato com as leis e regulamentações vigentes. Além disso, avalio a clareza e precisão da linguagem, eliminando jargões jurídicos desnecessários, e proponho melhorias na redação e na estrutura para tornar o contrato mais compreensível e aplicável.`;

  efeitoDigitando(geradorDocMsg.querySelector('.mscontent'), mensagemDigitando);
}

document.getElementById("revisao-cont").addEventListener("click", iniciarChatRevisaoCont);

//
//
//
// Professor Jurídico

// Função para iniciar a aba do chat e adicionar a mensagem específica
function iniciarChatProfessorJur() {
  // Inicializa a aba do chat (se necessário)
  const chatLog = document.getElementById("chat-log");
  let headerAdded = false;

  // Adiciona cabeçalho se ainda não tiver sido adicionado
  if (!headerAdded) {
    chatLog.innerHTML += `<div class="chat-header"><div class="chat-name">Nome do Chat</div><div class="options-chat-header"><button class="options-chat-header-button" onclick="handleButtonClick(event)"><svg width="20" height="20" viewBox="0 0 20 20">
    <path
      d="M8.333 9.997c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm5.833 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm-11.667 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667S2.5 10.917 2.5 9.997z">
    </path>
  </svg>
</button></div>
<button class="share-chat-header">
<span>Compartilhar</span>
</button>
</div>
<div class="options-chat-header-show">
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M18.343 14.553a1.25 1.25 0 0 1 .178 1.644l-.099.122-.834.912c-.676.739-1.608 1.161-2.589 1.161s-1.913-.422-2.588-1.16c-.209-.228-.476-.348-.746-.348-.225 0-.448.084-.637.244l-.109.105a1.25 1.25 0 1 1-1.842-1.69c.676-.737 1.608-1.158 2.588-1.158s1.912.421 2.589 1.16c.208.228.475.349.744.349.224 0 .447-.084.635-.244l.109-.105.833-.912a1.25 1.25 0 0 1 1.766-.079zM12.866 2.509a3.02 3.02 0 0 1 4.268 0 3.02 3.02 0 0 1 0 4.268h0L6.665 17.246l-.33.325-.151.137-.068.056h0l-.141.106-.142.094c-.261.16-.546.278-.843.349l-.097.022h0l-.183.031-.201.018-.259.008-1.751.002a1.25 1.25 0 0 1-1.25-1.25h0l.002-1.781c.006-.299.025-.485.078-.709.071-.298.189-.582.349-.843l.053-.084h0l.107-.152.13-.155.177-.188zm2.5 1.768a.52.52 0 0 0-.732 0h0L4.165 14.746l-.308.314-.037.043-.038.071-.02.062-.009.144-.002.513h.279l.363-.009.077-.023.058-.029.088-.076L15.366 5.009a.52.52 0 0 0 0-.732z"></path></svg></div>Editar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M5.583 8.529a1.25 1.25 0 0 1 .104 1.65l-.104.118-1.179 1.178c-1.139 1.139-1.139 2.986 0 4.125a2.92 2.92 0 0 0 3.965.148l.16-.148 1.179-1.179a1.25 1.25 0 0 1 1.872 1.65l-.104.118-1.179 1.179a5.42 5.42 0 0 1-7.66 0 5.42 5.42 0 0 1-.198-7.452l.198-.209 1.179-1.178a1.25 1.25 0 0 1 1.768 0zm8.22-2.327a1.25 1.25 0 0 1 .104 1.65l-.104.118-5.833 5.833a1.25 1.25 0 0 1-1.872-1.65l.104-.118 5.833-5.833a1.25 1.25 0 0 1 1.768 0zm3.565-3.565a5.42 5.42 0 0 1 .198 7.452l-.198.209-1.178 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118L15.6 8.529c1.139-1.139 1.139-2.986 0-4.125-1.087-1.087-2.819-1.137-3.965-.148l-.16.148-1.179 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118 1.179-1.179a5.42 5.42 0 0 1 7.66 0z"></path></svg></div>Copiar link</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M15.931.413l.462.005.375.013c.562.03.838.106 1.218.3.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218l.013.375.005.462v6.873l-.005.462-.013.375c-.024.45-.078.716-.197.999l-.103.219c-.28.549-.726.995-1.275 1.275l-.219.103c-.283.12-.55.174-.999.197l-.375.013-.731.005h-1.084v1.329l-.005.507-.017.412c-.033.497-.113.802-.295 1.159-.28.549-.726.995-1.275 1.275h0l-.219.103c-.319.135-.616.186-1.177.205h0l-.416.008H3.816l-.457-.011c-.617-.026-.953-.101-1.355-.306-.549-.28-.995-.726-1.275-1.275-.254-.498-.31-.944-.317-1.859h0V8.854c.007-.906.063-1.351.317-1.849.28-.549.726-.995 1.275-1.275.498-.254.944-.31 1.849-.317h0 1.558l.002-1.596.008-.416.018-.338c.036-.458.115-.716.29-1.058.28-.549.726-.995 1.275-1.275.342-.174.6-.254 1.058-.29l.338-.018.416-.008 7.115-.002zm-4.805 7.501H3.873l-.415.009-.229.016-.073.013-.017.006c-.078.04-.142.104-.182.182h0l-.013.047-.012.101-.015.282-.005.294v7.254l.005.299.015.286.012.102.013.047c.04.078.104.142.182.182l.017.006.063.012.191.015.343.01 7.108.002.579-.007.245-.011.127-.015.039-.012c.078-.04.142-.104.182-.182l.006-.017.012-.063.015-.191.01-.343.002-7.108-.007-.579-.011-.245-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182h0l-.047-.013-.101-.012-.282-.015-.294-.005zm4.91-5H8.953l-.534.011-.147.009-.088.011c-.021.004-.035.008-.044.013-.078.04-.142.104-.182.182l-.013.044-.011.088-.013.248-.007.434-.001 1.459h3.225c.83.006 1.274.054 1.726.257l.124.059c.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218h0l.013.375.005.462v3.018l1.613-.002.494-.016.127-.015.039-.012c.078-.04.142-.104.182-.182l.012-.039.015-.127.011-.245.007-.578-.002-7.062-.016-.494-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182l-.018-.007-.115-.018-.248-.013-.434-.007z"></path></svg></div>Duplicar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M17.5 6.45a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0-4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm0 8.958a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0 4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm-9.475-10l-4.589.002-.302.012a1.7 1.7 0 0 0-.747.212c-.392.2-.711.518-.91.91-.192.376-.224.658-.227 1.254v4.404l.007.346c.016.4.066.587.22.888.2.392.519.711.911.91.301.153.487.204.888.22l.558.007 4.213-.001.346-.007c.4-.016.587-.066.888-.22.392-.2.71-.518.91-.91.144-.282.198-.511.217-.859l.01-.395-.002-4.589-.012-.302a1.7 1.7 0 0 0-.212-.747c-.2-.392-.518-.711-.91-.91-.282-.144-.511-.198-.859-.217l-.394-.01zM3.75 12.074V7.908h4.166v4.166H3.75z"></path></svg></div>Dados importados</button>
</div>
<div class="div-button-option-chat-header">
<button class="ultimo"><div><svg width="16" height="16" viewBox="0 0 20 20"><path fill="#FF6C3E" d="M12.5 1.5a1 1 0 0 1 .117 1.993L12.5 3.5h-5a1 1 0 0 1-.117-1.993L7.5 1.5h5zm5 2.5a1 1 0 0 1 .117 1.993L17.5 6h-.731l-.561 8.402-.036.458-.041.394c-.08.67-.195 1.069-.428 1.479a3.5 3.5 0 0 1-1.515 1.417l-.182.083-.089.036-.18.062-.19.05-.101.021-.219.034-.249.025-.288.018-.523.015-.909.006-3.222-.003-.564-.011-.31-.015-.268-.022-.12-.014-.219-.034-.101-.021-.189-.05-.091-.03-.179-.069-.182-.083a3.5 3.5 0 0 1-1.515-1.417l-.095-.176-.08-.174-.068-.18-.03-.095-.053-.204-.045-.231-.039-.266-.035-.309-.033-.36-.032-.42L3.23 6H2.5a1 1 0 0 1-.117-1.993L2.5 4h15zm-2.736 2H5.235l.529 7.92.054.715.026.27.026.221.027.179.029.144.032.116.018.05.039.088.021.04a1.5 1.5 0 0 0 .649.607l.084.036.047.016.107.027.131.022.162.017.2.013.388.013.514.006h3.365l.514-.006.388-.013.2-.013.162-.017.131-.022.107-.027.09-.033.041-.019a1.5 1.5 0 0 0 .649-.607c.025-.045.048-.096.069-.157l.039-.138.035-.175.047-.348.029-.301.067-.924.513-7.7zM8.333 7.75a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1zm3.333 0a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1z"></path></svg></div>Deletar</button>
</div>
</div>
</div>`;
    headerAdded = true;
  }

  // Adiciona a mensagem específica abaixo do cabeçalho
  chatLog.innerHTML += `<div class="gpt-message digitando" id="professor-jur-msg">
    <div class="gpt-img">
      <img src="img/adviagpt.svg" alt="Advia" width="32" height="32">
    </div>
    <div class="mscontent espacamento-chat-mob digitando"></div>
  </div>`;

  // Chama a função para iniciar o efeito de "digitando"
  const geradorDocMsg = document.getElementById("professor-jur-msg");
  const mensagemDigitando = `Posso auxiliá-lo em qualquer dúvida relacionada ao direito brasileiro, interpretar a legislação e redigir contratos sólidos. Abordarei os tópicos de maneira clara e simplificada, como um verdadeiro instrutor jurídico. Algumas formas específicas em que posso ser útil incluem: elucidar conceitos jurídicos complexos de maneira acessível, facilitar a compreensão das leis e regulamentos brasileiros, fornecer informações sobre direitos e obrigações legais, auxiliar na redação de contratos e outros documentos jurídicos`;

  efeitoDigitando(geradorDocMsg.querySelector('.mscontent'), mensagemDigitando);
}

document.getElementById("professor-jur").addEventListener("click", iniciarChatProfessorJur);

//
//
//
// Pesquisa Jurídica Avançada

// Função para iniciar a aba do chat e adicionar a mensagem específica
function iniciarChatPesquisaJur() {
  // Inicializa a aba do chat (se necessário)
  const chatLog = document.getElementById("chat-log");
  let headerAdded = false;

  // Adiciona cabeçalho se ainda não tiver sido adicionado
  if (!headerAdded) {
    chatLog.innerHTML += `<div class="chat-header"><div class="chat-name">Nome do Chat</div><div class="options-chat-header"><button class="options-chat-header-button" onclick="handleButtonClick(event)"><svg width="20" height="20" viewBox="0 0 20 20">
    <path
      d="M8.333 9.997c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm5.833 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667zm-11.667 0c0-.921.746-1.667 1.667-1.667s1.667.746 1.667 1.667-.746 1.667-1.667 1.667S2.5 10.917 2.5 9.997z">
    </path>
  </svg>
</button></div>
<button class="share-chat-header">
<span>Compartilhar</span>
</button>
</div>
<div class="options-chat-header-show">
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M18.343 14.553a1.25 1.25 0 0 1 .178 1.644l-.099.122-.834.912c-.676.739-1.608 1.161-2.589 1.161s-1.913-.422-2.588-1.16c-.209-.228-.476-.348-.746-.348-.225 0-.448.084-.637.244l-.109.105a1.25 1.25 0 1 1-1.842-1.69c.676-.737 1.608-1.158 2.588-1.158s1.912.421 2.589 1.16c.208.228.475.349.744.349.224 0 .447-.084.635-.244l.109-.105.833-.912a1.25 1.25 0 0 1 1.766-.079zM12.866 2.509a3.02 3.02 0 0 1 4.268 0 3.02 3.02 0 0 1 0 4.268h0L6.665 17.246l-.33.325-.151.137-.068.056h0l-.141.106-.142.094c-.261.16-.546.278-.843.349l-.097.022h0l-.183.031-.201.018-.259.008-1.751.002a1.25 1.25 0 0 1-1.25-1.25h0l.002-1.781c.006-.299.025-.485.078-.709.071-.298.189-.582.349-.843l.053-.084h0l.107-.152.13-.155.177-.188zm2.5 1.768a.52.52 0 0 0-.732 0h0L4.165 14.746l-.308.314-.037.043-.038.071-.02.062-.009.144-.002.513h.279l.363-.009.077-.023.058-.029.088-.076L15.366 5.009a.52.52 0 0 0 0-.732z"></path></svg></div>Editar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M5.583 8.529a1.25 1.25 0 0 1 .104 1.65l-.104.118-1.179 1.178c-1.139 1.139-1.139 2.986 0 4.125a2.92 2.92 0 0 0 3.965.148l.16-.148 1.179-1.179a1.25 1.25 0 0 1 1.872 1.65l-.104.118-1.179 1.179a5.42 5.42 0 0 1-7.66 0 5.42 5.42 0 0 1-.198-7.452l.198-.209 1.179-1.178a1.25 1.25 0 0 1 1.768 0zm8.22-2.327a1.25 1.25 0 0 1 .104 1.65l-.104.118-5.833 5.833a1.25 1.25 0 0 1-1.872-1.65l.104-.118 5.833-5.833a1.25 1.25 0 0 1 1.768 0zm3.565-3.565a5.42 5.42 0 0 1 .198 7.452l-.198.209-1.178 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118L15.6 8.529c1.139-1.139 1.139-2.986 0-4.125-1.087-1.087-2.819-1.137-3.965-.148l-.16.148-1.179 1.179a1.25 1.25 0 0 1-1.872-1.65l.104-.118 1.179-1.179a5.42 5.42 0 0 1 7.66 0z"></path></svg></div>Copiar link</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M15.931.413l.462.005.375.013c.562.03.838.106 1.218.3.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218l.013.375.005.462v6.873l-.005.462-.013.375c-.024.45-.078.716-.197.999l-.103.219c-.28.549-.726.995-1.275 1.275l-.219.103c-.283.12-.55.174-.999.197l-.375.013-.731.005h-1.084v1.329l-.005.507-.017.412c-.033.497-.113.802-.295 1.159-.28.549-.726.995-1.275 1.275h0l-.219.103c-.319.135-.616.186-1.177.205h0l-.416.008H3.816l-.457-.011c-.617-.026-.953-.101-1.355-.306-.549-.28-.995-.726-1.275-1.275-.254-.498-.31-.944-.317-1.859h0V8.854c.007-.906.063-1.351.317-1.849.28-.549.726-.995 1.275-1.275.498-.254.944-.31 1.849-.317h0 1.558l.002-1.596.008-.416.018-.338c.036-.458.115-.716.29-1.058.28-.549.726-.995 1.275-1.275.342-.174.6-.254 1.058-.29l.338-.018.416-.008 7.115-.002zm-4.805 7.501H3.873l-.415.009-.229.016-.073.013-.017.006c-.078.04-.142.104-.182.182h0l-.013.047-.012.101-.015.282-.005.294v7.254l.005.299.015.286.012.102.013.047c.04.078.104.142.182.182l.017.006.063.012.191.015.343.01 7.108.002.579-.007.245-.011.127-.015.039-.012c.078-.04.142-.104.182-.182l.006-.017.012-.063.015-.191.01-.343.002-7.108-.007-.579-.011-.245-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182h0l-.047-.013-.101-.012-.282-.015-.294-.005zm4.91-5H8.953l-.534.011-.147.009-.088.011c-.021.004-.035.008-.044.013-.078.04-.142.104-.182.182l-.013.044-.011.088-.013.248-.007.434-.001 1.459h3.225c.83.006 1.274.054 1.726.257l.124.059c.549.28.995.726 1.274 1.274.194.38.271.656.3 1.218h0l.013.375.005.462v3.018l1.613-.002.494-.016.127-.015.039-.012c.078-.04.142-.104.182-.182l.012-.039.015-.127.011-.245.007-.578-.002-7.062-.016-.494-.015-.127-.012-.039c-.04-.078-.104-.142-.182-.182l-.018-.007-.115-.018-.248-.013-.434-.007z"></path></svg></div>Duplicar</button>
</div>
<div class="div-button-option-chat-header">
<button><div><svg width="16" height="16" viewBox="0 0 20 20"><path d="M17.5 6.45a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0-4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm0 8.958a1.25 1.25 0 0 1 .146 2.492l-.146.008h-5a1.25 1.25 0 0 1-.146-2.492l.146-.008h5zm0 4.375a1.25 1.25 0 0 1 .146 2.492l-.146.008h-15a1.25 1.25 0 0 1-.146-2.492l.146-.008h15zm-9.475-10l-4.589.002-.302.012a1.7 1.7 0 0 0-.747.212c-.392.2-.711.518-.91.91-.192.376-.224.658-.227 1.254v4.404l.007.346c.016.4.066.587.22.888.2.392.519.711.911.91.301.153.487.204.888.22l.558.007 4.213-.001.346-.007c.4-.016.587-.066.888-.22.392-.2.71-.518.91-.91.144-.282.198-.511.217-.859l.01-.395-.002-4.589-.012-.302a1.7 1.7 0 0 0-.212-.747c-.2-.392-.518-.711-.91-.91-.282-.144-.511-.198-.859-.217l-.394-.01zM3.75 12.074V7.908h4.166v4.166H3.75z"></path></svg></div>Dados importados</button>
</div>
<div class="div-button-option-chat-header">
<button class="ultimo"><div><svg width="16" height="16" viewBox="0 0 20 20"><path fill="#FF6C3E" d="M12.5 1.5a1 1 0 0 1 .117 1.993L12.5 3.5h-5a1 1 0 0 1-.117-1.993L7.5 1.5h5zm5 2.5a1 1 0 0 1 .117 1.993L17.5 6h-.731l-.561 8.402-.036.458-.041.394c-.08.67-.195 1.069-.428 1.479a3.5 3.5 0 0 1-1.515 1.417l-.182.083-.089.036-.18.062-.19.05-.101.021-.219.034-.249.025-.288.018-.523.015-.909.006-3.222-.003-.564-.011-.31-.015-.268-.022-.12-.014-.219-.034-.101-.021-.189-.05-.091-.03-.179-.069-.182-.083a3.5 3.5 0 0 1-1.515-1.417l-.095-.176-.08-.174-.068-.18-.03-.095-.053-.204-.045-.231-.039-.266-.035-.309-.033-.36-.032-.42L3.23 6H2.5a1 1 0 0 1-.117-1.993L2.5 4h15zm-2.736 2H5.235l.529 7.92.054.715.026.27.026.221.027.179.029.144.032.116.018.05.039.088.021.04a1.5 1.5 0 0 0 .649.607l.084.036.047.016.107.027.131.022.162.017.2.013.388.013.514.006h3.365l.514-.006.388-.013.2-.013.162-.017.131-.022.107-.027.09-.033.041-.019a1.5 1.5 0 0 0 .649-.607c.025-.045.048-.096.069-.157l.039-.138.035-.175.047-.348.029-.301.067-.924.513-7.7zM8.333 7.75a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1zm3.333 0a1 1 0 0 1 .993.883l.007.117v4.167a1 1 0 0 1-1.993.117l-.007-.117V8.75a1 1 0 0 1 1-1z"></path></svg></div>Deletar</button>
</div>
</div>
</div>`;
    headerAdded = true;
  }

  // Adiciona a mensagem específica abaixo do cabeçalho
  chatLog.innerHTML += `<div class="gpt-message digitando" id="pesquisa-jur-msg">
    <div class="gpt-img">
      <img src="img/adviagpt.svg" alt="Advia" width="32" height="32">
    </div>
    <div class="mscontent espacamento-chat-mob digitando"></div>
  </div>`;

  // Chama a função para iniciar o efeito de "digitando"
  const geradorDocMsg = document.getElementById("pesquisa-jur-msg");
  const mensagemDigitando = `Olá! estou aqui para facilitar e aprimorar suas pesquisas jurídicas. Com um mecanismo de busca avançado, proporciono uma experiência eficiente na busca por jurisprudência, leis e casos relevantes. Ofereço recursos abrangentes, permitindo acesso a uma ampla gama de informações legais, desde decisões judiciais até legislação em vigor. Minha tecnologia avançada garante rapidez e eficiência, proporcionando resultados precisos em segundos, economizando seu tempo para análises e estratégias jurídicas. Adapto-me às suas necessidades específicas. Seja um estudante de direito, advogado ou pesquisador jurídico, ajusto meus resultados para atender às suas expectativas e fornecer insights relevantes para o seu trabalho.`;

  efeitoDigitando(geradorDocMsg.querySelector('.mscontent'), mensagemDigitando);
}

document.getElementById("pesquisa-jur").addEventListener("click", iniciarChatPesquisaJur);