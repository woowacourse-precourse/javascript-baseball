# 구현할 기능 목록
## setBaseline
스트라이크의 기준이 되는 중볻되지 않는 세개의 숫자로 이루어진 배열을 만들어 baseLine로 넣어 준다.
## inputTestData
입력으로 3개의 숫자로 이루어진 배열을 만들어 준다.
입력이 잘못 되었다면 에러를 보내준다
## compare
baseLine과 testData를 비교하여 ball과  strike를 세어주고 그 값을 출력한다. 그리고 strike가 3개라면 true 그렇지 않다면 false를 리턴해준다.

 ## progress
 숫자들을 입력받고 기존에 만든메소드를 사용하여 게임을 진행시킨다. 그리고 nextProgress를 호출하여 다음 진행을 결정한다

## nextProgress
end의 여부로 다음 진행을 결정한다.

## continueQuestion
게임을 다시시작할 것인지 종료할 것인지를 묻는다

## continueAnswer
1이면 다시 게임을 시작, 2는 종료, 다른 입력은 오류를 보내준다