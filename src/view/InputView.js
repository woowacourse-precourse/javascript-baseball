const MissionUtils = require("@woowacourse/mission-utils");

const Input = {
  async inputNumbers() {
    return new Promise(function (resolve) {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (numbers) => {
        resolve(numbers);
      });
    });
  },

  async shouldRegame() {
    return new Promise(function (resolve) {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (numbers) => {
          resolve(Number(numbers));
        }
      );
    });
  },
};

module.exports = Input;
