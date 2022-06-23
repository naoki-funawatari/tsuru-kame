docker-compose down
docker-compose build --no-cache
docker-compose up -d

docker exec -it tsuru-kame /bin/sh
docker exec -it tsuru-kame /bin/bash

yarn start
