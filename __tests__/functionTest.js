const getScore = require('../src/getScore')
const checkInputIsValid = require('../src/checkInputIsValid')

describe("함수 테스트", () => {
  test("getScore로 결과 점수 반환", ()=>{
    const inputs = ['123', '457', '789', '987']
    const answer = [9, 8, 7]

    const results = [
      {strike: 0, ball: 0, nothing: 3},
      {strike: 1, ball: 0, nothing: 2},
      {strike: 1, ball: 2, nothing: 0},
      {strike: 3, ball: 0, nothing: 0},
    ]

    inputs.forEach((input, i) => {
      const score = getScore(input, answer)
      expect(score).toEqual(results[i])
    })
  })
});
