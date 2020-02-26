let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn1 = document.getElementById("btn0");
let btn2 =document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");


let createQuestion = function (questionText, choice1, choice2, choice3,choice4, correctChoice){

    btn1 = document.createElement("choice1");
    btn2 = document.createElement("choice2");
    btn3 = document.createElement("Choice3");
    btn4 = document.createElement("Choice4");
    correctChoice = document.createElement("CQ");

    createQuestion = document.getElementById();
};

let DoTheStuff = function () {

    btn1.onclick = function () {checkCorrect(this)};
    btn2.onclick = function () {checkCorrect(this)};
    btn3.onclick = function () {checkCorrect(this)};
    btn4.onclick = function () {checkCorrect(this)};

    if(count === 0){
        createQuestion("Which anime do you prefer?", "Naruto", "Dragon Ball z", "Black Clover", "Seven Deadly Sins");
    }else if(count === 1){
        createQuestion("Which animal do you prefer?", "Shark", "Dolfins", "Pandas", "Big cats");
    }else if(count === 2){
        createQuestion("Which Dish do you prefer?", "Tacos", "Pizza", "Chicken", "Fish");
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerText = "Question" + (count + 1) + "of" + numQuestions;
    };

    let checkCorrrect = function (button) {
        if (correctOne === "choice1");
    };

};