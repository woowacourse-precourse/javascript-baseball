function countStrikeBallNothing(pickedNumberByUser, COMPUTER) {
  let strike = 0;
  let ball = 0;
  let nothing = 0;
  COMPUTER.map((num, idx) => {
    // 같은 수이고,
    if (COMPUTER.includes(Number(pickedNumberByUser[idx]))) {
      // 같은 자리일 때
      if (num === Number(pickedNumberByUser[idx])) strike += 1;
      // 다른 자리일 때
      else ball += 1;
      // 같은 수가 없을 때
    } else nothing += 1;
  });

  return [strike, ball, nothing];
}

module.exports = countStrikeBallNothing;
