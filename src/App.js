// 모듈 선언
// MissionUtils 라이브러리에서 제공하는 Console, Random API 추가
const { Console, Random } = require("@woowacourse/mission-utils");

// 상수 선언
const NUMBER_LENGTH = 3;
const NUMBER_MIN = 1;
const NUMBER_MAX = 9;

class App {
  // 기능 4 - 사용자 숫자 유효성 검사
  #collectValidationFn;

  constructor() {
    this.#collectValidationFn = {
      isNotThreeDigit: (inputDigit) => inputDigit.length !== INPUT_LENGTH,
      isNotOneToNineDigit: (inputDigit) =>
        isNaN(inputDigit) || inputDigit.toString().includes("0"),
      isDuplicates: (inputDigit) => {
        const arrForCheck = inputDigit.toString().split("");
        const setForCheck = new Set(arrForCheck);
        return arrForCheck.length !== setForCheck.size;
      },
    };
  }

  isDigitValidation(inputDigit) {
    const { isNotThreeDigit, isNotOneToNineDigit, isDuplicates } =
      this.#collectValidationFn;
    if (
      isNotThreeDigit(inputDigit) ||
      isNotOneToNineDigit(inputDigit) ||
      isDuplicates(inputDigit)
    )
      throw new Error("잘못된 값 입력됨");
    return inputDigit;
  }

  // 기능 3 - 사용자 숫자 input
  setUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (inputDigit) => {
      // const userDigit = [...inputDigit].map(Number);
      const userDigit = [...this.isDigitValidation(inputDigit)].map(Number);
      Console.print(userDigit);
    });
  }

  // 기능 2 - Random 숫자 3자리 생성
  setRandomDigit() {
    const randomDigit = new Set();
    while (randomDigit.size < NUMBER_LENGTH) {
      randomDigit.add(Random.pickNumberInRange(NUMBER_MIN, NUMBER_MAX));
    }
    return Array.from(randomDigit);
  }

  // 기능 1 - 게임 시작 문구 출력
  showStartText() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  gameStart() {
    this.setRandomDigit();
    this.setUserInput();
  }

  play() {
    this.showStartText();
    this.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
// module : 프로그램을 구성하는 구성 요소, 관련 data와 함수를 하나로 묶은 단위
// 기능별로 나눠서 모듈화 진행
