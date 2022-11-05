function countStrike(computerNums, userInputNums) {
  let strikeCount = 0;
  const computerNumsArr = computerNums.split('');
  const userInputNumsArr = userInputNums.split('');

  computerNumsArr.map((num, index) => {
    if (num === userInputNumsArr[index]) strikeCount++;
  });

  return strikeCount;
}

