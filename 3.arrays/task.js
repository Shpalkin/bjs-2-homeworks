//Задача 1

function compareArrays(arr1, arr2) {


  let result = (arr1.length == arr2.length) && arr1.every((item, index) =>
    item === arr2[index]); 
  return result; 
}
compareArrays([8, 9], [8, 9])


// Задача 2

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);

  return resultArr; 
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Pri
