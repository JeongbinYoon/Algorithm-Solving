function removeDuplicates(nums: number[]): number {
    [...new Set(nums)].map((el) => new Array(nums.filter(n=> n === el).length - 1).fill(0).map(()=> nums.splice(nums.lastIndexOf(el),1)))
    return nums.length
};