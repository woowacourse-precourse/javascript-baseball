const { Console, Random } = require("@woowacourse/mission-utils");

const mockFunction = {
  mockQuestions(answers) {
    Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        console.log(question);
        callback(input);
      });
    }, Console.readLine);
  },
  getLogSpy() {
    const logSpy = jest.spyOn(Console, "print");
    logSpy.mockClear();
    return logSpy;
  },
  mockRandoms(numbersArray) {
    Random.pickUniqueNumbersInRange = jest.fn();
    numbersArray.reduce((acc, numberArray) => {
      return acc.mockReturnValueOnce(numberArray);
    }, Random.pickUniqueNumbersInRange);
  },
};

module.exports = mockFunction;
