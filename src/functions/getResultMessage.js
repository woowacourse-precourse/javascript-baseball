function getResultMessage(answer, userAnswer) {
  let ballCnt = 0;
  let strikeCnt = 0;

  if (answer[0] === userAnswer[0]) strikeCnt += 1;
  if (answer[1] === userAnswer[1]) strikeCnt += 1;
  if (answer[2] === userAnswer[2]) strikeCnt += 1;
  if (answer[0] === userAnswer[1] || answer[0] === userAnswer[2]) ballCnt += 1;
  if (answer[1] === userAnswer[0] || answer[1] === userAnswer[2]) ballCnt += 1;
  if (answer[2] === userAnswer[0] || answer[2] === userAnswer[1]) ballCnt += 1;

  if (ballCnt === 0 && strikeCnt === 0) return "낫싱";

  let ballMessage = ballCnt === 0 ? "" : `${ballCnt}볼`;
  let strikeMessage = strikeCnt === 0 ? "" : `${strikeCnt}스트라이크`;

  return `${ballMessage} ${strikeMessage}`;
}

module.exports = getResultMessage;
