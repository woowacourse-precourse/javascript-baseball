const MissionUtils = require("@woowacourse/mission-utils");
class BaseBallGame {
  constructor() {
    this.start();
    this.ANSWER = this.generateAnswer();
  }

  start() {
    const OPENING_MENT = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(OPENING_MENT);
  }

  generateAnswer() {
    const TEMPORARY_STORAGE = [];
    while(TEMPORARY_STORAGE.length < 3) {
      const TEMPORARY_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9)
      if (!TEMPORARY_STORAGE.includes(TEMPORARY_NUMBER)) TEMPORARY_STORAGE.push(TEMPORARY_NUMBER);
    }
    return TEMPORARY_STORAGE.join('');
  }

  isRightForm(inputNum) {
    const REGULAR_EXPRESSION_NUMBER = /^[1-9]+$/;
    const IS_NUMBER = REGULAR_EXPRESSION_NUMBER.test(inputNum);
    const RIGHT_LENGTH = inputNum.length === 3;
    const NOT_DUPLICATE = inputNum[0] !== inputNum[1] && inputNum[1] !== inputNum[2];
    
    return IS_NUMBER && RIGHT_LENGTH && NOT_DUPLICATE;
  }

  isStrike(INPUT_NUM, ANSWER) {
    let STRIKE_COUNT = 0;
    for (let curr_Number of INPUT_NUM) {
      const i = INPUT_NUM.indexOf(curr_Number);
      if (curr_Number === ANSWER[i]) STRIKE_COUNT += 1;
    }
    return STRIKE_COUNT;
  }

  isBall(INPUT_NUM, ANSWER) {
    let BALL_COUNT = 0;
    for (let curr_Number of INPUT_NUM) {
      const i = INPUT_NUM.indexOf(curr_Number);
      if (curr_Number !== ANSWER[i] && ANSWER.includes(curr_Number)) BALL_COUNT += 1;
    }
    return BALL_COUNT;
  }  

  checkNumber(number) {
    const STRIKE_COUNT = this.isStrike(number, this.ANSWER);
    const BALL_COUNT = this.isBall(number, this.ANSWER);
    const IS_NOTHING = STRIKE_COUNT === 0 && BALL_COUNT === 0;

    let HINT_MENT, IS_END;

    if (STRIKE_COUNT === 3) IS_END = true;

    if (IS_NOTHING) HINT_MENT = "낫싱";
    if (BALL_COUNT === 0 && STRIKE_COUNT !== 0) HINT_MENT = `${STRIKE_COUNT}스트라이크`;
    else if (BALL_COUNT !== 0 && STRIKE_COUNT === 0) HINT_MENT = `${BALL_COUNT}볼`;
    else if (BALL_COUNT !== 0 && STRIKE_COUNT !== 0) HINT_MENT = `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;

    return [HINT_MENT, IS_END];
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', ((inputNum) => {
      if (this.isRightForm(inputNum) === false) throw new Error('입력하신 값이 올바른 형식이 아닙니다! 3자리의 1~9로 이루어진 수를 중복없이 입력해주세요!');
      const [HINT_MENT, IS_END] = this.checkNumber(inputNum);
      MissionUtils.Console.print(HINT_MENT);
      if (IS_END) this.end();
      this.play();
    }));
  }

  end() {
    const ENDING_MENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    MissionUtils.Console.print(ENDING_MENT)
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n', (gameStartOrExit) => {
      gameStartOrExit === '1' ? this.newplay() : MissionUtils.Console.close();
    });
  }

  newplay() {
    this.ANSWER = this.generateAnswer();
    this.play()
  }
}

const game = new BaseBallGame;
game.play();

module.exports = BaseBallGame;
