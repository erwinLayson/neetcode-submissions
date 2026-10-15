class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result: number[] = []

        for(let i = 0; i < nums.length; i++) {
            let firstValue = nums[i];

            for(let j = i + 1; j < nums.length; j++) {
                if((firstValue + nums[j]) === target) {
                    result.push(i, j);
                    return result
                }
            }
        }

    }
}
