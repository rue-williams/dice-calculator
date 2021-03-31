function displayOut(input) {
    document.getElementById('display').innerHTML = input;
    document.getElementById('equation').innerHTML = input;
}
function diceRoll(sides) {
    return Math.floor(Math.random() * sides + 1);
}
  
const calc = document.querySelector('.grid-container');
const keys = calc.querySelector('.numpad');
let numNew = '0';
  
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyClass = key.classList;
        if (keyClass === 'dice') {
            displayOut(diceRoll(20));
        }
        else if (keyClass === 'operator'){
            displayOut(action);
        }
        else if (keyClass === 'clear'){
            numNew = '0';
            displayOut(numNew);
        }
        else if (keyClass === 'roll'){
            displayOut('result');
        }
        else {
            numNew += action;
            displayOut(numNew);
        }
    }
});