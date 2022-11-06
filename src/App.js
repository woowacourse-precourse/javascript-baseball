const MissionUtils = require("@woowacourse/mission-utils");
// USER 수 입력

function makeRandom() {
  let answer = new Array();

  while (answer.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!answer.includes(number)) {
      answer.push(number);
    }
  }

  console.log(`answer ${answer}`);
  return answer;
}

function countStrikeAndBall() {
  let userNum = "123";
  let randomNumber = makeRandom();
  let strike = 0;
  let ball = 0;

  randomNumber.forEach((item, index) => {
    if (item === userNum[index]) {
      strike++;
    } else if (userNum.includes(item)) {
      ball++;
    }
    console.log(item);
  });

  return `${strike} and ${ball}`;
}

console.log(countStrikeAndBall());
