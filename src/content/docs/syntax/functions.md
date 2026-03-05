---
title: Functions
description: Functions in Gren
---

If constants allow you to give a name to a value, a function allows you to give a name to a calculation that produces a value. Functions take one or more inputs and return a single value.

```elm
addOne number =
    number + 1
```

`addOne` is the name of the function and it is defined as being `number + 1`. If you do something like  `result = addOne 7` then `result` will equal 8.

Very importantly, in Gren, a function will always return the same result if provided the same input. This might seem obvious for something like `addOne` but it's also true of things such as updating a complex bit of state in an application or even making a HTTP request. We'll get into how Gren accomplishes this in a later section, for now it's enough just to know that Gren makes the guarantee that given the same input to a function, you will always get the same result.

Ok now let's see what a function that has more than one argument looks like.

```elm
sumOf first second =
    first + second

sumOfFiveAndTwo =
    sumOf 5 2
```

Here, `sumOf` is the name of the function, while `first` and `second` are the inputs to the function. If you are familiar with another programming language you may have noticed the absence of any sort of `return` statement. That's because in Gren everything is an expression. The body of a function is just a single expression too. In this case, the expression is `first + second`, the result of which becomes the returned value. If you want to write a more complex function in a step-by-step way, the [`let`](/book/syntax/lets/) keyword allows for this and is covered in a later section.

Functions can take an arbitrary number of arguments, but return exactly one value.

Function arguments can be passed on multiple lines:

```elm
sumOfFiveAndTwo =
    sumOf
        5
        2
```

It looks kind of silly here, but it is helpful to know this when you’re reading code with longer arguments that may be formatted this way.

## Function Pipelines

When you need the result of one function as an input to another, you can use parenthesis to indicate this:

```elm
multiply first second =
    first * second
    
secondsInYear =
    multiply 365 (multiply 24 (multiply 60 60))
```
Here the result of `multiply 60 60` becomes the second argument to `multiply 24` and the result of THAT becomes the second argument to `multiply 365`. This "inside-out" nesting is common in other programming languages and it works the same here, but Gren has a way of making this kind of chaining really nice to read.

We can make the above expression more readable with the `|>` operator:

```elm
secondsInYear =
    60                  -- 60 seconds in a minute
        |> multiply 60  -- 60 minutes in an hour
        |> multiply 24  -- 24 hours in a day
        |> multiply 365 -- 365 days in a year
```

`|>` passes the value on the left as the last argument to the function on the right.
For example `sumOf 1 2 |> multiply 3` is the same as `multiply 3 (sumOf 1 2)`.

## Partial Application

Functions in Gren take their arguments one at a time. When we do `multiply 60 24` we're actually doing this `((multiply 60) 24)`. First the argument `60` is applied, then the argument `24` is applied to the result of _that_. But what is the result of `multiply 60`? You might think it's an error, but in Gren it is not!

```elm
multiplyBySixty = multiply 60
```

`multiplyBySixty` is now a new function that takes one argument and multiplies it by 60. We can use it like any other function:

```elm
multiplyBySixty 24
-- returns 1440
```

This is called partial application and it's what makes the pipeline operator work. In the pipeline example above, `multiply 60` returns a new function waiting for one more argument, and `|>` provides that argument.

```elm
secondsInYear =
    60
        |> multiply 60  -- multiply 60 returns a function, 60 is passed to it
        |> multiply 24  -- multiply 24 returns a function, result is passed to it
        |> multiply 365
```

Functions that take one argument at a time like this are known as curried functions. In some languages you have to do this yourself, in Gren it's automatic.

## Anonymous Functions

You can create functions without giving them a name:

```elm
\first second -> first + second
```

This is helpful when functions take another function as an argument:

```elm
[1, 2, 3]
    |> Array.map (\i -> i + 1)
    |> Array.map (\i -> i * 2)
```

The first parameter of [`Array.map`](https://packages.gren-lang.org/package/gren-lang/core/version/latest/module/Array#map) is a function that takes a value and returns a new value of the same type.
We're creating those functions inline to build a [function pipeline](#function-pipelines) that results in `[4, 6, 8]`.
