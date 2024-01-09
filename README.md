<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/danieelbog/miniOpply">
    <img src="https://robohash.org/1234" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mini Opply</h3>

  <p align="center">
    A small project demonstrating some basic Web development features.
    <br />
    <a href="https://github.com/danieelbog/miniOpply/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://miniopply.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/danieelbog/miniOpply/issues">Report Bug</a>
    ·
    <a href="https://github.com/danieelbog/miniOpply/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Mini Opply is a project that demonstates basic web development features.

1. **Authentication UI**: Users can create new accounts => https://main--miniopply.netlify.app/create-user
   [![Mini Opply Supplier Screen Shot][create-user-screenshot]](https://miniopply.netlify.app/create-user)
   and **obtain authentication tokens** to access the system => https://main--miniopply.netlify.app/login
   [![Mini Opply Supplier Screen Shot][login-screenshot]](https://miniopply.netlify.app/login)
2. **List of Suppliers**: Users can view a list of available suppliers. => https://main--miniopply.netlify.app/suppliers
   [![Mini Opply Supplier Screen Shot][suppliers-screenshot]](https://miniopply.netlify.app/suppliers)
3. **Supplier Details**: Users can view detailed information about specific suppliers. https://main--miniopply.netlify.app/supplier/10
   [![Mini Opply Supplier Screen Shot][supplier-screenshot]](https://miniopply.netlify.app/supplier/19)
4. **Created Quotes**: Users can view quotes they have created. => https://main--miniopply.netlify.app/
   [![Mini Opply Quotes Screen Shot][quotes-screenshot]](https://miniopply.netlify.app/)

Supported features info:

1. **Authentication**: To access the Suppliers, Quotes, and Supplier pages, users must log in and obtain a token.
2. **Centralized Api**: The API is integrated with authentication. It sets its Authorization Header with the token received from the login process.
3. **Centralized Routing**: Routing is integrated with authentication. The routing system checks if the requested page requires user authentication. If the user is not authenticated, the page will redirect the request to the login page. After successful login, the user will be redirected to the originally requested page.
4. **Input validations**: Inputs have their own unique validations based on the model requirements.
5. **Infinite Scroll**: Instead of using grids and pagination, this project implements an infinite scroll logic to display lists.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Basic libraries used in this projects are:

-   [![Vue][Vue.js]][Vue-url]
-   [![Typescript][Typescript]][Typescript-url]
-   [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run the project locally or deploy it, follow these steps:

### Prerequisites

-   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/YourUsername/miniOpply.git
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/danieelbog/miniOpply/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/daniel-bogdan/
[quotes-screenshot]: ./public/images/Quotes.png
[suppliers-screenshot]: ./public/images/Suppliers.png
[supplier-screenshot]: ./public/images/Supplier.png
[login-screenshot]: ./public/images/Login.png
[create-user-screenshot]: ./public/images/CreateUser.png
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Typescript]: https://badges.frapsoft.com/typescript/code/typescript.png?v=101
[Typescript-url]: https://www.typescriptlang.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
