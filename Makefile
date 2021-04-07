VERSION=1
# default のコンテナ
CONTAINER=web

setup:
	docker-compose -f ./docker-compose.yml build && \
	docker-compose -f ./docker-compose.yml up -d && \
	cd src && npm i && cd .. && \
	docker-compose -f ./docker-compose.yml exec web bash \
	-c "npm run typeorm migration:run && npm run seed:run && npm run dev"

db-reset:
	docker-compose -f ./docker-compose.yml down && \
	rm -rf ./docker/mysql/data && \
	rm -rf ./docker/mysql/sql && \
	docker-compose -f ./docker-compose.yml up -d

build:
	docker-compose -f ./docker-compose.yml build

up:
	docker-compose -f ./docker-compose.yml up -d

start:
	docker-compose -f ./docker-compose.yml start

down:
	docker-compose -f ./docker-compose.yml down

restart:
	docker-compose -f ./docker-compose.yml restart

ps:
	docker-compose -f ./docker-compose.yml ps

exec:
	docker-compose -f ./docker-compose.yml exec ${CONTAINER} bash

mysql:
	docker-compose -f ./docker-compose.yml exec mysql-host bash -c "mysql -u user -p"
