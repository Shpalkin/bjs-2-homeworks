function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let index = cache.findIndex(item => item.hash == hash);
    if (index !== -1) {
      console.log("Из кэша: " + cache[index].value);
      return "Из кэша: " + cache[index].value;
    }
    let result = func(...args);
    cache.push({
      hash: hash,
      value: result,
    });

    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  var debounceDecoratorNewCalls = 0;
  let timeoutId = null;

  function wrapper(...args) {
    if (timeoutId === null) {
      func(...args);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delay);
    wrapper.count++;
    // wrapper.allCount = debounceDecoratorNew.calledTimes;
    wrapper.allCount = debounceDecoratorNewCalls++;
  }
  return wrapper;
}
