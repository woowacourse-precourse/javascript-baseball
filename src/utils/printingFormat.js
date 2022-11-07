const printFormat = (score) => {
  let text = "";
  if (score.ball > 0) {
    text = `${score.ball}볼`;
  }
  if (score.ball && score.strike) {
    text += ` ${score.strike}스트라이크`;
  }
  if (!score.ball && score.strike) {
    text = `${score.strike}스트라이크`;
  }
  if (score.ball === 0 && score.strike === 0) {
    text = "낫싱";
  }
  return text;
};

exports.printFormat = printFormat;
