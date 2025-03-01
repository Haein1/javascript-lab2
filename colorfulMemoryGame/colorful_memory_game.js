const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
/*
The concat() method concatenates (joins) two or more arrays.
*/
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;


const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


function generateCards(){
    for(const color of cards){
        const card = document.createElement('div');
        card.classList.add('card')
        card.dataset.color = color;
        /*
        It sets the 'dataset.color' attribute of the card element to the current color value from the 'cards' array. This icon represents the card's hidden color until the player clicks it.
        */
       card.textContent = '?';
       gameContainer.appendChild(card);
    }
}

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event){
    const card = event.target;
    if(!card.classList.contains('card') || card.classList.contains('matched')){
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }

    /*
Event Target using const card = event.target;: This line retrieves the element that triggered the event (in this case, a clicked card) and assigns it to the 'card' variable.

Checking the card: if (!card.classList.contains('card') || card.classList.contains('matched')) { return; } This 'if' statement checks whether the clicked element is a card and if it's already matched. If either condition is true:

If the element is not a card or has already matched, the function returns early, ignoring any further actions for this particular click.
Revealing the card:

card.textContent = card.dataset.color;: It sets the text content of the clicked card to the value stored in its 'dataset.color'. This action reveals the card's color by changing the text content to the color value.

card.style.backgroundColor = card.dataset.color;: Changes the card's background color to match the revealed color.

Handling selected cards:

selectedCards.push(card);: Adds the clicked card to the 'selectedCards' array, indicating that it's one of the cards currently chosen by the player.
Checking for matches:

if (selectedCards.length === 2) { setTimeout(checkMatch, 500); }: Checks if two cards have been selected. If two cards have been chosen, it uses 'setTimeout()' to delay the execution of the 'checkMatch()' function by 500 milliseconds. This brief delay allows the player to see both selected cards before their comparison briefly.

    */
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}


startbtn.addEventListener('click', startGame);
