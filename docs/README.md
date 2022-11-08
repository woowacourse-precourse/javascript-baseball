### 숫자야구게임 기능구현

### 커밋 및 출력 테스팅
- 출력 테스팅 완료
- 커밋 테스팅

## 컴퓨터 랜덤 숫자 생성
- generateComRandom

## 출력
- showMessage

## 입력
- userInput

## 입력값 확인
- checkUserInputValue : 정규표현식을 사용한 userInput값 확인후 배열로 변환후 반환
[!] 에러발견 : 문자열이여도 에러를 던지지 않고 다음 동작으로 내려감 -> 해결완료


## 사용자,컴퓨터 숫자배열 가져오기
- getBothArrays : 각각 배열을 가져옴

## 게임 종료/ 다시 시작
- gameReplay
[!] 기능 오류 : 로직 문제 -> [@]해결완료

## 값 비교
- compareNumbers
[!] 구현중 오류발생
1. 배열이 계속 새로 생성됨 -> 컴퓨터의 랜덤한 배열이 새로 생성되지 않고 고정되게 해야함
2. 함수 자체가 초기화됨 -> 함수 내부에서 동작할 수 있게 만들어야함
[@] 해결완료 

## 스트라이크/볼 확인
- strikeBallCount

## 게임 선택
- gameChoice

## 게임 재시작
- gameReplay

## 게임 재시작 선택
- selectGamePlay

## npm test 동작확인
- Tests: 1 failed, 6 passed
틀린 부분 : 숫자 야구 게임 › 게임 종료 후 재시작(?)
- New Failed occur : expect(jest.fn()).toHaveBeenCalledWith(...expected)
  Expected: StringContaining "낫싱"
  Received: "숫자 야구 게임을 시작합니다."
[@] 해결

## 코드 수정
1. console.log로 된 부분중에서 필요한 부분을 MissionUtils.Console.print()로 바꾸기

## Test 코드 구현 NewTest.js
- 