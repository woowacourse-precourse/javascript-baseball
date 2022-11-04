import * as MissionUtils from "@woowacourse/mission-utils"
// console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

// 스트라이크: 같은 자리 + 같은 수
// 볼: 다른 자리 + 같은 수
// 낫싱: 같은 수가 없음
// 3개의 숫자를 모두 맞히면 게임 종료
// 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다. (재시작/종료를 구분하는 1과 2중 하나의 수)
// 사용자가 잘못된 값을 입력하면 throw문을 이용해 예외 발생시킨 후 앱은 종료되어야 한다.

// 입력: 서로다른 3개의 수
// 출력: 스트라이크, 볼, 낫싱 
//      3개를 다 맞힐 경우 : 3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료
// 시작: 숫자 야구 게임을 시작합니다.

function getRandomNumber () {
  let randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3)
  return randomNumber.join('')
}

// 사용자에게 number 입력 받아 실행하는 함수
class App {
  play() {}
}

module.exports = App;
