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
  mockRandoms(numbers) {
    Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, Random.pickNumberInRange);
  },
};

module.exports = mockFunction;
