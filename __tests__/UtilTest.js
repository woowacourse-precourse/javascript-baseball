const {
  makeAnswer,
  replyValidation,
  replyCheckAnswer,
  makeReplyToReply,
  //   inputReply,
  //   inputReplay,
  //   closePlay,
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
    const falseInput = "122";
    // when
    const falseResult = replyValidation(falseInput);
    // then
    expect(falseResult).toBe(false);
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
    expect(result2).toEqual({ strike: 3 });
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
    expect(result1).toBe("1볼 1스트라이크");

    // given
    const input2 = {
      strike: 3,
    };
    // when
    const result2 = makeReplyToReply(input2);
    // then
    expect(result2).toBe(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  });

  //   test("inputReply", () => {
  //     // given
  //     // when
  //     // then
  //     expect(inputReply());
  //   });

  //   test("inputReplay", () => {
  //     // given
  //     // when
  //     // then
  //     expect(inputReplay());
  //   });

  //   test("closePlay", () => {
  //     // given
  //     // when
  //     // then
  //     expect(closePlay());
  //   });
});
