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

While Gren is good at inferring the types for your functions, it's often helpful to put an explicit type declaration on your function. This can serve as documentation as well as helping the compiler give you better error messages.

## Function Types and Partial Application

You may notice that the `->` symbol between function arguments is the same as the symbol before the return type. This is not a coincidence. As covered in the [functions](/book/syntax/functions/#partial-application) section, functions in Gren take their arguments one at a time, which is called curried form.

Type signatures reveal what's really going on. A function like `multiply : Int -> Int -> Int` is actually `multiply : Int -> (Int -> Int)` - a function that takes an `Int` and returns a function of type `Int -> Int`. The first argument has been applied, but not the second so you have a partially applied function.

```elm
multiply : Int -> (Int -> Int)
multiply   60

result :           Int -> Int
                   24

result :                  Int
                          1440
```

One place where this might cause confusion is when you accidentally forget an argument. Consider a function like this:

```elm
validateUser : User -> Email -> DateTime -> Flags -> Status
```

With that many arguments, you might easily forget one:

```elm
userStatus = validateUser user currentEmail now
```

We forgot to pass the `Flags` value, so `userStatus` is not a value of type `Status` - it is a function of type `Flags -> Status`.
This can be confusing when you go to compare `userStatus` with a `Status` like this `if userStatus == LoggedIn then` and get an error:

Fortunately thanks to Gren's error messages and type safety, we can work out what has gone wrong:

```
TYPE MISMATCH - I need both sides of (==) to be the same type:

1| if userStatus == LoggedIn then
      #^^^^^^^^^^^^^^^^^^^^#
The left side of (==) is:
    #Flags -> Status#

But the right side is:
    Status
```

You can see we are comparing two values that we thought were both `Status`, but one of them is actually a function that returns a `Status`.
It may seem confusing at first, but you quickly get used to error messages like this and what they mean.

## Type Aliases

```elm
type alias Id =
    Int

nextId : Id -> Id
nextId id =
    id + 1
```

A type alias is just that: an alias.
In the example above, the compiler will be happy to accept an `Int` anywhere it sees the `Id` type, and vice-versa.

You will often see aliases for [record](/book/syntax/records/) types:

```elm
type alias User =
    { id : Id
    , name : String
    }
```
