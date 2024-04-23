---
title: Gren.json
description: The Gren configuration file
---

Every Gren project is required to have a `gren.json` file. This file contains information about how to compile the project, and which platform to compile the project for.

There are two different types of project: applications and packages.

Depending on the type of project, the `gren.json` looks slightly different.

## Applications

The `gren.json` file should look something like the following:

```json
{
    "type": "application",
    "platform": "browser",
    "source-directories": [
        "src"
    ],
    "gren-version": "0.3.0",
    "dependencies": {
        "direct": {
            "gren-lang/browser": "3.0.0",
            "gren-lang/core": "4.0.0"
        },
        "indirect": {
            "gren-lang/url": "3.0.0"
        }
    }
}
```

Let's explain this property by property:

* `type`: This tells the compiler that we're attempting to compile an application.
* `platform`: Which platform are we expecting to run our application on? Can either be `browser` or `node`.
* `source-directories`: This lists every sub-folder that the compiler should look for Gren source files in. This is usually fine as-is.
* `gren-version`: Which version of the compiler is this application compatible with. If you're using an unsupported compiler, it will refuse to compile.
* `dependencies`: Lists the packages that your application depends on. Direct dependencies are those which you application make direct use of, while indirect dependencies are required by your direct dependencies. The reason that both types of dependencies are listed in your `gren.json` file, is to make sure we always retrieve the same version of a given dependency. Each package name resolves to a github `author/project` name. Versions need to be formatted according to the `semver` specification, and must target a concrete version (no ranges).

## Packages

The `gren.json` file for packages should look something like this:

```json
{
  "type": "package",
  "platform": "common",
  "name": "yarl/stuff",
  "summary": "Yarl's reusable Gren code",
  "license": "BSD-3-Clause",
  "version": "1.0.0",
  "gren-version": "0.3.0 <= v < 0.4.0",
  "exposed-modules": {
    "Primitives": ["ModuleOne", "ModuleTwo"]
  },
  "dependencies": {
    "gren-lang/core": "3.0.0 <= v < 4.0.0"
  }
}
```

Let's explain this property by property:

* `type`: This tells the compiler that we're attempting to compile a package. Code that can be reused in other packages and applications.
* `platform`: Which platform is this package compatible with? Can either be `browser`,`node` or `common` which is to say it should work on any platform.
* `name`: The name of the package. This should match the `author/project` path on Github. Currently, only Github is supported.
* `summary`: A brief (80 characters maximum) summary of what your project does.
* `license`: Specifies how your code is licensed.
* `version`: The current semantic version of the package.
* `gren-version`: Which version range of the compiler is this package compatible with.
* `exposed-modules`: Specifies the modules that are importable in other projects. Can be a list of module names or, as is the case here, an object that categorize the exposed modules. The object format is relevant when generating documentation.
* `dependencies`: Other packages that this package depends on. Notice that packages doesn't have references to indirect dependencies, and that versions are specified in ranges instead of being specific. When compiling your package directly, the lowest specified version will be selected. When compiled as part of another package or application, the lowest compatible version will be selected.


## gren init

The compiler includes a command for generating `gren.json` files for new projects, to simplify setup.

To generate:
* browser-based application: `gren init`
* browser-based package: `gren init --package`
* any application: `gren init --platform <browser|node>`
* any package: `gren init --package --platform <common|browser|node>`
