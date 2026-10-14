class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i = nums.length - 1; i >= 0; i--) {
            for(let j =  nums.length - 1; j >= i + 1; j--) {
                const value = nums[i] + nums[j];

                if(value === target) {
                    return [i, j]
                }
            }
        }

        return [0, 1]
    }
}
