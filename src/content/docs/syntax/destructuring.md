---
title: Destructuring
description: Destructuring in Gren
---

Destructuring is a way to extract nested data from values.

In the [pattern matching section](/book/syntax/pattern_matching/#patterns-with-data) you destructured a custom type with when/is:

```elm
type User
    = User String

welcome : User -> String
welcome user =
    when user is
        User name ->
            "Welcome, " ++ name
```

Since this custom type only has one variant, you can also destructure it with [let/in](/book/syntax/lets/):

```elm
welcome : User -> String
welcome user =
    let
        (User name) = user
    in
    "Welcome, " ++ name
```

Or even directly in your function arguments:

```elm
welcome : User -> String
welcome (User name) =
    "Welcome, " ++ name
```

You can use destructring to get data from other types of values as well.

## Destructuring Records

When destructuring records, you only have to specify the fields you care about:

```elm
type alias Item =
    { id : Int
    , name : String
    , count : Int
    } 
    
inStock : Item -> String
inStock item =
    let
        { name = itemName, count = itemCount } = item
    in
    if itemCount > 0 then
        itemName ++ " is in stock"
    else
        itemName ++ " is out of stock"
```

If you want to use the same name as a record field, you can use a syntax similar to javascript:

```elm
inStock : Item -> String
inStock item =
    let
        { name, count } = item
    in
    if count > 0 then
        name ++ " is in stock"
    else
        name ++ " is out of stock"
```

You can give your destructured data an alias with the `as` keyword:

```elm
inStock : Item -> String
inStock item =
    let
        ({ name, count } as myItem) = item
    in
    if myItem.count > 0 then
        myItem.name ++ " is in stock"
    else
        myItem.name ++ " is out of stock"
```

All of these techniques also work with function arguments and [when/is expressions](/book/pattern-matching).

## Destructuring Arrays

You can destructure arrays as well:

```elm
run : Array String -> String
run args =
    when args is
        [] ->
           "No arguments provided."
            
        [ "greet", name ] ->
            "Hello, " ++ name ++ "!"
        
        [ "flip", first, second ] ->
            second ++ first 
            
        _ ->
          "Unrecognized arguments."
```

There is no way to match things like "all the remaining elements" of an array,
but you can use [Array functions](https://packages.gren-lang.org/package/gren-lang/core/latest/module/Array) to achieve similar results.

```elm
let
    command = Array.takeFirst 1 myArray
    options = Array.dropFirst 1 myArray
in
when command is
    [ "greet" ] ->
        greet options
    
    [ "flip" ] ->
        flip options
        
    _ ->
      "Unrecognized arguments."
```
