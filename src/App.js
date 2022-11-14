// 모듈 선언
// MissionUtils 라이브러리에서 제공하는 Console, Random API 추가
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
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

  play() {
    this.showStartText();
  }
}

const app = new App();
app.play();

module.exports = App;
// module : 프로그램을 구성하는 구성 요소, 관련 data와 함수를 하나로 묶은 단위
// 기능별로 나눠서 모듈화 진행
