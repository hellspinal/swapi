const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const doTheThing = () => {
  rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
  });
}

function getUserInput() {
  return 5;
}

module.exports = { 
  doTheThing,
  getUserInput
};