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

  play() {}
}
module.exports = App;
