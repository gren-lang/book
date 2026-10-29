let
  sources = import ./npins;
  nixpkgs = import sources.nixpkgs { };
in
{
  pkgs ? nixpkgs,
}:
pkgs.buildNpmPackage {
  pname = "gren-book";
  version = "1.0.0";
  meta = {
    description = "The official book for the Gren Programming Language";
    homepage = "https://www.gren-lang.org/book";
    license = pkgs.lib.licenses.bsd3;
  };

  __structuredAttrs = true;
  __darwinAllowLocalNetworking = true;

  src = ./.;
  npmDepsHash = "sha256-0RK6sWnOf0epAKyulooVN/K0wshGYvk2ttbzp9mSPr4=";

  ASTRO_TELEMETRY_DISABLED=1;

  installPhase = ''
    cp -r "$src/docs/" $out
  '';
}
