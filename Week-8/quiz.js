function submitQuiz() {
    const scoreElement = document.getElementById("score");
    const result = document.getElementById("result");
    const qOne = document.querySelector('input[name="quiz-1"]:checked');
    const qTwo = document.querySelector('input[name="quiz-2"]:checked');
    const qThree = document.querySelector('input[name="quiz-3"]:checked');
    const qFour = document.querySelector('input[name="quiz-4"]:checked');
    const qFive = document.querySelector('input[name="quiz-5"]:checked');


    const total = 5;
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

    // displays to HTML
    scoreElement.textContent = "Score: " + score;
    result.textContent = " You got " + score + " out of " + total;
}