/*---------------
    FUNCTIONS
---------------*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/*----------
  PROBLEM
----------*/

//visualizzo nella pagina 5 numeri random
let ranNum = [];
let count = 0;

for(let i = 0; i < 5; i++){
    ranNum.push(getRandomNumber(1, 100));
}

console.log(ranNum);


setTimeout(guessNumber, 30000);

function guessNumber() {
    console.clear();
    for(let i = 0; i < 5; i++){
        num = Number(prompt("Inserisci un numero"));

        for(let j = 0; j < 5; j++){

            if(ranNum[j] == num){
                count++;
            }
        }
    }

    console.log(count);
}