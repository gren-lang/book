---
title: Hello, world!
description: A simple Gren program
---

Getting a simple program to compile is a good way to verify that you've got everything set up correctly. Let's try to write a Gren program that outputs "Hello, world!" when opened up in a browser.

If you haven't already: [install Gren](/install).

Once you've set up the compiler correctly, it's time to initialize our project. We're going to assume that you've got a bash terminal set up.

## Setting up your project

Start by creating a `hello_world` directory, and `cd` into it.

Every Gren project has a `gren.json` file. This file contains all the information that the compiler needs to compile your program. You can create such a file by running `gren init`.

```sh
~/W/g/hello_world> gren init
Hello! Gren projects always start with an gren.json file. I can create them!

Would you like me to create an gren.json file now? [Y/n]:
Retrieving versions for gren-lang/core... Ok!
Retrieving versions for gren-lang/browser... Ok!
Okay, I created it.
```

When run without any arguments, `gren init` creates a `gren.json` file in the current directory that defines a browser application. You can read more about the `gren.json` file in the [appendix](/book/appendix/gren_json/).

## Writing your program

Create a `src/Main.gren` file and fill it with the following content:

```elm
module Main exposing (main)

import Html

main =
  Html.text "Hello, world!"
```

We create a new module, called `Main` and expose the `main` constant from it.

Then, we import the `Html` module. This module contains functions that allows us to define HTML elements. You can see everything that this module contains by reading its [documentation](https://packages.gren-lang.org/package/gren-lang/browser/version/latest/module/Html).

In our case, we just want to display some text. The `text` function is perfect for that. Our main constant, then, contains the value returned by `Html.text "Hello, world!"`.

When this Gren program is run in a browser, whatever is returned by the `main` function is displayed on the page.

Compile your program using `gren make Main`. This will produce a `index.html` file in your working directory which, when opened, displays `Hello, world!`.

You can now experiment by returning different HTML values from main. Compile and refresh the page to see what happens.

