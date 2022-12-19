// Задание 1
function getArrayParams(arr) {
  let min = arr [0], max = arr[0], sum = 0, avg = 0;
  for (let i = 0;i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max){
      max = arr[i];
    }
  sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
  }

// Задание 2
function worker(arr) {
   let sum = 0;
   for (let j = 0; j < arr.length; j++) {
     sum += arr[j];
   }
   return sum;
 }

 worker([1, 2, 3, 4]);

 function makeWork(arrOfArr, func) {
   let max = 0;
   for (let i = 0; i < arrOfArr.length; i++) {

     if (func(arrOfArr[i]) > max) {
       max = func(arrOfArr[i]);
     }
   }
   console.log(max)
   return max;
 }
 makeWork([[1, 2, 3], [4, 5, 6]], worker);

// Задание 3
function worker2(arr){
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  

  return Math.abs(maximum - minimum);
      
}
