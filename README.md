# React Boilerplate: Skeleton React + Vite

- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules with vscode settings.

## Getting started

**nvmrc read automatically node version: For bash, put the following at the end of your $HOME/.bashrc, the shell will change the node version according to the .nvmrc file under the dir.**

```bash
_nvmrc_hook() {
  if [[ $PWD == $PREV_PWD ]]; then
    return
  fi

  PREV_PWD=$PWD
  [[ -f ".nvmrc" ]] && nvm use
}

if ! [[ "${PROMPT_COMMAND:-}" =~ _nvmrc_hook ]]; then
  PROMPT_COMMAND="_nvmrc_hook${PROMPT_COMMAND:+;$PROMPT_COMMAND}"
fi
```

**Requirements:**

- Node.js version 18.15.0 or higher

## Local development

```bash
npm  run  dev
```

- create copy of .env.example and rename with .env.local for run project in local.

## Production Environment

```bash
npm  run  build
```

- copy and rename .env.example to .env.production, updating it with production credentials.

## Staging Environment

```bash
npm  run  staging
```

- copy and rename .env.example to .env.staging, updating it with staging credentials.

# Folder structure

```
├── src
│   ├── assets // Assets will be here.
│   │	├── icons - index.jsx // Svg Icons will be here
│   │   ├── images - index.jsx // PNG & Jpeg Images will be here
│   │   ├── styles - global.scss // Global css will be here such as container, variables, color codes etc.
│   ├── components // global components will be here.
│   │   ├── ui - index.jsx // Common components will be here such as Model, Buttons, Dropdwon etc.
│   │   ├── form - index.jsx // Form components will be here such as Checkbox, Input etc.
│   ├── context // context api's file will be here.
│   ├── data // constant variables will be here - static data will be export from here.
│   ├── features // Project module wise folders will be here.
│   │   ├── blogs // One of the module of project.
│   │	│   ├── assets // if any assets for particular module then will be here.
│   │	│   ├── components // components for particular modules will be here.
│   │	│   ├── services // services (APIs) functions for particular modules will be here.
│   │	│   ├── index.jsx // for export components or module will be here.
│   ├── hooks // custom react hooks will be here.
│   ├── layout // project layouts will be here such as header, footer etc.
│   ├── pages // route pages will be here such as landing page,
│   ├── providers // you can write providers such as walletconnect provides etc.
│   ├── Routes // routes will be here as you can manage with module wise and export object to main.jsx.
│   ├── services // common api functions that you can manage from here.
│   ├── store // state management files / redux / redux-toolkit will be here.
│   ├── utils // common / utility functions will be here.
├── node_modules
├── .env.example // Environment variables & Development credentials will be here.
├── .nvmrc // Node version for all developer on same page
├── index.html // Project bootstrap file.
├── package.json
├── package-lock.json
├── .vscode // project-specific settings such as indentation
└── .gitignore
```
