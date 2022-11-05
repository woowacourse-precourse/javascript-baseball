const { threePitchingBall } = require('./modules/generateNumbers')

class App {
  play() {
    threePitchingBall();
  }
}

const app = new App()
app.play()
console.log(threePitchingBall())
module.exports = App;
