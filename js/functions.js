const checkStringLength = (string, length) => (string.length <= length);

const isPalindrome = function (str) {
  let noSpaces = str.replaceAll(' ', '');
  let reverse = noSpaces.split('').reverse().join('');
  return (noSpaces.toLowerCase() === reverse.toLowerCase());
};

const extractNumbers = function (string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let sym = parseInt(string[i], 10);
    if (!isNaN(sym)) {
      newString += string[i];
    }
  }
  if (newString > 0) {
    return newString;
  } else {
    return NaN;
  }
};
