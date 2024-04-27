---
title: Numbers
description: Numbers in Gren
---

There are two types of numbers in Gren: integers and floating point.

Integers have the type `Int` and represent a whole number:

```elm
myInt : Int
myInt =
    42
```

Floating point numbers have the type `Float` and are an approximation of a fractional number:

```elm
myFloat : Float
myFloat =
    8.67
```

Gren also has a special `number` type that can represent both.
You may have seen it in the repl:

```bash
> gren repl
---- Gren 0.3.0 -----------------------------------------------------------------
Say :help for help and :exit to exit!
--------------------------------------------------------------------------------
> 123
123 : number
```

You can use this for type signatures where it doesn't matter if something is an Int or a Float:

```elm
double : number -> number
double n =
    n * 2
```
