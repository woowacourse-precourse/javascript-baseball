우아한 테크코스-프리코스 2주차 미션

# <숫자야구 기능별 구현 목록>

## 예외처리

입력값이 3개인지
입력값이 모두 숫자인지
입력값 3개중 중복된 값이 없는지

## 구현

- [x] 게임 시작문 출력
- [x] 랜덤함수 생성 후 randomNumArr 배열로 저장(MissionUtils - pickNumberInRange)
  - [x] 중복값이 없는지 확인
- [x] 입력값 받기 (MissionUtils - Console.readLine)
- [x] 받은 입력값 split("")해서 inputNumArr 배열로 저장
- [x] 입력값 예외처리
  - [x] 1~9 범위의 숫자인지 확인
  - [x] 숫자 3개가 들어왔는지 확인
  - [x] 중복값이 없는지 확인
  - [x] 오류값이 있는 경우 throw 후 종료
- [x] 입력값과 랜덤값 비교해서 결과 구하기
  - [x] NOTHING = 0, BALL = 1, STRIKE = 2로 상수 설정
  - [x] gameResult = { ball:0, strike:0 }, result = 0 생성
  - [x] 입력값과 랜덤값을 비교해서 값만 같으면 result = BALL, index까지 같으면 result = STRIKE
  - [x] result 값에 따라 gameResult에서 ball 또는 strike 점수 적립
- [x] 출력
  - [x] strike 3개일 때 게임 종료문구 출력
  - [x] ball = 0, strike = 0 일 경우 '낫싱'출력
  - [x] 볼과 스트라이크 수에 맞게 출력문 실행
- [x] 게임 지속여부 정하기
  - [x] strike 3일 때 지속여부값 새로 입력받기
    - [x] 새로 받은 값이 1이면 처음부터 실행, 2면 프로그램 종료
  - [x] 값을 맞추지 못했을 경우 다시 입력값을 받는 함수부터 실행
