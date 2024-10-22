let currentQuestionIndex = 0;
let score = 0;
let answered = false;


// Preguntas relacionadas con la termodinámica y la aeronáutica
const questions = [
    {
        question: "¿Qué enuncia el segundo principio de la termodinámica?", //1
        options: [
            "La energía no se crea ni se destruye",
            "El calor no fluye espontáneamente de un cuerpo frío a uno caliente",
            "La energía interna de un sistema siempre aumenta",
            "El trabajo es independiente del calor"
        ],
        correctAnswer: "El calor no fluye espontáneamente de un cuerpo frío a uno caliente"
    },
    {
        question: "¿Qué enuncia el primer principio de la termodinámica?", //2
        options: [
            "La energía no se crea ni se destruye, se transforma",
            "El calor no fluye espontáneamente de un cuerpo frío a uno caliente",
            "La energía interna de un sistema siempre aumenta",
            "El trabajo es independiente del calor"
        ],
        correctAnswer: "La energía no se crea ni se destruye, se transforma"
    },
    {
        question: "¿Cuál es la función de las alas en un avión?", //3
        options: [
            "Generar resistencia al aire",
            "Generar sustentación",
            "Reducir el peso",
            "Controlar la velocidad"
        ],
        correctAnswer: "Generar sustentación"
    },
    {
        question: "¿Qué es la entropía en termodinámica?", //4
        options: [
            "La cantidad de energía disponible para realizar trabajo",
            "La medida del desorden de un sistema",
            "La cantidad de energía calorífica en un sistema",
            "El equilibrio térmico"
        ],
        correctAnswer: "La medida del desorden de un sistema",
        correctAnswer: "La cantidad de energía calorífica en un sistema"
    },
    {
        question: "¿Qué parte del avión controla la altitud?", //5
        options: [
            "El timón",
            "Los alerones",
            "El elevador",
            "Las turbinas"
        ],
        correctAnswer: "El elevador"
    },
    {
        question: "¿Qué fenómeno explica que el aire sobre las alas de un avión se mueva más rápido que por debajo?", //6
        options: [
            "Efecto Bernoulli",
            "Efecto Venturi",
            "Fuerza de arrastre",
            "Ley de Boyle"
        ],
        correctAnswer: "Efecto Bernoulli"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades subsonicas?", //7
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Divergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //8
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //9
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //10
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //11
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //12
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //13
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades personicas?", //14
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //15
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //16
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //17
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //18
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //19
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    },
    {
        question: "¿Qué tipo de conducto de entrada se utiliza en velocidades supersonicas?", //20
        options: [
            "Convergente",
            "Convergente-Divergente",
            "Divergente",
            "Divergente-Convergente"
        ],
        correctAnswer: "Convergente"
    }

];

// Mostrar la pregunta y las opciones
function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    answerButtonsElement.innerHTML = '';  // Limpia las respuestas previas

    const currentQuestion = questions[currentQuestionIndex];

    // Mostrar la pregunta
    questionElement.textContent = currentQuestion.question;

    // Mezcla y muestra las opciones
    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-btn');
        button.onclick = () => checkAnswer(button, option);
        answerButtonsElement.appendChild(button);
    });

    answered = false;
}

// Función para mezclar las opciones de respuesta
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para verificar si la respuesta es correcta
function checkAnswer(button, answer) {
    if (answered) return;

    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (answer === correctAnswer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    document.getElementById('score').textContent = score;
    disableButtons();
    answered = true;

    setTimeout(nextQuestion, 500);
}

// Desactivar los botones una vez seleccionada la respuesta
function disableButtons() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.classList.add('disabled');
        button.disabled = true;
    });
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Terminar el cuestionario y redirigir a la página de puntajes
function endQuiz() {
    const playerName = prompt("Ingresa tu nombre para guardar tu puntaje:");

    const playerData = {
        name: playerName || 'Anónimo',
        score: score
    };

    // Guardar el puntaje del jugador en Firebase
    firebase.database().ref('playersScores').push(playerData, (error) => {
        if (error) {
            alert("Error al guardar el puntaje.");
        } else {
            // Redirigir a la página de puntajes
            window.location.href = "scores.html";
        }
    });
}