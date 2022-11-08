const MissionUtils = require("@woowacourse/mission-utils");
// 기본 변수명에서 살을 붙인다(numbers,answers로 지정)
//함수 순서는 게임 시작문구 프린트 ->랜덤 고르는 것 -> (3일 때 주시해야하니까 따로 빼놓고)
// ball,strkie세기 -> ball,strike센거 출력 -> 게임 상태 체크 -> 게임 숫자 입력창(여러 함수들을 넣어야해서 뒤로 뺀다)
// 게임 플레이 함수에 이때 까지 짠 함수들을 넣는다
// 입력창을 위 or play()바로 위? -> play 바로 위로 간다
class App {
  printGameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  pickInputRandom() {
    const random = [];

    while (random.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!random.includes(randomNumber)) {
        random.push(randomNumber);
      }
    }

    return random.join("");
  }
  //3일때 주시하기 위해서 햇갈려서 좀 빼놓음
  //(ball strike 너무 햇갈린다 반대로 이해해서 코드가 이상하게 나오더라...)
  getThreeResult(numbers) {
    return numbers.length === 3 && numbers.length === new Set(numbers).size;
  }
  // ball,strike세기
  BallStrikeStatus(numbers, answers) {
    let ball = 0;
    let strike = 0;

    Array.from(numbers).forEach((number, idx) => {
      if (number === answers[idx]) {
        strike++;
      } else if (answers.includes(number)) {
        ball++;
      }
    });

    return [ball, strike];
  }
  // 몇볼, 몇 스트라이크인지 출력해주기(한글로 전부 표현)
  BallStrikeResult(numbers, answers) {
    const [ball, strike] = this.BallStrikeStatus(numbers, answers);
    let result;

    if (ball && strike) {
      result = `${ball}볼 ${strike}스트라이크`;
    } else if (ball) {
      result = `${ball}볼`;
    } else if (strike) {
      result = `${strike}스트라이크`;
    } else {
      result = `낫싱`;
    }

    MissionUtils.Console.print(result);
    if (strike === 3) {
      this.selectStatus();
    } else {
      this.putNumbers(answers);
    }
  }
  play() {}
}
module.exports = App;
