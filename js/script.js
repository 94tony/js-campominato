var output=document.getElementById("output");
var lista16 = [];
var userNum = [];

//aggiungo ad un array  16 elementi unici

while(lista16.length<16){
  var randNum = (Math.floor(Math.random()*100)+1);
  if(!(isInArray(lista16, randNum))){
    lista16.push(randNum);
  }
}
console.log(lista16)


//inserisco  84 numeri, e verifico per ogni numero inserito se è presente nell'array
//se è presente esco dal ciclo
//è presente un ceck per impedire l'inserimento di due valori identici
while(userNum.length<84){
  var insertNum = insertNumber("Inserisci il numero");
  if(!(isInArray(lista16, insertNum))){
    if(!(isInArray(userNum, insertNum))){
      userNum.push(insertNum);
    }
  }else{
    break
  }
}


output.innerText += userNum.length;


//Funzione che dato un messaggio in ingresso, restituisce il numero inserito dall'utente se e solo se è un numero, altrimenti ripete la richiesta
function insertNumber(message){
    var num = parseInt(prompt(message));
    while(isNaN(num)){
        var num = parseInt(prompt("Attenzione il valore deve essere numerico"));
    }
    return num;
}

//Funzione che dato in ingresso un array e un elemento, verifica se l'elelmento è presente all'interno dell'array
function isInArray(array, element) {
  for ( var x = 0 ; x < array.length ; x++){
    if(element === array[x]){
      return true;
    }
  }
  return false;
}