# Comments

Lines starting with `--` are ignored by the compiler, and are useful for describing something to human readers.

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

Comments can be used pretty much everywhere, as they're completely ignored by the compiler.

## Documentation comments

There is a special kind of comments, called documentation comments, which are recognized by the compiler as being documentation for a module or a value.

These comments are enclosed within `{-| -}` and will be used to render documentation on [packages.gren-lang.org](https://packages.gren-lang.org).

```gren
{-| This is an approximation of pi
-}
pi = 3.14
```
