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

## 3. ComputerRandomInput

컴퓨터의 랜덤 input 값 생성

- MissionUtils 라이브러리에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
- Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.
- 사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.

```
const MissionUtils = require("@woowacourse/mission-utils");

	computerRandomInput = () => {
		const computer = [];
		while (computer.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!computer.includes(number)) {
				computer.push(number);
			}
		}

		return computer.join("");
	};
```

## 4. printResult

유저의 input과 컴퓨터의 input을 비교해서 결과를 나타낸다.

- 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱으로 결과를 보여준다.
- 3개 다 맞추면 성공 메시지를 나타낸다.

```
printResult = (userInput, computerInput) => {
		let strike = 0;
		let ball = 0;
		let nothing = true;

		for (let i = 0; i < computerInput.length; i++) {
			if (computerInput.includes(userInput[i])) {
				nothing = false;
				if (userInput[i] === computerInput[i]) {
					strike++;
				} else {
					ball++;
				}
			}
		}

		if (nothing) {
			MissionUtils.Console.print("낫싱");
			return;
		}

		let result = "";

		if (ball) result += `${ball}볼 `;
		if (strike) result += `${strike}스트라이크`;

		MissionUtils.Console.print(result);
		strike === 3 && 성공 메시지
	};

```

## 5.successResult

모든 수를 맞췄을 때 조건을 설정

- 3스트라이크일 때 "3개의 숫자를 모두 맞히셨습니다! 게임 종료"를 print한다.
- 사용자의 값을 입력 받는다.
  - "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  - input 값에 "1"이 들어오면 게임 실행
  - input 값에 "2"가 들어오면 게임 종료
  - 그 이외의 값은 error 반환

```
	successResult = () => {
		MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

		MissionUtils.Console.readLine(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
			input => {
				if (input === "1") {
					this.play();
				} else if (input === "2") {
					MissionUtils.Console.close();
				} else {
					throw new Error();
				}
			}
		);
	};
```

## 6. UserInputCompared

유저의 input 값을 입력 받고, 값을 비교하며 게임을 진행

- 유저의 input 값의 유효성 검사
- 유저의 input 값과 랜덤 값을 비교
- 재실행
