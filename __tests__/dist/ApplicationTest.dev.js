"use strict";

var App = require("../src/App");

var MissionUtils = require("@woowacourse/mission-utils");

var mockQuestions = function mockQuestions(answers) {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(function (acc, input) {
    return acc.mockImplementationOnce(function (question, callback) {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

var mockRandoms = function mockRandoms(numbers) {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(function (acc, number) {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

var getLogSpy = function getLogSpy() {
  var logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", function () {
  test("게임 종료 후 재시작", function () {
    var randoms = [1, 3, 5, 5, 8, 9];
    var answers = ["246", "135", "1", "597", "589", "2"];
    var logSpy = getLogSpy();
    var messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];
    mockRandoms(randoms);
    mockQuestions(answers);
    var app = new App();
    app.play();
    messages.forEach(function (output) {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("예외 테스트: 3자리가 아닌 수 입력", function () {
    var randoms = [1, 3, 5];
    var answers = ["1234"];
    mockRandoms(randoms);
    mockQuestions(answers);
    expect(function () {
      var app = new App();
      app.play();
    }).toThrow();
  });
  test("예외 테스트: 숫자가 아닌 문자 입력", function () {
    var randoms = [1, 3, 5];
    var answers = ["Number"];
    mockRandoms(randoms);
    mockQuestions(answers);
    expect(function () {
      var app = new App();
      app.play();
    }).toThrow();
  });
});