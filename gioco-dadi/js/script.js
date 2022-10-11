// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const userGetRndInteger = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(userGetRndInteger);

const computerGetRndInteger = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(computerGetRndInteger);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userGetRndInteger == computerGetRndInteger) {
    alert("Nessun vincitore, è un pareggio!")
} else if (computerGetRndInteger > userGetRndInteger) {
    alert("Oh no! Hai perso!")
} else {
    alert("Complimenti! Hai vinto!")
}