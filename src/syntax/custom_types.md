# Custom Types

Sometimes it's helpful with values that can be in one of several states. This can be useful to represent values that may be absent, or operations which can succeed and fail, or cases where you'd typically use enums in other languages.

In Gren, this concept is known as custom types.

```gren
type Maybe a
    = Just a
    | Nothing
```

The type `Maybe` can be one of two things. Either it's `Just a` where `a` is a generic type, or it's `Nothing` in which case there is no associated data attached.

On its own, custom types arent very helpful, but in combination with pattern matching they allow for some pretty interesting possibilities.

