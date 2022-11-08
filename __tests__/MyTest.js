const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
        return acc.mockImplementationOnce((question, callback) => {
        callback(input);
        });
    }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);

    // MissionUtils.Random.pickUniqueNumbersInRange 경우도 호환 가능
    const divisions = [];
    const number_clone = [...numbers];
    for(let i = 0; i < numbers.length/3; i++) {
        divisions.push(number_clone.splice(0, 3));
    }

    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    divisions.reduce((acc, numbers) => {
        return acc.mockReturnValueOnce(numbers);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임 (MyTest)", () => {
    test("예외처리 1. 길이가 3이 아닌 값을 입력할 경우", () => {
        const randoms = [1, 3, 5];
        const answers = ["24"];
    
        mockRandoms(randoms);
        mockQuestions(answers);
    
        expect(() => {
            const app = new App();
            app.play();
          }).toThrow();
      });
    
      test("예외 처리 2. 숫자가 아닌 값을 포함한 값을 입력할 경우", () => {
        const randoms = [1, 3, 5];
        const answers = ["1a4"];
    
        mockRandoms(randoms);
        mockQuestions(answers);
    
        expect(() => {
          const app = new App();
          app.play();
        }).toThrow();
      });

      test("예외 처리 3. 0이 포함된 수를 입력할 경우", () => {
        const randoms = [1, 3, 5];
        const answers = ["014"];
    
        mockRandoms(randoms);
        mockQuestions(answers);
    
        expect(() => {
          const app = new App();
          app.play();
        }).toThrow();
      });

      test("예외 처리 4. 중복된 값이 있는 수를 입력할 경우", () => {
        const randoms = [1, 3, 5];
        const answers = ["335"];
    
        mockRandoms(randoms);
        mockQuestions(answers);
    
        expect(() => {
          const app = new App();
          app.play();
        }).toThrow();
      });

      test("예제 1", () => {
        const randoms = [1, 3, 5];
        const answers = ["467", "389", "148", "513", "135", "2"];
        const logSpy = getLogSpy();
        const messages = [
          "낫싱",
          "1볼",
          "1스트라이크",
          "3볼",
          "3스트라이크",
          "게임 종료"
        ];
    
        mockRandoms(randoms);
        mockQuestions(answers);
    
        const app = new App();
        app.play();
    
        messages.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
      });

      test("예제 2", () => {
        const randoms = [1, 3, 5, 2, 4, 6];
        const answers = ["123", "135", "1", "513", "246", "2"];
        const logSpy = getLogSpy();
        const messages = [
          "1스트라이크",
          "3스트라이크",
          "낫싱",
          "3스트라이크",
          "게임 종료"
        ];
    
        mockRandoms(randoms);
        mockQuestions(answers);
    
        const app = new App();
        app.play();
    
        messages.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
      });
  });
  