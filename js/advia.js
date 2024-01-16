// Recebimento do input no Click e na tecla Enter
const newChat = document.querySelector(".new-chat");
let headerAdded = false;

function processInput() {
  const existingSpacediv = document.querySelector(".spacediv");
  if (existingSpacediv) {
    existingSpacediv.remove();
  }

  const userInput = document.getElementById("user-input").value;

  if (!headerAdded) {
    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML +=
      '<div class="chat-header"><div class="chat-name">Nome do Chat</div></div>';
    headerAdded = true;
  }

  if (!newChat.classList.contains("dn")) {
    newChat.classList.add("dn");
  }

  if (userInput.trim() === "") {
    return;
  }

  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML +=
    '<div class="user-message">' +
    '<div class ="user-img">' +
    '<img src="img/jacarepartidario.webp" alt="Avatar User" width="32" height="32">' +
    "</div>" +
    '<div class="input-message">' +
    userInput +
    "</div>" +
    "</div>";

  run();

  document.getElementById("user-input").value = "";

  chatLog.scrollTop = chatLog.scrollHeight;
}

document.getElementById("myButton").addEventListener("click", processInput);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    processInput();
  }
});

function resizeTextarea() {
  const textarea = document.getElementById("user-input");
  const scrollWidth = textarea.scrollWidth;
  const clientWidth = textarea.clientWidth;

  if (clientWidth === scrollWidth) {
    textarea.style.height = "25px";
  }

  textarea.style.height = textarea.scrollHeight + "px";
}

function resetTextarea() {
  const textarea = document.getElementById("user-input");
  textarea.style.height = "25px";
}

document
  .getElementById("user-input")
  .addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      processInput();
    }
  });

// AdvIA | IA

import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const API_KEY = "AIzaSyDhVQFwTXAAOqXSWA7slIWsHsGKMd2qZqI";
const maxTokens = "32000";

// Inicializa a conversa com um histórico de mensagens
let conversationHistory = [
  {
    role: "user",
    parts:
      "Você é o ADVIA Assistente Jurídico avançado e só responde perguntas jurídicas e cria contratos robustos, se embasando na legislação brasileira. Todos os contratos devem ser redigidos em Blockquotes em Markdown",
  },
  {
    role: "model",
    parts:
      "Ok, usarei apenas Blockquotes quando for para o corpo dos contratos. Eu sou o Advia Pro, e falo português brasileiro, e te chamarei pelo nome e usarei seus dados qualificados e autorizados para escrever seus contratos. Eu sempre vou terminar minhas respostas sugerindo o próximo passo com base no que eu acho que você precisa. Vamos começar?",
  },
];

