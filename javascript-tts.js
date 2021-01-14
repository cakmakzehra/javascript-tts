if ('speechSynthesis' in window) {
  console.log('Broswer supports speech synthesis');

  var synthesis = window.speechSynthesis;

  //list of all supported voices
  synthesis.getVoices().forEach(function(voice) {
    console.log({
      name: voice.name,
      lang: voice.lang,
      uri: voice.voiceURI,
      local: voice.localService,
      default: voice.default
    })
  });


  var voice = synthesis.getVoices().filter(function(voice) {
    return voice.lang === 'en';
  })[0];

  var message = new SpeechSynthesisUtterance('Hello World');

  message.voice = voice;
  message.pitch = 1.5;
  message.rate = 1.25;
  message.volume = 0.8;
  
  message.onstart = function() {
    console.log('Speech has started');
  }

  message.onend = function() {
    console.log('Speech has finished');
  }

  message.onerror = function(event) {
    console.log('An error has occurred with the speech synthesis: ' + event.error);
  }

  synthesis.speak(message);
} else {
  console.log('Sorry, your browser does not support the speech synthesis API !');
}