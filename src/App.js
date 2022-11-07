/* eslint-disable no-restricted-globals */
/* eslint-disable operator-linebreak */
const MissionUtils = require('@woowacourse/mission-utils');

const isSameNumber = (input) => {
  const numberArray = input.split('').map((number) => parseInt(number, 10));
  const numberSet = new Set(numberArray);
  // console.log(`arr ${numberArray.length} set ${numberSet.size}`);
  return numberArray.length !== numberSet.size;
};

const isOutRangeNumber = (input) => {
  const numberArray = input.split('').map((number) => parseInt(number, 10));
  const checkedNumberArray = numberArray.filter(
    (number) => number > 0 && number < 10,
  );
  return numberArray.length !== checkedNumberArray.length;
};

class App {
  constructor() {
    this.computerNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3,
    );
  }

  play() {
    MissionUtils.Console.print(this.computerNumberArray);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      // console.log(`입력받은 숫자 : ${input}`);
      if (
        !input ||
        input.length !== 3 ||
        isNaN(input, 10) ||
        isSameNumber(input) ||
        isOutRangeNumber(input)
      ) {
        throw new Error('3자리 숫자를 입력하세요');
      }
    });
  }
}

const t = new App();
t.play();

module.exports = App;
