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
  npmDepsHash = "sha256-eN1p0XDkRLBKdkiUFDa5y2zhXw2Y7peC74EKtiH4U8I=";

  ASTRO_TELEMETRY_DISABLED=1;

  buildInputs = [
    pkgs.playwright
  ];

  installPhase = ''
    cp -r "$src/docs/" $out
  '';
}
