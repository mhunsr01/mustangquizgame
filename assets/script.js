var timeEl = document.querySelector('#time');
var playerEl = document.getElementById("player");
var saveButton = document.getElementById("save");
var hiscnameEl = document.getElementById("hiscname");
var highscoreEl = document.getElementById("highscore");
var highscoreEl = localStorage.highscore;
var hiscnameEl = localStorage.hiscname;
var displayplayerEl = document.getElementById("displayname");

localStorage.setItem("score", "0");
localStorage.setItem("hiscname", "nobody");
localStorage.setItem("highscore", "0");

saveButton.addEventListener("click", function() {
    
var player = {
    playerEl: playerEl.value,
}

localStorage.setItem("player", JSON.stringify(player));
displayplayerEl = player
console.log(displayplayerEl)
});

function startTimer () {
var count = 60;
var interval = setInterval(function(){
    timeEl.textContent = count
    count--;
  if (count <= -1){
    clearInterval(interval); 
    alert("Quiz Over, Thanks for playing!")
  }
}, 1000);
}

  var startbtn = document.querySelector("#startbtn")

  startbtn.addEventListener("click", timer)
  
  function timer () {
    var sixtyseconds = 60,
    display = document.querySelector('#time');
    startTimer(sixtyseconds, display);
     }

const Questions = [{
    id: 0,
    q: "What year was the Ford Mustang revealed?",
    a: [{ text: "1902", isCorrect: false },
        { text: "1965", isCorrect: false },
        { text: "1964", isCorrect: true },
        { text: "1963", isCorrect: false }
    ]
},
{
    id: 1,
    q: "Hhow many years was the Boss 429 produced?",
    a: [{ text: "4", isCorrect: false, isSelected: false },
        { text: "3", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "2", isCorrect: true }
    ]
},
{
    id: 2,
    q: "What is the fastest Mustang?",
    a: [{ text: "Boss 429", isCorrect: false },
        { text: "Mach 1", isCorrect: false },
        { text: "GT500", isCorrect: true },
        { text: "GT350", isCorrect: false }
    ]
},
{
    id: 3,
    q: "What is the fastest Mustang?",
    a: [{ text: "Boss 429", isCorrect: false },
        { text: "Mach 1", isCorrect: false },
        { text: "GT500", isCorrect: true },
        { text: "GT350", isCorrect: false }
    ]
},
{
    id: 4,
    q: "Where was the Mustang introduced?",
    a: [{ text: "Detroit", isCorrect: false },
        { text: "Washington", isCorrect: false },
        { text: "New York", isCorrect: true },
        { text: "Paris", isCorrect: false }
    ]
},
{   
    id: 5,
    q: "What is the best color?",
    a: [{ text: "red", isCorrect: false },
        { text: "blue", isCorrect: false },
        { text: "all", isCorrect: true },
        { text: "black", isCorrect: false }
    ]  
},
{
    id: 6,
    q: "How many people fit in a Mustang?",
    a: [{ text: "7", isCorrect: false },
        { text: "1-6", isCorrect: false },
        { text: "1-4", isCorrect: true },
        { text: "3 in the trunk", isCorrect: false }
    ]
},
{
    id: 7,
    q: "What car is better than a Mustang?",
    a: [{ text: "Camaro", isCorrect: false },
        { text: "Challenger", isCorrect: false },
        { text: "None!", isCorrect: true },
        { text: "Audi", isCorrect: false }
    ]
},
{
    id: 8,
    q: "What version is better of the Mustang?",
    a: [{ text: "Convertible", isCorrect: false },
        { text: "Coupe", isCorrect: false },
        { text: "All of them!", isCorrect: true },
        { text: "Hatchback", isCorrect: false }
    ]
},
{
    id: 9,
    q: "How many cylinders does a Mustang have?",
    a: [{ text: "4", isCorrect: false },
        { text: "6", isCorrect: false },
        { text: "All plus electric", isCorrect: true },
        { text: "8", isCorrect: false }
    ]
},
{
    id: 10,
    q: "Who should own a Mustang?",
    a: [{ text: "Old people", isCorrect: false },
        { text: "Young people", isCorrect: false },
        { text: "Everyone", isCorrect: true },
        { text: "No one", isCorrect: false }
    ]
}
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})
}
// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
        localStorage.score >= 0(localStorage.score ++);
   
    } else if
        (selected == "false") {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
        timeEl -5;
    }})

if (localStorage.score.value > localStorage.highscore.value) {
    localStorage.highscoreEl.push(localStorage.score)
    hiscnameEl = player
} else {
    hiscnameEl = localStorage.hiscname.value;
    highscoreEl = localStorage.highscore.value;
}

// function endquiz () {
//     clearInterval(timer);
// }
    
    if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
 if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
 }})