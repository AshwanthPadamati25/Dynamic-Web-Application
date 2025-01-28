let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let sendMsgBtn = document.getElementById("sendMsgBtn");
let userInput = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");

let msgToChatbotContainer = document.createElement("div");
msgToChatbotContainer.classList.add("d-flex","flex-row","justify-content-left")
chatContainer.appendChild(msgToChatbotContainer);

let msgFromChatbotContainer = document.createElement("div");
msgFromChatbotContainer.classList.add("d-flex", "flex-row", "justify-content-right")
chatContainer.appendChild(msgFromChatbotContainer);

sendMsgBtn.onclick = function() {

    let randomNo = Math.ceil(Math.random()*chatbotMsgList.length) - 1;

    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("d-flex","flex-row","justify-content-left")
    chatContainer.appendChild(msgToChatbotContainer);

    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("d-flex", "flex-row", "justify-content-right")
    chatContainer.appendChild(msgFromChatbotContainer);

    let msgToChatbot = document.createElement("p");
    msgToChatbot.classList.add("msg-to-chatbot","ml-auto");
    msgToChatbot.textContent = userInput.value;
    msgToChatbotContainer.appendChild(msgToChatbot);

    let msgFromChatbot = document.createElement("p");
    msgFromChatbot.classList.add("msg-from-chatbot");
    console.log(chatbotMsgList[randomNo]);
    msgFromChatbot.textContent = chatbotMsgList[randomNo];
    msgFromChatbotContainer.appendChild(msgFromChatbot);

    userInput.value = "";
    
}