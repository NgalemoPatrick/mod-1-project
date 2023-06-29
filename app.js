// My list
 const myList = ['scramble','display','javascript','react','node'];

// // function to get random word
// const randWord = (myList) => {
//     for(let i = 0; i < myList.length; i ++) {
//         const randIndex = Math.floor(Math.random()*word.length);
//         const selecttWord = myList[randIndex];
//     }
//     return selectWord
// }




// // shuffle function
// const arrWord = randWord.split('');

// const shulleWord = (word) => {
//     for(let i = 0; i < arrWord.length; i++) {
//         const randIndex = Math.floor(Math.random()*word.length);
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

// class playe

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
                        document.querySelector('#name').innerHTML = ' ';
                        document.querySelector('.get-player-name').style.display = 'none';
                        document.querySelector('.game-page').style.display = 'flex';

                        document.querySelector('.change').onclick = () => {

                            //  get a random number within th array range
                            const randIndex = Math.floor(Math.random()*myList.length);

                            // get a random string within the list
                            const word = myList[randIndex];

                            // convert the string into an array of character
                            let arr = word.split('');

                            // shuffle the array and return a join string
                            for(let i = 0; i < arr.length; i++) {
                                const randIndex = Math.floor(Math.random()*arr.length);
                                    // declare a variable to temporally store a char
                                let tempChar = '';
                                    // variable to get the current char of the array
                                let currentChar = arr[randIndex];
                                        // variable to get a random index
                                let randChar = arr[i];
                                        // swap algo
                                tempChar = currentChar;
                                arr[i] = randChar;
                                arr[randIndex] = tempChar;
                            }   
                                
                            document.querySelector('.display-letter').textContent = arr.join();
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