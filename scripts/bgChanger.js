let body = document.getElementsByTagName('body')[0];

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', e => {
    if (e.target.className === 'white') {
        body.style.color = 'black';
    } else {
        body.style.color = 'whitesmoke';
    }

    body.style.background = e.target.className;
}));