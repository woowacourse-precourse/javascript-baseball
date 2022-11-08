// const App = require("../src/App");
// const MissionUtils = require("@woowacourse/mission-utils");

// const getLogSpy = () => {
//   const logSpy = jest.spyOn(MissionUtils.Console, "print");
//   logSpy.mockClear();
//   return logSpy;
// };

// const getLogSpyRandom = () => {
//   const logSpyRandom = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
//   logSpyRandom.mockClear();
//   return logSpyRandom;
// };

// const mockQuestions = (answers) => {
//   MissionUtils.Console.readLine = jest.fn();
//   answers.reduce((acc, input) => {
//     return acc.mockImplementationOnce((question, callback) => {
//       callback(input);
//     });
//   }, MissionUtils.Console.readLine);
// };

// const mockRandoms = (numbers) => {
//   MissionUtils.Random.pickNumberInRange = jest.fn();
//   numbers.reduce((acc, number) => {
//     return acc.mockReturnValueOnce(number);
//   }, MissionUtils.Random.pickNumberInRange);
// };

// describe("숫자 야구 게임", () => {
//   test("1. 게임 시작 출력문 테스트", () => {
//     const logSpy = getLogSpy();

//     const app = new App();
//     app.play();

//     expect(logSpy).toHaveBeenCalledWith(
//       expect.stringContaining("숫자 야구 게임을 시작합니다.")
//     );
//   });
//   test("2. 컴퓨터 랜덤 번호 뽑기 테스트", () => {
//     const logSpyRandom = getLogSpyRandom();

//     const app = new App();
//     app.play();

//     expect(logSpyRandom).toHaveBeenCalled();
//   });
//   //   test("3. 사용자 입력 테스트", () => {
//   //     const answers = ["246"];
//   //     const logSpy = getLogSpy();

//   //     mockQuestions(answers);

//   //     const app = new App();
//   //     app.play();

//   //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("246"));
//   //   });
//   test("4. 사용자 입력에 대한 예외 처리 테스트", () => {
//     const answer = ["1234"];

//     mockQuestions(answer);

//     expect(() => {
//       const app = new App();
//       app.play();
//     }).toThrow();
//   });
//   test("4. 사용자 입력에 대한 예외 처리 테스트2", () => {
//     const answer = ["097"];

//     mockQuestions(answer);

//     expect(() => {
//       const app = new App();
//       app.play();
//     }).toThrow();
//   });
//   test("5. 사용자 입력에 대한 출력 테스트", () => {
//     const randoms = [4, 8, 6];
//     const answers = ["123", "467", "487", "486"];
//     const logSpy = getLogSpy();
//     const messages = ["낫싱", "1볼 1스트라이크", "2스트라이크", "3스트라이크"];

//     mockRandoms(randoms);
//     mockQuestions(answers);

//     const app = new App();
//     app.play();

//     messages.forEach((output) => {
//       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
//     });
//   });
//   test("6. 재시작 테스트", () => {
//     const randoms = [4, 8, 6, 8, 2, 5];
//     const answers = ["486", "1", "825", "2"];
//     const logSpy = getLogSpy();
//     const messages = ["3스트라이크", "3스트라이크", "게임 종료"];

//     mockRandoms(randoms);
//     mockQuestions(answers);

//     const app = new App();
//     app.play();

//     messages.forEach((output) => {
//       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
//     });
//   });
// });
