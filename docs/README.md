## 숫자 야구 기능 체크 리스트

- 입력
	- [x] default 숫자 입력
	- [x] 게임 종료시 1, 2번 선택
- 처리 및 출력
	- [x] 입력한 숫자에 대한 결과 출력
	- [x] 게임 종료 후 입력에 대한 종료/재시작
	- [x] 상황에 맞는 안내 문구 출력
	- [x] 잘못된 데이터 경고 출력

- 도메인 모델
	- [x] (Game) 랜덤 숫자 생성
	- [x] (Game) 생성된 랜덤 숫자와 입력값 위치 비교
	- [x] (Judgement) toString()메서드
	- [x] (Judgement) isAllStrike()메서드
	- [x] (Referee) Game할당
	- [x] (Referee) 입력받은 값에 대한 Judgement반환
