function formatWords(words){
  if (words === null || words.length === 0) {
    return "";
  } 
  let filtered = words.filter(x => x);
  let ans =  (filtered.length > 1 ) ? filtered.join(', ').replace( /,(?=[^,]*$)/, ' and') : filtered.join('');
  return ans;
  }



// function formatWords(words){
//   console.log(words);
//   let ansString = "";
//   if (words === null || words === []) {
//     return ansString;
//   } else {
//     ansString = words.join(" , ");
//   } 
//   if (words.length > 2) {
//     console.log('im greater than 2');
//     ansString.replace(', words[words.length - 1]', 'and words[words.length - 1]')} 
//   return ansString;
// }