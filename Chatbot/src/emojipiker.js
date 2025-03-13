// emojiPicker.js

// Get the emoji button and input element
const emojiButton = document.getElementById('emojiButton');
const messageInput = document.getElementById('input');

// Initialize the EmojiButton picker
let picker =  EmojiButton();

// Open the emoji picker when the emoji button is clicked
emojiButton.addEventListener('click', () => {
  picker.togglePicker(emojiButton);
});

// Insert the selected emoji into the input field
picker.on("emoji", emoji => {
  messageInput.value += emoji;  // Add emoji to the input field
});
