# Records

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
