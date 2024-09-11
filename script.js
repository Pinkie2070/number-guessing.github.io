let numberToGuess = Math.round(Math.random() * 100)
let tries = 0;


function guessTheNumber() {

    tries = tries + 1;
    displayTries.innerHTML = 'Versuche: ' + tries;
    if(numberToGuess == input.value) {
        headline.innerHTML = 'Du hast gewonnen die Zahl war ' + numberToGuess;
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
    }
    if(numberToGuess < input.value) {
        headline.innerHTML = 'Deine Zahl ist zu Groß'
    }
    if(numberToGuess > input.value) {
        headline.innerHTML = 'Deine Zahl ist zu klein'
    }

    input.value = '';
}