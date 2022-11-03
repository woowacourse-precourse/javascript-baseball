function checkInputAvailable(input) {
  let isAvailable = true;
  let checkedLetter = [];
  const REGEXP = /[0-9]/g;

  input.forEach((letter) => {
    if (
      !letter.match(REGEXP) ||
      checkedLetter.includes(letter) ||
      input.length !== 3
    ) {
      isAvailable = false;
      return;
    }
    checkedLetter.push(letter);
  });

  return isAvailable;
}

module.exports = checkInputAvailable;
