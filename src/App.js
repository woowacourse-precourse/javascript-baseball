import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    const givenNumber = makeGivenNumber();
    console.log("숫자 야구 게임을 시작합니다.");
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

module.exports = App;
