<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px" alt="Codely logo"/>
  </a>
</p>

<h1 align="center">
  <⚡⚛️> Vite React Library Template (by Codely)
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV/ typescript-react-library-template/actions/workflows/tests.yml"><img src="https://github.com/CodelyTV/ typescript-react-library-template/actions/workflows/tests.yml/badge.svg" alt="Build status"/></a>
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="Codely Pro Courses"/></a>
</p>

<p align="center">
  Template for creating React libraries with TypeScript following best practices: Storybook for documentation, testing, Continuous Integration, and linting.
  <br />
  <br />
  <a href="https://github.com/CodelyTV/ typescript-react-library-template/stargazers">Stars are welcome 😊</a>
</p>

## ⚡ Using this Vite template

1. Create your project based on this template:
   - a) If you want to create a GitHub repository, we would recommend to use the GitHub "Use this template" button and clone your newly created repository
   - b) If you prefer to just create a local project, you can use [degit](https://github.com/Rich-Harris/degit):
     ```bash
     npx degit CodelyTV/ typescript-react-library-template#main my-app
     ```
2. Update your project meta-information:
   - [ ] Update the [`package.json`](https://github.com/CodelyTV/typescript-react-library-template/blob/main/package.json):
     - [ ] Specify proper values for the `name`, `author` and `license` properties
     - [ ] Specify the file name for the `main` and `module` properties
     - [ ] If you wish to expose multiple entry points, follow this structure:
     ```
      {
        "name": "my-component",
        "type": "module",
        "files": ["dist"],
        "main": "./dist/my-component.cjs",
        "module": "./dist/my-component.js",
        "exports": {
          ".": {
            "import": "./dist/my-component.js",
            "require": "./dist/my-component.cjs"
          },
          "./secondary": {
            "import": "./dist/secondary.js",
            "require": "./dist/secondary.cjs"
          }
        }
      }
      ```
   - [ ] Change the name and fileName in [`vite.config.ts`](https://github.com/CodelyTV/typescript-react-library-template/blob/main/vite.config.ts) to match the file name specified in the `package.json`
   - [ ] Change the author in [`LICENSE`](https://github.com/CodelyTV/typescript-react-library-template/blob/main/LICENSE)
   - [ ] Clean up this [`README.md`](https://github.com/CodelyTV/typescript-react-library-template/blob/main/README.md)
3. Run your library:
   1. `cd my-library`: Move to your project root directory
   2. `npm install`: Install all the project dependencies
   3. `npm run docs`: Start the Storybook dev mode on [localhost:6006](http://localhost:6006)

## 📚 Documentation

- `npm run docs`: Run Storybook documentation in dev mode
- `npm run build:docs`: Build Storybook documentation

## ✅ Testing

This template comes with both Jest and Cypress component testing. Since this is a template for a component library, we feel it doesn't make sense to use the `e2e` Cypress option, but feel free to change it to your needs.

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

### Component tests

```
  npm run cy:open: Open Cypress in dev mode
  npm run cy:run: Execute Cypress in CLI
```

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [🤏 Codely's configuration](https://github.com/CodelyTV/eslint-config-codely)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io/) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for acceptance/component tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/ typescript-react-library-template/blob/main/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## 🤔 FAQ

### 👻 Why not adding `.vscode` or `.idea` to the `.gitignore` template

These are folders created due to personal environment preferences. We should ignore these personal development environment preferences to be ignored using your global `.gitignore` file and leave the project `.gitignore` file as clean as possible, that is, only containing the project specific rules.

You can create a `.gitignore_global` file with rules that will apply to all your repositories with:

```bash
touch ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

## 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## 🔀 Related information

This application was generated using the [<⚡⚛️> TypeScript React Library Template](https://github.com/CodelyTV/typescript-react-library-template). Feel free to check it out and star the repo! 🌟😊🙌
