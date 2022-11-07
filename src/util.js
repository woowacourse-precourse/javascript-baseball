const { Random } = require("@woowacourse/mission-utils");

const makeAnswer = () => {
  const set = new Set();
  while (set.size !== 3) {
    set.add(Random.pickNumberInRange(1, 9));
  }
  return Array.from(set).join("");
};

const replyValidation = (input) => {
  const values = input.split("");
  if (values.length !== 3) throw new Error("사용자 입력 오류");
  const map = {};
  for (const value of values) {
    if (map[value]) throw new Error("사용자 입력 오류");
    map[value] = value;
  }
  return true;
};

const replyCheckAnswer = (input, answer) => {
  const userValues = input.split("");
  const answerValues = answer.split("");
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    const userTarget = userValues[i];
    if (userTarget === answerValues[i]) strike++;
    else if (answerValues.indexOf(userTarget) > -1) ball++;
  }
  return { ball, strike };
};

const makeReplyToReply = ({ ball, strike }) => {
  if (ball === 0 && strike === 0) return { message: "낫싱", done: false };
  if (strike === 3)
    return {
      message: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      done: true,
    };
  let message = "";
  if (ball) message += `${ball}볼 `;
  if (strike) message += `${strike}스트라이크`;
  return { message, done: false };
};

exports.makeAnswer = makeAnswer;
exports.replyValidation = replyValidation;
exports.replyCheckAnswer = replyCheckAnswer;
exports.makeReplyToReply = makeReplyToReply;
