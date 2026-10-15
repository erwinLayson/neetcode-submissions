
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encoded: string[] = [];

        for (const str of strs) {
            const value = `${str.length}#` + str;
            encoded.push(value);
        }

        return encoded.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            const delimiter = str.indexOf("#", i);
            const length = Number(str.slice(i, delimiter));

            const start = delimiter + 1;
            const end = start + length;

            result.push(str.slice(start, end));

            i = end;
        }

        return result;
    }
}
