module.exports = function GameInputValidation(gameInput) {
  try {
    checkLength(gameInput);
    checkNumber(gameInput);
    checkDuplicate(gameInput);
  } catch (error) {
    throw error;
  }
  return 0;
};

function checkLength(gameInput) {
  if (gameInput.length != 3) {
    throw new Error("입력은 3자리만 가능합니다.");
  }
}

function checkNumber(gameInput) {
  if (gameInput != Number(gameInput)) {
    throw new Error("입력은 숫자만 가능합니다.");
  }
}

function checkDuplicate(gameInput) {
  const duplicateChecker = new Set();
  for (let x = 0; x < gameInput.length; x++) {
    if (duplicateChecker.has(gameInput[x])) {
      throw new Error("입력 숫자가 중복되었습니다.");
    }
    duplicateChecker.add(gameInput[x]);
  }
}
