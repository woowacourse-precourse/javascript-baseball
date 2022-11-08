const GET_NUMBER = require("../__tests__/CreateNumber");
const PLAY_GAME = require("../__tests__/PlayGame");

class App {
  play() {
    let playing = true;
    while (playing) {
      const NUMBERS = GET_NUMBER();
      playing = playGame(NUMBERS);
    }
  }
}

const app = new App();
console.log("서로 다른 숫자 3자리를 입력해주세요 : ")
app.play();

module.exports = App;