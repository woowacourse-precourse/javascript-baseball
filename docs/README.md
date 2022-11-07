# 기능 구현 목록

1. enterUserInput

   유저의 답을 받는 기능

   1-1. isVaildInput

   - 유저의 답이 유효한지 검사하는 기능

   - 유효하지 않으면 throw문으로 에러 처리

     1-1-1. isThreeUniqueNumber

     - 3개의 서로 다른 수인지 검사하는 기능

     1-1-2. isEachVaildNumber

     - 각 숫자가 1~9의 범위를 가지고 있는지 검사하는 기능

2. makeThreeUniqueRandomNumber

   세 개의 서로 다른 숫자를 가진 답을 생성하는 기능

3. compareUserWithAnswer

   유저의 답과 생성한 답을 비교하는 기능

4. printResult

   결과를 출력하는 기능

   모두 스트라이크 시 printCorrectMessage 함수 실행

   그렇지 않으면 다시 사용자 입력 받기 위해 enterUserInput 함수 실행

   4-1. printCorrectMessage

   - 모두 스트라이크일 시 게임 종료 메시지 출력하는 기능

     4-1-1. exitOrRestart

     - 재시작할 건지, 게임을 마칠 건지 유저에게 물어보는 기능

     - 1과 2의 숫자가 아닌 다른 값이 입력되면 throw문으로 에러 처리
