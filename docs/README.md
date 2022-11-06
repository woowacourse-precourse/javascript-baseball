# 🚀️ 구현 요구 사항

- 게임 시작 문구 출력
- 입력 받은 숫자에 따른 힌트 제공
  - 잘못된 값 입력 시 throw문 사용해 게임 종료
  - 정답을 맞출 때까지 반복
- 게임 종료시 (재경기 혹은 종료) 문구 출력
  - 1 재경기 -> 게임 재시작
  - 2 종료 -> 게임 종료
- 👀️ 필요 기능 목록에 따른 테스트 케이스 작성하기

# 👀️ 필요 기능

- printMsg
  - 문구 출력하기
- greetingMsg
  - 게임 시작 알리기
- setAnswer
  - 임의의 세 자리 숫자를 정답으로 정하기
  - @returns {number[]} 세 개의 숫자 배열
- askNumInput
  - 게임 진행을 위해 유저에게 숫자 입력 받기
  - 입력 받은 후 콜백 함수(isValidInput/getHint) 호출
  - @param {string} 세 자리 문자열 '123'
- isValidInput
  - 유저가 입력한 숫자 확인하기
    - isNumber : 숫자만 입력했는지
    - isVaildLength : 세 자리인지
    - isAllDiffNum : 1부터 9 중에서 서로 다른 수로 이루어졌는지
  - 유효한 값이 아니면 toThrow 호출
- toThrow
  - throw 문으로 애플리케이션 종료
- getHint
  - 입력한 숫자를 검증 후 보여 줄 힌트 메세지 반환하기
  - isNothing : 하나도 없는 경우
  - isThreeStrike : 3개의 숫자를 모두 맞힐 경우
  - 그 외 : 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
  - @returns {string} 낫싱/3스트라이크/1볼1스트라이크/2볼
- countBallOrStrike
  - ball 과 strike 갯수 카운트 하기
  - @returns {{ ballCount : number, strikeCount : number }}
- askRematchOrExit
  - 재경기 혹은 게임 종료를 원하는지 묻기
  - @param {number} 1,2
