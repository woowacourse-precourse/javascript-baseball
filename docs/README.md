# 미션 - 숫자 야구

## 게임의 흐름

1. 게임 시작
2. 컴퓨터는 임의의 수 3개 선택
3. 게임 플레이어는 서로 다른 3개의 숫자 입력
4. 컴퓨터는 임의의 수와 게임 플레이어가 입력한 수를 비교 후 결과 출력
5. 숫자를 모두 맞히면 종료
6. 1을 입력하면 재시작, 2를 입력하면 완전 종료

## 필요한 객체 생각해 보기

### BaseballGame(야구 게임)

게임을 진행한다.

### PlayerList(선수 명단)

선수를 관리한다.

### PlayerRule(선수 규칙)

선수 규칙을 관리한다.

### Player(선수)

게임에 참가한다.

### Role(역할)

Attacker와 Defender의 추상 클래스

### Attacker(공격수)

수비수를 공격한다.

### Defender(수비수)

공격수의 공격 결과를 보고한다.

### AutomaticNumberGenerator(자동 숫자 생성기)

수비수가 사용할 숫자를 자동 생성한다.

### NumberGenerator(숫자 생성기)

ManualNumberGenerator와 NumberSelectionRule의 추상 클래스

### ManualNumberGenerator(수동 숫자 생성기)

공격수가 사용할 숫자를 수동(입력)으로 생성한다.

### NumberSelectionRule(숫자 선택 규칙)

생성한 숫자가 규칙에 맞는지 확인한다.

### NumberComparisonRule(숫자 비교 규칙)

공격수와 수비수의 숫자를 비교한 후 결과를 반환한다.

## 객체로 보는 게임의 흐름

1. Player는 Attacker, Defender 중 선택 해 BaseballGame에 입장한다.
2. BaseballGame은 PlayerList에 Player들을 추가한다.
3. PlayerList는 Player가 PlayerRule에 맞는지 확인한다.
4. BaseballGame은 PlayerList에 이상이 없으면 게임을 시작한다.
5. Defender는 AutomaticNumberGenerator에게 숫자 생성을 요청한다.
6. AutomaticNumberGenerator는 NumberSelectionRule와 협력해 숫자를 생성한다.
7. Attacker는 ManualNumberGenerator에게 숫자 생성을 요청한다.
8. ManualNumberGenerator는 NumberSelectionRule와 협력해 숫자를 생성한다.
9. Attacker는 생성한 숫자로 Defender를 공격한다.
10. Defender는 공격으로 들어온 숫자와 자신의 숫자와의 비교 결과를 NumberComparisonRule에게 요청한다.
11. NumberComparisonRule은 결과를 Defender에게 반환한다.
12. Defender는 결과를 보고한다.
13. BaseballGame은 결과에 따라 4번 단계로 돌아갈지, 다시 시작 혹은 완전 종료의 선택지를 제안한다.

## 기능 목록

### BaseballGame(야구 게임)

- 프로퍼티
  - playerList: 선수 명단
- 메서드
  - start: 게임을 시작한다.

### PlayerList(선수 명단)

- 프로퍼티
  - currentPlayerList: 현재 선수 명단
  - playerRule: 선수 규칙
- 메서드
  - add: 선수를 추가한다.
  - getAttacker: 공격수를 반환한다.
  - getDefender: 수비수를 반환한다.

### PlayerRule(선수 규칙)

- 메서드
  - isFollowed: 규칙을 지키는지 확인한다.

### Player(선수)

- 프로퍼티
  - role: 역할
- 메서드
  - enter: 게임에 입장한다.

### PlayerRole(선수 공통 역할)

- 프로퍼티
  - numberGenerator: 숫자 생성기
  - number: 생성한 숫자
- 메서드
  - ready: 숫자를 준비한다.

### Attacker(공격수)

- 메서드
  - attack: 수비수를 공격한다.

### Defender(수비수)

- 프로퍼티:
- numberComparisonRule: 숫자 비교 규칙
- 메서드
  - defend: 공격 결과를 보고한다.

### NumberGenerator(숫자 생성기)

- 메서드
  - execute: 숫자 생성 작업을 실행한다.

### AutomaticNumberGenerator(자동 숫자 생성기)

- 프로퍼티
  - numberSelectionRule: 숫자 선택 규칙
- 메서드
  - execute: 자동 숫자 생성 작업을 실행한다.

### ManualNumberGenerator(수동 숫자 생성기)

- 프로퍼티
  - numberSelectionRule: 숫자 선택 규칙
- 메서드
  - execute: 수동 숫자 생성 작업을 실행한다.

### NumberSelectionRule(숫자 선택 규칙)

- 메서드
  - isFollowed: 규칙을 지키는지 확인한다.

### NumberComparisonRule(숫자 비교 규칙)

- 메서드
  - isFollowed: 규칙을 지키는지 확인한다.
