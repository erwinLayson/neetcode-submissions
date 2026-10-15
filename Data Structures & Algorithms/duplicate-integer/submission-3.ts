class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        return Array.from(new Set(nums).values()).length !== nums.length

    }
}
