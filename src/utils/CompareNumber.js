function CompareNumber(computerNumber, userNumber) {
  let [strike, ball] = [0, 0];
  let nothing = false;

  for (let i = 0; i < 3; i++) {
    if (userNumber[i] === computerNumber[i]) {
      strike++;
    } else if (computerNumber.includes(userNumber[i])) {
      ball++;
    }
  }

  return [strike, ball];
}

module.exports = CompareNumber;
