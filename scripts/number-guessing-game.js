let ORIGINAL_NUMBER = 0;

function generateNum() {
    let min = Number(document.querySelector('#min').value);
    let max = Number(document.querySelector('#max').value);
    
    let difference = max - min;
    
    ORIGINAL_NUMBER = Math.round(Math.random() * difference) + min;
}

function checkGuess() {
    let guess = Number(document.querySelector('#guess').value);
    let message = document.querySelector('#message');

    if (!guess) {
        message.innerText = "Please only enter a number in guess";
        message.style.color = 'red';
    } else if (guess == ORIGINAL_NUMBER) {
        message.innerText = "Congratulations you've guessed it";
        message.style.color = 'green';
    } else {
        if (ORIGINAL_NUMBER - guess) {
            message.innerText = "Very nice guess. You are too close. Try again!";
            message.style.color = 'blue';
        }
    }
}