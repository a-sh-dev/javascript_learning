const plusMinus = (arr) => {
  const arrSize = arr.length;
  let [pos, neg, zero] = [0, 0, 0];
  if (arrSize !== 0) {
    arr.forEach((num) => {
      num > 0 ? pos++ : num < 0 ? neg++ : zero++;
    });
    console.log((pos / arrSize).toFixed(6));
    console.log((neg / arrSize).toFixed(6));
    console.log((zero / arrSize).toFixed(6));
  }
};
