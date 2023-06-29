// My list
const myList = ['scramble','display','javascritp','react','node'];

// shuffle function


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