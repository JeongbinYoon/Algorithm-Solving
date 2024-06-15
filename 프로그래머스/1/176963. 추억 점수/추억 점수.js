function solution(name, yearning, photo) {
    return photo.map((arr)=> arr.filter(p=> name.includes(p))).map(p => p.reduce((acc,cur)=> acc += yearning[name.indexOf(cur)],0))
}