async function run() {
  const inputText = document.querySelector("#user-input");
  const resultText = document.querySelector("#chat-log");

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  const generationConfig = {
    maxOutputTokens: maxTokens,
    temperature: 0.9,
  };

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
    safetySettings,
  });

  // Adicione o histórico de conversação à inicialização do chat
  const chat = model.startChat({
    history: conversationHistory,
  });

  const userMessage = inputText.value;

  // Adicione a nova mensagem do usuário à conversa
  conversationHistory.push({
    role: "user",
    parts: userMessage,
  });

  // Envie a mensagem do usuário e obtenha a resposta
  const result = await chat.sendMessage(userMessage);

  // Obtenha a resposta da mensagem
  const response = await result.response;
  const rawText = response.text();

  // Adicione a resposta do modelo ao histórico
  conversationHistory.push({
    role: "model",
    parts: rawText,
  });

  const gptMessage = document.createElement("div");
  gptMessage.className = "gpt-message digitando";

  const gptIcon = document.createElement("div");
  gptIcon.className = "gpt-img";
  gptIcon.innerHTML =
    '<img src="img/adviagpt.svg" alt="Advia" width="32" height="32">';

  const responseContent = document.createElement("div");
  responseContent.className = "mscontent digitando";

  // Insira apenas a resposta do GPT em 'responseContent'
  responseContent.innerHTML = marked.parse(rawText);

  // Use um elemento temporário para extrair apenas o texto sem tags HTML
  const tempElement = document.createElement("div");
  tempElement.innerHTML = marked.parse(rawText);
  responseContent.textContent = tempElement.textContent;

  // Anexe 'responseContent' ao 'gptMessage'
  gptMessage.appendChild(gptIcon);
  gptMessage.appendChild(responseContent);

  // Anexe 'gptMessage' ao elemento pai no DOM
  resultText.appendChild(gptMessage);

  const buttonsContent = document.createElement("div");
  buttonsContent.className = "buttons-mscontent";
  buttonsContent.innerHTML = `<button class="like"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M3.547 19.327C2.074 19.327.88 18.133.88 16.66h0v-5.833c0-1.473 1.194-2.667 2.667-2.667h0 1.849l2.889-6.499c.25-.562.783-.939 1.387-.994h0L9.825.66c1.687 0 3.055 1.368 3.055 3.055h0v2.778h2.753a3.5 3.5 0 0 1 3.484 3.84h0l-.024.192-.897 5.833a3.5 3.5 0 0 1-3.459 2.968h0zm1.499-9.167H3.547c-.368 0-.667.298-.667.667h0v5.833c0 .368.298.667.667.667h0l1.499-.001V10.16zm4.975-7.481L7.18 9.071c-.039.087-.083.169-.133.247l-.001 8.007 7.689.001a1.5 1.5 0 0 0 1.455-1.137l.027-.135.897-5.833a1.5 1.5 0 0 0-1.483-1.728h0-2.919c-1.012 0-1.833-.821-1.833-1.833h0V3.715c0-.505-.355-.927-.829-1.031h0l-.03-.005z"></path></svg></button>
    <button class="deslike"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.875.661l.215.002h0l.377.012c.518.028.839.1 1.182.275.502.256.91.664 1.165 1.165a2.19 2.19 0 0 1 .251.844h0l.02.254.012.304.006.367.001 4.275-.004.633-.009.334-.016.278c-.027.338-.079.558-.179.788h0l-.084.177c-.256.502-.664.91-1.165 1.165a2.19 2.19 0 0 1-.844.251h0l-.254.02-.304.012-.367.006-1.291.002-2.889 6.499c-.27.608-.874 1.001-1.54 1.001-1.687 0-3.055-1.368-3.055-3.055h0l-.001-2.778-1.279-.001-.742-.005-.418-.01-.364-.016-.319-.025c-.596-.059-.961-.175-1.359-.402a3.5 3.5 0 0 1-1.54-1.795l-.068-.191h0l-.054-.187-.04-.189a3.05 3.05 0 0 1-.041-.529h0l.007-.252.02-.285.015-.157h0l.04-.347.084-.617.549-3.586.112-.706.098-.549.062-.296.064-.251c.077-.271.162-.472.279-.675h0l.109-.176A3.5 3.5 0 0 1 3.806.972c.397-.18.77-.259 1.379-.292h0l.396-.014.465-.006zM12.938 2.66l-6.883.001-.373.004-.302.009-.241.015-.19.021-.149.028h0l-.118.036-.051.021a1.5 1.5 0 0 0-.637.547h0l-.046.079-.042.093-.02.054h0l-.04.129-.04.162-.065.322-.076.44-.596 3.866-.08.56-.056.442-.024.238-.015.199-.005.166.004.138.012.115.02.098.028.086a1.5 1.5 0 0 0 .66.769c.042.024.088.045.142.064h0l.12.034.148.028.181.023.221.018.127.007h0l.292.011.543.009 1.571.002.33.006a1.64 1.64 0 0 1 .817.194c.345.176.626.456.802.801.123.242.171.405.189.719h0l.009.268.002 2.791c0 .505.355.927.829 1.031h0l.03.005 2.709-6.095.156-.34.088-.161.021-.035V2.66zm2.93.001l-.93-.001v7.166h.684l.444-.004.383-.014.122-.011.087-.015.033-.009h0l.05-.02c.125-.064.228-.166.291-.291h0l.02-.05.016-.072.013-.103.01-.143.007-.191.004-.247.002-4.33-.002-.496-.012-.438-.01-.143-.013-.103-.016-.072-.02-.05c-.064-.125-.166-.227-.291-.291-.008-.004-.016-.008-.026-.011h0l-.075-.02-.051-.009h0l-.136-.014-.303-.014-.282-.004z"></path></svg></button>
    <button class="enviar"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.519 1.99c.357.009.503.047.838.31h0l.204.167 7.315 6.269.238.208c.229.209.302.319.395.578.111.31.111.648 0 .958-.12.332-.206.42-.633.786h0l-7.059 6.05-.256.218-.204.166c-.274.215-.422.279-.663.301h0l-.177.009c-.438.01-.856-.182-1.132-.521-.226-.277-.292-.413-.311-.838h0l-.006-.264-.002-2.691-.347.077a8.5 8.5 0 0 0-1.358.451h0l-.327.149a8.5 8.5 0 0 0-2.864 2.235c-.598.72-1.769.298-1.769-.639h0v-.511c.001-2.225.821-4.371 2.304-6.03 1.131-1.265 2.59-2.182 4.204-2.655h0l.158-.043.001-2.929.004-.319c.013-.426.061-.632.247-.885h0l.067-.086a1.42 1.42 0 0 1 1.134-.521zm.547 2.684l.001 2.856a1 1 0 0 1-.828.985c-1.561.273-2.986 1.064-4.044 2.247-.68.76-1.181 1.652-1.478 2.61h0l-.016.056.158-.109a10.5 10.5 0 0 1 .971-.578h0l.338-.17a10.5 10.5 0 0 1 3.831-1.009 1 1 0 0 1 1.068.998h0l-.001 2.767L16.28 10l-6.214-5.326z"></path></svg></button>
    <button class="copy"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M8.729.662a1 1 0 1 1 .027 2l-.275.007-.109.006-.168.015-.062.009-.089.022c-.011.004-.021.008-.029.012-.125.064-.227.166-.291.291l-.012.029-.022.089-.017.139-.007.092-.01.237-.003.148a1 1 0 1 1-2-.027c.01-.767.069-1.183.288-1.614.256-.502.664-.91 1.165-1.165.431-.219.847-.278 1.614-.288zm7.527 0c.767.01 1.183.069 1.614.288.502.256.91.664 1.165 1.165.219.431.278.847.288 1.614a1 1 0 0 1-2 .027l-.007-.275-.012-.201-.008-.076-.019-.112c-.007-.029-.015-.051-.024-.068-.064-.125-.166-.227-.291-.291l-.029-.012-.089-.022-.139-.017-.092-.007-.237-.01-.148-.003a1 1 0 1 1 .027-2zm2.081 9.581a1 1 0 0 1 .986 1.013c-.01.767-.069 1.183-.288 1.614-.256.502-.664.91-1.165 1.165-.431.22-.846.278-1.614.288a1 1 0 1 1-.027-2l.275-.007.201-.012.076-.008.112-.019c.029-.007.051-.015.068-.024.126-.064.228-.166.291-.291.009-.017.016-.039.024-.068l.019-.112.008-.076.012-.201.007-.275a1 1 0 0 1 1.013-.986zm-.011-4.583a1 1 0 0 1 .993.883l.007.117v1.667a1 1 0 0 1-1.993.117l-.007-.117V6.66a1 1 0 0 1 1-1zm-5-5a1 1 0 0 1 .117 1.993l-.117.007h-1.667a1 1 0 0 1-.117-1.993l.117-.007h1.667zm-2.231 5.001H3.89l-.412.007c-.628.02-.981.088-1.363.283-.502.256-.91.664-1.165 1.165-.175.344-.247.664-.275 1.182l-.012.377-.002.215v7.199l.007.415c.02.631.088.985.283 1.367.256.502.664.91 1.165 1.165.315.16.59.234 1.039.267l.328.016.188.004.431.004 7-.001.367-.006.304-.012c.508-.029.762-.101 1.098-.272.502-.256.91-.664 1.165-1.165.16-.315.234-.59.267-1.039l.016-.328.004-.188.004-.431-.001-7-.006-.367-.012-.304-.02-.254a2.19 2.19 0 0 0-.251-.844c-.256-.502-.664-.91-1.165-1.165-.344-.175-.664-.247-1.182-.275l-.377-.012-.215-.002zm-.006 2l.282.004.303.014.136.014.051.009.075.02c.01.004.019.007.026.011.125.064.227.166.291.291l.01.023.018.06.015.087.011.122.014.383.004.444-.002 7.053-.009.347-.01.163-.014.119-.017.082-.021.055c-.064.125-.166.227-.291.291l-.023.01-.06.018-.087.015-.122.011-.383.014-.444.004-7.053-.002-.347-.009-.163-.01-.119-.014-.082-.017-.055-.021c-.126-.064-.228-.166-.291-.291l-.011-.026-.02-.075-.016-.114-.007-.074-.014-.306-.004-.285V8.897l.004-.282.014-.303.014-.136.009-.051.02-.075c.004-.01.007-.019.011-.026.064-.125.166-.227.291-.291l.026-.011.075-.02.114-.016.074-.007.306-.014.285-.004h7.186z"></path></svg></button>
    <button class="regenerate"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M7.539 16.444l.08.09c-.038-.038-.072-.078-.103-.121l-.041-.062-.027-.046-.027-.054-.025-.058-.018-.05-.017-.057-.013-.056-.01-.056-.007-.059-.004-.069v-.02-.025l.004-.064-.004.089a1.01 1.01 0 0 1 .011-.149l.009-.053.014-.061.016-.053.018-.051.024-.057.035-.068.016-.028.042-.063.029-.039a1.02 1.02 0 0 1 .077-.086l2.5-2.5a1 1 0 0 1 1.497 1.32l-.083.094-.792.791 4.226-.001.502-.009.263-.01.214-.014.173-.019.073-.011.125-.027a1.01 1.01 0 0 0 .103-.032l.088-.039a1.5 1.5 0 0 0 .656-.656l.037-.083.031-.096.026-.115.021-.141.017-.173.013-.212.015-.565.004-.797-.002-5.177-.007-.153-.004-.033a1.5 1.5 0 0 0-1.291-1.291l-.122-.009-.25-.004h-.241a1 1 0 0 1-.117-1.993l.117-.007.304.001.244.004.173.009.153.017a3.5 3.5 0 0 1 3.013 3.013l.017.153.009.173.004.244v5.575l-.005.469-.011.399-.018.339-.026.29a2.87 2.87 0 0 1-.226.873l-.095.199a3.5 3.5 0 0 1-1.53 1.529l-.18.086-.088.038-.179.066a2.93 2.93 0 0 1-.501.114l-.243.029-.278.021-.321.014-.372.009-.927.005-3.586-.001.793.794a1 1 0 0 1-1.32 1.497l-.094-.083-2.502-2.502c-.028-.028-.054-.057-.078-.088zm4.924-12.879l.05.075.013.021.041.079.019.043.024.067.008.027h0l.008.027.013.053.01.056h0l.007.061.003.055v.032l-.001.025.001.008-.003.042v.01h0l-.007.064h0l-.01.056h0l-.012.053-.008.027h0l-.008.027-.024.066-.019.043-.032.063-.021.036-.05.074-.013.018-.073.084-.01.01-2.5 2.5a1 1 0 0 1-1.497-1.32l.083-.094.792-.793-4.015.001-.584.007-.432.015-.115.007-.195.019-.155.024-.123.031-.101.037-.045.022a1.5 1.5 0 0 0-.656.656l-.022.045-.037.101-.031.123-.013.073-.021.174-.009.103-.014.244-.009.303-.007.584.003 5.671.009.122a1.5 1.5 0 0 0 1.159 1.268l.165.027.153.007.427.002a1 1 0 0 1 .117 1.993l-.117.007-.548-.004-.173-.009-.153-.017a3.5 3.5 0 0 1-3.013-3.013l-.017-.153-.009-.173-.004-.244.001-5.575.01-.676.014-.368c.026-.508.08-.832.184-1.13l.078-.196.095-.199a3.5 3.5 0 0 1 1.53-1.53l.091-.045.178-.079.179-.066.187-.054.204-.043.228-.033.125-.013.278-.021.321-.014.579-.011.72-.003h3.586l-.793-.793A1 1 0 0 1 9.772.87l.094.083 2.5 2.5.041.043h0l.01.011-.051-.054.067.074.03.038h0z"></path></svg></button>`;

  gptMessage.appendChild(buttonsContent);

  // Crie a spacediv
  const spacediv = document.createElement("div");
  spacediv.className = "spacediv";

  // Adicione a spacediv abaixo do gptMessage
  resultText.appendChild(spacediv);

  // Agora, chame a função para animar gradualmente a resposta do modelo
  escrevendoLetra(responseContent);

  hljs.highlightAll();

  // Limpe o campo de entrada após o envio da mensagem
  inputText.value = "";
}

// Função para escrevendoLetra
function escrevendoLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 3 * i);
  });
}
