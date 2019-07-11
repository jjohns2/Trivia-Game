
//Questions and list of answers
var questionsStore = [
    {
        gameQuestion: 'Where does Toby move to?',
        options: ['Puerto Rico','Costa Rica', 'Jamaica', 'Dominican Republic'],
        correctAnswer: "Costa Rica",
        image: "<img src='https://gph.is/1sFWgGB' alt='Toby is hit by a paper airplane' class='gifs'>"
    },
    {
        gameQuestion: 'There has been a murder in...',
        options: ['Savannah','Scranton','New York', 'Detroit'],
        correctAnswer: "Savannah",
        image: "<img src='https://tenor.com/5sUq.gif' alt='The Office Staff Standoff with Hand Guns' class='gifs'>"
    },
    {
        gameQuestion: 'What song does Dwight sing in an attempt to guilt Jim about leaving Pam alone with the children after his paternity leave ends?',
        options: ['Cats in the Cradle','Isnt She Lovely','Papa was a Rolling Stone','Big Poppa'],
        correctAnswer: "Cats in the Cradle",
        image: "<img src='https://gph.is/2AWLy5L' alt='Jim wants it to stop' class='gifs'>"
    },
    {
        gameQuestion: 'What is the name of the cat that Dwight kills?',
        options: ['Bandit','Sprinkles','Princess Lady','Comstock'],
        correctAnswer: "Bandit",
        image: "<img src='https://gph.is/1tnrbbp' alt='Angela throwing Bandit into the ceiling' class='gifs'>"
    },
    {
        gameQuestion: "When David Wallace is laid of from Dunder Mifflin, what product is he in the middle of creating when Michael Scott comes to visit him?",
        options: ['Suck It','Staple Machine Gun','Drums and Guns','Robes for All Occasions'],
        correctAnswer: 'Suck It',
        image: '<img src="https://tenor.com/5sUq.gif" alt="David Wallace Sighing>" class="gifs">'

    },
    {
        gameQuestion: 'In season seven, what musical did Andy star in?',
        options: ['Grease','Sweeney Todd','West Side Story','Les Miserables'],
        correctAnswer: 'Sweeney Todd',
        image: "<img src'https://tenor.com/5BWB.gif' alt='Andy saying that everyone wants to die sarcastically' class='gifs'>"
    },
    {
        gameQuestion: 'In the season finale, who moved to a remote location in Florida?',
        options: ['Stanley','Creed','Phyllis','Andy'],
        correctAnswer: 'Stanley',
        image: "<img src='https://gph.is/13DkEpQ' alt='Stanley Nodding' class='gifs'>"
    }
];

//storing game data
var correctScore = 0;
var wrongScore = 0;
var timer = 20;
var questionProg = 0;

//Questions after transition from start screen

function questionsUp () {
    $('#question-content').append("<p id='answerquestion'>" + questionsStore[questionProg].gameQuestion + "</p>");
    console.log( questionsStore[questionProg].gameQuestion)
    $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[0] + "</p>");
    $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[1] + "</p>");
    $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[2] + "</p>");
    $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[3] + "</p>");
}

//3 should bring up a “wrong” screen
//1 should bring up a “correct” screen


// Time Up Screen
//Time’s up = an incorrect question point
function timeUp() {
    $("#question-content").append("<p>Out of Time!</p>");
    $("#question-content").append(questionsStore[questionProg].image);
    wrongScore++;
    questionProg++;
}


// Correct Screen
function correctAnswer() {
    $("#question-content").append("<p>That's Right!</p>");
    $("#question-content").append(questionsStore[questionProg].image);
    correctScore++;
    questionProg++;
}


// Wrong Screen
function wrongAnswer() {
    $("#question-content").append("<p>Sorry! That's Incorrect.</p>");
    $("#question-content").append(questionsStore[questionProg].image);
    wrongScore++;
    questionProg++;
}



//Timer
//Countdown of 30 Seconds
//Switch to Time’s Up! when over

//Final Score Screen




//Reset Game Function
function gameReset() {
    correctScore = 0;
    wrongScore = 0;
    questionProg = 0;
}

//Start Screen
//nothing starts until player hits start

$("#startGamebutton").on("click", function () {
    $("#startGamebutton").hide();
    questionsUp()
})
