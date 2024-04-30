---
title: If expressions
description: If expressions in Gren
---

One way to express conditional logic in Gren is with an if expression:

```elm
if name == "Bilbo" then
    "Hello, Bilbo!"
else
    "Hello!"
```

If expressions have the form:

```
if <condition> then
    <expression if condition is true>
else
    <expression if condition is false>
```

The `<condition>` must be an expression that evaluates to a boolean value.

An `else` branch is required,
and the two branches must evaluate to the same type.
This is because ifs in Gren are expressions that produce a value:

```elm
greeting : Int -> String
greeting age =
    if age > 999 then
        "Greetings, ancient one."
    else
        "Hey."
```

You can chain multiple if expressions together for more complex logic:

```elm
if age > 19 then
    "adult"
else if age > 12 then
    "teen"
else if age > 0 then
    "kid"
else
    "time traveler"
```
