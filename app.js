//I start by creating 12 cards, then I add all the objects in an array
const cardArray =[
  {
    name:'midge',
    img: 'images/midge.png',
  },
  {
    name:'susie',
    img: 'images/susie.png',
  },
  {
    name:'shybaldwin',
    img: 'images/shybaldwin.png',
  },
  {
    name:'abeandrose',
    img: 'images/abeandrose.png',
  },
  {
    name:'sophie',
    img: 'images/sophie.png',
  },
  {
    name:'lenny',
    img: 'images/lenny.png',
  },
   {
    name:'midge',
    img: 'images/midge.png',
  },
  {
    name:'susie',
    img: 'images/susie.png',
  },
  {
    name:'shybaldwin',
    img: 'images/shybaldwin.png',
  },
  {
    name:'abeandrose',
    img: 'images/abeandrose.png',
  },
  {
    name:'sophie',
    img: 'images/sophie.png',
  },
  {
    name:'lenny',
    img: 'images/lenny.png',
  }
]
//I need to sort my objects in cardsArray randomly, so I use Math.random method
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');//I create a board
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []

//I create an images board
function createBoard(){
  for(let i = 0; i < cardArray.length ; i++){
    const card = document.createElement('img')//create an card
    card.setAttribute('src', 'images/blank.png')//add an image to the card
    card.setAttribute('data-id', i)//create data-id for each card
    card.addEventListener('click', flipCard)//if I click on a card I want it to flip
    gridDisplay.appendChild(card)//added 12 cards to my grid
  }
}

createBoard();

//I check for matches
function checkMatch(){
  const cards = document.querySelectorAll('img')//all the images in my grid
  const optionOneId = cardsChosenIds[0]//1st card choice
  const optionTwoId = cardsChosenIds[1]//2nd card choice

  if(optionOneId == optionTwoId){//I'm checking if two cards match
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert("You haved clicked the same image!")
  }

  if(cardsChosen[0] === cardsChosen[1]){//I'm checking if two cards match
    alert ("It's a match!");//they do match
    cards[optionOneId].setAttribute('src', 'images/black.png');//if it's a match, the image flips to black
    cards[optionTwoId].setAttribute('src', 'images/black.png');// and it's out of game
    cards[optionOneId].removeEventListener('click', flipCard);//EventListener stops listening out for clicks
    cards[optionTwoId].removeEventListener('click', flipCard);//it removes the possibility to click on the card
    cardsWon.push(cardsChosen) ;
  }else{
    cards[optionOneId].setAttribute('src', 'images/blank.png');//if they don't match, the image flips to blank
    cards[optionTwoId].setAttribute('src', 'images/blank.png');//if they don't match, the image flips to blank
    alert("Sorry, try again!")
  }
  resultDisplay.textContent = cardsWon.length;//show the score
  cardsChosen = []//start the whole process again
  cardsChosenIds = []//start the whole process again

//what will happen if I get all the matches
  if(cardsWon.length == cardArray.length/2){//I have 6 pairs of cards hence "cardArray.length/2"
    resultDisplay.textContent = "Congratulations you found them all !"//result message
  }
}

//function to flip my cards
function flipCard(){
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId);
  cardArray[cardId];
  this.setAttribute('src', cardArray[cardId].img);//images appear if I click on a card
  if(cardsChosen.length === 2){//if I click 2 cards, I'm checking if they match
    setTimeout(checkMatch, 500)//setTimeout will call my function after 500ms
}
}
