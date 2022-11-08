function CompareNumber(computerNumber, userNumber) {
  let [strike, ball] = [0, 0];
  let nothing = false;

  console.log(computerNumber, userNumber);
  for (let i = 0; i < 3; i++) {
    if (userNumber[i] === computerNumber[i]) {
      strike++;
    } else if (computerNumber.includes(userNumber[i])) {
      ball++;
    }
  }

  if (strike === 0 && ball === 0) {
    nothing = true;
  }

  return [strike, ball, nothing];
}

module.exports = CompareNumber;
