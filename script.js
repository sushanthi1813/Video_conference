const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

// Function to display chat messages
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simulated chat
chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const message = chatInput.value;
        displayMessage(`You: ${message}`);
        chatInput.value = '';
    }
});

// Simulated video streaming (replace with real WebRTC logic)
navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
        localVideo.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing camera and microphone:', error);
    });
