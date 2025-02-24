var transcript = "";

function userSpeak(event) {
    transcript = event.results[event.results.length-1][0].transcript;
}

var text = document.getElementById("speech");

// Create a new instance of SpeechRecognition
var recognition = new window.webkitSpeechRecognition();

// Set the language to English
recognition.lang = 'en-US';

// Set continuous and interimResults to true
recognition.continuous = true;
recognition.interimResults = true;

// Handle the onresult event
recognition.onresult = function(event) {
  setTimeout(function() { userSpeak(event); }, 500);
  console.log(transcript);
  var result = transcript.toLowerCase();
  result=result.trimEnd();
  const words=result.split(".");
  var word=words[0];
  text.style.backgroundColor=word; 
  text.innerHTML = transcript;
};

// Handle the onerror event
recognition.onerror = function(event) {
  console.error(event.error);
};
