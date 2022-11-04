const { Console } = require("@woowacourse/mission-utils");
const pickedNumberByComputer = require("./pickedNumberByComputer");
const enterNumber = require("./enterNumber");
const countStrikeBallNothing = require("./countStrikeBallNothing");
const resultsForCount = require("./resultsForCount");
const GameManager = require("./GameManager");

async function game() {
  const COMPUTER = pickedNumberByComputer();
  console.log(COMPUTER);
  let threeStrike = false;
  while (!threeStrike) {
    let pickedNumberByUser = await enterNumber("숫자를 입력해주세요 : ");
    let [strike, ball, nothing] = countStrikeBallNothing(
      pickedNumberByUser,
      COMPUTER
    );
    resultsForCount(strike, ball, nothing);

    if (strike === 3) threeStrike = true;
  }
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  new GameManager().restartOrEnd();
}

module.exports = game;
