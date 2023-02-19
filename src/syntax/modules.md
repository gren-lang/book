# Modules

Every file containing Gren source code is considered a module.

A module is required to start with a module header, which at minimum defines the fully qualified module name and a list of exposed definitions. Being exposed means that the definition can be referenced by other modules.

Here's a minimal example of a module header:

```gren
module MyModule exposing (..)
```

## Module name

The module name `MyModule` needs to coincide with the modules physical location on disk. In this case `MyModule` has to be at the top level of the `src` directory. If `MyModule` was located in `src/Sub/MyModule.gren`, then the project would've failed to compile.

When a module does exist within a sub-directory, like `src/Some/Long/Path/For/Module.gren`, then the module name should match the path, but with `/` replaced with `.`, like `Some.Long.Path.For.Module`.

## Exposing

The exposing list is a comma seperated list of constants, functions and types that other modules can reference.

To expose everything from a module, you can use `(..)`.

When exposing a custom type, you can either expose just the type, or the type along with its constructors. In the former case you'll add `Type` to the exposing list, in the latter you'll add `Type(..)` to the list. You cannot expose select constructors of a custom type, it's all or nothing.

## Imports

If you want to reference something in another module, you'll need to import it.

```gren
import Some.Other.Module
```

This will allow you to reference values in `Some.Other.Module` by prefix the value with the module prefix.

Sometimes, as is the case in this example, the module name can be a bit long, in those cases you can specify a shorter alias for the module name:

```gren
import Some.Other.Module as Module
```

You can now prefix values with `Module` instead of `Some.Other.Module`.

Finally, you can opt in to not requiring specifying a prefix at all for commonly used values, by using an exposing statement:

```gren
import Some.Other.Module exposing (commonFunction)
```

You can now refer to `commonFunction` directly, as if it was defined in your module.

It's also possible to combine a module alias with an exposing list.
