const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

// We need to define a word
const words = ['computer', 'interface'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
// console.log(selectedWord);

// Each letter correct or not will put inside an array
const correctLetters = [];
const wrongLetters = [];

// Display hidden word
function displayWord() {
  // take selectedWord and turn it into an array because we need to map throught it and return a letter or blank just an empty string
  // to turn a string into an array => use 'split method'
  // for each letter return a <span>...</span>
  wordEl.innerHTML = `
  ${selectedWord
    .split('')
    .map(
      letter =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : ''
        }</span>`
    ) // includes() to check if the letter is inside 'correctLetters' array
    .join('')}`; // join() used to turn back into a string

  // display word in same line
  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations, you won!';
    popup.style.display = 'flex'; // display the popup style
  }
}

displayWord(); // execute => get call automatically
