import { Queue } from "./queue.js";

const queue = new Queue();
let tokenNumber = 1; // Start from 1
const speech = new SpeechSynthesisUtterance();

document.getElementById("btnGenerateToken").addEventListener("click", () => {
    const userName = prompt("Enter User Name");
    if (userName) {
        queue.enqueue(`${tokenNumber} [${userName}]`);
        loadTokens();
        alert("Token Generated");
        tokenNumber++; // Increment after generating the token
    }
});

function loadTokens() {
    const lstTokens = document.getElementById("lstTokens");
    lstTokens.innerHTML = "";
    for (const item of queue.collection) {
        const opt = document.createElement("option");
        opt.text = item;
        lstTokens.appendChild(opt);
    }
    updateCallButtons();
    updateUserMessage();
}

function updateCallButtons() {
    const buttons = document.querySelectorAll('[id^="btncall"]');
    buttons.forEach(button => {
        button.disabled = queue.collection.length === 0;
    });
}

function updateUserMessage() {
    const userMessage = document.getElementById("user-message");
    if (queue.collection.length === 0) {
        userMessage.textContent = "To use the token system please generate Token";
    } else {
        userMessage.textContent = "";
    }
}

document.getElementById("btncall").addEventListener("click", () => {
    callCustomer(1);
});

document.getElementById("btncall1").addEventListener("click", () => {
    callCustomer(2);
});

document.getElementById("btncall2").addEventListener("click", () => {
    callCustomer(3);
});

function callCustomer(counterId) {
    const currentToken = queue.dequeue();
    if (currentToken) {
        const userName = currentToken.match(/\[(.*?)\]/)[1]; // Extract text inside square brackets
        speech.text = `${userName} please go to Counter ${counterId}`;
        window.speechSynthesis.speak(speech);
        document.getElementById(`lstcounter${counterId}`).innerHTML = `<option>${currentToken}</option>`;
    }
    loadTokens();
}

// Initial call to update button states and user message
updateCallButtons();
updateUserMessage();