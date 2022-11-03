# 숫자 야구 게임 기능 리스트 


1. 초반 문자 출력
* "숫자 야구 게임을 시작합니다"출력
* "숫자를 입력해주세요 : " 출력

2. 게임 실행을 위한 기능  
* build_answer
    * 3자리 임의의 수 배열 생성 (자동생성)
        * 입력 x
        * 반환 nums_list = [...nums] : array(int)
* choice_answer
    * 유저가 선택한 임의의 수를 입력 받아 배열로 변경 (유저입력)
        * 입력 user_nums : int
        * 반환 nums_list = [...user_nums] : array(int)
* count_strike
    * 입력받은 숫자와 랜덤 숫자를 비교하여 스트라이크 출력
        * 입력 answer,user_select : array(int)
            * 초이스 앤서 와 빌드 앤서 결과 입력
        * 반환 strike : int
            * 스트라이크 갯수  
        * 배열에 순서별 변수 대입
        * 배열에 순서와 같고 & 숫자가 같은 수 = 스트라이크 출력
* count_ball
    * 입력받은 숫자와 랜덤 숫자를 비교하여 볼 출력
        * 입력 answer,user_select : array(int)
            * 초이스 앤서 와 빌드 앤서 결과 입력
        * 반환 ball : int
            * 볼 갯수
        * 배열의 숫자가 같은수 = 볼 출럭
* print_hint 
    * 힌트 출력
        * 입력 strike, ball : int
           * 스트라이크와 볼의 갯수
    * 반환 값 없음


## 메인함수
```
'숫자 게임을 시작합니다' 출력
answer = build_answer();

while(strike != 3){
    유저한테 입력받음 
    user_select = choice_answer(입력받은 숫자);

    strike = count_strike(answer,user_select);

    ball = count_ball(answer,user_select);

    print_hint(strike,ball);
}
```

