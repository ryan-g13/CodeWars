function insertDash(num) {
   let flag = false;
   let numArr = num.toString().split('');
   
   for (let i = 0; i < numArr.length; i++) {
     if (numArr[i] % 2 === 0) {
       flag = false;
     } else if (flag === true) {
       numArr.splice(i,0,'-');
       i += 1;
       continue;
     } else {
       flag = true;
     }
   } return numArr.join('');
}
