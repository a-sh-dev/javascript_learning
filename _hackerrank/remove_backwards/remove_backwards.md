# Remove Backwards

Write a function that takes as input an array of words, removes backwards the number of items specified and returns the array after removal

**Assumptions:**

Assume that the number of items to be removed will always be positive. Starting index is 0 for the array if the starting index is negative, start from the end.

**Input format:**

array, index, how many to removed

E.g:

```md
  Input: ['hello', 'world', 'is', 'my', 'first', 'program'], 4, 2

  Output: ['hello', 'world', 'is', 'program']
```

When number of items to be removed is greater than existing, then the number of items in the list that can be removed get removed.

```md
  Input: ['hello', 'world', 'is', 'my', 'first', 'program'], 2, 10

  Element at index = 2 is 'is'

  Output: ['my', 'first', 'program']
```
