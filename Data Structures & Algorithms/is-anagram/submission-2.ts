class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const normalized = (str: string) => {
            return str.toLocaleLowerCase().split("").sort().join("")
        }

        console.log(normalized(s))
        console.log(normalized(t))

        return normalized(s) === normalized(t)
    }
}
