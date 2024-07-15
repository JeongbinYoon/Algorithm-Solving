function solution(phone_number) {
    return phone_number.split('').map((s,i,arr) => i < arr.length-4 ? '*' : s).join('')
}