# @jbrowneuk/style-bundle

CSS colour palettes used on my public-facing websites.

## Getting started

You will need to install this package and then modify your build script to copy it to your build output folder.

**To install from a local path**: `npm link /path/to/this/style-bundle`

**To install from this repository**: `npm i git+https://git@github.com/jbrowneuk/style-bundle.git`

These will put the palette files under `node_modules/@jbrowneuk/style-bundle`. Modify your build script to pull the CSS files into your build output:
- `palette.css` — the core colour palette.
- `styles.css` — component library. Optional if only the palette is needed.

## Using the colour palette

Place a `link` element in the head of your HTML that points to the palette file:

```html
<head>
  <!-- Other elements removed to make this more readable -->
  <link rel="stylesheet" href="/my-theme-path/palette.css">
</head>
```

You are then able to use the `--color-` names in any CSS used by the application.

### Light and dark mode

By default, the colour palette will adjust between light and dark modes based on the user’s `prefers-color-scheme` preference. It can be overridden by adding a `data-theme` attribute on your `html` or `body` tag. Set to either `dark` or `light` to force that colour theme.

## Using the component library

The component library requires the colour palette. Place them both in the head of your HTML:

```html
<head>
  <!-- Other elements removed to make this more readable -->
  <link rel="stylesheet" href="/my-theme-path/palette.css">
  <link rel="stylesheet" href="/my-theme-path/styles.css">
</head>
```

### Components

TODO: document usages!