IMAGE_NAME=tl-merchantx-backend:local

.PHONY: build
build:
	@docker build . -t $(IMAGE_NAME)

.PHONY: run
run:
	@docker run -p 4001:6556 $(IMAGE_NAME)

.PHONY: build-and-run
build-and-run:
	make build
	make run