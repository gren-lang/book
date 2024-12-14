---
title: Frequently Asked Questions
description: Frequently asked questions about Gren
---

## Why is the language called Gren?

Gren is a norwegian word, meaning branch. This pays homage to both of Gren's origins: Norway and Elm.

## Why is Gren's logo a bird?

The bird is a robin, which happens to be the name of Gren's founder. The robin is placed within the G, which is meant to symbolize that it is sitting on a G(ren), which is the norwegian word for branch.

## What is the relationship between Gren and Elm?

Gren started as a fork of Elm. This is mostly considered to be an implementation detail, a way to speed up initial development.

It's not a goal of Gren to replace, or stay compatible in any way with, Elm.

## What are the differences between Gren and Elm?

As of Gren 0.3.0, the main differences is that Gren has:

* A git-based package manager. It's slower, but has access to any github repo that you have, even private ones.
* The default sequential data structure is an immutable array, not a linked list.
* The default unit type is `{}`.
* Extended support for [pattern matching](/book/syntax/pattern_matching/) on records.
* Any expression that returns a record can be used for record updates.
* Multiline strings trim leading whitespace on each line.
* Supports [running on NodeJS](/book/applications/node/).
* No tuples. Check out this [video on why tuples were removed](https://youtu.be/Sl9HHo1qDk0?si=wiJjSEMyl0f6HqTn).
* No automatic constructors for type aliased records.
* No GLSL syntax.
* No reactor.
* Sourcemap support for native integration with the JS debugger.

As of Gren 0.5.0 there are some more differences:

* Some naming changes to make it more intuitive for people not used to functional programming.
  Like `when..is` instead of `case..of` and `keepIf` instead of `filter`.
* [Custom types](/book/syntax/custom_types/) are limited to 0 or 1 arguments.
  This is to prepare for the move to [tagged values](https://github.com/gren-lang/compiler/issues/218).
* Support for more cross-platform browser and node APIs like [web streams](https://packages.gren-lang.org/package/gren-lang/core/version/latest/module/Stream) and [web crypto](https://packages.gren-lang.org/package/gren-lang/core/version/latest/module/Crypto).
* No time traveling debugger.
