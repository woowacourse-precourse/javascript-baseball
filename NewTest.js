// const App = require("../src/App");
// const MissionUtils = require("@woowacourse/mission-utils");

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

// const getLogSpy = () => {
//   const logSpy = jest.spyOn(MissionUtils.Console, "print");
//   logSpy.mockClear();
//   return logSpy;
// };


// describe("",()=>{
//   test("",()=>{
//     expect()
//   })
//   test("",()=>{
//     expect()
//   })
//   test("",()=>{
//     expect()
//   })
//   test("",()=>{
//     expect()
//   })
//   test("",()=>{
//     expect()
//   })
// })