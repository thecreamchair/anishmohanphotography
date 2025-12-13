import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3fbrgky7',
    dataset: 'production'
  },
  deployment: {
    appId: 'jw2kwvhbr0fwllfj9fefdu8e',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
