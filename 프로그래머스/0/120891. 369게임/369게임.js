function solution(order) {
    const arr = ['3','6','9']
    
    return arr.reduce((acc,cur)=> acc += order.toString().split('').filter(x=>x===cur).length,0)
}