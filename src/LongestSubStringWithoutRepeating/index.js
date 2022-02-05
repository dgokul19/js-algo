/* 

Given a string s, find the length of the longest substring without repeating characters.

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

*/

var lengthOfLongestSubstring = function (s) {
  let resultCount = 0;
  let count = 0;
  let stack = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count = 0;
    }
    stack.push(s[i]);
    count = count + 1;
    if (count > resultCount) {
      resultCount = count;
    }
  }
  return resultCount;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));

console.log(lengthOfLongestSubstring('dvdf'));

// console.log(lengthOfLongestSubstring('bbbbb'));
