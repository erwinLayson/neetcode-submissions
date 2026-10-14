class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagram = (str: string) => {
            return str.toLocaleLowerCase()
            .split("")
            .sort()
            .join("")
        };

        const output: Record<string, string[]> = {}

        for(let i = 0; i <= strs.length - 1; i++) {
            const key = anagram(strs[i])
            
            if(!output[key]) {
                output[key] = []
            }

            output[key].push(strs[i])
        }

        return Object.values(output)
    }
}
