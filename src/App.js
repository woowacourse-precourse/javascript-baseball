class App {
  play() {}
}

module.exports = App;
const startGame = () => {
  cpu = makeTargetNumber();
};
const processGame = () => {
  Console.readLine("숫자를 입력해주세요 : ", (input) => {
    progress(input);
    noticeScore();
  });
};

function progress(input) {
  user = input;
  Console.close();
  validateInput(user);
  score = getScore(cpu, user);
}

const endGame = () => {};
const makeTargetNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
};

const validateInput = (input) => {
  return validateNumber(input);
};
const validateNumber = (input) => {
  if (!userInputRegEx.test(input)) {
    throw new Error("3자리의 중복되지 않는 숫자로 입력해주세요");
  }
  if (new Set(input.split("")).size > 3) {
    throw new Error("3자리의 중복되지 않는 숫자로 입력해주세요");
  }
  return true;
};
