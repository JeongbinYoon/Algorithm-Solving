function solution(n) {
    const b = n.toString(2).split('')
    let num = n + 1
    
    while(b.filter(e=>e==='1').length !== num.toString(2).split('').filter(e=>e === '1').length) {
        num++
    }
    
    return num
}