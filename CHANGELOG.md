# Texlish Changelog

## Unreleased

* CLI avoids redundant BibTeX/Biber reruns when their input is unchanged.

## 0.2.0

* `::version` enforces Texlish version ranges with comparison operators,
  partial/wildcard versions, whitespace-separated AND conditions, and
  `||` alternatives.
  [[#24](https://github.com/edemaine/texlish/issues/24)]
* Compiler configuration via in-file `::config`, CLI `--config`, and
  project config files.
  [[#26](https://github.com/edemaine/texlish/issues/26)]
* Configurable sub/superscript grouping in math mode, with new default
  behavior correctly handling polynomials like `x^12y^42`,
  while leaving text-mode underscores literal.
  [[#26](https://github.com/edemaine/texlish/issues/26)]
* Parenthesized sub/superscripts like `x_(ij)` and `x^(i+j)` more
  correctly compile to braced LaTeX groups.
  They can be disabled with `-scriptParens` or `latexCompat`.
* Markdown-style links `[text](url)` support,
  compiling to `\protect\href{url}{text}`.
  They (and autolinks) can be disabled with `-markdownLinks` or `-markdownCompat`.
  [[#32](https://github.com/edemaine/texlish/issues/32)]
* Markdown-style images `![alt](url)` support,
  compiling to `\includegraphics[alt={alt}]{url}`.
  The generated command can be configured with `::styles ! = \includegraphics`.
  They can be disabled with `-markdownImages` or `-markdownCompat`.
* Smart quotes convert straight `'` and `"` characters to TeX
  opening/closing quote ligatures, while preserving apostrophes in words.
  This frees up backticks for Markdown-style code.
  Smart quotes can be customized with `::config quotes` and disabled with
  `-smartQuotes`, `-markdownCompat`, or `latexCompat`.
  [[#4](https://github.com/edemaine/texlish/issues/4)]
* Markdown-style backticks support inline code spans `` `...` `` and
  fenced code blocks ` ```...``` `,
  compiling by default to LaTeX `\verb` and `verbatim` environment,
  but configurable for each number of ticks via `::styles`.
  Fenced blocks can pass an optional argument to the environment,
  such as `` ```[language=python] ``.
  Indented fences strip up to the opening fence indentation from content lines.
  The minimum enabled backtick run can be configured with `markdownBackticks`,
  so you can restrict to 3+ backticks for code and use 1-2 for open quotes,
  or disable entirely with `-markdownBackticks` or `-markdownCompat`.
  [[#4](https://github.com/edemaine/texlish/issues/4)]
* Markdown-style horizontal rules `---`, customizable through `::styles`.
  They can be disabled with `-markdownHorizontalRules` or `-markdownCompat`.
  [[#33](https://github.com/edemaine/texlish/issues/33)]
* Markdown-style footnotes support `[^id]` markers, `[^id]:` definitions,
  repeated references via `\footref`, and `@^id` numeric references.
  They can be disabled with `-markdownFootnotes` or `-markdownCompat`.
  [[#21](https://github.com/edemaine/texlish/issues/21)]
* Markdown-style block quotes `> quote` compile to LaTeX `quote` environments,
  with strictly indented continuation lines and same-indented `> ` markers
  continuing the same quote.
  The environment can be customized with `::styles > = quotation`.
  They can be disabled with `-markdownBlockquotes` or `-markdownCompat`.
  [[#3](https://github.com/edemaine/texlish/issues/3)]
* Markdown-style lists can be disabled with `-markdownLists` or
  `-markdownCompat`.
* Markdown-style and command-argument list items can start with
  same-line `:` environments, nested lists, or `::` meta commands.
  [[#7](https://github.com/edemaine/texlish/issues/7)]
* Other syntax features can now be disabled individually:
  `markdownHeadings`, `markdownEmphasis`, `markdownFootnotes`,
  `refShorthand`, `citeShorthand`, `colonCommands`, and `colonEnvironments`.
* Math mode delimited by `$...$`, `$$...$$`, `\(...\)`, `\[...\]`,
  standard display-math environments, or Texlish shorthand such as `: align`
  suppresses text-only Markdown markup such as headings, emphasis,
  smart quotes, links, backticks, lists, and horizontal rules;
  enables script grouping; and lets `\text{...}` and related font commands
  like `\textrm{...}` re-enter text mode for their braced argument.
  [[#6](https://github.com/edemaine/texlish/issues/6)]
* Commented-out list items no longer interrupt Markdown-style lists,
  command argument lists, or package argument lists.
  [[#22](https://github.com/edemaine/texlish/issues/22)]
* Command argument lists can omit the bullet for their final required argument.
  [[#28](https://github.com/edemaine/texlish/issues/28)]
* `::tex` passes raw TeX through unchanged,
  on the same line or in nested strictly indented lines.
  [[#2](https://github.com/edemaine/texlish/issues/2)]
  [[#8](https://github.com/edemaine/texlish/issues/8)]
* `::style` and `::use` package arguments are now treated as raw text,
  so Texlish syntax is inactive there.
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
* URL and email autolinks now work in the middle of a text line.
  [[#16](https://github.com/edemaine/texlish/issues/16)]
* `\defn` (as generated by default from Markdown-style `***` emphasis)
  is now automatically defined if needed, via `\providecommand`.
  [[#1](https://github.com/edemaine/texlish/issues/1)]
* CLI `--pdf` and related LaTeX engine options:
  * Now run a full LaTeX build, similar to `latexmk`:
    rerun LaTeX and run BibTeX, Biber, and/or makeindex automatically as needed.
  * The compiled output is always in the same directory as the input
    `.texlish` file and generated `.tex` file.
  * Support for Cygwin LaTeX.
* CLI prints version number during `--help` and supports `--version`

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
