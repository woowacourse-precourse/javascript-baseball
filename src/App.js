const { Console, Random } = require("@woowacourse/mission-utils"); // https://github.com/woowacourse-projects/javascript-mission-utils
let com = [];
class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    com = [];
    randNum();
    // guessNum();
  }
}

function randNum() {
  while (com.length < 3) { // com 이란 변수에 3개의 숫자를 넣을 때 까지 반복
    const randNumPicked = Random.pickNumberInRange(1, 9); // 1 ~ 9 사이의 랜덤숫자
    if (!com.includes(randNumPicked)) { // 같은 숫자 포함 안 되게 하기
      com.push(parseInt(randNumPicked, 10)); // com 배열에 숫자 넣기
    }
  }
}


module.exports = App;