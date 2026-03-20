function submitQuiz() {
    const scoreElement = document.getElementById("score");
    const result = document.getElementById("result");
    const qOne = document.querySelector('input[name="quiz-1"]:checked');
    const qTwo = document.querySelector('input[name="quiz-2"]:checked');
    const qThree = document.querySelector('input[name="quiz-3"]:checked');
    const qFour = document.querySelector('input[name="quiz-4"]:checked');
    const qFive = document.querySelector('input[name="quiz-5"]:checked');
    const qSix = document.querySelector('input[name="quiz-6"]:checked');
    const qSeven = document.querySelector('input[name="quiz-7"]:checked');
    const qEight = document.querySelector('input[name="quiz-8"]:checked');
    const qNine = document.querySelector('input[name="quiz-9"]:checked');
    const qTen = document.querySelector('input[name="quiz-10"]:checked');


    const total = 10;
    let score = 0;

    // check answers
    // answer 1

    if (qOne.value === "h1") {
        score++;
    }

    // answer 2

    if (qTwo.value === "4") {
        score++;
    }

    // answer 3

    if (qThree.value === "2") {
        score++;
    }

    // answer 4

    if (qFour.value === "green") {
        score++;
    }

    // answer 5

    if (qFive.value === "8") {
        score++;
    }

    // question 6

if (qSix.value === "blue") {
        score++;
    }

    // question 7

if (qSeven.value === "3.14") {
        score++;
    }

    // question 8

if (qEight.value === "2000") {
        score++;
    }

    // question 9

if (qNine.value === "adverb") {
        score++;
    }

    // question 10

if (qTen.value === "triangle") {
        score++;
    }

    // displays to HTML
    scoreElement.textContent = "Score: " + score;
    result.textContent = " You got " + score + " out of " + total;
}