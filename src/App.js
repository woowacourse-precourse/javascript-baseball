const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.inputComputerAnswer();
    this.inputUserAnswer();
  }

  inputComputerAnswer() {
    const computerAnswerArr = [];
    while (computerAnswerArr.length < 3) {
      const pickNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerAnswerArr.includes(pickNumber)) {
        computerAnswerArr.push(pickNumber);
      }
    }
    this.computerAnswerArr = computerAnswerArr;
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (value) => {
      this.checkValidity(value);
      this.userScore();
    });
  }

  checkValidity(value) {
    let userAnswerArr = value.split('');
    if (userAnswerArr.length !== 3) throw new Error('1~9 범위의 숫자 세 개를 입력해주세요.');
    userAnswerArr.forEach(value => {
      if (isNaN(Number(value)) === true) {
        throw new Error('1~9 범위의 숫자 세 개를 입력해주세요.');
      }
      if (Number(value) > 9) {
        throw new Error('1~9 범위의 숫자 세 개를 입력해주세요.');
      }
    });
    const inputValueSet = new Set([...userAnswerArr]);
    if (inputValueSet.size !== 3) {
      throw new Error('1~9 범위의 숫자 세 개를 입력해주세요.');
    }
    this.userAnswerArr = userAnswerArr.map((pickNum) => +pickNum);
  }

  userScore() {
    let strikeCount = 0;
    let ballCount = 0;
    this.computerAnswerArr.forEach((computerAnswerItem, index) => {
      if (computerAnswerItem === this.userAnswerArr[index]) {
        strikeCount++;
      } else {
        if (this.userAnswerArr.includes(computerAnswerItem)) ballCount++;
      }
    })
    if (strikeCount === 3) this.gameResult("3스트라이크");
    if (strikeCount === 0 && ballCount === 0) this.gameResult("낫싱");
    if (strikeCount > 0 && ballCount > 0) this.gameResult(`${ballCount}볼 ${strikeCount}스트라이크`);
    if (strikeCount > 0 && ballCount === 0) this.gameResult(`${strikeCount}스트라이크`);
    if (ballCount > 0 && strikeCount === 0) this.gameResult(`${ballCount}볼`);
  }

}

module.exports = App;
