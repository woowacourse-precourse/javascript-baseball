## 기능목록

1. 랜덤 숫자 생성 `setRandomNumbers`
    - 서로 다른 3자리의 수
    - 1-9까지의 숫자로 구성
    - 게임이 플레이될 때 처음 한번 생성

2. 숫자야구 실행 `startBaseball`
    : 숫자 입력을 받아 숫자야구 실행
    -> 정답(strikeCount ===3)이면 종료 문구 출력 (7번 실행)
    -> 정답이 아니면 다시 입력값을 받아서 실행

3. 사용자 입력 예외 처리 `inputExceptionHandling`
    - 잘못된 값을 입력햇을 때 → `throw`을 사용하여 예외 발생 후 애플리케이션 종료
    (e) 0 입력 불가
    (e) 숫자 중복 불가
    (e) 문자 입력 불가
    
4. 사용자 입력 확인 `checkInputNumbers`
    : 입력 받은 숫자(`inputNumbers`)와 랜덤 숫자(`randomNumbers`)를 가져와 하나씩 비교한다. 
    - 스트라이크 : 같은 위치, 같은 숫자
    - 볼 : 다른 위치, 같은 숫자
    - 낫싱 : 하나도 없는 경우
    -> return `[ballCount, strikeCount]`

5.  확인 결과 생성 `makeCheckedResult`
    : 사용자 입력 확인값을 토대로 결과를 문자로 생성.
    - 결과 : '_볼 _스트라이크'로 출력
    -> return `{}볼 {}스트라이크`

6.  종료 입력 검사
    - 1  ⇒ 재시작 (`this.play()`)
    - 2 ⇒ 종료 (`MissionUtils.Console.close()`)
    - (e) 그 외 문자 입력 시 종료


