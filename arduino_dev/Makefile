


CONTAINER_NAME = arduino-sim

.PHONY: up down logs it new_up

up:
	docker compose up -d


new_up:
	docker compose build --no-cache


down:
	docker compose down

logs:
	docker compose logs -f $(CONTAINER_NAME)

it:
	docker exec -it $(CONTAINER_NAME) bash
