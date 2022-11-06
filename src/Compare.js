class Compare {
  constructor() {
    this.CORRECT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  }
  compare(computer, user) {
    let strike = 0;
    let ball = 0;
    let result = "";
    const NOTHING = "낫싱";
    computer.forEach((element, index) => {
      element === +user[index] && strike++;
      element !== +user[index] && computer.includes(+user[index]) && ball++;
    });
    if (ball > 0) result += `${ball}볼 `;
    if (strike > 0) result += `${strike}스트라이크 `;
    if (ball === 0 && strike === 0) result = NOTHING;
    if (strike === 3) result = `${strike}스트라이크\n${this.CORRECT}`;
    return result;
  }
}
module.exports = Compare;
