# Texlish

***Texlish*** combines the best of
**LaTeX**, **Markdown**, and **indentation sensitivity**
to offer a clean, easy-to-read, easy-to-write syntax.

Texlish **compiles to LaTeX**, so it's compatible with
all existing packages, and you can submit to journals, arXiv, etc. as usual.

Texlish also aims to be **99% LaTeX compatible**:
you can write/import regular LaTeX,
and gradually transition to Texlish's cleaner syntax at your own pace.

Try Texlish for your next document, paper, or presentation!

## [Documentation](https://texlish.org)

[Docs](https://texlish.org)
are built from the [`docs` subdirectory](docs)
via [Astro Starlight](https://starlight.astro.build/).

## Development

To get started:

1. Check out this repo
2. `corepack enable`
3. `pnpm install`
4. `pnpm build`
5. `pnpm link -g` to install global `texlish`

Repeat Steps 3-4 to build the current version.
(Step 3 is necessary only if `package.json` has changed.)

To run: `texlish filename` (generates `filename.tex`)
