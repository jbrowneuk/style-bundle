# @jbrowneuk/style-bundle

CSS colour palettes used on my public-facing websites.

## Getting started

You will need to install this package and then modify your build script to copy it to your build output folder.

**To install from a local path**: `npm link /path/to/this/style-bundle`

**To install from this repository**: `npm i git+https://git@github.com/jbrowneuk/style-bundle.git`

These will put the palette files under `node_modules/@jbrowneuk/style-bundle`. Modify your build script to pull `palette.css` into your build output.

### Modifying Angular build to provide the CSS

In `angular.json` under the `architect.build.options.assets` for your project, add and modify the following:

```json
{
  "glob": "**/*.css",
  "input": "node_modules/@jbrowneuk/style-bundle",
  "output": "my-theme-path"
}
```

You can then place a `link` element in the head of your `index.html` that points to the palette file:

```html
<head>
  <!-- Other elements removed to make this more readable -->
  <link rel="stylesheet" href="/my-theme-path/palette.css">
</head>
```

You are then able to use the `--color-` names in any CSS used by the application.