module.exports = function gameControlValidation(controlInput) {
  try {
    checkOneOrTwo(controlInput);
  } catch (error) {
    throw error;
  }
};

function checkOneOrTwo(controlInput) {
  if (controlInput != 1 && controlInput != 2) {
    throw new Error("1 또는 2만 입력할 수 있습니다.");
  }
}
