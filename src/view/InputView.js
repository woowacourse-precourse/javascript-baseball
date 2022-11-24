const MissionUtils = require("@woowacourse/mission-utils");

const Input = {
  async input() {
    const userNumbers = await MissionUtils.Console.readLine("숫자를 입력해주세요", (numbers) => {
    });
  },
};

module.exports = Input;