// My list
 const myList = ['scramble','display','javascript','react','node','method','function'];


// // shuffle function
// const arrWord = randWord.split('');

// function shuffleWord(arrWord) {

//     for(let i = 0; i < arrWord.length; i++) {
//         const randIndex = Math.floor(Math.random()*arrWord.length);
//         // declare a variable to temporally store a char
//         let tempChar = '';
//         // variable to get the current char of the array
//         let currentChar = arrWord[randIndex];
//         // variable to get a random index
//         let randChar = arrWord[i];
//         // swap algo
//         tempChar = currentChar;
//         arrWord[i] = randChar;
//         arrWord[randIndex] = tempChar;
//     }   
//         return arrWord;
// }

// // class playe

class Player {
    name = '';
    score = 0;
    constructor(name) {
        this.name = name;
    }

    score() {
        return this.score++;
    }
}


// player instance
const onePlayer = new Player();



// DOM manipulation

// function to read the player name
const playerName = document.querySelectorAll('.player');


document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.btn').onclick = () => {

        document.querySelector('.welcome-page').style.display = 'none';
        document.querySelector('.option-page').style.display = 'flex';   
    }

    // select option to enter the game
    document.querySelectorAll(".player").forEach((player) => {

        player.onclick = () => {

            document.querySelector('.option-page').style.display = 'none';

            document.querySelector('.get-player-name').style.display = 'flex';

                if(player.dataset.name === 'player1'){

                    document.querySelector('#btn').onclick = () => {

                        // read the player name and pass it to the date 
                        const pName = document.querySelector('#name').value;

                        document.querySelector('.player-name').innerHTML = player.dataset.name = pName;


                        document.querySelector('#name').value = '';

                        document.querySelector('.get-player-name').style.display = 'none';

                        document.querySelector('.game-page').style.display = 'flex';

                        document.querySelector('#pln').innerHTML = pName;
                       
                        // ----------------------------------------------------
                        // variable to store the random word
                        

                        document.querySelector('.change').onclick = () => {

                            //  get a random number within th array range
                            const randIndex = Math.floor(Math.random()*myList.length);

                            // get a random string within the list
                                const word = myList[randIndex];

                            // convert the string into an array of character
                            let arr = word.split('');

                            // --------------------------- look for the issue-----------------
                            // shuffle arr
                            for(let i = 0; i < arr.length; i++){

                                // get a random number within the array range
                                const randIndex = Math.floor(Math.random()*arr.length);

                                // declare a variable to temporally store a char
                                let tempChar       // variable to get the current char of the array
                                let currentChar = arr[i];

                                // variable to get a random index
                                let randChar = arr[randIndex];

                                // swap algo
                                tempChar = currentChar;
                                arr[i] = randChar;
                                arr[randIndex] = tempChar;
                            }   

                            document.querySelector('.display-letter').innerHTML = arr.join();

                        }

                        
                            // check if player answer is the correct word.
                        document.querySelector('.check').onclick = () => {

                            // get the player answer
                            const playerAnsw = document.querySelector('#answ').value;

                            
                            // score variable
                            let scoreVarInt = 0;
                            
                            // clear the input text field
                            document.querySelector('#answ').value = '';

                            for(let i = 0; i < myList.length; i++){
                                if(playerAnsw === myList[i]) {
                                    scoreVarInt = scoreVarInt + 5;
                                    document.querySelector('#scr').innerHTML = `SCORE: ${scoreVarInt}`;
                                    
                                } 
                            }
                            
                    
                        }

                    }
                    
                }else if(player.dataset.name === 'player2'){
                    document.querySelector('.player-name').innerHTML = player.dataset.name ='Ngalemo';
                }else if(player.dataset.name === 'player3'){
                    document.querySelector('.player-name').innerHTML = player.dataset.name ='Nguegoue';
                }else if(player.dataset.name === 'player4'){
                    document.querySelector('.player-name').innerHTML = player.dataset.name ='Pat1genre';
                }
    
        }
        
    })

})