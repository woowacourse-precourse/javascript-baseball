const { Random } = require("@woowacourse/mission-utils");

const makeAnswer = () => Random.pickUniqueNumbersInRange(1, 9, 3).join("");

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

const makeReplyToReply = ({ ball, strike }) => {};

const inputReply = () => {};

const inputReplay = () => {};

const closePlay = () => {};

exports.makeAnswer = makeAnswer;
exports.replyValidation = replyValidation;
exports.replyCheckAnswer = replyCheckAnswer;
exports.makeReplyToReply = makeReplyToReply;
exports.inputReply = inputReply;
exports.inputReplay = inputReplay;
exports.closePlay = closePlay;
