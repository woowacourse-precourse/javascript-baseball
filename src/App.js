const { createRandomNumber } = require('./computer/computer');

class App {
  play() {
    const randomNumber = createRandomNumber();
  }
}

module.exports = App;
