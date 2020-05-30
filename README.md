# Browserslists config

[![NPM Version](https://img.shields.io/npm/v/@studiometa/browserslist-config.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/browserslist-config)

> A shareable Browserlist configuration.

## Installation

Install the package via NPM:

```bash
npm install --save-dev @studiometa/browserslist-config
```

## Usage

Extend the configuration in your project's `package.json` file:

```json
{
  "browserslist": [
    "extends @studiometa/browserslist-config"
  ]
}
```

See the [documentation on shareable configuration](https://github.com/browserslist/browserslist#shareable-configs) for more information.

The exported configuration matches the following:

```
> 0.2%
last 4 versions
not dead
node >= 10
```

If you need to add support for Internet Explorer 10, you can add it to your project's `package.json` file:

```json
{
  "browserslist": [
    "extends @studiometa/browserslist-config",
    "IE 10"
  ]
}
```
