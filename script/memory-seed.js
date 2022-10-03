const path = "./img/";
const fileType = ".png";
const cards = [
    "1_pig.png",
    "2_squirrel",
    "3_rabbit",
    "4_frog",
    "5_fox",
    "6_bear",
    "7_monkey",
    "8_panda",
    "9_chick",
    "10_tiger",
    "11_penguin",
    "12_racoon",

    "1_pig.png",
    "2_squirrel",
    "3_rabbit",
    "4_frog",
    "5_fox",
    "6_bear",
    "7_monkey",
    "8_panda",
    "9_chick",
    "10_tiger",
    "11_penguin",
    "12_racoon"
];

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const shuffledCards = shuffle(cards);
const board = document.querySelector('#board');

shuffledCards.forEach(element => {
    const card = document.createElement('memory-card');
    card.setAttribute('front',path+element+fileType);
    board.appendChild(card);
});
