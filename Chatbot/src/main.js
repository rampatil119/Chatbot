const input = document.getElementById('input');
const Button = document.getElementById('sendButton');
const chatbotResponse = document.getElementById('chatbotResponse');

// Function to handle the user's input and display the response
function handleUserInput() {
    const inputText = input.value.trim(); 

    // Check if the input is empty
    if (inputText === '') {
        alert("Please enter a valid message");
        return; 
    }

  
    chatbotResponse.innerHTML += "You: " + inputText + "<br>"; 

 
    const chatbotReply = "Chatbot: I see you're talking about '" + inputText + "'. Let me help you!";
    
    
    chatbotResponse.innerHTML += chatbotReply + "<br>";

    
    input.value = '';
}


Button.addEventListener('click', handleUserInput);


input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
        event.preventDefault(); 
        handleUserInput(); 
    }
}); 
