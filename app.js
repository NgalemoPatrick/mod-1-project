let welcomePage = document.querySelector('.welcome-page');
let optionPage = document.querySelector('.option-page');



document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.btn').onclick = () => {

        document.querySelector('.welcome-page').style.display = 'none';
        document.querySelector('.option-page').style.opacity = 1;
    }
    

})