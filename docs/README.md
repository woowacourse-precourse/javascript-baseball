--필요한 변수: ComputerNumbers, PlayerNumbers, strike, ball, gameAgain

--설계
0. "야구 게임을 시작합니다" 출력.
반복문(횟수:무한){
    1. 임의의 세자리 수를 Computer가 생성함.
    oneGame
    반복문(횟수:무한){
        
        2. Player에게 수를 입력 받음.

        3. computer 수와 player의 수를 비교 검사하여 strike와 ball의 수를 산출함.
        반복문(횟수:3번){
            조건문{
                (1) player의 수 한 자리씩 검사해서 computer의 수와 일치하면 strike 증가
                (2) computer.includes 상태면 ball 증가
            }
        }===> 통째로 compareComputerAndPlayer 함수로 구현.

        4. strike와 ball의 개수에 맞게 게임 결과를 출력
        조건문{
            (1) strike와 ball 둘 다 0 이면 '낫싱' 출력
            (2) strike만 있으면 strike 개수에 맞게 출력
            (3) ball만 있으면 ball 개수에 맞게 출력
            (4) 둘 다 있으면 각자 개수에 맞게 출력
        }===> printStrikeAndBall 함수
        
        5. 게임종료 조건 검사
        조건문{
            (1) strike가 3이면 "3개의 숫자를 모두 맞히셨습니다! 게임 종료" 출력 후 반복문 break.
        }

    }===> oneGame 함수로 통째로 구현.

    6. 게임을 새로 시작할지 종료할지 숫자 입력받음 ===> askGameAgain 함수

    7. 입력받은 숫자 값 검사 또는 변수에 할당.
}


--필요한 기능
1. 게임 시작 문구 출력 함수(gameStartingText)
2. Computer가 생성한 난수 가져오는 함수(computerNumbersMaking)
3. Player의 수 입력 받는 함수(playerNumbersInput)
4. 하나의 게임을 진행하는 함수(oneGame)
5. computer와 player의 숫자 비교 검사하여 strike와 ball 산출하는 함수(compareComputerAndPlayer)
6. strike와 ball 개수에 맞게 출력하는 함수(printStrikeAndBall)
7. 게임 종료 조건 검사하는 조건문
8. 게임 재시작할지 입력받는 함수(askGameAgain)
9. 게임 재시작 조건 검사 또는 변수 할당
