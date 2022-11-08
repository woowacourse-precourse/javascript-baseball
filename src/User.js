const MissionUtils = require("@woowacourse/mission-utils");

class User {
  constructor() {
    this.input = []; // 사용자 예측 입력값을 저장할 배열
  }

  getInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.input = inputNumber.toString().split(""); // 사용자가 입력한 3자리 수를 쪼개어 문자 배열로 저장한다.
      // MissionUtils.Console.close();
    });
  }

  checkValidation() {
    // 사용자 예측 입력값에 대한 유효성 검사
    this.input.map((number) => {
      // 숫자 이외의 문자 입력 시 에러 발생
      if (isNaN(number)) throw new Error("오직 숫자만 입력이 가능합니다.");
    });
    if (this.input.includes("0")) throw new Error("1부터 9 사이의 숫자만 입력 가능합니다."); // 범위 이외의 숫자 입력 시 에러 발생
    if (this.input.length !== 3) throw new Error("3자리 수만 입력이 가능합니다."); // 3자리 수 이외의 입력 시 에러 발생
    const checkSet = Array.from(new Set([...this.input]));
    if (checkSet.length !== this.input.length) throw new Error("중복되지 않은 입력만 가능합니다."); // 중복된 숫자가 있을 시 에러 발생
  }

  changeToNumbers() {
    // 문자 배열을 숫자 배열로 변환
    this.input = this.input.map((letter) => Number(letter));
  }
}

module.exports = User;
