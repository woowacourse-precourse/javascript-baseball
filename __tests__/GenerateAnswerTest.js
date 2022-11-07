const { generateAnswer } = require('../src/ControlAnswer/GenerateAnswer');
const ANSWER = require('../src/Constants/Answer');
const { generateNumArr } = require('../src/Utils');

test('올바른 정답이 만들어 졌는지 테스트', () => {
  const answer = generateAnswer();
  const validRangeNumArr = generateNumArr(ANSWER.MIN, ANSWER.MAX);

  expect(
    answer.filter((number) => validRangeNumArr.includes(number))
  ).toHaveLength(ANSWER.LENGTH);
  expect([...new Set(answer)].length === answer.length).toBeTruthy();
  expect(answer.length === ANSWER.LENGTH).toBeTruthy();
});
