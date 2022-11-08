const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let baseballNumber = createRandomNumber();
    startNumberBaseball();
    inputNumber(baseballNumber);
  }
}


const startNumberBaseball = () => {
  MissionUtils.Console.print("숫자 야구를 게임을 시작합니다.");
};

const inputNumber = (answerNumber) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    
  });
};


const createRandomNumber = () => {
  const baseballArr = [];
  while (baseballArr.length < 3) {
    let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!baseballArr.includes(randomNum)) {
      baseballArr.push(randomNum);
    }
  }
  return baseballArr;
};

module.exports = App;
