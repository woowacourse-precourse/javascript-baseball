const Judge = require("./Judge");
const Opponent = require("./Opponent");

class App {
  play() {
    const com = new Opponent();
    const judge = new Judge();
    com.setAnswerWith3RandomNumbers();
    const opponentInput = com.getAnswerString();
    const playerInput = "123";
    const [ball, strike] = judge.countBallStrike(opponentInput, playerInput);
    console.log(`player : ${playerInput}, com : ${opponentInput}`);
    console.log(`ball : ${ball}, strike : ${strike}`);
  }
}

module.exports = App;
