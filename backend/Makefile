IMAGE_NAME=tl-merchantx-backend

.PHONY: build
build:
	@docker build -t $(IMAGE) ../

.PHONY: run
run:
	@docker run -p 6556:6556 $(IMAGE)