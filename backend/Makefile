IMAGE_NAME=tl-merchantx-backend:local

.PHONY: build
build:
	@docker build . -t $(IMAGE_NAME)

.PHONY: run
run:
	@docker run -p 6556:6556 $(IMAGE_NAME)