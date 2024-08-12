/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let longest = 0, left = 0;

    for(let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[right])
        longest = Math.max(longest, set.size)
    }
    return longest
};