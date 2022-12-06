// Javascript Program to shuffle Deck of Cards
const group = ["Spades", "Diamonds", "Club", "Heart"];
const cardValues = ["Ace","1","2","3","4","5","6","7","8","9","10","Jack","Queen","King",];
let deck = [];
for (let i = 0; i < group.length; i++) {
  for (let j = 0; j < cardValues.length; j++) {
    let card = {
      Value: cardValues[j],
      Groups: group[i],
    };
    deck.push(card);
  }
}
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
console.log("The set of shuffled cards are:");

for (let i = 0; i < deck.length; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Groups}`);
}
