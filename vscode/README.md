# Texlish VSCode extension

Support for [the Texlish language](https://texlish.org) in `.texlish` files.

## Features

* Syntax highlighting
* Automatic indentation after `: environment` and `\command:`

## Bold Italic Highlighting

Some themes, including VSCode's bundled themes, display `***bold italic***`
as italic only. This is a [known theme issue](https://github.com/microsoft/vscode-markdown-tm-grammar/issues/69).

To fix, run **Preferences: Open User Settings (JSON)** from the Command Palette
and add this setting at the top level of `settings.json`:

```json
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          "markup.bold markup.italic",
          "markup.italic markup.bold"
        ],
        "settings": {
          "fontStyle": "bold italic"
        }
      }
    ]
  }
}
```

If you already have a `textMateRules` array, append the rule to it.
The rule applies across languages, including Texlish and Markdown, and
preserves your theme's colors.
