Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with `6` places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to `10^-4` are acceptable.

Example:

```js
  arr = [1, 1, 0, -1, -1]
```

**Sample Input:**

```md
  STDIN           Function
  -----           --------
  6               arr[] size n = 6
  -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

**Sample Output:**

```md
  0.500000
  0.333333
  0.166667
```

**Explanation**

There are `3` positive numbers, `2` negative numbers, and `1` zero in the array.

The proportions of occurrence are:

```md
  positive: 3 / 6 = 0.500000
  
  negative: 2 / 6 = 0.333333

  zeros: 1 / 6 = 0.166667
```
