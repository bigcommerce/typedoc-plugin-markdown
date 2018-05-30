# @bigcommerce/typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes a
theme and additional arguments for rendering markdown. This is a forked version
of [typedoc-plugin-markdown](https://github.com/tgreyjs/typedoc-plugin-markdown)
that is modified to suit the needs of BigCommerce.

## Installation

```javascript
npm install --save-dev typedoc @bigcommerce/typedoc-plugin-markdown
```

## Usage

### Specify the theme

The plugin provides an additional markdown theme:

*shell:*

```bash
$ node_modules/.bin/typedoc --theme markdown
```

*npm script:*

```json
"scripts": {
 "docs": "typedoc --theme markdown"
}
```

### Additional arguments

The plugin exposes the following additional arguments:

* `--mdEngine <github|bitbucket|gitbook>`\
  The markdown rendering engine:\
  **"github":** Optimised for GitHub/CommonMark (Default).\
  **"bitbucket":** Renders markdown to support Bitbucket anchor linking and
  more.\
  **"gitbook":** Adds SUMMARY.md file to generate a book's table of contents and
  sets header levels to display correct sub-navigation menu. (*Optimised for
  newest version of GitBook*).

* `--mdHideSources`\
  Suppress source file linking from output.

* `--mdSourceRepo <path.to.repo>`(*Will be ignored on GitHub repositories*)\
  The source repo to use for source file linking.\
  For bitbucket use: `https://bitbucket.org/owner/repository_name`.

## Example output

* [Some general example output](https://github.com/bigcommerce/typedoc-plugin-markdown/tree/master/examples/out/README.md).

## Acknowledgements

* Thanks to tgreyjs's original plugin -
  [typedoc-plugin-markdown](https://github.com/tgreyjs/typedoc-plugin-markdown).
