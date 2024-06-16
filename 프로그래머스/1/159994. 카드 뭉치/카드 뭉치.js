function solution(cards1, cards2, goal) {
    
    const words = []
    var answer =  goal.some((el,idx)=>{
        const findItem =  cards1[0] === el ? cards1 : cards2[0] === el ? cards2 : false
        if(findItem) words.push(findItem.shift())
        return words.join('') === goal.join('')
    })
    return answer ? 'Yes' : 'No';
}