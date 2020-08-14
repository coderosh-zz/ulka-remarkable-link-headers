# ulka-remarkable-heading-anchors

Customizable remarkable Plugin for ulka static site genrator to add ids and anchors to the heading tags

## Installation

```
npm i ulka-remarkable-heading-anchors
```

Add `ulka-remarkable-heading-anchors` to plugins array in `ulka-config.js`

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        "ulka-remarkable-heading-anchors",
    ],
}
```

## Customization

To customize `ulka-remarkable-heading-anchors` to your need, you need to pass plugin as object to plugins array.

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        {
            resolve: "ulka-remarkable-heading-anchors",
            options: {
               // ...options
            }
        },
    ],
}
```

## Options

There are 6 customizable options for `ulka-remarkable-heading-anchors`

```js
// default values
options: {
    hLevels: [1, 2, 3, 4, 5, 6],
    setAnchor: false,
    anchorValue: "# ",
    headingClassName: (hLevel) => `ulka-heading-${hLevel}`,
    anchorClassName: (hLevel) => `ulka-heading-anchors-${hLevel}`,
    slugifyOptions: {},
}
```

- `hLevels` accepts array of numbers for heading levels what you want to customize. Defaults to all heading levels.

- `setAnchor` accepts boolean value. If setAnchor is set to `true`, then anchor element with `anchorValue` will be attached before the heading tag.

- `headingClassName` and `anchorClassName` accepts string or function. If function is passed then heading level will be available as first arguement.

- `slugifyOptions` accepts all the options supported by [slugify](https://www.npmjs.com/package/slugify#options)
