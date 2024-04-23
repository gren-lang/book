---
title: Pattern Matching
description: Pattern matching in Gren
---

When dealing with custom types, you likely want to do different things based on the actual value of the custom type. The `case of` expression provides this flexibility.

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
