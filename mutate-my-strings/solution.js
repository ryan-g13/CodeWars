// function mutateMyStrings(stringOne, stringTwo){
//   let fullString = "";
  
// //   console.log(stringOne.length);
//   console.log(stringOne, stringTwo);
  
//   for(let i =; i < stringOne.length + 1; i++) {
    
//     if( stringOne.charAt(i) !== stringTwo.charAt(i)) {
      
//       console.log(stringTwo.slice(0, i), "2nd word" );
//       let iteration = stringTwo.slice(0, i);
//       console.log(stringOne.slice(i), "1st word");
      
//       let remainder = stringOne.slice(i);
//       fullString += iteration + remainder;
//        console.log("FullString = " + fullString);
//        }
//   } return fullString;
// }

//First attempt above.

function mutateMyStrings(stringOne, stringTwo){
    const str1Array = stringOne.split('');
    const str2Array = stringTwo.split('');
    let answer = [str1Array.join('')];
    for(let i = 0; i < str1Array.length; i++) {
     if(str1Array[i] !== str2Array[i]) {
        str1Array[i] = str2Array[i];
        answer.push(str1Array.join(''));
      }
    }
    return answer.join('\n') + '\n';
  }