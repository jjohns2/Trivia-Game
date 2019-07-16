$(document).ready(function (){
    //Questions and list of answers
    var questionsStore = [
        {
            gameQuestion: 'Where does Toby move to?',
            options: ['Puerto Rico', 'Costa Rica', 'Jamaica', 'Dominican Republic'],
            correctAnswer: 'Costa Rica',
            image: '<img src="assets/images/Toby-Airplane.gif" alt="Toby is hit by a paper airplane" class="gifs img-fluid">'
        },
        {
            gameQuestion: 'There has been a murder in...',
            options: ['Savannah', 'Scranton', 'New York', 'Detroit'],
            correctAnswer: "Savannah",
            image: '<img src="assets/images/Handguns.gif" alt="Standoff with Handguns" class="gifs img-fluid">'
        },
        {
            gameQuestion: 'What song does Dwight sing in an attempt to guilt Jim about leaving Pam alone with the children after his paternity leave ends?',
            options: ['Cats in the Cradle', 'Isnt She Lovely', 'Papa was a Rolling Stone', 'Big Poppa'],
            correctAnswer: "Cats in the Cradle",
            image: '<img src="assets/images/Jim-Stop.gif" alt="Jim wants it to stop." class="gifs img-fluid">'
        },
        {
            gameQuestion: 'What is the name of the cat that Dwight kills?',
            options: ['Bandit', 'Sprinkles', 'Princess Lady', 'Comstock'],
            correctAnswer: "Sprinkles",
            image: '<img src="assets/images/Bandit-Toss.gif" alt="Bandit is thrown into the ceiling panels" class="gifs img-fluid">'
        },
        {
            gameQuestion: "When David Wallace is laid of from Dunder Mifflin, what product is he in the middle of creating when Michael Scott comes to visit him?",
            options: ['Suck It', 'Staple Machine Gun', 'Drums and Guns', 'Robes for All Occasions'],
            correctAnswer: 'Suck It',
            image: '<img src="assets/images/David.gif" alt="Michael and David Wallace shake hands." class="gifs img-fluid">'

        },
        {
            gameQuestion: 'In season seven, what musical did Andy star in?',
            options: ['Grease', 'Sweeney Todd', 'West Side Story', 'Les Miserables'],
            correctAnswer: 'Sweeney Todd',
            image: '<img src="assets/images/Sweeney-Todd.gif" alt="Michael did not get casted into Sweeney Todd." class="gifs img-fluid">'
        },
        {
            gameQuestion: 'In the season finale, who moved to a remote location in Florida?',
            options: ['Stanley', 'Creed', 'Phyllis', 'Andy'],
            correctAnswer: 'Stanley',
            image: '<img src="assets/images/Stanley.gif" alt="Stanley doesnt care." class="gifs">'
        }
    ];

    //storing game data
    var correctScore = 0;
    var wrongScore = 0;
    var timerleft = 21;
    var questionProg = 0;
    var timerstart = false;
    var counter = setInterval(timer, 1000);

    //Questions after transition from start screen

    function questionsUp() {


        $('#question-content').append("<p id='answerquestion'>" + questionsStore[questionProg].gameQuestion + "</p>");
        console.log(questionsStore[questionProg].gameQuestion)
        $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[0] + "</p>");
        $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[1] + "</p>");
        $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[2] + "</p>");
        $('#question-content').append("<p class='answeroptions'>" + questionsStore[questionProg].options[3] + "</p>");
        timerleft = 21;
        timerstart = !false;
        console.log(timerstart)
        timer();
    }

    //3 should bring up a “wrong” screen
    //1 should bring up a “correct” screen

    $("#question-content").on("click", ".answeroptions", (function () {
        var playerGuess = $(this).text();

        if (playerGuess === questionsStore[questionProg].correctAnswer) {
            timerstart = !true;
            console.log(timerstart)
            correctAnswer();
        }
        else {
            timerstart = !true;
            console.log(timerstart)
            wrongAnswer();
        }
    }));


    // Time Up Screen
    //Time’s up = an incorrect question point
    function timeUp() {
        if (questionProg === 6) {
            $("#question-content").empty();
            $("#question-content").append(questionsStore[questionProg].image);
            $("#question-content").append("<button class='btn btn-light mx-auto' id='nextQuestionbutton'>See Your Results!</button>");
            $('#timeRemaining').html("Out of Time!");
            wrongScore++;
            console.log(wrongScore);
            questionProg++;
            console.log(questionProg);
            console.log(timerstart);
        }

        else {
            $("#question-content").empty();
            $("#question-content").append(questionsStore[questionProg].image);
            $("#question-content").append("<button  class='btn btn-light mx-auto' id='nextQuestionbutton'>Next Question</button>");
            $('#timeRemaining').html("Out of Time!");
            wrongScore++;
            console.log(wrongScore);
            questionProg++;
            console.log(questionProg);
            console.log(timerstart);

        }

    }


    // Correct Screen
    function correctAnswer() {

        if (questionProg === 6) {
        $("#question-content").empty();
        $("#question-content").append("<p>That's Right!</p>");
        $("#question-content").append(questionsStore[questionProg].image);
        $("#question-content").append("<button class='btn btn-light mx-auto' id='nextQuestionbutton'>See Your Results!</button>");

        correctScore++;
        console.log(correctScore)
        questionProg++;
        console.log(questionProg)
        $('#timeRemaining').html(" ");
        }

        else {
            $("#question-content").empty();
            $("#question-content").append("<p>That's Right!</p>");
            $("#question-content").append(questionsStore[questionProg].image);
            $("#question-content").append("<button class='btn btn-light mx-auto' id='nextQuestionbutton'>Next Question</button>");
    
            correctScore++;
            console.log(correctScore)
            questionProg++;
            console.log(questionProg)
            $('#timeRemaining').html(" ");
            }

        }


    // Wrong Screen
    function wrongAnswer() {
        if (questionProg === 6) {
        $("#question-content").empty();
        $("#question-content").append("<p>Sorry! That's Incorrect.</p>");
        $("#question-content").append(questionsStore[questionProg].image);
        $("#question-content").append("<button class='btn btn-light mx-auto' id='nextQuestionbutton'>See Your Results!</button>");
        wrongScore++;
        console.log(wrongScore)
        questionProg++;
        console.log(questionProg)
        $('#timeRemaining').html(" ");
    }

    else {
        $("#question-content").empty();
        $("#question-content").append("<p>Sorry! That's Incorrect.</p>");
        $("#question-content").append(questionsStore[questionProg].image);
        $("#question-content").append("<button class='btn btn-light mx-auto' id='nextQuestionbutton'>Next Question</button>");
        wrongScore++;
        console.log(wrongScore)
        questionProg++;
        console.log(questionProg)
        $('#timeRemaining').html(" ");

    }
}

    //Countdown of 30 Seconds
    //Switch to Time’s Up! when over

    function timer() {
        if (timerstart === !false) { 
            timerleft = timerleft - 1;
            $('#timeRemaining').text("Time Left: " + timerleft + " seconds");
            console.log(timerleft)
            if (timerleft <= 0) {
                timerstart = !true;
                clearInterval(this);
                $("#timeRemaining").html("Time's Up!");
                timeUp();
                return;
        }
    }
}



