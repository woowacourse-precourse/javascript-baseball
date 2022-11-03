const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.playOption = 0;
  }

  play() {
    this.playOption = selectPlayOption();
    const validValue = isValidOption(this.playOption);
    if (!validValue) {
      throw new Error('Play옵션에 없는 값입니다.');
    }
  }
}

const selectPlayOption = () => {
  let selectValue;
  MissionUtils.Console.readLine(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    (select) => {
      console.log(`${select}`);
      selectValue = 3; //
    },
  );

  return selectValue;
};

const isValidOption = (option) => {
  if (option === 1 || option === 2) {
    return true;
  }

  return false;
};

module.exports = App;
