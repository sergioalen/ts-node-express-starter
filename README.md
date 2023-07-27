# ts-node-express-starter

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

This is a template to get started with building Node applications with Typescript and Express.

It uses Google's [gts](https://github.com/google/gts) to fix lint and formatting issues.

## Getting Started

Click on "Use this template" button to create a new repository:

![github create template button](./assets/images/create_repo_button.png)

Clone your newly created repo then run:

```bash
npm install
```

NPM will use the install script located in `scripts/install.sh` and install all dependencies.

**_NOTE:_**  This will install the latest versions on all dependencies except in the `gts` package that will install the latest versions supported by it. Feel free to change the script to target specific versions according to your needs.