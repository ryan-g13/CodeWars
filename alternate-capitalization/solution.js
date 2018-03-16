function capitalize(s){
  let ansArr = [];
  let input = s.split('');
  let odds = s.split('');
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0 ) {
      input[i] = input[i].toUpperCase();
    } 
  } ansArr.push(input.join(''));
  for (let i = 0; i < odds.length; i++) {
    if (i % 2 === 1) {
      odds[i] = odds[i].toUpperCase();
    }
  } ansArr.push(odds.join(''));
  return ansArr;
};