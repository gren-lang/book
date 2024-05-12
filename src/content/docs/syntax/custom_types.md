---
title: Custom Types
description: Custom Types in Gren
---

Sometimes it's helpful to have values that can be in one of several states. This can be useful to represent values that may be absent, or operations which can succeed and fail, or cases where you'd typically use enums in other languages.

In Gren, this concept is known as custom types.

```elm
type MyResult
    = Success
    | Failure
```

This means a `MyResult` value can be one of two things (called variants): a `Success` or a `Failure`.
You can call your type and your variants anything you want, as long as they start with a capital letter.

Try entering the above into a `gren repl`.
Then you can create values using the variant names:

```elm frame=terminal
> result1 = Success
Success : MyResult
> result2 = Failure
Failure : MyResult
```

## Types with Data

Custom types can also hold data.

Let's say you want to fetch your repo's star count from the Github API.
Here is a type that could hold the result of that fetch:

```elm
type StarCount
    = Count Int
    | Error String
```

A `StarCount` value could either be a successful fetch holding the resulting count, or a failed fetch holding an error message.

When you create values using your variant names, you're actually calling functions that gren created for you:

```elm frame=terminal
> Count
<function> : Int -> StarCount
> Error
<function> : String -> StarCount
```

That means you can pass in the data like you would for any other function:

```elm frame=terminal
> count1 = Count 123
Count 123 : StarCount
> count2 = Error "Oops! Fetch failed."
Error ("Oops! Fetch failed.") : StarCount
```

## Type Variables

You can define custom types that hold any type of data by using a type variable.
A common example is a type built-in to gren called `Maybe`.

```elm
type Maybe a
    = Just a
    | Nothing
```

Here `a` is a type variable and could have been any word starting with a lowercase letter.
So `Maybe` can be one of two things: Either it's `Just a` where `a` is a generic type for whatever data it's holding, or it's `Nothing` in which case there is no associated data attached.

```elm frame=terminal
> Just "Hello"
Just "Hello" : Maybe String
```

Notice that Gren inferred the generic type here as the concrete type `String`.

You can have more than one type variable.
Gren's built-in `Result` type has a variable for the error value and one for the success value.

```elm
type Result error value
    = Ok value
    | Err error
```

But how do you get that data out of the custom type?
One way is with pattern matching, which allows for some pretty interesting possibilities when combined with custom types.

