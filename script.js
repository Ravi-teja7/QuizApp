document.addEventListener("DOMContentLoaded", function () 
{
    const questions = [
        { question: "What is 1003 - 999 ?", answers: ["3", "4", "5", "6"], correct: "4", color: "#ff6b6b" },
        { question: "What is the capital of Italy?", answers: ["Berlin", "Madrid", "Paris", "Rome"], correct: "Rome", color: "#48c9b0" },
        { question: "Which programming language is used for web development?", answers: ["Python", "C++", "JavaScript", "Java"], correct: "JavaScript", color: "#f39c12" },
        { question: "Which of these is a front-end framework?", answers: ["Django", "React", "Node.js", "Flask"], correct: "React", color: "#8e44ad" },
        { question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: "7", color: "#3498db" },
        { question: "What is the boiling point of water?", answers: ["90°C", "100°C", "110°C", "120°C"], correct: "100°C", color: "#27ae60" },
        { question: "Who discovered mountains on the Moon?", answers: ["Einstein", "Newton", "Galileo", "Tesla"], correct: "Galileo", color: "#e74c3c" },
        { question: "What does HTML stand for?", answers: ["Hyper Transfer Markup Language", "HyperText Markup Language", "HighText Machine Learning", "None"], correct: "HyperText Markup Language", color: "#1abc9c" },
        { question: "Which planet is known as the Green Planet?", answers: ["Earth", "Uranus", "Mars", "Jupiter"], correct: "Uranus", color: "#d35400" },
        { question: "What is the largest River on Earth?", answers: ["Nile", "Ganga", "Amazon", "Reprua"], correct: "Nile", color: "#2c3e50" },
        { question: "Who wrote 'Hamlet'?", answers: ["Shakespeare", "Hemingway", "Dickens", "Austen"], correct: "Shakespeare", color: "#f1c40f" },
        { question: "What is the speed of light?", answers: ["100,000 km/s", "150,000 km/s", "300,000 km/s", "500,000 km/s"], correct: "300,000 km/s", color: "#e67e22" },
        { question: "Which gas do Humans Inhale?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: "Oxygen", color: "#34495e" },
        { question: "What is the capital of Japan?", answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct: "Tokyo", color: "#9b59b6" },
        { question: "Who invented the telephone?", answers: ["Edison", "Tesla", "Bell", "Newton"], correct: "Bell", color: "#e84393" },
        { question: "what current is used for our home?", answers: ["Direct current (DC)", "Electric current (EC)", "Alternating current (AC)", "Free Current (FC)"], correct: "Alternating current (AC)", color: "#2ecc71" },
        { question: "What is the smallest country in the world?", answers: ["Vatican City", "Monaco", "Liechtenstein", "Malta"], correct: "Vatican City", color: "#e74c3c" },
        { question: "Which metal is liquid at room temperature?", answers: ["Iron", "Silver", "Gold", "Mercury"], correct: "Mercury", color: "#2980b9" },
        { question: "Life span of HouseFly?", answers: ["20 days", "50 days", "1 year", "1 hour"], correct: "20 days", color: "#8e44ad" },
        { question: "What is the national bird of the USA?", answers: ["Eagle", "Peacock", "Hawk", "Owl"], correct: "Eagle", color: "#c0392b" }
    ];
    /* List Of Questions*/
        let currentQuestionIndex = 0;
        let score = 0;
        let timeLeft = 120; // 2 minutes countdown//
        /* Intial Page*/
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        const scoreDisplay = document.getElementById("score");
        const timerDisplay = document.getElementById("timer");
        const quizContainer = document.querySelector(".quiz-container");
        const body = document.body;
        
        function loadQuestion()
         {
            resetState();
            let currentQuestion = questions[currentQuestionIndex];
            questionElement.innerText = currentQuestion.question;
            body.style.background = currentQuestion.color;
            // card animation
            quizContainer.classList.remove("card-throw");
            setTimeout(() => quizContainer.classList.add("card-throw"), 50);
            
            currentQuestion.answers.forEach(answer =>
                {
                    const button = document.createElement("button");
                    button.innerText = answer;
                    button.classList.add("answer-btn");
                    button.addEventListener("click", () => checkAnswer(button, answer, currentQuestion.correct));
                    answerButtons.appendChild(button);
                });
    }

    function resetState()
    {
        answerButtons.innerHTML = "";
    }

    function checkAnswer(button, answer, correctAnswer)
    {
        const buttons = document.querySelectorAll(".answer-btn");
        
        let correctButton = null;
        buttons.forEach(btn =>
            {
                if (btn.innerText === correctAnswer)
                    {
                        correctButton = btn;
                    }
            });

    if (answer === correctAnswer)
        {
            button.classList.add("correct");
            score++;
        }
         else
         {
          button.classList.add("wrong");
          if (correctButton)
            {
                correctButton.classList.add("correct"); //correct answer is highlighted
            }
         }

    scoreDisplay.innerText = `Score: ${score}`;

    setTimeout(nextQuestion, 1500); // Delay before moving to the next question
}


    function nextQuestion()
    {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length)
            {
                loadQuestion();
            }
            else
            {
                showFinalPage();
            }
    }
/*final page Text*/
    function showFinalPage()
    {
        document.body.innerHTML = `
        <div class="final-page">
        <h2>🎉 CONGRATULATIONS! 🎉</h2>
        <p>Your Final Score: <strong>${score} / ${questions.length}</strong></p>
        <div id="blast-container"></div>
        </div>
        `;
        launchSparkleEffect();
        setTimeout(() => location.reload(), 6000);
    }
/* Sparkle Effect*/
    function launchSparkleEffect()
     {
        const blastContainer = document.getElementById("blast-container");

        for (let i = 0; i < 50; i++) 
            {
                let particle = document.createElement("div");
                particle.classList.add("blast-particle");
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                particle.style.animationDelay = `${Math.random() * 1.5}s`;
                blastContainer.appendChild(particle);
                setTimeout(() => particle.remove(), 3000);
            }
    }

    function startTimer() 
    {
        setInterval(() => 
            {
                if (timeLeft > 0)
                     {
                        timeLeft--;
                        timerDisplay.innerText = `Time Left: ${timeLeft}s`;
                    }
                else
                 {
                    showFinalPage();
                 }
        }, 1000); 
    }

    startTimer();
    loadQuestion();
});
