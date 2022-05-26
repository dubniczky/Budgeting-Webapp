.PHONY: lint

pm := yarn
lockfile := yarn.lock
node := node
devnode := nodemon
main := main.js
debug_args := --trace-exit --trace-uncaught --trace-warnings
deploy_args := --disallow-code-generation-from-strings

lint:
	$(node) --check $(main)

install: package.json
	$(pm) install

node_modules: package.json
	$(pm) install

dev: $(main)
	$(devnode) $(debug_args) $(main)

start: node_modules
	$(node) $(deploy_args)

deploy: $(lockfile)
	$(pm) install -s --pure-lockfile --no-progress --prod