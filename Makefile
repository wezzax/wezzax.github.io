.PHONY: build up dev stop down sh install-npm logs

# Detecta si existe el comando `docker compose` o `docker-compose`
DOCKER_COMPOSE := $(shell command -v docker-compose >/dev/null 2>&1 && echo docker-compose || echo docker compose)

APP_SERVICE="app"

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

build: ## Generaremos una build de los contenedores (solo si ha cambiado algun Dockerfile)
	$(DOCKER_COMPOSE) build --no-cache

up: ## Levanta contenedores en segundo plano en la terminal
	$(DOCKER_COMPOSE) up -d

dev: ## Levanta contenedores y mantiene viva la terminal
	$(DOCKER_COMPOSE) up

stop: ## Para contenedores sin eliminar volúmenes ni contenedores
	$(DOCKER_COMPOSE) stop

down: ## Para y eliminar contenedores y volúmenes
	$(DOCKER_COMPOSE) down

sh: ## Conectarse a la terminal del contenedor de la aplicación
	$(DOCKER_COMPOSE) exec ${APP_SERVICE} /bin/bash

install-npm: ## Instala las dependencias de npm:
	docker run -v "$$PWD"/astro:/app -w /app node:22.12-slim /bin/sh -c "npm ci"

logs: ## Ver logs de los contenedores
	$(DOCKER_COMPOSE) logs -f ${APP_SERVICE}

