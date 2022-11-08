기능 구현 리스트
---
### 핵심기능
1. 주어진 숫자와 사용자가 입력한 숫자를 parameter로 받아 비교하여 return값을 주는 함수 [ match ]
2. 주어진 숫자 예외처리 [Validation check] ( 1-9로 이루어진 3자리 숫자 )

기능 구현 전 미리 생각한 구조
---
```javascript
play() {
	console.log("숫자 야구 게임을 시작합니다.");
	let flag = 1;

	while(flag === 1){
		// 사용자 숫자 입력
		input();
		// 사용자가 입력한 숫자에 대한 결과를 반환하는 함수 호출
		result = match();

		if(result === 성공){
			// 게임 더 진행할껀지 입력 받는다.
			flag = input();
		}
	}
	// 게임종료
}
```

Code Convention
---
1. 상수명은 SNAKE_CASE로 작성합니다.
2. 소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않습니다.
3. 클래스, 메서드 등의 이름에는 특수 문자를 사용하지 않습니다.
4. indent depth는 2까지만


Commit Convention
---
```text
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
###**< type >**
- feat (feature) : 기능 구현
- fix (bug fix) : 버그 수정
- docs (documentation) : 문서 ( ex, md file )
- style (formatting, missing semi colons, …) : modify code style
- refactor : code refactoring
- test (when adding missing tests)
- chore (maintain)

###**< subject >**
- 첫글자 대문자 X
- 끝에 (.) X
- 현재시제사용 ex) added X ➡️ add O

###**< body >**
- 현재시제사용
- 변경 이유와 동기, 이전 동작과의 비교

###**< footer >**
- 모든 주요 변경 사항, 변경 사항에 대한 설명은 정당성, 참고 사항과 함께 footer에서 언급

---
요구사항
---
1. VanillaJS로만 구현
2. Javascript Code Convention : https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript
3. 프로그램 종료 시 ```process.exit()```를 호출하지 않는다.
4. 프로그램 구현이 완료되면 ```ApplicationTest```의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
5. 프로그래밍 요구 사항에서 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
6. indent(들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
   a. ex) while문 안에 if문이 있으면 들여쓰기는 2이다.
   b. 함수로 분리하기.
7. 함수가 한 가지 일만 하도록 최대한 작게 만들기
8. Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
   a. 테스트 도구 사용법이 익숙하지 않다면 ```__tests__/StringTest.js```를 참고하여 학습한 후 테스트를 구현한다.

라이브러리
---
- [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
    - Random 값 추출은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange()`를 활용한다.
    - 사용자의 값을 입력 받고 출력하기 위해서는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.

