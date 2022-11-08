<--generateAnswer 함수>
- 컴퓨터가 정할 정답을 this.answer라는 배열로 생성한다
- 미션 유틸 Random.pickNumberInRange로 서로 다른 세 개의 수로 이루어진 this.answer 배열을 만든다

<--play 함수-->
- 숫자 야구 게임을 시작합니다. print
- generateAnswer() 함수로 정답을 생성한다
- 미션유틸 readLine으로 '숫자를 입력해 주세요' print, 입력된 num을 determineResult 함수로 실행한다

<--determineResult 함수-->
- guess라는 변수에 play함수 readLine에 입력된 num을 넣어 배열을 만든다
- guess 길이가 3이 아니거나 NaN가 포함된 경우 throw Error
- countStrike, countBall 변수에 0을 할당하고 loop로 answer와 guess를 비교해 스트라이크와 볼 개수를 구한다
- countStrike, countBall이 모두 0이면 '낫싱' 출력
- countStrike는 0, countBall이 0이 아니면 'countBall + 볼' 출력
- countStrike가 3이나 0이 아니고 countBall이 0이면 'countStrike + 스트라이크' 출력
- countStrike, countBall 모두 0이 아니면 'countBall + 볼 + countStrike + 스트라이크' 출력
- countStrike가 3이 아니면 readLine으로 숫자 재입력 요청해서 입력받은 num을 다시 this.determineResult 함수로 실행
- countStrike가 3이면 '3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료' 출력 후, readLine으로 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요'를 출력하고 입력이 1이면 App 클래스 새로 생성해서 play() 실행, 2면 throw new Error로 프로그램 종료