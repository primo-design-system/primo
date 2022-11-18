<h1 align="center">
  Primo Design System
</h1>
<p align="center">
  <a href="https://github.com/primo-design-system/primo/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="primo is released under the MIT license" />
  </a>
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
  </a>
  <a href="https://github.com/primo-design-system/primo/blob/main/.github/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
  </a>
</p>

> Primo is an open-source design system that makes it easy to build high quality 
> and accessible web applications. The system includes designs, token, styles 
> and components built using modern JavaScript.

Currently under a lot of work in progress 🚀

## The Repository

This repository is where the Primo design system is maintained. This is a
working design system aimed to support frontend experiences and a
commonplace to find visual styles, components and patterns.

## Getting started

If you're just looking to get started with tokens and a base style reset,
checkout `@primo/styles` and `@primo/tokens`. For a full
bundle with React components and fonts, look at `@primo/react`.

For a full bundle with React components and fonts, look at
[`@primo/react`](./packages/react) or
[`@primo/styles`](./packages/styles). These will provide the building
blocks in `react` and `css`.

### Requirements

This project uses [Yarn](https://yarnpkg.com/) and [Node](https://nodejs.org/en/). Ensure you are using version `1.2.55` for yarn, to install please follow the [installation guide](https://classic.yarnpkg.com/en/docs/install).

For node make sure you've set you local to version `16.*.*`. Use [nvm](https://github.com/nvm-sh/nvm) to manage your local development versions.

### Installation

To get started we need to setup all our local dependencies, we're using yarn workspaces and lerna to manage our mono repo.

```sh
yarn
```

In the future we will look to support

- Angular
- Vue
- Web Components (Stencil JS)

### Full list of all our component packages

| Package name                                  | Description                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`@primo/components`](./packages/components)  | All base component styles                                                              |
| [`@primo/grid`](./packages/grid)              | 12 column grid system and utilities                                                    |
| [`@primo/icons`](./packages/icons)            | Iconography SVG assets to support the Design System                                    |
| [`@primo/react`](./packages/react)            | React components                                                                       |
| [`@primo/styles`](./packages/styles)          | Base styles and CSS reset for the Design System                                        |
| [`@primo/tokens`](./packages/tokens)          | Tokens for color, type, spacing, grids that are available in the Cardano design system |

## ✍️ Feedback

Please ask any questions on this project, you can do so by
[creating a new issue](https://github.com/primo-design-system/primo/issues/new/choose). Or contributing to any [active issues](https://github.com/primo-design-system/primo/issues).

If you wish to get in contact, please don't hesitate via twitter [@Rich_McCartney](https://twitter.com/rich_mccartney).

## Licence

Licensed under standard
[MIT license](https://github.com/primo-design-system/primo/blob/main/LICENSE).