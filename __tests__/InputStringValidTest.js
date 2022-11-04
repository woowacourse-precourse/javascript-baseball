const App = require('../src/App');
const Random = require('../src/Random');
const MissionUtils = require('@woowacourse/mission-utils');
const Input = require('../src/Input');

const ANWERNUM = 3;
function IsOverLap(InputStr) {
  const CheckLenghtSet = new Set();
  for (let i = 0; i < InputStr.length; i++) {
    CheckLenghtSet.add(InputStr[i]);
  }

  if (CheckLenghtSet.size === ANWERNUM) {
    return true;
  }
  return false;
}

test('IF InputValidStr is valid', () => {
  const QueryArr = '111';
  expect(IsOverLap(QueryArr)).toBe(false);
  const QueryArrDiff = '123';
  expect(IsOverLap('123')).toBe(true);
  expect(IsOverLap('4231')).toBe(false);
});
