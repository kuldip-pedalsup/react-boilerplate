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
npm run dev
```
