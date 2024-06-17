function removeElement(nums: number[], val: number): number {
    nums.sort((a, b) => {
        if(a === val) return 1
        if(b === val) return -1
        return a - b
    })
    const idx = nums.indexOf(val)
    idx > -1 && nums.splice(idx)
    return nums.filter(n => n !== val).length
};