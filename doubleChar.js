function doubleChar(str) {

  let repeatString = [];
  for(let i = 0; i <= str.length-1; i++){
  repeatString.push(str[i]);
  repeatString.push(str[i]);
  }
  return repeatString.join('');
}
