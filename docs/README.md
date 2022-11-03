숫자야구

#예외사항
    사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

#기능 구현
    컴퓨터의 숫자
        컴퓨터의 숫자를 담을 computer_numbers 배열을 만든다
        1-9중 랜덤한 값을 push한다
        중복되지 않을경우 computer_numbers의 길이가 3이 될때까지 푸시한다

    user의 숫자
        user의 숫자를 담는 user_numbers 배열을 만든다
        get_number에 사용자로부터 입력값을 받아온다.
        예외사항이 없는지 확인한다.
        사용자의 값을 숫자형으로 바꾼 뒤 user_numbers에 담는다.

    게임
        사용자의 입력값과 컴퓨터의 숫자가 일치할때까지 반복하는 반복문을 만든다.
        scores 객체를 만든다 초기값 = {strike : 0, ball : 0}
        scores.strike가 3일 경우 게임 종료

        
    숫자 비교
        computer_numbers와 user_numbers의 인덱스와 값이 같으면 scores.strike에 +1 해준다
        computer_numbers와 user_numbers의 값이 같으나 인덱스가 같지 않다면 scores.ball에 +1 해준다
        computer_numbers와 user_numbers가 전부 같지 않은 경우 '낫싱'을 리턴한다

    게임종료
        게임 종료 후 재도전과 종료 텍스트를 내보낸 후
        사용자의 입력값을 받아 게임 함수를 실행하거나 프로그램을 종료한다.
