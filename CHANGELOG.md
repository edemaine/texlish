# Texlish Changelog

## Unreleased

* `::version` enforces strict Texlish version ranges with comparison
  operators and whitespace-separated AND conditions.
  [[#24](https://github.com/edemaine/texlish/issues/24)]
* Compiler configuration via in-file `::config`, CLI `--config`, and
  project config files.
  [[#26](https://github.com/edemaine/texlish/issues/26)]
* Configurable sub/superscript grouping, with new default behavior
  correctly handling polynomials like `x^12y^42`.
  [[#26](https://github.com/edemaine/texlish/issues/26)]
* Markdown-style footnotes support `[^id]` markers, `[^id]:` definitions,
  repeated references via `\footref`, and `@^id` numeric references.
  [[#21](https://github.com/edemaine/texlish/issues/21)]
* `::use` supports partially indented arguments,
  and comments after packages and arguments.
  [[#19](https://github.com/edemaine/texlish/issues/19)]
* Page references now use `@#ref` instead of `#@ref`.
  [[#31](https://github.com/edemaine/texlish/issues/31)]
* `@ref` no longer includes `~` as part of `ref` (unless quoted),
  allowing for nonbreaking spaces between `@ref`s.
  [[#18](https://github.com/edemaine/texlish/issues/18)]
* CLI adds a comment at the top of generated `.tex` files, with version number,
  linking to Texlish and suggesting to edit the `.texlish` file instead.
  [[#23](https://github.com/edemaine/texlish/issues/23)]

## 0.1.1

* Blank lines no longer terminate an indented argument or environment.
  [[#9](https://github.com/edemaine/texlish/issues/9),
  [#14](https://github.com/edemaine/texlish/pull/14)]
* Email autolinks now support `{a,b}@domain` syntax for multiple
  addresses at the same domain.
  [[#13](https://github.com/edemaine/texlish/issues/13)]
* Email autolinks now use `\nolinkurl` to format the same as `\url`
  (i.e., following `\urlstyle`), instead of manual escaping.
* URL and email autolinks now use `\protect` in case they appear in
  a moving argument (e.g. argument to `\thanks`).
* `@ref` must now be preceded by whitespace or punctuation,
  avoiding e.g. email addresses to be interpreted as references.
  [[#12](https://github.com/edemaine/texlish/issues/12)]

## 0.1.0

* Change environment and special environment syntax from `>env` and `>>special`
  to `: env` (with required space after colon) and `::special` respectively.
  This will allow us to be more compatible with Markdown blockquotes.

## 0.0.0

* Initial working version
