class constructor 초기 설정

- userAnswer : 사용자에게 입력 받는 정답
- answer : 컴퓨터가 정한 정답
- score : 볼, 스트라이크, 낫싱 점수

startMent 메소드

- 시작 멘트 출력 메소드

pickRandomAnswer 메소드

- 컴퓨터가 1~19 사이의 숫자 중 3개의 숫자를 뽑아 정답을 정하게 하는 메소드

inputUserAnswer 메소드

- 사용자에게 정답을 입력 받는 메소드
- 문제에 주어진 조건 예외 상황 체크 (throw)
- input 받은 값 저장

getScore 메소드

- 사용자에게 입력 받은 정답을 컴퓨터 정답과 비교, 점수 계산하여 score에 저장

printScore 메소드

- score 에 저장된 점수에 따라 문제 상황에 맞게 출력

restart 메소드

- 게임 한 턴 종료 시 새로운 게임을 시작할 지 말 지 여부를 사용자에게 입력 요청

start 메소드, play 메소드

- pickRandomAnswer, inputUserAnswer 메소드 호출
- play 메소드에 start 메소드 연동
