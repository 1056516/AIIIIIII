// Example: Initialize the chat count
let chatCount = 40; // Start with 40 chats

// Example: Simulate an AI response and decrement the chat count
function simulateAiResponse(message) {
    const aiResponse = "Sure, here's your requested story: Once upon a time...";
    addAiMessage(aiResponse + " 😊"); // Add an emoji to the AI's response
    chatCount--; // Decrease the chat count
    updateChatCount(); // Update the display
}

// Example: Update the chat count display
function updateChatCount() {
    const chatCountElement = document.querySelector('.chat-count');
    chatCountElement.textContent = `Chats left: ${chatCount}`;
}
