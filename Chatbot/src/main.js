const input = document.getElementById('input');

const messageContainer = document.getElementById('userResponse');


const paper = document.getElementById('paper')









function handleUserInput() {
    const inputText = input.value.trim();


    if (inputText === '') {
        alert("Please enter a valid message");
        return;
    }
    const userMessage = document.createElement('div')
    userMessage.className = 'user-meassage';
    userMessage.innerHTML = `<strong>you:</strong>${inputText}`;
    messageContainer.appendChild(userMessage)



// const chatMessage=document.createElement('div')
// chatMessage.className='chat-meassage';
// chatMessage.innerHTML=`<p>ai:</p>`

    input.value = '';
}





paper.addEventListener('dblclick', handleUserInput)


input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUserInput();
    }
});




// const { GoogleGenerativeAI } = require("@google/generative-ai");

// Replace with your actual API key
const API_KEY = "YOUR_API_KEY";
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateAIResponse(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response.text();
        console.log("AI Response:", response);
    } catch (error) {
        console.error("Error:", error);
    }
}

generateAIResponse("Explain how AI works.");



