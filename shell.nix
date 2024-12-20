{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22
    pkgs.nodePackages.pnpm
    pkgs.docker-compose
  ];

  shellHook = ''
    echo "Node.js $(node --version), pnpm $(pnpm --version) are available and docker-compose $(docker-compose --version)"
  '';
}
