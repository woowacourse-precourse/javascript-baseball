// Array.equals(compare:Array) : boolean
Array.prototype.equals = function (compare) {
  const MAX_LENGTH = Math.max(this.length, compare.length);
  for (let i = 0; i < MAX_LENGTH; i++) {
    if (this[i] !== compare[i]) break;
    if (i === MAX_LENGTH - 1) {
      return true;
    }
  }
  return false;
};

// import mission-utils
const MU = require("@woowacourse/mission-utils");

// 콘솔 메시지 목록
const messages = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 :",
  CLEAR: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  EXIT_QUESTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

class App {
  constructor() {
    let cleared = false; // 게임 클리어 여부
    console.log(messages.START); // 게임 시작 문구 출력
  }

  // play() : 게임 시작
  play() {
    const computer = this.setComputerNumber();
    let player = this.inputPlayerNumber();

    while (true) {
      if (this.cleared) break;

      MU.Console.print(this.getResult(computer, player));
      player = this.inputPlayerNumber();
    }
  }

  // setComputerNumber() : 컴퓨터의 숫자 3자리 지정
  setComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MU.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  // inputPlayerNumber() : 사용자의 숫자 3자리 입력받기
  inputPlayerNumber() {
    let input = "";
    MU.Console.readLine(messages.INPUT_NUMBER, (i) => {
      input = i;
      MU.Console.close();
    });

    if (this.validateInput(input)) {
      return input.split("").map((el) => +el);
    } else this.exit();
  }

  // validateInput() : 사용자의 입력이 올바른지 검증
  validateInput(input) {
    const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (input.length !== 3) return false;

    input = [...new Set(input.split(""))].map((el) => +el);
    if (input.length !== 3) return false;

    input = input.filter((el) => NUMBERS.includes(el));
    if (input.length !== 3) return false;

    return true;
  }

  // getResult() : 사용자의 입력에 따른 결과 문구 반환
  getResult(computer, player) {
    const intersection = player.filter((num) => computer.includes(num)); // 겹치는 숫자의 배열
    let strike = 0;
    let ball = 0;
    let print = ""; // 콘솔에 출력하는 문구를 담는 변수

    // case 1 : 숫자 3개가 모두 일치할 때
    if (computer.equals(player)) {
      this.cleared = true;
      print = "3스트라이크";
      this.exit();
    } else {
      // case 2 : 모든 숫자가 일치하지 않을 때
      if (intersection.length === 0) print = "낫싱";
      else {
        // case 3 : 일부 겹치는 숫자가 있을 때
        // 겹치는 숫자들을 순회하며, 해당 숫자의 양쪽 인덱스가 같으면 스트라이크, 다르면 볼
        intersection.forEach((num) => {
          computer.indexOf(num) === player.indexOf(num)
            ? (strike += 1)
            : (ball += 1);
        });
        // 출력 문구 추가
        if (ball) print += `${ball}볼 `;
        if (strike) print += `${strike}스트라이크`;
      }
    }
    return print;
  }

  // 게임 종료 시
  exit() {
    if (this.cleared) {
      MU.Console.print(messages.CLEAR); // 클리어 문구 추가
      MU.Console.readLine(messages.EXIT_QUESTION, (input) => {
        // 게임 재시작
        if (input === "1") {
          this.cleared = false;
          this.play();
        }
      });
    }
    // 클리어가 되지 않은 채 종료되는 것은 예외 상황이므로, 에러 처리
    else throw new Error("입력의 형태가 잘못되었습니다.");
  }
}

module.exports = App;
