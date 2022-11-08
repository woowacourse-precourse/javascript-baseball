const { gameFirstStartMessage, baseBallGame } = require('./modules/game');
const { generateRandomNum } = require('./modules/generateRandomNum');

function App() {
  this.play = () => {
    gameFirstStartMessage();
    baseBallGame(generateRandomNum());
  };
}

const app = new App();
app.play();

module.exports = App;
