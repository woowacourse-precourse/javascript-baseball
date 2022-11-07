const MissionUtils = require("@woowacourse/mission-utils");

const MSG = {
  START: "숫자 야구 게임을 시작합니다.",
};

afterAll(() => {
  MissionUtils.Console.close();
});

describe("숫자 야구 게임 모의 테스트", () => {
  test("게임 시작", () => {
    const gameStart = jest.fn((msg) => {
      MissionUtils.Console.print(msg);
      MissionUtils.Console.print("게임 조건 세팅...");
    });

    gameStart(MSG.START);

    expect(gameStart.mock.calls[0][0]).toContain("숫자 야구 게임을 시작합니다.");
  });

  test("정답 번호 선택", () => {
    const choiceNumber = jest.fn((numbers) => {
      const answer = [];
      numbers.forEach((number) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(number, number);
        answer.includes(randomNumber) ? answer : answer.push(randomNumber);
      });
      MissionUtils.Console.print(answer);
    });

    choiceNumber([1, 3, 5]);

    expect(choiceNumber.mock.calls[0][0]).toEqual([1, 3, 5]);
  });

  test("플레이어에게 입력 받은 값이 올바른지 체크", () => {
    const isInputValid = jest.fn((input) => {
      if (input == "1" || input == "2") return "게임 종료 여부 체크";
      if (input === "135") {
        return "올바른 값 입력됨";
      } else {
        return "예외 처리";
      }
    });
    const inputNumber = jest.fn((input) => {
      return isInputValid(input);
    });

    inputNumber("1");
    inputNumber("135");
    inputNumber("errorCase");

    expect(isInputValid.mock.results[0].value).toEqual("게임 종료 여부 체크");
    expect(isInputValid.mock.results[1].value).toEqual("올바른 값 입력됨");
    expect(isInputValid.mock.results[2].value).toEqual("예외 처리");
  });

  test("입력된 값을 게임 규칙에 맞게 판별하는 기능", () => {
    const inputMatch = jest.fn((input) => {
      const playerInput = input;
      const answer = [1, 3, 5];

      let ball = 0;
      let strike = 0;

      answer.forEach((number, index) => {
        if (playerInput.indexOf(number) === index) {
          strike++;
        } else if (playerInput.includes(number)) {
          ball++;
        }
      });

      return `${ball}볼 ${strike}스트라이크`
    });

    const testInput = [
      [1, 3, 2],
      [3, 9, 5],
      [1, 3, 5],
      [3, 5, 1]
    ];

    testInput.forEach((input) => {
      inputMatch(input);
    });

    expect(inputMatch.mock.results[0].value).toEqual("0볼 2스트라이크");
    expect(inputMatch.mock.results[1].value).toEqual("1볼 1스트라이크");
    expect(inputMatch.mock.results[2].value).toEqual("0볼 3스트라이크");
    expect(inputMatch.mock.results[3].value).toEqual("3볼 0스트라이크");
  });

  test("게임 종료 상태 체크 후 처리", () => {
    const isGameEnd = jest.fn((playing, input) => {
      const isPlaying = playing;

      if (isPlaying === true) return "예외 처리";

      if (input === "1") return "재시작";
      if (input === "2") return "완전 종료";
    });

    isGameEnd(false, "1");
    isGameEnd(false, "2");
    isGameEnd(true, "1");

    expect(isGameEnd.mock.results[0].value).toEqual("재시작");
    expect(isGameEnd.mock.results[1].value).toEqual("완전 종료");
    expect(isGameEnd.mock.results[2].value).toEqual("예외 처리");
  });

  test("예외 상황 발생 시 처리", () => {
    const error = jest.fn(() => {
      throw new Error();
    });
    const isInputValid = jest.fn((input) => {
      if (input == "1" || input == "2") return "게임 종료 여부 체크";
      if (input === "135") {
        return "올바른 값 입력됨";
      } else {
        return error();
      }
    });
    const testInput = "errorCase";

    expect(() => {isInputValid(testInput)}).toThrow();
  });
});
