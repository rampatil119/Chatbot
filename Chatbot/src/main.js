import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_INSTRUCTION } from "./instructions.js";


const apikey =import.meta.env.VITE_API_KEY;
console.log(apikey);
const input = document.getElementById("input");
const messageContainer = document.getElementById("userResponse");
const paper = document.getElementById("paper");
const focusButton=document.getElementById('focusButton')
const popup = document.getElementById('popup')
const closePopButton = document.getElementById('close-popup')
let messgeCount=0;

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

    messgeCount++;
        if (messgeCount==2 || messgeCount==3 ) {
          showLoginpopup()
        }

    input.value = "";
      
      if(showLoginpopup()=='block'){
        attachmentButton.style.display='none'

      }

    function showLoginpopup(){
        popup.style.display='block'
        input.disabled =true;
    }

   closePopButton.addEventListener('click',()=>{
      popup.style.display='none'
      input.disabled=false;
   })
    

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
paper.addEventListener("click", handleUserInput);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" ) {
      
        event.preventDefault();
        handleUserInput();
    }
});


focusButton.addEventListener("click",()=>{
    const userMessage = document.getElementsByClassName('user-message');
    if (userMessage.length>0) {
        const lastMessage =userMessage[userMessage.length -1];

        lastMessage.contentEditable = true;
        lastMessage.focus();
        
        function saveMessage() {
            input.value = lastMessage.innerHTML.trim();
            lastMessage.contentEditable=false;
            
        }
        lastMessage.addEventListener('blur',saveMessage)

        lastMessage.addEventListener('keydown',(e)=>{
            if (e.key==='Enter') {
                e.preventDefault();
                saveMessage();
                
            }
        })
    }else{
        alert("no msg to edit")
    }
})


