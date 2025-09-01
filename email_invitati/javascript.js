//Creiamo un array contenente tutte l'email registrate

const emailRegistrate = [
  "mario.rossi23@example.com", 
  "anna.bianchi87@example.com",
  "giovanni.verdi12@example.com",
  "laura.ferrari99@example.com",
  "federico.conti45@example.com",
  "elena.galli78@example.com",
  "andrea.morini56@example.com",
  "francesca.lombardi34@example.com",
  "alessandro.pace67@example.com",
  "martina.moretti21@example.com",
  "simone.rinaldi88@example.com",
  "valentina.marini11@example.com",
  "luca.costa90@example.com",
  "giulia.martinelli53@example.com",
  "daniele.santini76@example.com",
  "chiara.deleo44@example.com",
  "riccardo.fabbri32@example.com",
  "ilaria.brunetti25@example.com",
  "stefano.giorgi60@example.com",
  "francesca.romani15@example.com"
];

//Chiediamo all'utente la propria Email
const emailUtente = prompt("Inserisci il tuo indirizzo email:");

//Creo una variabile Boolean
let personaLista = false;

//Controlliamo se l'utente è nella lista per la festa
for(let i = 0; i < emailRegistrate.length; i++) {

//Se l'indice dell'utente è uguale all'input dell'utente
    if (emailRegistrate[i] === emailUtente) {

//Verifica se è stato trovato la persona tra la lista
    personaLista = true;

//Ferma il ciclo for
    break;
    }
}

//Se la persona è nella lista, ovvero il valore Boolean è true
if (personaLista) {

//Stampami il messaggio di benvenuto
    console.log ("Hey bello! Puoi entrare perchè sei nella lista. Buona festa.")
}
//Se la persona è nella lista, ovvero il valore Boolean è false
else {

//Stampami il messaggio di negazione
    console.log ("Mi dispiace, ma qui non ci sei scritto, bro!")
}


