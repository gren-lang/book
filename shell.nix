let
  sources = import ./npins;
  pkgs = import sources.nixpkgs { };
in
pkgs.mkShellNoCC {
  packages = with pkgs; [
    nodejs
    playwright
    gnumake
  ];

  shellHook = ''
    echo "Node version: ''$(node --version)"
  '';
}
