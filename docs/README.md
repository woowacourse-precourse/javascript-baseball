
기능 구현 목록
1. 상대방(컴퓨터)는 1~9까지 중 서로 다른 임의의 수3개를 선택
2. 플레이어는 상대방이 생각한 3개의 서로 다른 숫자를 입력
3. 상대방과 플레이어의 숫자의 각 자리와 숫자가 일치하는지 비교
    3.1 자리와 숫자가 일치할 경우 스트라이크 카운트
    3.2 숫자만 일치할 경우 볼 카운트
    3.3 일치하는 숫자가 없을 경우 '낫싱' 출력
    3.4 모두 일치 할 경우 승리(스트라이크 카운트=3)
        3.4.1 승리시 (재시작/종료) 선택
        1-재시작 - 재시작 선택시 1번부터 다시 시작
        2-종료

*예외사항
1. 2번의 플레이어의 입력이 잘못된 경우
    ex)서로 다르지 않은 3가지 숫자, 숫자입력x
2. 3.4.1번의 1,2가 아닌 수를 입력한 경우

예외사항에 해당할 시 프로그램 종료

1. class App
⇒ 게임을 시작하고 플레이
    1.1 constructor(ball,strike)
        ball,strike 멤버 변수 선언
    1.2 play()
        게임의 시작을 알리는 프린트를 출력
    1.3 compare(player_number,comp_number)⇒ ball과 strike의 갯수 리턴
        play_number와 comp_number를 비교

2. class player
⇒ 플레이어의 숫자를 입력 받고 검사
    2.1 constructor(player_number)
        player_number를 멤버 변수로 선언
    2.2 getplayer_number() ⇒ player_number를 리턴
        console.readline으로  player_number를 입력
    2.3 player_numbercheck(player_number)// 예외 처리
        입력 받은 player_number가 정확한 정보인지 검사

3. class computer
⇒컴퓨터의 숫자를 입력받음
    3,1 constructor(computer_number)
        computer_number를 멤버 변수로 선언
    3.1 getcomputer_number() ⇒computer_number를 리턴
        랜덤으로 서로 다른 숫자 3개를 입력