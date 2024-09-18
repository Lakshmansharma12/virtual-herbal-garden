// Function to start the garden tour
function startGardenTour() {
    window.location.href = "#garden";
}

// Plant information
const plantInfo = {
    'Tulsi': {
        name: 'Tulsi (Holy Basil)',
        uses: 'Boosts immunity, treats colds, stress relief',
        medicinalProperties: 'Antibacterial, antiviral, adaptogenic'
    },
    'Neem': {
        name: 'Neem',
        uses: 'Cures skin diseases, dental care, immune booster',
        medicinalProperties: 'Antiseptic, antifungal, anti-inflammatory'
    },
    'Ashwagandha': {
        name: 'Ashwagandha',
        uses: 'Reduces stress, boosts immunity, improves strength',
        medicinalProperties: 'Adaptogenic, anti-inflammatory'
    },
    'Brahmi': {
        name: 'Brahmi',
        uses: 'Enhances memory, treats anxiety, improves brain function',
        medicinalProperties: 'Antioxidant, neuroprotective'
    },
    'Aloe Vera': {
        name: 'Aloe Vera',
        uses: 'Soothes skin irritation, aids digestion, boosts immunity',
        medicinalProperties: 'Anti-inflammatory, antimicrobial'
    },
    'Turmeric': {
        name: 'Turmeric',
        uses: 'Fights inflammation, boosts immunity, improves skin health',
        medicinalProperties: 'Anti-inflammatory, antioxidant'
    },
    'Shatavari': {
        name: 'Shatavari',
        uses: 'Boosts female reproductive health, aids digestion, strengthens immune system',
        medicinalProperties: 'Adaptogen, antioxidant'
    },
    'Giloy': {
        name: 'Giloy',
        uses: 'Boosts immunity, treats chronic fevers, anti-inflammatory',
        medicinalProperties: 'Antioxidant, antipyretic, immunomodulatory'
    },
    'Peppermint': {
        name: 'Peppermint',
        uses: 'Relieves headaches, aids digestion, reduces stress',
        medicinalProperties: 'Antispasmodic, antimicrobial'
    },
    'Sandalwood': {
        name: 'Sandalwood',
        uses: 'Soothes skin, promotes mental clarity, anti-aging',
        medicinalProperties: 'Antiseptic, anti-inflammatory'
    }
};

// Function to display plant information
function showPlantInfo(plantName) {
    const infoSection = document.getElementById('plant-info');
    const plant = plantInfo[plantName];

    infoSection.innerHTML = `
        <h3>${plant.name}</h3>
        <p><strong>Uses:</strong> ${plant.uses}</p>
        <p><strong>Medicinal Properties:</strong> ${plant.medicinalProperties}</p>
    `;
}

// Quiz questions
const quizQuestions = [
    {
        question: 'Which plant is known for boosting immunity and treating colds?',
        options: ['Neem', 'Tulsi', 'Ashwagandha'],
        answer: 'Tulsi'
    },
    {
        question: 'Which plant is commonly used for dental care?',
        options: ['Neem', 'Tulsi', 'Ashwagandha'],
        answer: 'Neem'
    },
    {
        question: 'Which herb is known to reduce stress and boost strength?',
        options: ['Tulsi', 'Ashwagandha', 'Neem'],
        answer: 'Ashwagandha'
    },
    {
        question: 'Which plant is known to enhance memory and treat anxiety?',
        options: ['Brahmi', 'Giloy', 'Peppermint'],
        answer: 'Brahmi'
    },
    {
        question: 'Which plant is effective for soothing skin irritation and boosting immunity?',
        options: ['Aloe Vera', 'Neem', 'Tulsi'],
        answer: 'Aloe Vera'
    }
];
// Function to start the quiz
function startQuiz() {
    const quizSection = document.getElementById('quiz-section');
    quizSection.style.display = 'block';

    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = ''; // Clear previous quiz

    quizQuestions.forEach((q, index) => {
        let options = '';
        q.options.forEach(option => {
            options += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
        });

        quizDiv.innerHTML += `
            <div class="quiz-question">
                <h4>${q.question}</h4>
                ${options}
            </div>
        `;
    });
}

// Function to submit quiz and show results
function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${quizQuestions.length}`);
}
