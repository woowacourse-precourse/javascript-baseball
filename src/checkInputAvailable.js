function checkInputAvailable(input) {
  let isAvailable = true;
  let checkedLetter = [];
  const REG_EXP = /[1-9]/g;

  input.forEach((letter) => {
    if (
      !letter.match(REG_EXP) ||
      checkedLetter.includes(letter) ||
      input.length !== 3
    ) {
      isAvailable = false;
      return;
    }
    checkedLetter.push(letter);
  });

  return Boolean(input.length) && isAvailable;
}

module.exports = checkInputAvailable;
