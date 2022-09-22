// folder containing sounds
const soundsUrl = "./sounds/"
// name of soundfiles
const soundsFiles = [
    "clap.wav",
    "hihat.wav",
    "kick.wav",
    "openhat.wav",
    "ride.wav",
    "snare.wav",
    "tink.wav",
    "tom.wav"
]

const drumSounds = []


/* soundsFiles.forEach(soundFile => {
    const audio = new Audio(soundsUrl + soundFile)
    drumSounds.push(audio)
    //audio.controls = true

    const buttonElement = document.createElement("button")
    buttonElement.textContent = soundFile
    document.body.append(buttonElement)

    buttonElement.onclick = () => {
        audio.play()
    }
}) 
const keyMaps = {
    "q": drumSounds[0],
    "w": drumSounds[1],
    "e": drumSounds[2],
    "r": drumSounds[3],
    "t": drumSounds[4],
    "y": drumSounds[5],
    "u": drumSounds[6],
    "i": drumSounds[7],
}
*/
const keyMaps = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i"
]

/* 
// manually finding keys in arrays:
let findKey = "e"
let keyIsInArray = false

keyMaps.forEach(currentKey => {
    if (currentKey == findKey) keyIsInArray = true
})

console.log(keyIsInArray)
 */
let drumMap = soundsFiles.map((soundFile, index) => {
    const audio = new Audio(soundsUrl + soundFile)

    const buttonElement = document.createElement("button")
    buttonElement.textContent = soundFile
    document.body.append(buttonElement)

    /* buttonElement.onclick = () => {
        audio.play()
    } */
    buttonElement.addEventListener("dblclick", () => {
        audio.play()
    })

    return {
        key: keyMaps[index],
        audio: audio,
        button: buttonElement
    }
})

console.log(drumMap)
window.onkeydown = (event) => {
    const key = event.key

    // using built in array-method: .find to find a key in an array
    const audioElement = drumMap.find(currentElement => key == currentElement.key)
/* 
    // finding key in array manually by using a foreach loop:
    let audioElement = null
    drumMap.forEach(currentElement => {
        if (key == currentElement.key) audioElement = currentElement
    })
 */

    if (audioElement) audioElement.audio.play()
    else console.log("Invalid key!")
}