// 1 - Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà:
// "nome" (con il tuo nome) e "età" (con il tuo numero di anni). Stampare l'oggetto sulla console.

var persona = {nome: "Alessio", età: "21"}
console.log(persona);




// 2 - Dichiarare una variabile chiamata "numeri" e assegnarle
// un array contenente una serie di numeri. Stampare l'array sulla console.
var numeri = [1,2,3,4,5,6,7]
console.log(numeri);


// 3 - Conversione da stringa a numero:
// Scrivi una funzione che accetta 2 parametri stringa.
// Se la conversione a intero di entrambe le stringhe va a buon fine
// ritorna la somma numerica dei 2 parametri altrimenti stampa un messaggio di errore

function conversion(string1, string2) {
    let string1toNumber = parseInt(string1);
    let string2toNumber = parseInt(string2)
    let somma;

    somma = string1toNumber + string2toNumber;
    console.log(somma);
    if(isNaN(somma)){
        console.log("devi inserire dei numeri per sommare babbo");
    }

}

conversion("3", "4");



// 4 - Arrotondamento di un numero:
// Scrivi un programma che arrotondi un numero decimale e stampi il risultato sulla console.
function arrotundo(number) {
    numberOnly = parseInt(number);
    let result = numberOnly.toFixed(0)
    console.log(result);

}
arrotundo(34.56)


// 5 - Scrivi un programma che prenda una stringa, una sottostringa da cercare e una sottostringa da sostituire,
// utilizzando il metodo replace() e stampi il risultato sulla console.

function replaces() {
let string = "The komodon's dragon are really inteligent creature"
let freshString = string.replace("dragon", "chicken")

console.log(string);
console.log(freshString);
}

replaces()


// 6 - Scrivi un programma che prenda una stringa, la divida in un array di sottostringhe e stampi il risultato sulla console.


function stringToArray(string){
    let resulting = string.split(" ")
    console.log(resulting);
}

stringToArray("ciao mamma sono al parco con gli animali");


// 7 - Scrivi un programma che prenda un array di parole e unisca tutti gli elementi
// in una singola stringa separati da uno spazio.

function arrayToString() {
let myArray = ['ciao','mamma','sono','al','parco','con','gli','animali']
let arrayStringed = myArray.toString(myArray)
arrayStringed = arrayStringed.replaceAll(",", " ")
console.log(arrayStringed);
}

arrayToString()

// 8 - Scrivi un programma che prenda un array con elementi duplicati e restituisca un nuovo array con i duplicati rimossi.
//DA CAPIRE MEGLIO ////////////////////////////////////////////////////////////////
function removeDubles() {
    let arrayDubles = ['rotto', 'rotto', 'gatto', 'gatto', 'sasso', 'sasso', 'lupo', 'lupo']
 
    let arrayNotDubles = arrayDubles.filter((val, index) => arrayDubles.indexOf(val) ===  index);
    console.log(arrayNotDubles);
}

removeDubles()

// 9 - Crea un oggetto "persona" con le proprietà "nome", "età" e "genere".
// Conta il numero di proprietà presenti nell'oggetto "persona" e stampa il conteggio in console.

var personaOggetto = {
    nome: "Alessio",
    età: "21",
    genere: "uomo",
}

console.log(Object.keys(personaOggetto));


// 10 - Scrivi una arrow function che prenda due parametri, una parola e una lunghezza, e restituisca true
// se la parola è più lunga della lunghezza specificata, altrimenti restituisca false.


var checkLenght = ((string, numberToCheck) => {
    if(string.length > numberToCheck) {
        console.log(true);
    } else {
        console.log(false);
    }
})

checkLenght('lorenzonebello', 5)

// 11 - Scrivi un codice che prenda una data come input e restituisca il nome del giorno della settimana corrispondente.
let dataNew = new Date()
console.log(dataNew);
let day = dataNew.getDay()
let weekDays = ['', 'Lundei', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato', 'Domenica']
console.log(weekDays[   day]);

// 12 - Scrivi un codice che prenda una data come input e verifichi se è una data futura rispetto alla data corrente.
let valentinesDay = new Date("1955-02-14")
let dataNow = new Date()
if(dataNow.valueOf() > valentinesDay.valueOf()) {
    console.log(valentinesDay.valueOf());
    console.log(dataNow.valueOf());
    console.log('LA DATA DI OGGI E PIU AGGIORNATA');
} else {
    console.log(valentinesDay.valueOf());
    console.log(dataNow.valueOf());
    console.log('LA DATA DI SAN VALENTINO E TRA UN PO');
}


// 13 - Creare un nuovo elemento del DOM `button` e aggiungere un gestore di eventi per il click:
let container = document.querySelector('.bottone')
let btn = document.createElement('button');

btn.textContent = 'Click me!';
container.appendChild(btn)

btn.addEventListener('click', function (e) {
    console.log('CIAO FRANCESCO');
})


// 14 - Creare un nuovo elemento del DOM `img` e impostare l'attributo src e alt:


let img = document.createElement('img');
img.src = 'https://arredo3.it'
img.alt = 'sito arredo 3'
container.appendChild(img)
console.log(img);


// 15 - Cambiare lo stile di un pulsante dopo 1 secondo utilizzando setTimeout:


setTimeout(() => {
    btn.classList.add('green')
},2000)


//16 -Creare una promise che si risolve dopo 2 secondi:

let solvingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("Promise risolta")) 
    },2000)
})

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("1 riisolta"))
    }, 100)
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("2 riisolta"))
    }, 2000)
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("3 riisolta"))
    }, 700)
})

Promise.all([promise1, promise2, promise3]).then(() => {
    console.log("tutto risolto");
})


// 18 - Filtrare un array di oggetti JSON restituiendo un array di oggetto con solo le persone che si chimano "Mario"

const jsonStringa =[{"nome": "Mario", "cognome": "Rossi"}, {"nome": "Luca", "cognome": "Verdi"}, {"nome": "Mario", "cognome": "Verdi"}];

let filtredOne  = jsonStringa.filter((obj) => obj.nome == "Mario")
console.log(filtredOne);

// 19 - Dato un array di importi Float ritornare la somma degli importi utilizzando il metodo reduce()

var euros = [29.76, 41.85, 46.5];

let resultsEuros = euros.reduce((arg1, arg2) => arg1 +arg2);
console.log(resultsEuros);

// 20 - Creare un array di oggetti "Users" con almeno 4 elementi.
// Ogni oggetto contiene 2 attributi firstName e lastName.
// Creare un nuovo array contenente gli elementi ritornati dalla concatenazione di firstName e lastName utilizzando
// il metodo map()

var users = [{"firstname": "Luca", "surname": "Gialli"}, {"firstname": "Eros", "surname": "Verdi"},{"firstname": "Gerry", "surname": "Scotti"},{"firstname": "Orzo", "surname": "Bimbo"}];

var fullUser = users.map((user) => user.firstname + " " + user.surname)
console.log(fullUser);


// 21 - Creare una funzion asincrona che attraverso una chiamata fetch recuperi i primi 151 pokemon.
// Utilizzare async e await con fetch per semplificare la gestione delle risposte.
// Utilizzare il costrutto Try/Catch per gestire eventuali errori
// La funzione deve valorizzare una variabile globale con l'array di oggetti contente i 151 pokemon.
// Stampare l'array di oggetti

 async function getPokemonList(limit, ) {
   let apiBaseUrl = "https://pokeapi.co/api/v2/"
    const listRoute = apiBaseUrl + "pokemon?limit=" + limit
    
    return fetch(listRoute,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      });
  }
  getPokemonList(151)