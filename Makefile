.PHONY: client server

client:
	$(MAKE) -C client serve

server:
	$(MAKE) -C server start