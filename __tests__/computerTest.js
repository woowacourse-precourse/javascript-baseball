import Computer from '../src/Computer.js';

const computer = new Computer();
const value = computer.getter();

test('값은 Truthy다.', () => {
  expect(Boolean(value)).toBeTruthy();
});

test('값은 number 타입이다.', () => {
  expect(value.every(v => typeof v === 'number')).toBeTruthy();
});

test('값의 길이는 3이다.', () => {
  expect(value.length).toEqual(3);
});

test('값은 양수다.', () => {
  expect(value.every(v => v > 0));
});
