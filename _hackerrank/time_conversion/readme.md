# Time Conversion

Given a time in 12-hour AM/PM format, convert it to military (24 hour) time.

Note:

- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

The function should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

`string s:` a time in 12 hour format

**Returns**

`string:` the time in 24 hour format

**Input Format**

A single string that represents a time in 12-hour clock format (i.e.: `hh:mm:ssAM` or `hh:mm:ssPM` ).

It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

**Sample Input:**

```md
  07:05:45PM
```

**Sample Output:**

```md
  19:05:45
```
