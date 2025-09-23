all: lint

lint:
	@echo "Linting markdown files..."
	@if command -v markdownlint >/dev/null 2>&1; then markdownlint *.md; else echo "markdownlint not installed"; fi

deploy:
	git add -A && git commit -m "Auto-commit from make deploy 🤖" && git push

.PHONY: all lint deploy
