# Hello, world!

Getting a simple program to compile is a good way to verify that you've got everything setup correctly. Let's try to write a Gren program that outputs "Hello, world!" when opened up in browser.

If you haven't already, make sure you've [installed Gren](/install).

When you've setup the compiler correctly, it's time to initialize our project. We're going to assume that you've got a bash terminal setup.

## Setting up your project

Start by creating a `hello_world` directory, and `cd` into it.

Every Gren project contains a `gren.json` file. This file contains all the information that the compiler needs to compile your program. You can create such a file by running `gren init`.

```sh
robin@bekk-mac-2715 ~/W/g/tmp> gren init
Hello! Gren projects always start with an gren.json file. I can create them!

Would you like me to create an gren.json file now? [Y/n]:
Updating gren-lang/browser... Ok!
Updating gren-lang/core... Ok!
Updating gren-lang/html... Ok!
Updating gren-lang/json... Ok!
Updating gren-lang/time... Ok!
Updating gren-lang/url... Ok!
Updating gren-lang/virtual-dom... Ok!
Okay, I created it.
```

The compiler will create a `gren.json` file for you that lists a few dependencies required to compile a simple browser based application. These dependencies are then downloaded, which explains the output you see above.

Your `gren.json` should be good enough for what we're about to do, so let's write some actual code.

## Writing your program

Create a `src/Main.gren` file and fill it with the following content:

```gren
module Main exposing (main)

import Html exposing (Html)

main : Html a
main =
  Html.text "Hello, world!"
```

We create a new module, called `Main` and expose the `main` constant from it.

Then, we import the `Html` module (from the `gren-lang/html` package listed in our dependencies) and expose the `Html` type to our module.

Our `main` constant represents a `Html` value, which in this particular case is just the text `Hello, world!`.

Compile this using `gren make src/Main.gren`. This will produce a `index.html` file which, when opened, displays `Hello, world!`.

