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

Very importantly and _very different_ from most other programming lanagues in Gren, a function will always return the same result if provided the same input. This might seem obvious for something like `addOne` but it's also true of things such as updating a complex bit of state in an application or even making a HTTP request. We'll get into `Command` and how Gren accomplishes this in a later section, for now it's enough just to know that Gren makes the guarantee that given the same input to a function, you will always get the same result.

Ok now let's see what a function that has more than one argument looks like.

```elm
sumOf first second =
    first + second

sumOfFiveAndTwo =
    sumOf 5 2
```

Here, `sumOf` is the name of the function, while `first` and `second` are the inputs to the function. If you are familiar with another programming language you may have noticed the absence of any sort of `return` statement. That's because in Gren everything is an expression. The body of a function is just a single expression too. In this case, the expression is `first + second`, the result of which becomes the returned value. Of if you want to make more complex functions it is very handy to be able to carry out the work in a step-by-step way. The `let` keyword allows this and is discussed in a later section.

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

## Function type signatures

Gren is really great at inferring the types for your functions but it's often helpful to put an explicit type declaration on your function. This can serve as documentation as well as helping you to isolate type checking problems. Adding a type signature to the multiply function from above would look like this:

```elm
multiply : Int -> Int -> Int
multiply first second =
    first * second
```

What this type says is "multiply is a function that takes an Int and an Int as input, and returns an Int". You may notice that the symbol between the two arguments is the same as the symbol before the return type. This is not a coincidence. What's happening here is that functions in Gren always take their arguments one at a time. When we do `multiply 60 24` we're actually doing this `((multiply 60) 24)`. First the argument `60` is applied, then the argument `24`. So what would happen if we only provided one of the arguments? If you're used to how other programming languages work you might expect this to be an error, but in Gren it is not!

`oneArgument = multiply 24`

So what is the type of `oneArgument`? It's not `Int` since that would be the result of providing both arguments. If we line up the one argument with the type signature it gives us a clue.

```elm
multiply: Int -> Int -> Int
multiply  24
```

what's left is the remaining part of the type signature, `Int -> Int` meaning that `oneArgument` has the type `Int -> Int`. This is called partial application and allows us to build up all the arguments for a function one at a time. This is what was going on in the function pipeline example before.

```elm
secondsInYear =
    60                  -- Int
        |> multiply 60  -- Int -> Int
        |> multiply 24  -- Int -> Int
        |> multiply 365 -- Int -> Int
```

`multiply` is a function of type `Int -> Int -> Int` but `multiply 60` partially applies it, leaving us with just `Int -> Int`. The `|>` operator provides `60` as the second argument so now we have a fully applied function and we get the resulting `Int` which gets passed along by the next `|>` to `multiply 24` which is also of type `Int -> Int` and so on.

What's really going on under the hood is that `multiply` is actually a function that has this type: `multiply: Int -> (Int -> Int)` meaning "multiply is a function that takes an `Int` and returns a function of type `Int -> Int`. So when we say `multiply 24 60` we're first applying the 24, getting back the resulting function which is `Int -> Int`, then applying the 60 to that function to get the final Int.

```elm
multiply : Int -> (Int -> Int)
multiply   24

result :           Int -> Int
                   60

result :                  Int
                          1440
```

Functions that take one argument at a time like this are known as `curried` functions. In some languages you can make functions be curried but you have to do it yourself, in Gren it's automatic.

The one place that curried functions might cause you trouble is when you don't give a function the correct number of arguments by mistake. Let's say you're using a function like this

```elm
validateUser : User -> Email -> DateTime -> Flags -> Status
```
That's a lot of arguments and you might easily forget one of them.

```elm
validateUser : User -> Email -> DateTime -> Flags -> Status
userStatus = validateUser user currentEmail now
```
`userStatus` is not a value of type `Status` it is a function of type `Flags -> Status`. It can be confusing when you go to compare `userStatus` with a `Status` like this `if userStatus == LoggedIn then` and get an error:

```
TYPE MISMATCH - I need both sides of (==) to be the same type:

1| if userStatus == LoggedIn then
      #^^^^^^^^^^^^^^^^^^^^#
The left side of (==) is:
    #Flags -> Status#

But the right side is:
    Status
```

Fortunately Gren's error messages are very descriptive so you can more easily work out what has gone wrong.



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
