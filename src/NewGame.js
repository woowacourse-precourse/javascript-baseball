const { Console, Random } = require("@woowacourse/mission-utils");
class NewGame {
  computerAnswer;

  constructor() {
    this.gameStart();
  }
  gameStart() {
    this.getComputerAnswer();
    this.getUserAnswer();
  }
  getComputerAnswer() {
    const computerNumberList = [];
    while (computerNumberList.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumberList.includes(randomNumber)) {
        computerNumberList.push(randomNumber);
      }
    }
    this.computerAnswer = Number(computerNumberList.join(""));
  }

  getUserAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (userAnswer) => {
      console.log(userAnswer, "플레이어 입력값");
      console.log(this.computerAnswer, "컴퓨터 입력값");
      //숫자 비교하기 함수
    });
  }
}

module.exports = NewGame;
