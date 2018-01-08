// Code your solutions in this file
function printBadges(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

function flipCoin() {
  return Math.random() >= 0.5
}

function tailsNeverFails() {
  counter = 0;
  while (flipCoin()) {
    counter++;
    console.log(`${counter} tails`);
  }
  return `You got ${counter} tails in a row!`;
}
