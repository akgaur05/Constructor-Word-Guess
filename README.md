# Constructor-Word-Guess


> Working with `Node.js` to create a hangman-style CLI game. Object constructors are utilized to convert the guess word from a simple string to a robust data object.

### **Installation**

1. Clone this repository from GitHub.

   ```
   $ git clone <repo>
   ```

1. Navigate to the directory on your local machine and install npm dependencies.

   ```
   $ npm install
   ```

_**Please Note:** This application requires Node.js_

------------------------------------------------

### **Game Play**

Rules:
* Players begin each round with a guess count of `8` and a randomly-generated word;
* Only a single letter may be guessed at a time;
* Each incorrect guess lowers the guess count by one;
* Correctly guessed letters will appear in place of their respective dash(es) within the guess word and will not impact the guess count.

To start the game, please navigate to the cloned directory and enter the following into your terminal:

   ```
   $ node index.js
   ```
   
------------------------------------------------

### :dart: **Key Concepts Employed**

1. Making use of constructor functions to dynamically create similarly patterned objects.
1. Gaining increased familiarity with npm modules, specifically `inquirer` and `chalk`.
1. Threading an application through multiple JavaScript files using `module.exports` and `require`.