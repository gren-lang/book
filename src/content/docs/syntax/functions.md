---
title: Functions
description: Functions in Gren
---

A function returns different values depending on its input. In Gren, a function will always return the same result if provided the same input.

```elm
sumOf first second =
    first + second

sumOfFiveAndTwo =
    sumOf 5 2
```

Here, `sumOf` is the name of the function, while `first` and `second` are the inputs to the function. The return value of `sumOf`, is the last computed expression. In this case, the only expression is `first + second`, the result of which becomes the returned value.

Functions can take an arbitrary number of arguments, but must return exactly one value.

