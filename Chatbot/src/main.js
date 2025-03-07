import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_INSTRUCTION } from "./instructions.js";


const apikey =import.meta.env.VITE_API_KEY;
console.log(apikey);
const input = document.getElementById("input");
const messageContainer = document.getElementById("userResponse");
const paper = document.getElementById("paper");

const API_KEY = "AIzaSyALDRZHkyT0HSVOIVdbK5XxghDWMsBx5ac"; 
const genAI = new GoogleGenerativeAI(API_KEY);

// Function to handle user input
async function handleUserInput() {
    const inputText = input.value.trim();

    if (inputText === "") {
        alert("Please enter a valid message");
        return;
    }

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = `<strong>You:</strong> ${inputText}`;
    messageContainer.appendChild(userMessage);

    input.value = "";

    // Get AI response
    const aiResponse = await generateAIResponse(inputText);
    displayAIResponse(aiResponse);
}

// Function to display AI response
function displayAIResponse(responseText) {
    const aiMessage = document.createElement("div");
    aiMessage.className = "ai-message";
    aiMessage.innerHTML = `<strong>AI:</strong> ${responseText}`;
    messageContainer.appendChild(aiMessage);
}

// Function to generate AI response
async function generateAIResponse(userInput) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Combine AI instructions with user input
        const finalPrompt = `${AI_INSTRUCTION} \n\nUser: ${userInput}`;

        const result = await model.generateContent(finalPrompt);
        const response = await result.response.text();

        return response;
    } catch (error) {
        console.error("Error:", error);
        return "Sorry, something went wrong!";
    }
}

// Event listeners
paper.addEventListener("dblclick", handleUserInput);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleUserInput();
    }
});
