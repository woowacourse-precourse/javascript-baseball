const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    let BaseballNumber = createRandomNumber();
    startBaseballNumber();
    inputNumber(BaseballNumber);
  }
  
}

const startBaseballNumber = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const inputNumber = (answerNumber) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {

  });
};

const createRandomNumber = () => {
  const baseballArray = [];
  while (baseballArray.length < 3) {
    let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!baseballArray.includes(randomNum)) {
      baseballArray.push(randomNum);
    }
  }
  return baseballArray
};

module.exports = App;
