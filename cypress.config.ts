import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { defineConfig } from 'cypress'

// @ts-ignore
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents,
    specPattern: '**/*.feature',
    experimentalRunAllSpecs: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    video: false,
    pageLoadTimeout: 10000,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
