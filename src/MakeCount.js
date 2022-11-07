// comment
function makeComment(strike, ball) {
  let result = "";
  if (strike === 3) {
    return false;
  }
  if (ball !== 0) {
    result += `${ball}볼`;
  }
  if (strike !== 0) {
    result += `${strike}스트라이크`;
  }
  if (ball === 0 && strike === 0) {
    result += "낫싱";
  }
  return result;
}
// count
function calStrikeAndBall(answer, user) {
  return user.filter((num) => answer.includes(num)).length;
}
function calStrike(answer, user) {
  return user.filter((num, index) => answer.indexOf(num) === index).length;
}
function makeCount(answer, user) {
  const count = { strike: 0, ball: 0 };

  count["strike"] = calStrike(answer, user);
  count["ball"] = calStrikeAndBall(answer, user) - count["strike"];

  return count;
}

module.exports = { makeComment, makeCount };
