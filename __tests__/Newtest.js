describe('연습입니다' , ()=> {
  test('콘솔 로그에 Array.push() 하면 배열에 변화를 줍니다.' , ()=>{
    const arr = [];
    console.log(arr.push(3))

    expect(arr.length).toBe(1)
    expect(arr).toContain(3)
  })
})