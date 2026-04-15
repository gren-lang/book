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

  src = ./.;
  npmDepsHash = "sha256-nES18Rz2hKqc5FRRrN3TaG7jNHsF1OaSayyABCTk9bM=";

  ASTRO_TELEMETRY_DISABLED=1;

  buildInputs = [
    pkgs.playwright
  ];

  installPhase = ''
    cp -r "$src/docs/" $out
  '';
}
