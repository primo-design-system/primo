![Frame 12](https://github.com/primo-design-system/primo/assets/1201618/6973c308-ec84-4f6d-9253-743d6b1469e9)
# Primo Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![🔎 Review](https://github.com/primo-design-system/primo/actions/workflows/pull-request.yml/badge.svg)](https://github.com/primo-design-system/primo/actions/workflows/pull-request.yml) [![🚀 Release](https://github.com/primo-design-system/primo/actions/workflows/release.yml/badge.svg)](https://github.com/primo-design-system/primo/actions/workflows/release.yml) [![Maintained With Lerna](https://img.shields.io/badge/maintained%20with-lerna-brightgreen.svg)](https://lerna.js.org/) 

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

## Public Storybook(s)

If you wish to see our styles, components and react components live, and the most recent version and changes please visit the following: 

- [@primo/styles - Storybook](https://main--6377de0c8a29e4b5116a392b.chromatic.com)
- [@primo/components - Storybook](https://main--6377d93d014d80f32c7cdf2a.chromatic.com)
- [@primo/react - Storybook](https://main--6377ddcc97779b50d34d4241.chromatic.com)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://richmccartney.uk"><img src="https://avatars.githubusercontent.com/u/1201618?v=4" width="100px;" alt=""/><br /><sub><b>Richard McCartney</b></sub></a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## ✍️ Feedback

Please ask any questions on this project, you can do so by
[creating a new issue](https://github.com/primo-design-system/primo/issues/new/choose). Or contributing to any [active issues](https://github.com/primo-design-system/primo/issues).

If you wish to get in contact, please don't hesitate via twitter [@Rich_McCartney](https://twitter.com/rich_mccartney).

## Licence

Licensed under standard
[MIT license](https://github.com/primo-design-system/primo/blob/main/LICENSE).