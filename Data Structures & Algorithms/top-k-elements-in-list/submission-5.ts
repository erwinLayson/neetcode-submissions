class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequent = new Map<number, number>();

        for(const n of nums) {
            frequent.set(n, (frequent.get(n) ?? 0) + 1)
        }
        
        const sorted = Array.from(frequent.entries()).sort((a, b) => b[1] - a[1])

        return sorted.slice(0, k).map(([num]) => num)
    }    
}
