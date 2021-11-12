// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).




// Chiedo all' utente i km da percorrere
// Chiedo all' utente la sua età


// Definisco costoKm = 0.21

// Definisco il costoViaggio = km * costoKm

// Definisco costante sconto = (costoViaggio / 100)*20

//  Imposto un ciclo IF

//  SE (età utente < 18 )
//  ALLORA  costoFinale = costoViaggio - sconto

//  ALTRIMENTI SE età (utente > 65)    
//  ALLORA  costoFinale = costoViaggio - (2 * sconto)

//  ALTRIMENTI (costoFinale = costoViaggio)



// Chiedo all'utente i km da percorrere
const userKm = parseInt(prompt('Inserisci quanti Chilometri vuoi percorrere:') );
console.log(userKm);

// Chiedo all'utente quanti anni ha
const userAge = parseInt(prompt('Inserisci la tua età:') );
console.log(userAge);

// Definisco la variabile costo per chilometro
let costoKm = 0.21;

// Variabile costo del viaggio
let costoViaggio = (userKm * costoKm);
console.log(costoViaggio);

// Variabile sconto
let discount = (costoViaggio / 100) * 20;

// Imposto ciclo If
if (userAge < 18) {
    costoFinale = costoViaggio - discount;
    } 
else if (userAge > 65) {
    costoFinale = costoViaggio - (discount * 2);
    }   
else {
    costoFinale = costoViaggio;
    }


// Concateno le stringhe
const result ='Ciao il tuo viaggio costerà: ' +  costoFinale  + '€';
//  console.log(result);

// Mando a schermo il risultato
alert(result);

// document.getElementById('final-price').innerHTML = result;