// exports from external files
const Letter = require("./letter.js");

// word constructor
function Word(word) {
    this.array = word.split("").map(x => new Letter(x));
    this.show = function() {
        let displayWord = [];
        this.array.forEach(e => {displayWord.push(e.reveal())});
        return displayWord.join(" ");
    }
    this.guess = function(char) {
        this.array.forEach(e => {e.match(char)});
        this.show();
    }
}

module.exports = Word;