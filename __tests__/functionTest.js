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

  test('checkInputIsValid로 입력값이 중복되지 않은 3자리 숫자인지 검사',()=>{
    const rightInputs = ['123', '503', '937']
    const wrongInputs = ['12', 'abc', '111']
    
    rightInputs.forEach(input => {
      expect(checkInputIsValid(input)).toEqual(true)
    })

    wrongInputs.forEach(input => {
      expect(()=>checkInputIsValid(input)).toThrow()
    })
  })
});
