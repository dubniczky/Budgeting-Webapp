.PHONY: client server

compose:
	docker-compose up --build

client:
	$(MAKE) -C client serve

server:
	$(MAKE) -C server start
