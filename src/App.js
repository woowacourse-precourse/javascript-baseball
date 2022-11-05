const MissionUtils = require("@woowacourse/mission-utils");

function checkUserNumber(user_number) {
  let user_numbers = String(user_number)
    .split("")
    .map((number) => Number(number));
  if (user_numbers.length != 3) throw new Error("에러남");
  if (new Set(user_numbers).size != 3) throw new Error("에러남2");
  return user_numbers;
}

function getComputerNumbers() {
  let computer_numbers = [];
  while(computer_numbers.length != 3){
    let computer_number = MissionUtils.Random.pickNumberInRange(1,9);
    if(!computer_numbers.includes(computer_number)){
      computer_numbers.push(computer_number)
    }
  }
  return computer_numbers;
}

function game(computer_numbers) {
  let score = { strike: 0, ball: 0 };
  MissionUtils.Console.readLine("숫자를 입력해주세요.", (user_number) => {
    let user_numbers = checkUserNumber(user_number);
    let strike = getStrike(computer_numbers, user_numbers, score);
    let ball = getBall(computer_numbers, user_numbers, score);
    if (strike == 0 && ball == 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    if (strike == 3) {
      return winGame();
    }
    game(computer_numbers);
  });
}

function setgame() {
  let computer_numbers = getComputerNumbers();
  game(computer_numbers);
}

function winGame() {
  MissionUtils.Console.readLine(
    "게임 종료",
    (renumber) => {
      restart(renumber);
    }
  );
}

function restart(renumber) {
  if (renumber == 1) {
    return setgame();
  }
  if (renumber == 2) {
    return MissionUtils.Console.close();
  }
  if (renumber != 1 || renumber != 2) {
    throw new Error("잘못된 번호");
  }
}

function getStrike(computer_numbers, user_numbers, score) {
  computer_numbers.map((element, index) => {
    if (user_numbers[index] == element) score.strike = score.strike + 1;
  });
  return score.strike;
}

function getBall(computer_numbers, user_numbers, score) {
  computer_numbers.map((element, index) => {
    if (
      user_numbers.indexOf(element) != -1 &&
      user_numbers.indexOf(element) != index
    )
      score.ball = score.ball + 1;
  });
  return score.ball;
}

class App {
  play() {
    setgame();
  }
}
module.exports = App;
