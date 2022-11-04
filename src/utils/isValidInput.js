// 문자열 길이와 str 안의 값을 new Set(str)로 넣어서 사이즈가 다르면 중복
function isDuplicate(str) {
	return str.length !== new Set(str).size;
}

function isValidInput(userInput) {
	return (
		// 정수인지 확인
		Number.isInteger(Number(userInput)) &&
		// 길이가 3인지 확인
		userInput.length === 3 &&
		// 0을 포함하는지 확인
		!userInput.includes(0) &&
		// 중복된 문자를 포함하는지 확인
		!isDuplicate(userInput)
	);
}

export default isValidInput;
