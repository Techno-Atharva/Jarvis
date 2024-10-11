const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    recognition.continuous = true;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
    
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Initializing Jarvis");
    speak("Ready to go Boss");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = localStorage.getItem("lang")


recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss, how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('who am i')) {
        const finalText = "You are my creator, who have created me";
        speech.text = finalText;
    }

    else if(message.includes('my name')) {
        const finalText = "your name is Atharva";
        speech.text = finalText;
    }

    else if(message.includes('your name')) {
        const finalText = "My name is Jarvis";
        speech.text = finalText;
    }

    else if(message.includes('good job')) {
        const finalText = "Thank U dude!";
        speech.text = finalText;
    }

    else if(message.includes('what is coding')) {
        const finalText = "coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks. It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages.";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open science')) {
        window.open("https://youtube.com/@exphub10th?si=rZdF-BQJB4L1QUkL", "_blank");
        const finalText = "Opening Science";
        speech.text = finalText;
    }

    else if(message.includes('open mathematics')) {
        window.open("https://youtube.com/@shobhitnirwan-9th?si=ov1j9iO6w8SC4rzt", "_blank");
        const finalText = "Opening Maths";
        speech.text = finalText;
    }

    else if(message.includes('open sst')) {
        window.open("https://youtube.com/@digrajsinghrajput214?si=JLMIomv7AHDqu93U", "_blank");
        const finalText = "Opening SST";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }

    else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening Whatsapp";
        speech.text = finalText;
    }


    else if(message.includes('open pw')) {
        window.open("https://www.pw.live/study/batches/studyy", "_blank");
        const finalText = "Opening PW";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric", year: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
