# Types

Gren is a staticly typed language, which means that every constant and function are associated with a type, and the use of these types are checked by the compiler to be correct. If you have a function which is defined to accept to integers, the compiler will complain if you were to pass that function something other than two integers.

You might've noticed that you didn't need to specify types in the examples above. That's because Gren is usually smart enought to figure out the types without your help.

```gren
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
