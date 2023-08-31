let ORIGINAL_NUMBER = 0;
let GENERATE_BTN = document.querySelector('#generate-num-btn');
let CHECK_BTN = document.querySelector('#check-guess-btn');
let MIN_BOX = document.querySelector('#min');
let MAX_BOX = document.querySelector('#max');
let GUESS_AREA = document.querySelector('.guess-area');

function generateNum() {
    let error = document.querySelector('error_msg');
    error = '';

    let min = Number(MIN_BOX);
    let max = Number(MAX_BOX);
    
    if (!min && !max) {
        error.innerText = "Please enter only numbers in minimum and maximum input boxes";
    }

    let difference = max - min;
    
    ORIGINAL_NUMBER = Math.round(Math.random() * difference) + min;

    GENERATE_BTN.disabled = true;
    GUESS_AREA.style.display = 'block';
}

function checkGuess() {
    let guess = Number(document.querySelector('#guess').value);
    let message = document.querySelector('#message');
    let chances = document.querySelector('#left-count');
    let tryAnother = document.querySelector('#tryAnother');

    if (!guess) {
        message.innerText = "Please only enter a number in guess";
        message.style.color = 'red';
    } else if (guess == ORIGINAL_NUMBER) {
        message.innerText = "Congratulations you've guessed it";
        message.style.color = 'green';
    } else {
        if (ORIGINAL_NUMBER - guess < 10) {
            message.innerText = "Very nice guess. You are too close. Try again!";
            message.style.color = 'blue';
            chances.innerText = Number(chances.innerText--);
            tryAnother.style.display = 'block';
            CHECK_BTN.disabled = true;
        } else {
            message.innerText = "You are far from the number. Try again!";
            message.style.color = 'blue';
        }
    }
}

function reActivate() {
    CHECK_BTN.disabled = false;
    GENERATE_BTN.disabled = false;
    MIN_BOX.value = '';
    MAX_BOX.value = '';
    GUESS_AREA.style.display = 'none';
}