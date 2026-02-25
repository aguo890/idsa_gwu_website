.PHONY: dev build lint lint-fix preview install clean

# Default target
all: dev

# Start the Vite development server
dev:
	npm run dev

# Build the project for production
build:
	npm run build

# Run ESLint to check for linting errors
lint:
	npm run lint

# Automatically fix ESLint errors
lint-fix:
	npm run lint -- --fix

# Preview the built production site locally
preview:
	npm run preview

# Install npm dependencies
install:
	npm install

# Clean up dependencies and build artifacts
clean:
	rm -rf node_modules dist
	npm cache clean --force

