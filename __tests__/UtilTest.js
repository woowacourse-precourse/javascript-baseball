const {
  makeAnswer,
  replyValidation,
  replyCheckAnswer,
  makeReplyToReply,
} = require("../src/util");

describe("유틸 함수 체크", () => {
  test("makeAnswer is make 3 digit number", () => {
    // given
    const answer = makeAnswer();
    // when
    const answerLength = answer.split("").length;
    // then
    expect(answerLength).toBe(3);
  });

  test("replyValidation", () => {
    // given
    const trueInput = "123";
    // when
    const trueResult = replyValidation(trueInput);
    // then
    expect(trueResult).toBe(true);

    // given
    const inputError1 = "122";
    // when
    const resultError1 = () => replyValidation(inputError1);
    // then
    expect(resultError1).toThrow();

    // given
    const inputError2 = "12";
    // when
    const resultError2 = () => replyValidation(inputError2);
    // then
    expect(resultError2).toThrow();

    // given
    const inputError3 = "1234";
    // when
    const resultError3 = () => replyValidation(inputError3);
    // then
    expect(resultError3).toThrow();
  });

  test("replyCheckAnswer", () => {
    // given
    const input1 = "123";
    const answer1 = "142";
    // when
    const result1 = replyCheckAnswer(input1, answer1);
    // then
    expect(result1).toEqual({
      ball: 1,
      strike: 1,
    });

    // given
    const input2 = "123";
    const answer2 = "123";
    // when
    const result2 = replyCheckAnswer(input2, answer2);
    // then
    expect(result2).toEqual({ ball: 0, strike: 3 });
  });

  test("makeReplyToReply", () => {
    // given
    const input1 = {
      ball: 1,
      strike: 1,
    };
    // when
    const result1 = makeReplyToReply(input1);
    // then
    expect(result1).toEqual({ message: "1볼 1스트라이크", done: false });

    // given
    const input2 = {
      ball: 0,
      strike: 3,
    };
    // when
    const result2 = makeReplyToReply(input2);
    // then
    expect(result2).toEqual({
      message: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      done: true,
    });

    // given
    const input3 = {
      ball: 0,
      strike: 0,
    };
    // when
    const result3 = makeReplyToReply(input3);
    // then
    expect(result3).toEqual({ message: "낫싱", done: false });
  });
});
