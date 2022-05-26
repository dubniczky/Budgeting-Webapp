.PHONY: lint install dev start deploy clean

pm := yarn
lockfile := yarn.lock
node := node
devnode := nodemon
main := main.js
debug_args := --trace-exit --trace-uncaught --trace-warnings
deploy_args := --disallow-code-generation-from-strings
db_name := db.sqlite

lint:
	$(node) --check $(main)

install: package.json
	$(pm) install

dev: $(main)
	$(devnode) $(debug_args) $(main)

start: node_modules
	$(node) $(deploy_args)

deploy: $(lockfile)
	$(pm) install -s --pure-lockfile --no-progress --prod

clean:
	rm -f $(db_name)


node_modules: package.json
	$(pm) install