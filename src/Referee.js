const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const Player = require('./Player');

const RESTART = '1';
const GAME_OVER = '2';

class Referee {
  constructor() {
    this.computer = new Computer(this);
    this.player = new Player(this);

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  gameStart() {
    this.computer.setRandomValue();
    this.player.setValue();
  }

  gameResult() {
    const [computerValue, playerValue] = [this.computer.getValue(), this.player.getValue()];
    let [ball, strike] = [0, 0];

    for (let i = 0; i < 3; i++) {
      if (computerValue[i] === playerValue[i]) strike++;
      else if (computerValue.includes(playerValue[i])) ball++;
    }

    const nothingString = ball === 0 && strike === 0 ? '낫싱' : '';
    const ballString = ball ? `${ball}볼 ` : '';
    const strikeString = strike ? `${strike}스트라이크` : '';

    MissionUtils.Console.print(nothingString + ballString + strikeString);

    if (strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.gameFinish();
    } else this.player.setValue();
  }

  gameFinish() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer === RESTART) return this.gameStart();
        if (answer === GAME_OVER) return MissionUtils.Console.print('숫자 야구 게임을 종료합니다.');
        return this.gameFinish();
      }
    );
  }
}

module.exports = Referee;
