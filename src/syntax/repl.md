# Getting started

In order to learn the language, it can be helpful to have a way of running arbitrary Gren expressions without having to setup and compile a full application.

Thankfully, there is such a tool. It's called a REPL (Read Eval Print Loop). It takes Gren expressions as input (read), compiles and run it (eval), then prints the result (print). It keeps doing this until you exit the program (loop).

Assuming you've already [installed](/install) the Gren compiler, you can enter a REPL by running `gren repl`. It should look something like this:

```sh
> gren repl
Retrieving versions for gren-lang/core... Ok!
---- Gren 0.3.0 -----------------------------------------------------------------
Say :help for help and :exit to exit!
--------------------------------------------------------------------------------
>
```

For starters, try entering an expression like `1 + 2`.

```sh
> 1 + 2
3 : number
>
```

You can see that the result of the expression `1 + 2` is `3`, and that `3` is a `number`.

Of course, the REPL can also handle more complicated expressions. As you read the rest of this guide, try entering a few expressions into the REPL along the way.
