// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    if (scoreCounter >= 6){
        document.getElementById("pass-end-screen").style.display = "flex"
    } else {
        document.getElementById("fail-end-screen").style.display = "flex"
    }
}
// END HERE

let questionBank = [
    [
        ["ITEMS/beam.png", "Benilde Arts Management (BeAM)", true],
        ["ITEMS/cba.png", "Computer Business Association (CBA)", false],
        ["ITEMS/bind.png", "Benildean Industrial Designers (BIND)", true],
        "SDA Cluster"
    ],
    [
        ["ITEMS/guild.png", "Gamers Union for Innovation and Leadership (GUILD)", true],
        ["ITEMS/hrms.png", "Human Resource Management Society (HRMS)", true],
        ["ITEMS/gdsc.png", "Google Developer Student Clubs (GDSC)", false],
        "SMIT Cluster"
    ],
    [
        ["ITEMS/saga.png", "Social and Academic Guild for Architecture (SAGA)", false],
        ["ITEMS/trip.png", "Travelers in Progress (TRIP)", true],
        ["ITEMS/chip.png", "Chefs in Progress (CHIP)", true],
        "SHRIM Cluster"
    ],
    [
        ["ITEMS/bcsi.png", "Benilde Committee on Student Involvement (BCSI)", false],
        ["ITEMS/brcyc.png", "Benilde Red Cross Youth Council (BRCYC)", true],
        ["ITEMS/bbb.png", "Best Buddies Benilde (BBB)", true],
        "Socio Civic Cluster"
    ],
    [
        ["ITEMS/gaming.png", "Romancon Gaming", true],
        ["ITEMS/bdv.png", "Benilde Debate Varsity (BDV)", false],
        ["ITEMS/unicef.png", "UNICEF Benilde", true],
        "Special Interest Cluster"
    ],
    [
        ["ITEMS/csg.png", "Benilde Central Student Government (CSG)", true],
        ["ITEMS/strains.png", "Student Trainers (STRAINS)", true],
        ["ITEMS/spot.png", "Stage Production Operations Team (SPOT)", false],
        "SIU Recognized Student Organization Cluster"
    ],
    [
        ["ITEMS/mmx.png", "Media Max (MMX)", false],
        ["ITEMS/df.png", "Dulaang Filipino", true],
        ["ITEMS/coro.png", "Coro San Benildo", true],
        "Student Artists Group"
    ],
    [
        ["ITEMS/bpc.png", "Benildean Press Corps", true],
        ["ITEMS/adlaw.png", "Adlaw", false],
        ["ITEMS/astra.png", "Ad Astra", true],
        "Student Journalist"
    ]
]

const choiceImageA = document.getElementById("choice-img-one")
const choiceImageB = document.getElementById("choice-img-two")
const choiceImageC = document.getElementById("choice-img-three")

let choiceTextA = document.getElementById("choice-text-one")
let choiceTextB = document.getElementById("choice-text-two")
let choiceTextC = document.getElementById("choice-text-three")

let clusterPrompt = document.getElementById("cluster-prompt")

let scoreDisplay = document.getElementById("score")

let scoreCounter = 0
let roundIndex = 0

function startGame() {
    hideStartScreen()
}

function changeDisplay() {
    choiceImageA.setAttribute("src", questionBank[roundIndex][0][0])
    choiceTextA.innerHTML = questionBank[roundIndex][0][1]
    choiceImageB.setAttribute("src", questionBank[roundIndex][1][0])
    choiceTextB.innerHTML = questionBank[roundIndex][1][1]
    choiceImageC.setAttribute("src", questionBank[roundIndex][2][0])
    choiceTextC.innerHTML = questionBank[roundIndex][2][1]
    clusterPrompt.innerHTML = questionBank[roundIndex][3]
    scoreDisplay.innerHTML = "SCORE: " + scoreCounter
}

function selectChoiceA() {
    if (roundIndex <= 7 && questionBank[roundIndex][0][2] == false){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 7){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceB() {
    if (roundIndex < 7 && questionBank[roundIndex][1][2] == false){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 7){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceC() {
    if (roundIndex <= 7 && questionBank[roundIndex][2][2] == false){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 7){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

document.getElementById("choice-btn-one").addEventListener("click",selectChoiceA)
document.getElementById("choice-btn-two").addEventListener("click",selectChoiceB)
document.getElementById("choice-btn-three").addEventListener("click",selectChoiceC)