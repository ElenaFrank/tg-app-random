
build:
	docker build -t apprandom
run:
	docker run -d -p 3000:3000 --name apprandom --rm apprandom