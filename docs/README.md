# 기능 구현 목록

## 1. Duplicated

3개의 수의 중복 검사

- 0번 째 index 1번 째 index
- 1번 째 index 2번 째 index
- 0번 째 index 2번 째 index

```
  isDuplicated = str => {
  // 문자열 길이와 str 안의 값을 new Set(str)로 넣어서 사이즈가 다르면 중복
  return str.length !== new Set(str).size;
  };
```

## 2. InputValidation

유저의 input 값 검사

- 정수인지 확인
- 3자리인지 확인
- 0을 포함하는지 확인
- 중복이 있는지 확인

위의 조건이 아닐 경우 error 반환

```
inputValidation = str => {
		if (
			!Number.isInteger(Number(str)) ||
			str.length !== 3 ||
			str.includes(0) ||
			this.isDuplicated(str)
		) {
			throw new Error();
		}
	};
```
