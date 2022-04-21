# Loose Change

Write a function that returns an object with the smallest number of coins that would make up an amount of money passed in as an argument. Assume Australian change.

Input is always dollars and cents (whole numbers are dollars)

```
Example: looseChange(1.35)

Expected output: {2d: 0, 1d: 1, 50c: 0, 20c: 1, 10c: 1, 5c: 1}
```

If the amount isn't divisible by 5 (there is leftover balance), add another 5c piece if its > 2 cents

```
Example: looseChange(0.23)

Expected output: {2d: 0, 1d: 0, 50c: 0, 20c: 1, 10c: 0, 5c: 1}

Example: looseChange(1.31)

Expected output: {2d: 0, 1d: 1, 50c: 0, 20c: 1, 10c: 1, 5c: 0}
```
