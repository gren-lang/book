---
title: Strings
description: Strings in Gren
---

In Gren, strings are zero or more characters contained within double quotes:

```elm
name : String
name =
    "Laura"

empty : String
empty =
    ""
```

Character literals are exactly one character contained within single quotes:

```elm
key : Char
key =
    'a'
```

Multi-line strings can be contained within three double quotes.
Leading whitespace will be removed from the resulting string, but newlines will be preserved:


```elm
story : String
story =
  """
  Once upon a time,
  there was a long string.
  It was alright.
  """
```

To include a double quote inside a string, it must be escaped with `\`:

```elm
name : String
name =
    "Dwayne \"The Rock\" Johnson."
```

A single quote character literal can also be escaped:

```elm
singleQuote : Char
singleQuote =
    '\''
```

And you can escape the `\` itself with a preceding `\`:

```elm
backslash : Char
backslash =
    '\\'

path : String
path =
    "c:\\my\\file"
```

You do not need to escape double quotes from multiline strings:

```elm
"""
I was like "Whoa"
and they were like "Yeah"
"""
```

