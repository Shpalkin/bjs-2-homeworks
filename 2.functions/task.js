// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
    
    min = arr[0];
    max = arr[0];
    for(let i = 0; i < arr.length; i++){
      
      if(min > arr[i]){
        min = arr[i];
      }
      if(max < arr[i]){
        max = arr[i];
      }
      sum += arr[i];
      avg = sum / arr.length;
    }
    return { min: min, max: max, avg: avg };
  }
  
  getArrayParams([1,2,3, -550])


// Задание 2
let arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20]];
let arr = [];

function worker(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  console.log(sum);
}
worker([1,2,3,4])

function makeWork(worker){
  for(let i = 0; i < arrOfArr.length; i++){
    sum1 = arrOfArr[0];
    sum2 = arrOfArr[1];
    let min = arrOfArr[0];
    let max = arrOfArr[0];
    if(min > arrOfArr[i]){
      min = arrOfArr[i];
    }
    if(max < arrOfArr[i]){
      max = arrOfArr[i];
    }
    console.log("min: " + worker(min), "max: " + worker(max))
  }
  worker(sum1, sum2);
}

// Задание 3
let arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20]];
let arr = [];

function worker(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  console.log(sum);
}

function worker2 (){
  for(let i = 0; i < arrOfArr.length; i++){
    
  let x1 = worker(arrOfArr[0]);
  let x2 = worker(arrOfArr[1]);
  let x3 = x1 % x2;
  }
  console.log(x3);
} 
worker2();
}
