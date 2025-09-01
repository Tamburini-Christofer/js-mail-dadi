// Generiamo un numero causale del lancio dei dadi per il giocatore
let tiroGiocatore = parseInt(Math.random() * 6) + 1;

//Generiamo un numero causale del lancio dei dadi per il pc
let tiroPc = parseInt(Math.random() * 6) + 1;

//Mandiamo in console il risultato dei tiri
console.log(`Il giocatore ha lanciato il suo dado e ottenuto: ${tiroGiocatore}`);
console.log(`Anche il pc ha lanciato il dado e ha ottenuto: ${tiroPc}`);

//Vediamo chi vince
if (tiroGiocatore > tiroPc){
    console.log("---Il vincitore è il giocatore!!!---")
    console.log("Ti ho battuto, cassonetto: Il giocatore ha risposto!!! ")
} else if (tiroGiocatore < tiroPc) {
    console.log("---Il vincitore è la macchina!!!---")
    console.log("01101000 01101111 00100000 01110110 01101001 01101110 01110100 01101111: Il pc ha risposto!!!")

//In caso di pareggio
} else {
    console.log('I due sfidanti si guardano con odio! Pareggio!!! "Accidenti" disse il giocatore, "01100011 01100001 01111010 01111010 01101111" disse la macchina ')
}
