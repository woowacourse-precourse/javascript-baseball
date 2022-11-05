const { createComputerNums } = require('./computerNum.js');

function App() {
  this.play = () => {
    createComputerNums();
  };
}

const app = new App();
app.play();
module.exports = App;
