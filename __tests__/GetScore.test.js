const GetScore = require("../src/play/GetScore");

describe("GetScore Class Test Operation", () => {
  let score;

  beforeEach(() => {
    score = new GetScore();
  });

  test("getStrikeCount 메소드 입력값에 따른 스트라이크 카운팅 테스트", () => {
    const nothing = score.getStrikeCount([1, 2, 3], [4, 5, 6]);
    const oneStrike = score.getStrikeCount([1, 2, 3], [1, 3, 2]);
    const threeStrike = score.getStrikeCount([1, 2, 3], [1, 2, 3]);

    expect(nothing).toEqual(0);
    expect(oneStrike).toEqual(1);
    expect(threeStrike).toEqual(3);
  });

  test("getBallCount 메소드 입력값에 따른 볼 카운팅 테스트", () => {
    const nothing = score.getBallCount([1, 2, 3], [4, 5, 6]);
    const oneBall = score.getBallCount([1, 2, 3], [3, 4, 5]);
    const threeBall = score.getBallCount([1, 2, 3], [2, 3, 1]);

    expect(nothing).toEqual(0);
    expect(oneBall).toEqual(1);
    expect(threeBall).toEqual(3);
  });

  test("scoreCheck 메소드 입력값에 따른 볼/스트라이크 카운팅 테스트", () => {
    const nothing = score.scoreCheck(0, 0);
    const onlyBall = score.scoreCheck(0, 1);
    const onlyStrike = score.scoreCheck(1, 0);
    const ballAndStrike = score.scoreCheck(2, 1);

    expect(nothing).toEqual("낫싱");
    expect(onlyBall).toEqual("1볼");
    expect(onlyStrike).toEqual("1스트라이크");
    expect(ballAndStrike).toEqual("1볼 2스트라이크");
  });
});
