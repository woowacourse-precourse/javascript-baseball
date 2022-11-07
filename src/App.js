const { baseballGameStart } = require('./gameStart');

function App() {
  this.play = () => {
    baseballGameStart();
  };
}

const app = new App();
app.play();

module.exports = App;
