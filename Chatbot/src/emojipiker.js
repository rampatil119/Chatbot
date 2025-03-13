import EmojiButton from 'emoji-button';

// Get the emoji button and input element
const emojiButton = document.getElementById('emojiButton');
const messageInput = document.getElementById('input');

const picker = new EmojiButton(); // Initialize the emoji picker

emojiButton.addEventListener('click', () => {
  picker.togglePicker(emojiButton); // Show or hide the emoji picker
});

picker.on("emoji", emoji => {
  messageInput.value += emoji;  // Add the emoji to the input field
});
    
