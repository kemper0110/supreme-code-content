/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let n = nums.length;
    if(n <= 1) return n;

    let pre = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        const cur = nums[i];
        if (cur === pre) {
            nums.splice(i + 1, 1)
            --n;
        }
        pre = cur;
    }

    return nums.length;
}

module.exports = removeDuplicates;