set -e
set -u

export DOCKER_PORT=80

cd api
npm run run:dev
