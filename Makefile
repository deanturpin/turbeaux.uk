all: lint

lint:
	@echo "Linting markdown files..."
	@if command -v markdownlint >/dev/null 2>&1; then markdownlint **/*.md *.md; else echo "markdownlint not installed"; fi

serve:
	@echo "Starting Hugo development server..."
	hugo server --buildDrafts --watch

build:
	@echo "Building Hugo site..."
	hugo --gc --minify

clean:
	@echo "Cleaning Hugo build files..."
	rm -rf public resources

deploy: lint
	@echo "Deploying with smart commit message..."
	@git add -A
	@git diff --cached --name-only | head -3 | sed 's/^/Update /' | paste -sd "; " - | \
	{ read msg; git commit -m "$${msg:-Update site content} 🤖" && git push; }

.PHONY: all lint serve build clean deploy
