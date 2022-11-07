1. play()
	a. 게임 시작 문구 출력
	b. getComputerRandomNumber() : 컴퓨터의 랜덤 숫자 만들기
	c. getUserAnswer(computerRandomNumber) : 숫자를 입력받음
2. getComputerRandomNumber()
	- 컴퓨터의 랜덤한 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수 만들기
3. getUserAnswer(computerRandomNumber) 
	- 유저의 입력을 받음
	- 입력을 받으면 referee(answerList, computerRandomNumber)
4. referee(answerList, computerRandomNumber)
	- 입력을 판단
	- checkUserAnswer(answerList) : 사용자가 잘못된 값을 입력했는지 확인
	- findStrike(answerList, computerRandomNumber) : strike 개수 세기
	- findIntersection(answerList, computerRandomNumber) : 교집합 찾기
		>> strike 개수와 교집합 개수로 ball 개수 계산
	- strike 개수와 ball 개수로 출력하기
	- 3개의 strike : replay(option) >> 게임 재시작 또는 종료
	- getUserAnswer(computerRandomNumber) : 입력을 받아서 판단 반복
5. checkUserAnswer(answerList) : 사용자가 잘못된 값을 입력했는지 확인
	- 입력에 0이 포함되어 있는 경우
	- 입력받은 값의 길이가 3보다 적은 경우
	- 입력받은 값의 길이가 3보다 긴 경우
	- checkNumber(answerList) : 입력받은 값이 숫자가 아닌 경우
	- 서로 다른 숫자로 이루어지지 않은 경우
6. checkNumber(answerList) : 입력받은 값이 숫자가 아닌 경우 판단
7. findStrike(answerList, computerRandomNumber) : strike 개수 세기
	- index를 옮기면서 같은 index에 같은 값이 있는지 확인
8. findIntersection(input, computerRandomNumber) : 교집합 찾기
	- 두 array에 공통적으로 있는 값을 찾음
9. replay(option) : 게임 재시작 또는 종료 여부에 따라 실행
	- 1인 경우(게임 재시작) : play()
	- 2인 경우(게임 종료) : close()