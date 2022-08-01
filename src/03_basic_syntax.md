# Syntax

## Comments

Lines starting with `--` are ignored by the compiler, and are useful for describing somethings to human readers.

```gren
-- Nothing to see here
```

You can also use `{- -}` to have comments span multiple lines.

```gren
{- This comment
spans
multiple lines
-}
```

## Constants

You can attach names to values. Named values are called constants, because once defined those names can never refer to another value.

```gren
theAnswer = 42

aQuestion = "What was the question again?"

helpful = False
```

## Functions

A function returns different values depending on its input. In Gren, a function will always return the same result if provided the same input.

```gren
sumOf first second =
    first + second

sumOfFiveAndTwo =
    sumOf 5 2
```

Here, `sumOf` is the name of the function, while `first` and `second` are the inputs to the function. The return value of `sumOf`, is the last computed expression. In this case, the only expression is `first + second`, the result of which becomes the returned value.

## Types

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

## Arrays

You can group several values in an array.

```gren
numbers : Array Int
numbers =
    [ 1, 2, 3, 4, 5 ]
```

All values in an array must be of the same type. You cannot have an array of `String` _and_ `Int`, for instance.

## Records

You can also group different types of named values in a record.

```
twoSugars =
  { ingredient = "Sugar cube"
  , quantity = 2
  }

cupOfCoffee =
  { ingredient = "Cup of coffee"
  , quantity = 1
  }

sweetCoffeeCup : Array { ingredient : String, quantity : Int }
sweetCoffeeCup =
  [ cupOfCoffee, twoSugars ]
```

An interesting thing to note is that record types follow the shape of a record. Two records with the same names with the same associated types, are equal, even when defined in different modules.

The types can become rather painful to write, though, so Gren also supports type aliasing.

```
type alias QuantifiedIngredient =
  { ingredient : String
  , quantity : Int
  }

sweetCoffeeCup : Array QuantifiedIngredient
sweetCoffeeCup =
  [ cupOfCoffee, twoSugars ]
```

It can be useful to create a record which contains mostly the same values as some other record, but with a few modifications. Gren supports this through special syntax:

```gren
fourSugars =
  { twoSugars
    | quantity = 4
  }
```

The above example creates a new record, called `fourSugars`, which contains the same values as `twoSugars`, except that the `quantity` property has a value of `4` instead of `2`.

## Custom Types

Sometimes it's helpful with values that can be in one of several states. This can be useful to represent values that may be absent, or operations which can succeed and fail, or cases where you'd typically use enums in other languages.

In Gren, this concept is known as custom types.

```gren
type Maybe a
    = Just a
    | Nothing
```

The type `Maybe` can be one of two things. Either it's `Just a` where `a` is a generic type, or it's `Nothing` in which case there is no associated data attached.

On its own, custom types arent very helpful, but in combination with pattern matching they allow for some pretty interesting possibilities.

## Pattern matching

When dealing with custom types, you likely want to do different things based on the actual value of the custom type. The `case of` expression provides this flexibility.

```gren
explainHeldItem : Maybe String -> String
explainHeldItem maybeItem =
    case maybeItem of
        Nothing ->
          "You're not holding anything"

        Just item ->
          "You're holding a " ++ item


holdingSword : String
holdingSword =
    explainHeldItem (Just "Sword")
```

You can use pattern matching on other things than just custom types. Like integers:

```gren
isZero : Int -> Bool
isZero num =
    case num of
        0 -> True
        _ -> False
```

Or even records:

```gren
combineIngredients : QuantifiedIngredient -> QuantifiedIngredient -> QuantifiedIngredient
combineIngredients left right =
    case { leftQty = left.quantity, rightQty = right.quantity } of
        { leftQty = 0 } ->
            right

        { rightQty = 0 } ->
            left

        _ ->
            { ingredient = left.ingredient ++ " and " ++ right.ingredient
            , quantity = left.quantity + right.quantity
            }
```
