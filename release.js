/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const multirelease = require('multi-semantic-release');
const { getManifest } = require('multi-semantic-release/lib/getManifest');

const dryRun = false;

async function release() {
  try {
    const paths = [
      `${__dirname}/browserlist-config/package.json`,
      `${__dirname}/commitlint-config/package.json`,
      `${__dirname}/eslint-config/package.json`,
      `${__dirname}/postcss-config/package.json`,
      `${__dirname}/prettier-config/package.json`,
      `${__dirname}/stylelint-config/package.json`,
      `${__dirname}/components/package.json`,
      `${__dirname}/react/package.json`,
      `${__dirname}/styles/package.json`,
      `${__dirname}/tokens/package.json`,
    ];

    await multirelease(paths, { dryRun });
  } catch (error) {
    // Log out errors.
    console.error('[multi-semantic-release]:', error);
    process.exit(1);
  }
}

release();
