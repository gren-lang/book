docs: node_modules
	npm run build
	touch -m docs

node_modules: package.json package-lock.json
	npm ci

.PHONY: dev
dev: node_modules
	npm run dev

.PHONY: preview
preview: docs
	npm run preview
