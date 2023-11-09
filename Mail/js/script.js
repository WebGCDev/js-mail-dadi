//Genero un array che contenga le varie mail

const trueEmails = [
  'gaetanofrascolla@gmail.com',
  'cristiancosenza@gmail.com',
  'paoloduzioni@gmail.com',
  'sofiaperlari@gmail.com',
];

const output = document.getElementById('output');

// Dichiarazione variabile let per controllo mail
let emailMatching = false;

console.log(trueEmails);

const inputUtente = prompt(
  'Inserisci la tua email per verificare se possiamo inserirti'
);

// Controllo delle mail che sono ammesse al gruppo di lavoro
for (let i = 0; i < trueEmails.length; i++) {
  const checkEmail = trueEmails[i];

  if (checkEmail === inputUtente) {
    emailMatching = true;
  }
}

//Controllo finale per generare messaggio di ammissione o esclusione al gruppo di lavoro
if (emailMatching) {
  output.innerHTML = 'Sei stato ammesso al gruppo di lavoro';
} else {
  output.innerHTML = 'Non hai accesso a questo gruppo di lavoro';
}
