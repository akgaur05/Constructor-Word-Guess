// letter constructor
function Letter(letter) {
    this.letter = letter;
    this.correct = false;
    this.reveal = function() {
        if (this.correct === true) {
            return this.letter;
        } else {
            return "_";
        }
    };
    this.match = function(char) {
        if (char === this.letter) {
            return this.correct = true;
        } // else do nothing
    }
}

module.exports = Letter;