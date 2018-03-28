function high(x){
  let key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let words = x.split(' ');
  let ans = [];
  let indexAtMax = 0;
  let locMax = 0;
  words.forEach(ele => {
    let count = 0;
    for(let i = 0; i < ele.length; i++){
      count += key.indexOf(ele[i]) + 1;
      }
      ans.push(count);
    } ) 
   for(let i = 0; i < ans.length; i++) {
      if(locMax < ans[i]) {
        locMax = ans[i];
        indexAtMax = i;
      }
    }
    return words[indexAtMax];
}