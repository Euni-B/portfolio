function submitQuiz() {
    const scoreElement = document.getElementById("score");
    const result = document.getElementById("result");
    const qOne = document.querySelector('input[name="quiz-1"]:checked');
    const qTwo = document.querySelector('input[name="quiz-1"]:checked');

    const total = 5;
    let score = 0;

    // check answers
    // answer 1

    if (qOne.value === "h1") {
        score++;
    }

    // answer 2

    



    // displays to HTML
    scoreElement.textContent = "Score: " + score;
    result.textContent = " You got " + score + " out of " + total;
}