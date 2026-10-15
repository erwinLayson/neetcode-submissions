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

        const output = new Map<string, string[]>()

        for(let i = 0; i <= strs.length - 1; i++) {
            const key = anagram(strs[i])
            
            if(!output.has(key)) {
                output.set(key, [])
            }

            output.get(key).push(strs[i])
        }

        return Array.from(output.values());
    }
}
