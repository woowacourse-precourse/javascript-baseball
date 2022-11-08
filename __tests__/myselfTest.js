const App = require('../src/App')
const MissionUtils = require('@woowacourse/mission-utils')

describe('숫자 야구 게임', () => {
    // test("사용자 입력 확인 테스트 코드 1", () => {
    //   const input = "123";
    //   const result = input.split("");

    //   const app = new App();
    //   app.play();

    //   expect(result).toContain("2", "1", "3");
    //   expect(result).toContainEqual("1", "2", "3");
    // });
    // test("사용자 입력 확인 테스트 코드 2", () => {
    //   const input = "876";
    //   const result = input.split("");

    //   const app = new App();
    //   app.play();

    //   expect(result).toContain("7", "6", "8");
    //   expect(result).toContainEqual("8", "7", "6");
    // });

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
    };
    
    const getLogSpy = () => {
      const logSpy = jest.spyOn(MissionUtils.Console, "print");
      logSpy.mockClear();
      return logSpy;
    };

    // test("볼과 스트라이크 체크", () => {
    //   const randoms = [3, 6, 9];
    //   const answers = ["246", "872", "386", "369"];
    //   const logSpy = getLogSpy();
    //   const messages = [
    //     "1볼",
    //     "낫싱",
    //     "1볼 1스트라이크",
    //     "3스트라이크",
    //   ];
  
    //   mockRandoms(randoms);
    //   mockQuestions(answers);
  
    //   const app = new App();
    //   app.play();
  
    //   messages.forEach((output) => {
    //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    //   });
    // });

    // test("볼과 스트라이크 체크", () => {
    //   const randoms = [7, 9, 8];
    //   const answers = ["246", "135", "879", "798"];
    //   const logSpy = getLogSpy();
    //   const messages = [
    //     "낫싱",
    //     "낫싱",
    //     "3볼",
    //     "3스트라이크",
    //   ];
  
    //   mockRandoms(randoms);
    //   mockQuestions(answers);
  
    //   const app = new App();
    //   app.play();
  
    //   messages.forEach((output) => {
    //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    //   });
    // });

    // test("예외 테스트 1", () => {
    //   const randoms = [3, 6, 9];
    //   const answers = ["1234"];
  
    //   mockRandoms(randoms);
    //   mockQuestions(answers);
  
    //   expect(() => {
    //     const app = new App();
    //     app.play();
    //   }).toThrow();
    // });

    // test("예외 테스트 2", () => {
    //   const randoms = [3, 6, 9];
    //   const answers = ["a23"];
  
    //   mockRandoms(randoms);
    //   mockQuestions(answers);
  
    //   expect(() => {
    //     const app = new App();
    //     app.play();
    //   }).toThrow();
    // });

    // test("예외 테스트 3", () => {
    //   const randoms = [3, 6, 9];
    //   const answers = ["2"];
  
    //   mockRandoms(randoms);
    //   mockQuestions(answers);
  
    //   expect(() => {
    //     const app = new App();
    //     app.play();
    //   }).toThrow();
    // });

    test("게임 종료 후 재시작", () => {
      const randoms = [3, 6, 9, 7, 2, 1];
      const answers = ["245", "135", "136", "368", "369", "1", "597", "721", "2"];
      const logSpy = getLogSpy();
      const messages = [
        "낫싱",
        "1볼",
        "2볼",
        "2스트라이크",
        "3스트라이크",
        "1볼",
        "3스트라이크",
        "게임 종료",
      ];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      const app = new App();
      app.play();
  
      messages.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
})
