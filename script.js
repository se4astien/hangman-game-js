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

// Update the wrong letters
function updateWrongLettersEl() {
  console.log('Update wrong');
}

// Show notification
function showNotification() {
  notification.classList.add('show'); // add 'show' class

  setTimeout(() => {
    notification.classList.remove('show'); // remove 'show' class
  }, 2000);
}

// Keydown letter down
window.addEventListener('keydown', e => {
  console.log(e.keyCode);
  // check if user write a letter between 'a' AND 'z'
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key; // give us the appropriate key

    // if the letter is in the actual word
    if (selectedWord.includes(letter)) {
      // we want to push the letter into 'correctLetters' array but we don't want it twice
      // if 'letter' is not already includes in 'correctLetters' array
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord(); // execute => get call automatically
