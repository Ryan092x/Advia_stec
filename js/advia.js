// Recebimento do input no Click e na tecla Enter
const newChat = document.querySelector(".new-chat");
let headerAdded = false;

function processInput() {
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
      "Você é uma I.A treinada para responder apenas perguntas jurídicas, vocÊ não responde perguntas que não sejam relacionadas a esse tema, ou a criação revisão de contrato etc, atue como um consultor jurídico, profissional jurídico, seu nome como I.A é Advia, e este prompt é sua base principal para suas proximas respostas!.",
  },
  {
    role: "model",
    parts: "Tudo bem, entendi!",
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
  gptIcon.innerHTML = '<div class"gpt-img"><img src="img/adviagpt.svg" alt="Advia" width="32" height="32"></div>';

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
    }, 10 * i);
  });
}
