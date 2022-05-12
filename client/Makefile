
package_manager := yarn

.PHONY: install serve

serve: node_modules
	npx ng serve --watch

node_modules: package.json
	@$(MAKE) -s install

install:
	@$(package_manager) install
