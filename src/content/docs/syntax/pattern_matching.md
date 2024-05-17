---
title: Pattern Matching
description: Pattern matching in Gren
---

When dealing with [custom types](/book/syntax/custom_types/), you likely want to do different things based on the actual value of the custom type. The `case of` expression provides this flexibility.

```elm
type Role
  = Viewer
  | Editor
  | Admin

canEdit : Role -> Bool
canEdit role =
    case role of
        Viewer ->
            False
        
        Editor ->
            True
        
        Admin ->
            True
```

In gren, pattern matching is exhaustive.
That means the compiler will complain if you don't cover all possible cases.
This is very helpful, since you can add a variant to your custom type without worrying that you forgot to handle it somewhere.

If you don't need to handle all possible cases explicitly, you can use `_` as a catch-all:

```elm
canAddUser : Role -> Bool
canAddUser role =
    case role of
        Admin -> True
        _ -> False
```

You can use pattern matching on other things than just custom types. Like integers:

```elm
isZero : Int -> Bool
isZero num =
    case num of
        0 -> True
        _ -> False
```

Or even records:

```elm
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

## Patterns with Data

You can use pattern matching to extract nested data from your values.

If you have a [custom type with data](/book/syntax/custom_types/#types-with-data), you can give that data a name and use it in the branch for that pattern:

```elm
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

Extracting nested data like this is called _desctructuring_.
