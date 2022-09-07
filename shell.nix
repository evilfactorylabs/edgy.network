with import <nixpkgs> {};

pkgs.mkShell {
  name = "edgy.network";

  buildInputs = [
    nodejs
    nodePackages.yarn
  ];
}
