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
  for (i=0; i<arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = null;
  for (let i = 0; i < arrOfArr.length; i++){
    if (max == null){
      max = worker(arrOfArr[i])
    }
    if (max < worker(arrOfArr[i])){
      max = worker(arrOfArr[i])
    }
  }

  return max;
}


// Задание 3
function worker2(arr) {
  let max = null;
    let min = null;
    for (let i = 0; i < arr.length; i++) {
      if(max == null) {
        max = arr[i]
      }
      if (max < arr[i]) {
        max = arr[i]
      }
    }
    
    for (let i = 0; i < arr.length; i++) {
      if(min == null) {
        min = arr[i]
      }
      if (min > arr[i]) {
        min = arr[i]
      }
    }
  
    return Math.abs(max - min);

}
