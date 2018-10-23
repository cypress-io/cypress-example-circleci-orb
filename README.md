# CircleCI Cypress orb demo

[![CircleCI](https://circleci.com/gh/cypress-io/circleci-orb-test.svg?style=svg&circle-token=35ff1103f3c44a79246edd491b0d92169e84976a)](https://circleci.com/gh/cypress-io/circleci-orb-test) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/j35334/runs)

See [.circleci/config.yml](.circleci/config.yml)

I think the user project would simply be

```yaml
version: 2.1
orbs:
  cypress: cypress/cypress@1.0.0
workflows:
  build:
    jobs:
      - cypress/e2e:
          group: “all tests”
          record: true
          parallel: true
```

which is very very simple. If the user does not want recording and just needs tests

```yaml
version: 2.1
orbs:
  cypress: cypress/cypress@1.0.0
workflows:
  build:
    jobs:
      - cypress/e2e
```

The hierarchy:

```
Workflow -> Jobs --> Commands -> define steps
             -> run on Executors
```
