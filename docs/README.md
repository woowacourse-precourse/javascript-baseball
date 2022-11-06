# 기능 구현 목록

## 1. Duplicated

3개의 수의 중복 검사

- 0번 째 index 1번 째 index
- 1번 째 index 2번 째 index
- 0번 째 index 2번 째 index

```
  isDuplicated = str => {
  // 문자열 길이와 str 안의 값을 new Set(str)로 넣어서 사이즈가 다르면 중복
  return str.length !== new Set(str).size;
  };
```
