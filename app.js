// My list
 const myList = ['scramble','display','javascript','react','node','method','function'];

//  score variable
let scoreVarInt = 0;

// counter function
let second = 0;

function counter() {
    second++;
}

function timer() {
    setInterval(counter, 1000);
    if(second != 30){
        
    }
        return 
}

// declare variable word
let word = [];

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

    // function to quit the game page
    document.querySelector('.reset').onclick = () => {
        scoreVarInt = 0;
        document.querySelector('.welcome-page').style.display = 'flex';
        document.querySelector('.game-page').style.display = 'none'; 
        document.querySelector('#scr').innerHTML = `SCORE: ${scoreVarInt}`;
    }

    // function to exit the gane
    document.querySelector('.end-game').onclick = () => {
        scoreVarInt = 0;
        document.querySelector('.welcome-page').style.display = 'flex';
        document.querySelector('.end-of-page').style.display = 'none';
        document.querySelector('#scr').innerHTML = `SCORE: ${scoreVarInt}`;
    }

    // function restart the game
    document.querySelector('.restart').onclick = () => {
        scoreVarInt = 0;
        document.querySelector('.end-of-page').style.display = 'none';
        document.querySelector('.game-page').style.display = 'flex';
        
        // set the score to 0
        document.querySelector('#scr').innerHTML = `SCORE: ${scoreVarInt}`;
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

                        // document.querySelector('.player-name').innerHTML = player.dataset.name = pName;


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
                             word = myList[randIndex];

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
                            // document.querySelector('.timer').innerHTML = `Time: ${setInterval(counter, 1000)}`;
                            
                        }
  
                            // check if player answer is the correct word.
                           
                            document.querySelector('.check').onclick = () => {

                            // get the player answer
                            const playerAnsw = document.querySelector('#answ').value;

                            // score variable
                            
                            // clear the input text field
                            document.querySelector('#answ').value = '';

                            
                            // clear the display letter area
                            document.querySelector('.display-letter').innerHTML = '';

                            // console.log(word);
                            // check if answer est = word
                                if(playerAnsw === word) {
                                    scoreVarInt = scoreVarInt + 5;
                                    document.querySelector('#scr').innerHTML = `SCORE: ${scoreVarInt}`;
                                    
                                }else if(playerAnsw !== word){
                                    scoreVarInt = scoreVarInt - 2;
                                    document.querySelector('#scr').innerHTML = `SCORE: ${scoreVarInt}`;
                                }else if(playerAnsw === ''){
                                    // scoreVarInt = scoreVarInt + 0;
                                    document.querySelector('#scr').innerHTML = `SCORE: ${scoreVarInt}`;
                                }
                            

                            // winning state
                            if(scoreVarInt === 10) {
                                document.querySelector('.game-page').style.display = 'none';
                                document.querySelector('.end-of-page').style.display = 'flex';
                                document.querySelector('#message').innerHTML = 'WELL DONE, YOU WIN.'
                            }
                                  
                        }

                    }
                // 2 players section 
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