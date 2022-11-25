const MissionUtils = require("@woowacourse/mission-utils");

const Input = {
  input() {
    return new Promise(function (resolve) {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (numbers) => {
        resolve(numbers);
      });
    });
  },
};

module.exports = Input;
