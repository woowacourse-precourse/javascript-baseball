describe('연습입니다' , ()=> {
  test('콘솔 로그에 Array.push() 하면 배열에 변화를 줍니다.' , ()=>{
    const arr = [];
    console.log(arr.push(3))

    expect(arr.length).toBe(1)
    expect(arr).toContain(3)
  })

  test.only("Object.is 테스트 입니다" ,() =>{
    const str1 = "123"
    const str2 = "213"
    const str3 = "123"
    const arr = [1]
    const arr2 = [1]
    expect(Object.is(str1, str2)).toBe(false);
    expect(Object.is(str1, str3)).toBe(true);
    expect(Object.is(arr, arr2)).toBe(false);
  })
})