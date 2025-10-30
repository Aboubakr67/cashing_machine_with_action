start:
	npm run start:prod

build: 
	npm run build

test:
	npm run test && npm run test:e2e

clean-build:
	rm -rf ./dist && mkdir ./dist