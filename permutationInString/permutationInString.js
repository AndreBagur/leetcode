/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.



Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false


Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    if (s1.length > s2.length) return false;
    let neededChar = {};
    for (let i = 0; i < s1.length; i++) {
        neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
    };
    let left = 0;
    let right = 0;
    let requiredLength = s1.length;
    while (right < s2.length) {
        if (neededChar[s2[right]] > 0) requiredLength--;
        neededChar[s2[right]]--;
        right++;
        if (requiredLength === 0) return true;
        if (right - left === s1.length) {
            if (neededChar[s2[left]] >= 0) requiredLength++;
            neededChar[s2[left]]++;
            left++;
        }
    }
    return false;
};

module.exports = checkInclusion