function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item)=> item.hash === hash ); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1 ) { // если элемент не найден
        console.log("Из кэша: " + cache[idx].result); 
        return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // если в кэше результата нет - выполняем вычисления
    cache.push({hash, result}) ; // добавляем тот элемент, у которого правильная структура
    if (cache.length > 5) { 
      cache.shift() // много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}


function debounceDecoratorNew(func, ms) {  
  let timerId = null;
  function wrapper (...args){
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => timerId = null, ms);
  }
  return wrapper;
} 

function debounceDecorator2(func, ms) {
  let timerId = null;
  function wrapper(...args){
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => timerId = null, ms);
    wrapper.count++;
  }
  return wrapper;
}
