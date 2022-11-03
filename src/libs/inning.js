const getRandomThreeNumber = require("./getRandomThreeNumber");
const getAnswer = require("./getAnswer");
const makeBallCountString = require("./makeBallCountString");
const { Console } = require("@woowacourse/mission-utils");

async function* inning() {
  let ballCount;
  const computer = getRandomThreeNumber();
  while (ballCount !== "3스트라이크") {
    const number = await getAnswer("숫자를 입력해 주세요 : ");
    yield { status: "pitch", num: number };
    ballCount = makeBallCountString(computer, number);
    Console.print(ballCount);
  }
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const isRestart = await getAnswer(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  yield { status: "restart", num: isRestart };
}

module.exports = inning;
