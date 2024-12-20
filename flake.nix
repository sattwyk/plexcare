{
  description = "Persistent development environment with Node.js, pnpm, and docker-compose";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22
            pkgs.nodePackages.pnpm
            pkgs.docker-compose
          ];

          shellHook = ''
            echo "Node.js $(node --version), pnpm $(pnpm --version) are available and docker-compose $(docker-compose --version)"
          '';
        };
      }
    );
}
