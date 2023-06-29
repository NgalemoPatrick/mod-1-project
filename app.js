// class player

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
                document.querySelector('.player-name').innerHTML = player.dataset.name;
    
        }
        
    })
})