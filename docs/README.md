## 구현할 기능 목록

- 랜덤 숫자 추출 함수
  - MissionUtils 라이브러리의 Random.pickNumberInRange() 활용
  - Number 자료형으로 반환

- 사용자 입력 함수 - 3자리 숫자 입력
  - MissionUtils 라이브러리의 Console.readLine, Console.print 활용
  - 예외처리
    - 중복된 숫자를 입력했을 경우
    - 3자리가 아닌 숫자를 입력했을 경우
    - 숫자가 아닌 문자를 입력했을 경우
  - Number 자료형으로 반환

- 사용자가 입력한 숫자와 컴퓨터 숫자 비교 함수
  - 같은 수가 같은 자리에 있으면 스트라이크
  - 같은 수가 다른 자리에 있으면 볼
  - 같은 수자 전혀 없으면 낫싱
  - 결과를 문자열로 반환

- 출력함수
  - 매개변수로 받은 문구를 출력하는 함수로 MissionUtils 라이브러리의 Console.print 활용

- 사용자 입력 함수 - 재시작/종료를 구분하기 위한 입력
  - MissionUtils 라이브러리의 Console.readLine, Console.print 활용
  - 예외처리
    - 1, 2가 아닌 숫자를 입력했을 경우
    - 숫자가 아닌 문자를 입력했을 경우
  - Boolean 자료형으로 반환
