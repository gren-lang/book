# Frequently Asked Questions

## Why is the language called Gren?

Gren is a norwegian word, meaning branch. This pays homage to both of Gren's origins: Norway and Elm.

## Why is Gren's logo a bird?

The bird is a robin, which happens to be the name of Gren's founder. The robin is placed within the G, which is meant to symbolize that it is sitting on G(ren), which is the norwegian word for branch.

## What is the relationship between Gren and Elm?

Gren started as a fork of Elm. This is mostly considered to be an implementation detail, a way to speed up initial development.

It's not a goal of Gren to become a replacement, or stay compatible in any way, with Elm.

## What are the differences between Gren and Elm?

As of Gren 0.1.0, the main differences is that Gren has:

* A git-based package manager. It's slower, but has access to any github repo that you have, even private ones.
* Extended support for pattern matching on records.
* The default sequential data structure is an immutable array, not a linked list.
* No tuples.
* No automatic constructors for type aliased records.
* No GLSL syntax.
* No reactor.
