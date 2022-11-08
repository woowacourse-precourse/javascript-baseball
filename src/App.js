const makeRandomNumbers = require('./makeRandomNumbers')
const getConsoleInput = require('./getConsoleInput')

class App {
  play() {
    const answer = makeRandomNumbers()
    
    getConsoleInput(answer)
  }
}

const app = new App()
app.play()

module.exports = App;
