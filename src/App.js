const { threePitching } = require('./modules/generateNumbers')

class App {
  play() {
    threePitching();
  }
}

const app = new App()
app.play()
console.log(threePitching())
module.exports = App;
