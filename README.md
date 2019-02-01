# Cypress CircleCI Orb Example

[![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-circleci-orb.svg?style=svg&circle-token=35ff1103f3c44a79246edd491b0d92169e84976a)](https://circleci.com/gh/cypress-io/cypress-example-circleci-orb) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/j35334/runs) [![renovate-app badge][renovate-badge]][renovate-app]

[Cypress CircleCI Orb](https://github.com/cypress-io/circleci-orb)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

## Introduction

This project installs npm dependencies, runs Cypress tests and records the output to the Cypress Dashboard on CircleCI. See [.circleci/config.yml](.circleci/config.yml):

```yaml
version: 2.1
orbs:
  cypress: cypress/cypress@dev:0.0.1
workflows:
  build:
    jobs:
      # record Cypress tests on the Dashboard
      - cypress/run:
          group: "all tests"
          record: true
```

Or you can run without recording on the dashboard:

```yaml
version: 2.1
orbs:
  cypress: cypress/cypress@dev:0.0.1
workflows:
  build:
    jobs:
      - cypress/run
```

The hierarchy:

```
Workflow -> Jobs --> Commands -> define steps
             -> run on Executors
```

## Development

- Check if you are correctly using the Cypress CircleCI Orb in the [.circleci/config.yml](.circleci/config.yml) file by running `npm run validate`.
- You can expand all commands from the orb and see how the "processed" [.circleci/config.yml](.circleci/config.yml) looks during the run on CircleCI. Execute `npm run process` to print the processed YAML in the terminal.
