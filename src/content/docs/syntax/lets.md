---
title: Let expressions
description: Let expressions in Gren
---

Sometimes you only want to give a name to something in a limited scope.
You can do that with a `let` expression.

```elm
circumference radius =
    let
        pi = 3.14159
    in
    2 * pi * radius
```

Here, `pi` only exists in the `circumference` function.

A `let` expression can be helpful when you want to express logic as a series of steps.

```elm
daysToSeconds days =
    let
        hours = 24 * days
        minutes = 60 * hours
        seconds = 60 * minutes
    in
    seconds
```

You can define functions in `let` expressions too.

```elm
quadruple num =
    let
        double n =
            n * 2
    in
    double (double num)
```
