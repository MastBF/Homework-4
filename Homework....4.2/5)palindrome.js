function isPalindrom(str) {
    if (str.length === 0 || str.length === 1)  return true;
    if (str[0] != str[str.length - 1])  return false     
     return isPalindrom(str.substring(1, str.length -1));
 }
    

console.log(isPalindrom("racecar"))
// console.log('racecar'[-1])