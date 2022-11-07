const existDuplicateNumbers = (answer) => {
  return (
    answer.length !==
    answer.split("").filter((el, idx) => idx === answer.indexOf(el)).length
  );
};

const validation = {
  checkGuessInput(answer) {
    if (Number(answer) !== parseInt(answer, 10)) throw new Error("only number");

    if (answer.length !== 3) throw new Error("only three number");

    if (existDuplicateNumbers(answer)) throw new Error("only different number");
  },

  checkRestartOrQuitInput(answer) {
    if (answer !== "1" && answer !== "2") throw new Error("only 1 or 2");
  },
};

module.exports = validation;
