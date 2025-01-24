const cities = [
    "London", 
    "Tokyo",
    "New York",
    "Paris",
    "Sydney",
    "Yerevan",
    "Moscow",
    "Cape Town",
    "Delhi",
    "Rio de Janeiro",
    "Berlin",
    "Madrid",
    "Rome",
    "Singapore",
    "Mexico City",
    "Jakarta",
    "Shanghai",
    "Bangkok",
    "Santiago",
    "San Francisco",
];

let currentCityIndex = 0;
let correctGuesses = 0;
const userAnswers = [];


async function getCityTemperature(city) {
    const apiKey = "fd48bdf8a8b87b3c140f17625f4e2d57";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.main.temp; 
}


async function showNextCity() {
    if (currentCityIndex >= cities.length) {
        endGame();
        return;
    }
    
    const city = cities[currentCityIndex];
    document.getElementById('city-container').innerText = `City: ${city}`;
    currentCityIndex++;

    
    document.getElementById('temperature-guess').value = '';
}


async function submitGuess() {
    const userGuess = parseFloat(document.getElementById('temperature-guess').value);
    if (isNaN(userGuess)) {
        alert("Please enter a valid number.");
        return;
    }

    const city = cities[currentCityIndex - 1];
    const realTemp = await getCityTemperature(city);
    
    const deviation = Math.abs(userGuess - realTemp);
    let isCorrect = false;
    if (deviation <= 5) {
        isCorrect = true;
    }

    userAnswers.push({ city, guess: userGuess, realTemp, isCorrect });

    const answerContainer = document.getElementById('answer-container');
    answerContainer.innerHTML += `<p>Your guess for ${city}: ${userGuess}°C. Real temperature: ${realTemp}°C.`;
    if (isCorrect) {
        answerContainer.innerHTML += " Correct!";
    } else {
        answerContainer.innerHTML += " Wrong!";
    }
    answerContainer.innerHTML += `</p>`;

    if (isCorrect) {
        correctGuesses++;
    }

    
    if (currentCityIndex < 5) {
        showNextCity();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('game').style.display = "none";
    const resultContainer = document.getElementById('result-container');
    let resultText = "";
    
    if (correctGuesses >= 3) {
        resultText = "You win! You guessed correctly 3 or more times!";
    } else {
        resultText = "You lose! Better luck next time.";
    }

    document.getElementById('result').innerText = resultText;
}

showNextCity();