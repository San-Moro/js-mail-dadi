// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



const userEmailList = ["pippo@gmail.com", "pluto-adv@hotmail.com", "info@agency.it"];

// Chiedi all’utente la sua email
const userEmailInput = prompt("Inserisci la tua email");

// ciclo for
let isFound = false;

for (let i = 0; i < userEmailList.length; i++) {
    const item = userEmailList[i];

    // SE l'email è nella lista
    if (item === userEmailInput) {
        isFound = true;
    } 
    console.log(userEmailInput, item, isFound);
}

if (isFound === true) {
    alert("L'e-mail inserita è corretta!")
} else {
    alert("Ops! L'email inserita è sbagliata. Ricarica la pagina e riprova")
}