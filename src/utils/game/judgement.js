const strikeJudgment = (pickedNumberArrayByComputer, numberArrayEnteredByUser) => {
  return pickedNumberArrayByComputer.reduce(
    (prev, randomNumber, index) => {
      if (randomNumber === numberArrayEnteredByUser[index]) return { ...prev, strikeCount: prev.strikeCount + 1 };
      return { ...prev, notStrikeIndexArray: [...prev.notStrikeIndexArray, index] };
    },
    { strikeCount: 0, notStrikeIndexArray: [] },
  );
};

const ballJudment = (notStrikeIndexArray, pickedNumberArrayByComputer, numberArrayEnteredByUser) => {
  let ballCount = 0;
  notStrikeIndexArray.forEach((notStrikeIndex) => {
    if (pickedNumberArrayByComputer.includes(numberArrayEnteredByUser[notStrikeIndex])) {
      ballCount += 1;
    }
  });
  return ballCount;
};

const strikeBallJudgment = (pickedNumberArrayByComputer, numberArrayEnteredByUser) => {
  const { strikeCount, notStrikeIndexArray } = strikeJudgment(pickedNumberArrayByComputer, numberArrayEnteredByUser);
  const ballCount = ballJudment(notStrikeIndexArray, pickedNumberArrayByComputer, numberArrayEnteredByUser);
  return [strikeCount, ballCount];
};

module.exports = strikeBallJudgment;
