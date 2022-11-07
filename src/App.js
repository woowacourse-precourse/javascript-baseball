const MissionUtils = require("@woowacourse/mission-utils");

function checkUserNumber(user_number) {
  console.log(Number(user_number))
  if(isNaN(user_number)) throw new Error("숫자만 입력해 주세요");
  let user_numbers = user_number.split("")
    .map((number) => Number(number));
  if (user_numbers.length != 3) throw new Error("입력값이 세자리가 아닙니다");
  if (new Set(user_numbers).size != 3) throw new Error("중복된 값이 있습니다");
  return user_numbers;
}

function getStrikeScore(computer_numbers, user_numbers, score) {
  computer_numbers.map((element, index) => {
    if (user_numbers[index] == element) score.strike = score.strike + 1;
  });
  return score.strike;
}

function getBallScore(computer_numbers, user_numbers, score) {
  computer_numbers.map((element, index) => {
    if (
      user_numbers.indexOf(element) != -1 &&
      user_numbers.indexOf(element) != index
    )
      score.ball = score.ball + 1;
  });
  return score.ball;
}

function gameResult(strike_score, ball_score) {
  if (strike_score == 0 && ball_score == 0)
    return MissionUtils.Console.print("낫싱");
  if (strike_score == 0) return MissionUtils.Console.print(`${ball_score}볼`);
  if (ball_score == 0)
    return MissionUtils.Console.print(`${strike_score}스트라이크`);
  if (strike_score != 0 && ball_score != 0)
    return MissionUtils.Console.print(
      `${ball_score}볼 ${strike_score}스트라이크`
    );
}

function game(computer_numbers) {
  let score = { strike: 0, ball: 0 };
  MissionUtils.Console.readLine("숫자를 입력해주세요", (user_number) => {
    let user_numbers = checkUserNumber(user_number);
    let strike_score = getStrikeScore(computer_numbers, user_numbers, score);
    let ball_score = getBallScore(computer_numbers, user_numbers, score);
    gameResult(strike_score, ball_score);
    if (strike_score == 3) return gameResultAfter();
    return game(computer_numbers);
  });
}

function getComputerNumbers() {
  let computer_numbers = [];
  while (computer_numbers.length != 3) {
    let computer_number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer_numbers.includes(computer_number)) {
      computer_numbers.push(computer_number);
    }
  }
  return computer_numbers;
}

function setGame() {
  let computer_numbers = getComputerNumbers();
  game(computer_numbers);
}

function restart(result_number) {
  if (result_number == 1) {
    return setGame();
  }
  if (result_number == 2) {
    MissionUtils.Console.print("게임 종료");
    return MissionUtils.Console.close();
  }
  if (result_number != 1 || result_number != 2) {
    throw new Error("잘못된 번호 입니다");
  }
}

function gameResultAfter() {
  MissionUtils.Console.readLine(
    "재시작은 1 종료는 2를 입력해주세요",
    (result_number) => {
      restart(result_number);
    }
  );
}
console.log(setGame())
class App {
  play() {
    setGame();
  }
}
module.exports = App;
