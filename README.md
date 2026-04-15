# The Gren Programming Language

This repo contains the source code of "The Gren Programming Language", available to read from [gren-lang.org](https://gren-lang.org/book/).

Built with [Starlight](https://starlight.astro.build). 

## Development

We use [nix](https://nixos.org) for managing our dependencies. You can either install project dependencies
with `nix-shell` or by using `direnv`.

With `node` and `npm` installed through `nix`, you now want to install the `npm` dependencies.

```
npm ci
```

For local development, start the dev server with:

```
npm run dev
```

## Deploy

To generate a production build in `docs/`, run:

```
npm run build
```

To preview the production build locally, after running the build:

```
npm run preview
```
