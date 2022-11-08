const { Console } = require("@woowacourse/mission-utils");

const mockFunction = {
  mockQuestions(answers) {
    Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, Console.readLine);
  },
};

module.exports = mockFunction;
