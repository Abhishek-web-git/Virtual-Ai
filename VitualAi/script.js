let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)


}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours <16){
        speak("Good Mornig Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()

// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript

    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
recognition.start()
btn.style.display="none"
voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("I'm kai created by Abhishek Arya")
    }
    else if(message.includes("what's your name")){
        speak("My Name is Kai, I'm a Virtual AI")
    }
    else if(message.includes("what's my name")){
        speak("Sir Your name is Abhishek Kumar")
    }   
    else if(message.includes("how to learn dsa")){
        speak("here is the some tips from Abhishek, how to learn dsa... step 1. focus on depth, step 2. practice multiple ways, step 3. master each data structure, step 4. practice spaced repetition, step 5. identify pattern and isolate them, step 6. expand your knowladge, step 7. identify typical core problems....")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.co.in/")
    }
    else if(message.includes("open video")){
        speak("opening video")
    window.open("https://youtu.be/p23bkA4ov8k?si=oq1F6ikgIdxbRaow")
    }
    else if(message.includes("now play bhojpuri video")){
        speak("opening video")
    window.open("https://youtu.be/B_Y2Ya4e9PY?si=O7-fOyh9fVw_lU1q")
    }
    
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp:\\")     
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator:\\")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }

    else{
        let finalText="this is what i found on internet regarding" + message.replace("Kite","") || message.replace("kai","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("kai","")}`,)
    }
    


}
