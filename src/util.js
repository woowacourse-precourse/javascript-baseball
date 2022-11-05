const { Random, Console } = require("@woowacourse/mission-utils");

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

const makeReplyToReply = ({ ball, strike }) => {
  if (ball === 0 && strike === 0) return "낫싱";
  if (strike === 3)
    return "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  let answer = "";
  if (ball) answer += `${ball}볼 `;
  if (strike) answer += `${strike}스트라이크`;
  return answer;
};

const inputReply = (cb) =>
  Console.readLine("숫자를 입력해주세요 : ", (n) => cb(n));

const inputReplay = (cb) =>
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (n) => cb(n)
  );

const closePlay = () => Console.close();

exports.makeAnswer = makeAnswer;
exports.replyValidation = replyValidation;
exports.replyCheckAnswer = replyCheckAnswer;
exports.makeReplyToReply = makeReplyToReply;
exports.inputReply = inputReply;
exports.inputReplay = inputReplay;
exports.closePlay = closePlay;
