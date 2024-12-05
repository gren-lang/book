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

Here, `sumOf` is the name of the function, while `first` and `second` are the inputs to the function. The return value of `sumOf` is the last computed expression. In this case, the only expression is `first + second`, the result of which becomes the returned value.

Functions can take an arbitrary number of arguments, but must return exactly one value.

Function arguments can be passed on multiple lines:

```elm
addFiveAndTwo =
    add
        5
        2
```

It looks kind of silly here, but it is helpful to know this when you’re reading code with longer arguments that may be formatted this way.

## Function Pipelines

You can chain multiple function calls with parenthesis:

```elm
multiply first second =
    first * second
    
secondsInYear =
    multiply 365 (multiply 24 (multiply 60 60))
```

But you can make this more readable with the `|>` operator:

```elm
secondsInYear =
    60                  -- 60 seconds in a minute
        |> multiply 60  -- 60 minutes in an hour
        |> multiply 24  -- 24 hours in a day
        |> multiply 365 -- 365 days in a year
```

`|>` passes the value on the left as the last argument to the function on the right.
For example `sumOf 1 2 |> multiply 3` is the same as `multiply 3 (sumOf 1 2)`.
