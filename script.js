let randomNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user's guess
    let guess = document.getElementById('guess').value;

    // Compare the user's guess with the generated number
    let result = '';
    if (guess < randomNumber) {
        result = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        result = 'Too high! Try again.';
    } else {
        result = 'Congratulations! You guessed the correct number: ' + randomNumber;
        // Generate a new random number for a new game
        randomNumber = Math.floor(Math.random() * 10) + 1;
    }

    document.getElementById('result').innerText = result;
});
