/*
Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

const lengthOfLongestSubstring = (s) => {
  let seen = new Set();
  let left = 0;
  let longest = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (seen.has(s[i])) {
      seen.delete(s[left]);
      left++
    }
    seen.add(s[i]);
    longest = Math.max(longest, i - left + 1);
  }
  return longest;
};

module.exports = lengthOfLongestSubstring