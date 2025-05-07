export class Quote {
  constructor(text) {
    this.text = text;
    this.guessedLetters = [];
  }

  getContent() {
    let content = "";
    for (const char of this.text) {
      if (char == " " || this.guessedLetters.includes(char)) {
        content += char;
      } else {
        content += "_";
      }
    }

    return content;
  }

  guess(letter) {
    if (!this.text.includes(letter)) {
      return false;
    }

    this.guessedLetters.push(letter);
    return true;
  }
}
