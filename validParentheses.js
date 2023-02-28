/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result;
  if (s.length === 0) {
    result = true;
    return result;
  }
  if (s.length === 1) {
    result = false;
    return result;
  }
  if (s[0] === ")" || s[0] === "}" || s[0] === "]") {
    result = false;
    return result;
  }
  //loop through string, if bracket closes with next bracket keep going, if not add open bracket to string and onto next
  let opened = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      //always add opened brackets to left over list
      opened += s[i];
      //go to next loop
    } else {
      //dealing with closing parathesis and it needs to match last added to opened string
      if (s[i] === ")" && opened.endsWith("(")) {
        opened = opened.substring(0, opened.length - 1);
        result = true;
      } else if (s[i] === "]" && opened.endsWith("[")) {
        opened = opened.substring(0, opened.length - 1);
        result = true;
      } else if (s[i] === "}" && opened.endsWith("{")) {
        opened = opened.substring(0, opened.length - 1);
        result = true;
      } else {
        result = false;
        return result;
      }
    }
  }
  if (opened.length !== 0) {
    result = false;
  }
  return result;
};
