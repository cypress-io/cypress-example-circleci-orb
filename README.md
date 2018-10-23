# CircleCI Cypress orb demo

[![CircleCI](https://circleci.com/gh/cypress-io/circleci-orb-test.svg?style=svg&circle-token=35ff1103f3c44a79246edd491b0d92169e84976a)](https://circleci.com/gh/cypress-io/circleci-orb-test) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/j35334/runs)

This project on CircleCI: checks out code, installs NPM dependencies, runs Cypress E2E tests and records the output on Cypress dashboard. See [.circleci/config.yml](.circleci/config.yml) but it is simply:

```yaml
version: 2.1
orbs:
  runner: cypress/runner@dev:0.0.1

workflows:
  build:
    jobs:
      - runner/e2e:
          group: "all tests"
          record: true
```

The hierarchy:

```
Workflow -> Jobs --> Commands -> define steps
             -> run on Executors
```
