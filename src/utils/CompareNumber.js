function CompareNumber(computerNumber, userNumber) {
  let [strike, ball] = [0, 0];
  let nothing = false;

  for (let i = 0; i < 3; i++) {
    if (userNumber[i] === computerNumber[i]) {
      strike++;
    }

    if (
      userNumber[i] !== computerNumber[i] &&
      computerNumber.includes(userNumber[i])
    ) {
      ball++;
    }
  }

  if (strike === 0 && ball === 0) {
    nothing = true;
  }

  return [strike, ball, nothing];
}

module.exports.CompareNumber;
