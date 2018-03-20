function isNice(arr){
  let flag = false;
  for (let i = 0; i < arr.length; i++){
    if (arr.includes(arr[i] - 1)| arr.includes(arr[i] + 1)) {
     flag = true;
    } else {
      flag = false;
      return flag;
    }
  } return flag;
}