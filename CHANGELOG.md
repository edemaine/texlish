# Texlish Changelog

## Unreleased

* `::use` supports partially indented arguments,
  and comments after packages and arguments.
  [[#19](https://github.com/edemaine/texlish/issues/19)]
* `@ref` no longer includes `~` as part of `ref` (unless quoted),
  allowing for nonbreaking spaces between `@ref`s.
  [[#18](https://github.com/edemaine/texlish/issues/18)]
* CLI adds a comment at the top of generated `.tex` files, linking to Texlish
  and suggesting to edit the `.texlish` file instead of this one.
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
