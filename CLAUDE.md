# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Dean Turbeaux, an electronic music artist. The project is currently in its initial setup phase with only documentation and build configuration present.

## Development Commands

### Linting
```bash
make lint
```
Lints all Markdown files using markdownlint (if installed).

### Deploy
```bash
make deploy
```
Commits all changes with auto-generated message and pushes to repository.

### Default Build
```bash
make
```
Runs the lint target by default.

## Architecture

This is a simple static website project that will contain:
- HTML/CSS files for the artist website
- Content for live events, music links, and contact information
- Mobile-responsive design elements

## Planned Improvements

Based on the README, the following features need to be implemented:
- Mobile responsiveness
- Content hierarchy for events (upcoming vs past)
- Clear navigation structure
- Artist bio section
- Contact information
- Professional visual polish

## File Structure

Currently minimal with only configuration files:
- `Makefile` - Build and deployment automation
- `README.md` - Project documentation
- Web assets (HTML/CSS/JS) to be added

## Development Notes

- Use British English spellings (colour, centre, realise, etc.)
- Always run `make lint` before committing changes
- Use `make deploy` for automated git workflow