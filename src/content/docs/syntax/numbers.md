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

## Math

You can perfrom basic math operations on numbers using the typical operators:

```bash
> 1 + 2
3 : number
> 2 - 1
1 : number
> 2 * 3
6 : number
> 6 / 2
3 : Float
```

Notice that the division operator returns floats:

```bash
> 6 / 4
1.5 : Float
```

You can perform integer division with `//`:

```bash
> 6 // 4
1 : Int
```

For exponentation, use `^`:

```bash
> 3 ^ 2
9 : number
```

For other math operations, see [the Math module documentation](https://packages.gren-lang.org/package/gren-lang/core/latest/module/Math).
