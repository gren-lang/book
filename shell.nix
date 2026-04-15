let
  sources = import ./npins;
  pkgs = import sources.nixpkgs { };
  build = import ./default.nix { inherit pkgs; };
in
pkgs.mkShellNoCC {
  inputsFrom = [ build ];

  shellHook = ''
    echo "Node version: ''$(node --version)"
  '';
}
