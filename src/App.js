import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    const givenNumber = makeGivenNumber();
    console.log("숫자 야구 게임을 시작합니다.");
    const inputNumber = getInput();
  }
}

const makeGivenNumber = () => {
  const givenNumber = [];
  while (givenNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!givenNumber.includes(number)) {
      givenNumber.push(number);
    }
  }
  return givenNumber;
};

const getInput = () => {
  MissionUtils.Console.readline("숫자를 입력해주세요 : ", (inputNumber) => {
    return inputNumber;
  });
};

module.exports = App;
