const validation = require('../src/validation/validation');
const title = 'validation 함수 테스트';
console.log(title);
test(title, () => {
  expect(validation('123')).toBeTruthy();
  expect(validation('456')).toBeTruthy();
  expect(validation('112')).not.toBeTruthy();
  expect(validation('120')).not.toBeTruthy();
  expect(validation('sdf')).not.toBeTruthy();
  expect(validation('1234')).not.toBeTruthy();
  expect(validation(' ')).not.toBeTruthy();
  expect(validation('[]')).not.toBeTruthy();
  expect(validation('')).not.toBeTruthy();
});
