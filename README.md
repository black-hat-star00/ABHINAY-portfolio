# Abhinay — 3D Portfolio

A modern, responsive developer portfolio built with React, Three.js, and Vite. It features interactive 3D scenes, smooth animations, and a clean UI powered by Tailwind CSS.

<details><summary><b>Folder Structure</b></summary>

```bash
ABHINAY-portfolio/
├── src/
│   ├── App.tsx
│   ├── globals.css
│   ├── main.tsx
│   ├── components/
│   │   ├── atoms/ (Header, Typewriter)
│   │   ├── canvas/ (Ball, Computers, Earth, Stars)
│   │   ├── layout/ (Loader, Navbar, SparkleCursor)
│   │   └── sections/ (Hero, About, Experience, Tech, Works, Certificates, Contact)
│   ├── constants/ (config, styles)
│   ├── hooks/ (useTypewriter)
│   ├── hoc/ (SectionWrapper)
│   ├── types/
│   └── utils/ (motion)
├── public/
│   ├── desktop_pc/ (gltf, bin, textures)
│   ├── planet/ (gltf, bin, textures)
│   ├── profile.png
│   └── logo.{png,svg}
├── index.html
├── package.json
├── tailwind.config.cjs
├── postcss.config.cjs
├── tsconfig*.json
├── vite.config.js
└── LICENSE
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>3D Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Vercel](https://vercel.com/): Cloud platform for fast front‑end deployments.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note: this app uses EmailJS to send emails client‑side. Create an account at
[EmailJS](https://emailjs.com/) and set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
`VITE_EMAIL_JS_ACCESS_TOKEN` in a local `.env` file.

**Step 1:**

Clone this repository:

```bash
git clone <your-repo-url>
cd ABHINAY-portfolio
```

**Step 2:**

Install dependencies:

```bash
npm install
```

**Step 3:**

Start the development server:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script             | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Start dev server at `localhost:5173`        |
| `npm run build`    | Build production assets to `./dist/`        |
| `npm run preview`  | Preview the production build locally        |
| `npm run lint`     | Run ESLint                                  |
| `npm run ts:check` | Type-check the project                      |

## 🔒 Environment Variables

Environment variables[^3] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

**React.js 18 3D Portfolio** uses [EmailJS](https://www.emailjs.com/) as external service. You need
to create an account and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env
VITE_EMAILJS_SERVICE_ID=<VITE_EMAILJS_SERVICE_ID>
VITE_EMAILJS_TEMPLATE_ID=<VITE_EMAILJS_TEMPLATE_ID>
VITE_EMAIL_JS_ACCESS_TOKEN=<VITE_EMAIL_JS_ACCESS_TOKEN>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

1. Push your repo to GitHub/GitLab/Bitbucket
2. Import the repo to Vercel and set the three EmailJS env vars
3. Vercel will auto-detect Vite and deploy

#### Deploy on Netlify

1. Push your repo, then create a new site from Git in Netlify
2. Build command: `npm run build`, Publish directory: `dist`
3. Add the three EmailJS env vars in Site settings → Environment

## 🔧 Contributing

Contributions are welcome! Feel free to fork the repo and open a PR.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-change`)
3. Commit and push your changes
4. Open a Pull Request 🎉

### 📩 Bug / Feature Request

Open an issue with a clear description and steps to reproduce.

## 💎 Acknowledgements

- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) and [drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)

## 📞 Contact

Questions or feedback? Please open an issue.

## 📋 License

MIT — see [`LICENSE`](./LICENSE) for details.
