const { getRandomNumberExceptList, getUniqueNumbersInRange } = require('../src/utils/RandomNumber');

describe('컴퓨터 숫자값 테스트', () => {
	test('리스트에 있는 값을 제외하고 랜덤한 숫자 받아오기', () => {
		const numberList = ['1', '2', '3', '4', '5', '6', '7', '8'];
		const result = getRandomNumberExceptList(1, 9, numberList);

		expect(result).toEqual('9');
	});

	test('서로 다른 3자리 숫자 배열 만들기', () => {
		const result = getUniqueNumbersInRange(1, 3, 3);

		expect(result.sort()).toEqual(['1', '2', '3']);
	});
});
