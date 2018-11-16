import test from 'ava'
import { stripIndent } from 'common-tags'
import * as execa from 'execa'
import * as tempWrite from 'temp-write'

const validate = (filename: string): Promise<any> => {
  const cmd = `circleci config validate ${filename}`
  return execa.shell(cmd, { stdio: 'inherit' })
}

const validateConfig = (config: string): Promise<any> => {
  const filename = tempWrite.sync(config + '\n\n', 'config.yml')
  return validate(filename)
}

const orb = 'cypress-io/cypress@1.0.1'

test('simple', t => {
  t.plan(0)
  const config = stripIndent`
    # simple example workflow
    version: 2.1
    orbs:
      cypress: ${orb}
    workflows:
      build:
        jobs:
          - cypress/run
  `
  return validateConfig(config)
})

test('chrome browser', t => {
  t.plan(0)
  const config = stripIndent`
    # simple example workflow
    version: 2.1
    orbs:
      cypress: ${orb}
    workflows:
      build:
        jobs:
          - cypress/run:
              executor: cypress/browsers-chrome69
              browser: chrome
  `
  return validateConfig(config)
})

test('build and start commands', t => {
  t.plan(0)
  const config = stripIndent`
    # simple example workflow
    version: 2.1
    orbs:
      cypress: ${orb}
    workflows:
      build:
        jobs:
          - cypress/run:
              build: "npm run build"
              start: "npm run server"
  `
  return validateConfig(config)
})

test('custom cypress run command', t => {
  t.plan(0)
  const config = stripIndent`
    # simple example workflow
    version: 2.1
    orbs:
      cypress: ${orb}
    workflows:
      build:
        jobs:
          # checks out code and installs dependencies once
          - cypress/run:
              command: 'npm run cy:run -- --record false'
  `
  return validateConfig(config)
})

test('two jobs with parallel tests', t => {
  t.plan(0)
  const config = stripIndent`
    # simple example workflow
    version: 2.1
    orbs:
      cypress: ${orb}
    workflows:
      build:
        jobs:
          - cypress/install:
              build: 'npm run build'
          - cypress/run:
              requires:
                - cypress/install
              record: true
              parallel: true
              parallelism: 3
              group: '3x'
              start: 'npm run server'
  `
  return validateConfig(config)
})
