let ORIGINAL_NUMBER = 0;
let GENERATE_BTN = document.querySelector('#generate-num-btn');
let CHECK_BTN = document.querySelector('#check-guess-btn');
let MIN_BOX = document.querySelector('#min');
let MAX_BOX = document.querySelector('#max');
let GUESS_AREA = document.querySelector('.guess-area');
let TRY_ANOTHER = document.querySelector('#tryAnother');

function generateNum() {
    let error = document.querySelector('error_msg');
    error = '';

    let min = Number(MIN_BOX.value);
    let max = Number(MAX_BOX.value);
    
    if (!min || !max) {
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

    if (!guess) {
        message.innerText = "Please only enter a number in guess";
        message.style.color = 'red';
    } else if (guess == ORIGINAL_NUMBER) {
        message.innerText = "Congratulations you've guessed it";
        message.style.color = 'green';
        TRY_ANOTHER.style.display = 'block';
        CHECK_BTN.disabled = true;
    } else {
        chancesLeft = Number(chances.innerText);
        if (chancesLeft == 1) {
            message.innerText = "You've runout of chances";
            message.style.color = 'red';
            TRY_ANOTHER.style.display = 'block';
        } else {
            if (Math.abs(ORIGINAL_NUMBER - guess) < 10) {
                message.innerText = "Very nice guess. You are too close. Try again!";
                message.style.color = 'blue';
            } else {
                message.innerText = "You are far from the number. Try again!";
                message.style.color = 'red';
            }
            chances.innerText = --chancesLeft;
        }
    }
}

function reActivate() {
    CHECK_BTN.removeAttribute("disabled");
    GENERATE_BTN.removeAttribute("disabled");
    MIN_BOX.value = '';
    MAX_BOX.value = '';
    document.querySelector('#guess').value = '';
    GUESS_AREA.style.display = 'none';
    TRY_ANOTHER.style.display = 'none';
    document.querySelector('#left-count').innerText = 5;
}