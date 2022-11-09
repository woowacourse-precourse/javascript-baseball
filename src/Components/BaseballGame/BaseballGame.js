const { Console } = require("@woowacourse/mission-utils");
const Attacker = require("../Attacker/Attacker");
const AutomaticBallGenerator = require("../AutomaticBallGenerator/AutomaticBallGenerator");
const Defender = require("../Defender/Defender");
const ManualBallGenerator = require("../ManualBallGenerator/ManualBallGenerator");

class BaseballGame {
  constructor(attacker, defender) {
    this.attacker = attacker;
    this.defender = defender;
  }

  start() {
    const { attacker, defender } = this;
    attacker.throwTo(defender);
    // let select = null;

    // do {
    // await this.defender.ready();
    // await this.attacker.throwTo(this.defender);

    // return this.ask();
    // } while (select === "1");

    // if (select === "2") {
    //   Console.print("게임 종료");
    //   return;
    // }
  }

  // async ask() {
  //   return await new Promise((resolve) => {
  //     const callback = (input) => {
  //       Console.close();
  //       resolve(input);
  //     };

  //     Console.readLine(
  //       "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  //       callback
  //     );
  //   });
  // }
}

const ATTACKER = new Attacker(new ManualBallGenerator());
const DEFENDER = new Defender(new AutomaticBallGenerator());
const BASEBALL_GAME = new BaseballGame(ATTACKER, DEFENDER);

BASEBALL_GAME.start();
module.exports = BaseballGame;
