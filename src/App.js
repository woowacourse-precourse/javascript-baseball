const { createComputerNums } = require('./computerNum.js');
const { gameplay, gameStart } = require('./Game');

function App() {
  this.play = () => {
    gameplay();
    createComputerNums();
  };
}

const app = new App();
app.play();

module.exports = App; 