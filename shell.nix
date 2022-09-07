with import <nixpkgs> { };

pkgs.mkShell {
  name = "edgy.network";

  buildInputs = [
    nodejs
    yarn
  ];
}
