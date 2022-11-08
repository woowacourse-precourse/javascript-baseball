const isNotNumber = (input) => {
  return !(input >= 1 && input <= 9);
};

const checkBallInputValidation = (input) => {
  const inputArr = input.split("");
  if (input.length !== 3) throw new Error("3자리 수를 입력해야합니다.");
  if (inputArr.some(isNotNumber)) throw new Error("숫자만 입력해야합니다.");
};

module.exports = checkBallInputValidation;
