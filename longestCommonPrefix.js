//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs[0] || strs.length == 1) return strs[0] || '';
    let i =0;
    while (strs[0][i] && strs.every(l => l[i] === strs[0][i]))
      i++;
  return strs[0].substr(0,i);
};