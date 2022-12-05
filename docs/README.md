# 구현기능목록

## 1. 랜덤 숫자 발급

- Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용
- Random.pickNumberInRange() 사용시 중복 제거필요.

## 2. 입력값 받기

- MissionUtils 라이브러리에서 제공하는 Console.readLine 활용

## 3. 예외처리

- 입력받은 것이 서로 다른 3자리 숫자인지 아닌지 확인
- 아닐 경우 throw문을 사용하여 종료

## 4. 상대방의 수와 입력받은 숫자의 일치여부 확인

- 초기값이 [0,0]인 strikeBallCount 생성
- 같은 자리에 같은 수면 strikeBallCount[0]에 1씩 더하기
- 다른 자리에 같은 수면 strikeBallCount[1]에 1씩 더하기

## 5. 게임결과출력

- strikeBallCount가 여전히 [0,0]이면 '낫싱'반환
- strikeBallCount가 [3,0]이면 '3스트라이크\n 3개의 숫자를 모두 맞히셨습니다! 게임 종료'반환
- 위 조건이 아니면서 strikeBallCount[0] 혹은 strikeBallCount[1]이 0보다 크면 스트라이크 혹은 볼 앞에 붙여 반환
- MissionUtils 라이브러리에서 제공하는 Console.print 활용

## 6. 정답이 아닐경우 재시도

- 정답이 아닐경우 게임결과 출력 이후 '숫자를 입력해주세요'
- 3스트라이크가 나올 때까지 반복

## 7. 재시작 및 종료

- 게임이 끝나면 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'를 출력
- MissionUtils 라이브러리에서 제공하는 Console.readline 활용

### 상수명은 SNAKE_CASE로 작성할 것.
