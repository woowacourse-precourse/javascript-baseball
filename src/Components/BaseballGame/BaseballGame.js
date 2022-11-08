const { Console } = require("@woowacourse/mission-utils");

class BaseballGame {
  constructor(attacker, defender) {
    this.attacker = attacker;
    this.defender = defender;
  }

  async start() {
    await this.defender.ready();
    await this.attacker.throwTo(this.defender);

    const INPUT = await new Promise((resolve) => {
      const callback = (input) => {
        Console.close();
        resolve(input);
      };

      Console.readLine(
        `
        3개의 숫자를 모두 맞히셨습니다! 게임 종료
        게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
      `,
        callback
      );
    });

    if (INPUT === "1") await this.start();

    return;
  }
}

module.exports = BaseballGame;
