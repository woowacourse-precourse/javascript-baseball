const { Console, Random } = require("@woowacourse/mission-utils"); // https://github.com/woowacourse-projects/javascript-mission-utils
let com = [];
class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    com = [];
    randNum();
    guessNum();
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


function inputNum(input) {
  const allNum = /^[1-9]+$/; //1-9가 들어갔는지 확인
  if (allNum.test(input) && input.split("").length === 3) { // 1~9가 들어가고 3개인지 확인
    return true;
  }
  else {
    return false;
  }
}

function inputCount(answer) {
  let count = { strike: 0, ball: 0, nothing: 0 }; // count에 strike, ball, noting 갯수 넣기
  answer.forEach((ele) => {
    const idx = answer.indexOf(ele);
    ele = parseInt(ele, 10);
    if (ele === com[idx]) { // 같은 인덱스에 같은 숫자가 있으면 strike
      count.strike += 1;
    }
    else if (com.includes(ele)) { // 인덱스는 다르지만 숫자는 포함하면 ball
      count.ball += 1;
    }
    else { // 둘 다 아니면 nothing
      count.nothing += 1;
    }
  });
  return count;
}


function showNum(obj) { // strike 리턴 함수
  const strikeNum = Number(obj.strike);
  const ballNum = Number(obj.ball);
  const nothingNum = Number(obj.nothing);

  if (strikeNum === 3) {
    Console.print("3스트라이크");
  }
  else if (ballNum !== 0 && strikeNum !== 0) {
    Console.print(`${ballNum}볼 ${strikeNum}스트라이크`);
  }
  else if (ballNum !== 0 && strikeNum === 0) {
    Console.print(`${ballNum}볼`);
  }
  else if (ballNum === 0 && strikeNum !== 0) {
    Console.print(`${strikeNum}스트라이크`);
  }
  else if (nothingNum === 3) {
    Console.print("낫싱");
  }
  return strikeNum;
}


function endLine() {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      const game = Number(answer);
      if (game === 1) { // 재시작
        const game = new App();
        game.play();
      }
      else if (game === 2) { // 종료
        Console.close();
      }
    }
  );
}

module.exports = App;