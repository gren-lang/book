---
title: Why Gren?
description: What makes gren a programming language that helps you write simple and correct software?
---

Gren is a programming language that helps you write simple and correct software.

What does that mean?

## Simple

Gren measures simplicity by how many outcomes an operation can have. Take the following code as an example:

```js
a + b
```

In some languages, this can mean a lot of different things. Some languages allow you to override the definition of `+`, which means it might execute an arbitrary function. For some languages, this statement can either append one string to another, or add two numbers together. Some languages might even try to convert `a` and `b` to be the same type, before executing the `+` operation.

In Gren, the above statement can only mean one thing: `a` and `b` are numbers, and the result is that of mathematical addition.

The fact that this statement can only mean one thing is what makes it simple. When reading the code you can be very certain what the result of this operation is, as long as it compiles.

Let's consider one more example, this one in JavaScript:

```js
function doubleA(obj) {
    var a1 = obj.a;

    verify(obj);
    var a2 = obj.a;

    return a1 + a2;
}
```

Try to answer these questions:

1. How many function calls do you see?
2. Is the value of `obj` changed by any statement in this function?
3. Does `a1` equal `a2`?
4. What type does this function return?
5. Will this function return?

It might surprise you that, without knowing more of the surrounding context, you can't really answer any of these questions.

1. JavaScript has a language feature called _getters_. This means that a statement like `obj.a` might actually call a function to compute a value. Without knowing how `obj` is defined, there's no way of knowing how many functions will be called.
2. JavaScript allows mutation. The potential function call `obj.a`, and the actual function call `verify(obj)` might end up changing the `obj` value. You need to know how `obj` and `verify` is defined to be certain.
3. Since `obj` can change, there's no way to know without knowing how `obj` and `verify` is defined. In languages that support threads, you also need to know if `obj` is accessible in any other thread.
4. `+` works on both numbers and strings. So it probably returns either a number or a string.
5. Maybe. Any function call can throw an exception.

Let's pretend the above code was written in Gren, could we answer the same questions with certainty then?

1. Gren doesn't have getters, so the answer is 2 (`verify` and `+`).
2. Gren doesn't have mutation, so the answer is no.
3. Yes, because of (2).
4. A number, since `+` only works on numbers.
5. Gren doesn't support exceptions, so the answer is yes, if we ignore the possibility of infinite loops and running out of memory.

The simplicity of Gren makes it easier to reason about code. Even when the code in question was written by someone else. The value of simplicity grows along with the size of your code base.

## Correct

There are certain constructs that Gren doesn't have, that are often the source of bugs in other languages. These things are:

1. Null
2. Exceptions
3. Uncontrolled side-effects

What Gren _does have_ is a flexible, although strict, type system which allows you represent these constructs in a way that let's the compiler help you avoid the most common bugs.

Instead of `null`, Gren lets you express the absence of a value by using what is known as a custom type:

```elm
type Maybe a
  = Just a
  | Nothing
```

This type represents a value which may, or may not, exist. Whenever you try to use this value, the compiler will force you to check if you have a `Just` or `Nothing`.

The same principle applies to exceptions. Representing an operation which may cause an error is represented by the type:

```elm
type Result err ok
  = Ok ok
  | Err err
```

If a function returns a `Result` value, the compiler will force you to handle both the success and the failure condition.

Consider for a moment what this means. Since Gren is statically typed, that means that whenever you see a function which _doesn't_ return a `Maybe` or a `Result` type, you can be certain that you'll always end up with the promised return value.

The same concept applies to side-effects like performing HTTP calls or saving things to disk. A side effect has to be modelled by the type system, and this also means that you have greater insights into the sort of things a third-party package can do.

## Conclusion

Gren has made a very specific set of trade-offs that makes it easy to locate and isolate bugs and side effects. These same trade-offs also make the language small in both syntax and concepts. This again reduces the necessary time investment to learn the language, and makes it easy for the compiler to provide detailed and helpful error messages.

These benefits comes at the cost of brevity. There's a chance that other programming languages will allow you to write less code.

It is our belief that as your program grows in complexity and scope, the trade-offs made by Gren make more and more sense.
