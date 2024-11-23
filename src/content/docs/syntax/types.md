---
title: Types
description: Gren types
---

Gren is a statically typed language, which means that every constant and function is associated with a type, and the use of these types are checked by the compiler to be correct. If you have a function which is defined to accept two integers, the compiler will complain if you were to pass that function something other than two integers.

You might have noticed that you didn't need to specify types in the previous examples. That's because Gren is usually smart enought to figure out the types without your help.

```elm
theAnswer : Int
theAnswer = 42

aQuestion : String
aQuestion = "What was the question again?"

helpful : Bool
helpful = False

sumOf : Int -> Int -> Int
sumOf first second =
    first + second

sumOfFiveAndTwo : Int
sumOfFiveAndTwo =
    sumOf 5 2
```

`:` can be read as `has type`. One way to read the first constant definition in the above example is: theAnswer has type Int. theAnswer equals 42.

For functions it get's a little bit more complicated. `->` can be read as `to`. So: sumOf has type Int to Int to Int. sumOf first and second equals first + second.

When reading the type signature of a function, the last `->` points to the return value of the function, while the types before represent the inputs.

## Type Aliases

```elm
type alias Id =
    Int

nextId : Id -> Id
nextId id =
    id + 1
```

A type alias is just that: an alias.
In the example above, the compiler be happy to accept an `Int` anywhere it sees the `Id` type, and vice-versa.

You will often see aliases for [record](/book/syntax/records/) types:

```elm
type alias User =
    { id : Id
    , name : String
    }
```
