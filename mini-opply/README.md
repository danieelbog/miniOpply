# mini-opply

This is a web application built using [Vue.js], and [TypeScript] to interact with an OpenAI backend platform. The application provides the following functionalities:

1. **Authentication UI**: Users can create new accounts and obtain authentication tokens to access the system.
2. **List of Suppliers**: Users can view a list of available suppliers.
3. **Supplier Details**: Users can view detailed information about specific suppliers.
4. **Created Quotes**: Users can view quotes they have created.

## Getting Started

To run the project locally or deploy it, follow these steps:

### Prerequisites

-   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/YourUsername/Supplier-Management-Web-UI.git
    ```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