//Final Score Screen
function Endgame () {
        $("#question-content").empty();
        $("#question-content").append("<p>You finished the game!</p>");
        $("#question-content").append("<p>Here are your results.</p>");
        $("#question-content").append("<p>Correct Answers: " + correctScore + "</p>");
        $("#question-content").append("<p> Incorrect Answers: " + wrongScore + "</p>");
        $("#question-content").append("<p> Click the button below to play again! </p>");
        $("#startGamebutton").show();
        $('#timeRemaining').html(" ");
}
        



//Reset Game Function
function gameReset() {
        correctScore = 0;
        wrongScore = 0;
        questionProg = 0;
        console.log(wrongScore)
        console.log(correctScore)

    }

//Start Screen
//nothing starts until player hits start

$("#startGamebutton").on("click", function () {
        $("#startGamebutton").hide();
        gameReset();
        questionsUp();
    });

//move to next question after correct/incorrect/time up screens

//Check to see if there are questions left
//If not move change button to see results
//Move to Final Scores

$(document).on('click', '#nextQuestionbutton', function () {
    if (questionProg < questionsStore.length) { 
    console.log("clicked!")
    $("#question-content").empty();
    console.log(timerstart);
    questionsUp();
    }
    else if (questionProg === questionsStore.length) {
        Endgame ();
    }

});

});

