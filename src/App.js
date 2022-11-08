const MissionUtils = require("@woowacourse/mission-utils");
class BaseBallGame {
  constructor() {
    this.gameStart();
    this.answer = this.generateAnswer();
  }

  gameStart() {
    const OPENING_MENT = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(OPENING_MENT);
  }

  generateAnswer() {
    const ANSWER_TEMPORARY_STORAGE = [];
    while(ANSWER_TEMPORARY_STORAGE.length < 3) {
      const ANSWER_TEMPORARY_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9)
      if (!ANSWER_TEMPORARY_STORAGE.includes(ANSWER_TEMPORARY_NUMBER)) ANSWER_TEMPORARY_STORAGE.push(ANSWER_TEMPORARY_NUMBER);
    }
    return ANSWER_TEMPORARY_STORAGE.join('');
  }

  isRightForm(userNumber) {
    const REGULAR_EXPRESSION_NUMBER = /^[1-9]+$/;
    const IS_NUMBER = REGULAR_EXPRESSION_NUMBER.test(userNumber);
    const RIGHT_LENGTH = userNumber.length === 3;
    const NOT_DUPLICATE = userNumber[0] !== userNumber[1] && userNumber[1] !== userNumber[2];
    
    return IS_NUMBER && RIGHT_LENGTH && NOT_DUPLICATE;
  }

  getStrikeCount(userNumber) {
    let strikeCount = 0;
    const ANSWER = this.answer;
    for (let currentCheckingNumber of userNumber) {
      const INDEX = userNumber.indexOf(currentCheckingNumber);
      if (currentCheckingNumber === ANSWER[INDEX]) strikeCount += 1;
    }
    return strikeCount;
  }

  getBallCount(userNumber) {
    let ballCount = 0;
    const ANSWER = this.answer;
    for (let currentCheckingNumber of userNumber) {
      const INDEX = userNumber.indexOf(currentCheckingNumber);
      if (currentCheckingNumber !== ANSWER[INDEX] && ANSWER.includes(currentCheckingNumber)) ballCount += 1;
    }
    return ballCount;
  }  

  checkNumber(userNumber) {
    const STRIKE_COUNT = this.getStrikeCount(userNumber);
    const BALL_COUNT = this.getBallCount(userNumber);
    const IS_NOTHING = STRIKE_COUNT === 0 && BALL_COUNT === 0;

    let hintMessage, isEnd;

    if (STRIKE_COUNT === 3) isEnd = true;

    if (IS_NOTHING) hintMessage = "낫싱";
    if (BALL_COUNT === 0 && STRIKE_COUNT !== 0) hintMessage = `${STRIKE_COUNT}스트라이크`;
    else if (BALL_COUNT !== 0 && STRIKE_COUNT === 0) hintMessage = `${BALL_COUNT}볼`;
    else if (BALL_COUNT !== 0 && STRIKE_COUNT !== 0) hintMessage = `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;

    return [hintMessage, isEnd];
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', ((userNumber) => {
      if (this.isRightForm(userNumber) === false) throw new Error('입력하신 값이 올바른 형식이 아닙니다! 3자리의 1~9로 이루어진 수를 중복없이 입력해주세요!');
      const [HINT_MENT, IS_END] = this.checkNumber(userNumber);
      MissionUtils.Console.print(HINT_MENT);
      if (IS_END) this.endGame();
      this.play();
    }));
  }

  endGame() {
    const ENDING_MENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    MissionUtils.Console.print(ENDING_MENT)
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n', (restartOrQuit) => {
      restartOrQuit === '1' ? this.replay() : MissionUtils.Console.close();
    });
  }

  replay() {
    this.answer = this.generateAnswer();
    this.play()
  }
}

module.exports = BaseBallGame;
