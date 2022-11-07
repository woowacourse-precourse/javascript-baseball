const MissionUtils = require('@woowacourse/mission-utils');

const MAX_ANSWER_COUNT = 3;

class App {
  play() {
    const answer = this.setAnswer();
    this.startGame(answer);
  }

  setAnswer() {
    const randomList = [];
    while (randomList.length < MAX_ANSWER_COUNT) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomList.includes(number)) {
        randomList.push(number);
      }
    }
    return randomList.join('');
  }

  getPlayerInputList() {
    let inputList = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      inputList = [...String(input)];
    });
    return inputList;
  }

  setIsValid(inputList) {
    const inputListLength = inputList.length;
    const firstCondition = /^[1-9]+$/.test(inputList.join(''));
    const secondCondition = inputListLength !== new Set(inputList).size;
    const thirdCondition = inputListLength === MAX_ANSWER_COUNT;
    return firstCondition && secondCondition && thirdCondition;
  }

  startGame(answer) {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const inputList = this.getPlayerInputList();
    const isValid = this.setIsValid(inputList);
    if (!isValid) throw new Error('유효하지 않은 입력입니다.');
  }
}

const app = new App();
app.play();

module.exports = App;
