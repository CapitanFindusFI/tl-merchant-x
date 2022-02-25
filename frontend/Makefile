IMAGE_NAME=tl-pokemon-frontend:local

.PHONY: build
build:
	@docker build . -t $(IMAGE_NAME)

.PHONY: run
run:
	@docker run -p 4000:80 $(IMAGE_NAME)

.PHONY: build-and-run
build-and-run:
	make build
	make run