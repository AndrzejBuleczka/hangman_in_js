import Quote from "./quote.js";

class Game {
  quotes = [
    {
      text: "pan tadeusz",
      category: "Utwór literacki"
    },
    {
      text: "janko muzykant",
      category: "Utwór literacki"
    },
    {
      text: "akademia pana kleksa",
      category: "Film"
    },
    {
      text: "ogniem i mieczem",
      category: "Film"
    }
  ];
  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outputWrapper = outputWrapper;

    const { text, category } =
      this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }

  guess(letter) {
    console.log("Guessing letter:", letter);
    // Here you would implement the logic to check if the guessed letter is in the word
    // and update the game state accordingly.
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => {
        this.guess(label);
      });
      this.lettersWrapper.appendChild(button);
    }
  }
  start() {
    this.drawLetters();
  }
}
