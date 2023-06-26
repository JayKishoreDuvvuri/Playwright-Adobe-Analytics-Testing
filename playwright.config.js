import { defineConfig } from '@playwright/test'
export default defineConfig({
	testDir: 'tests',
	timeout: 20000,
	retries: 0,
	reporter: [['junit', { outputFile: 'results.xml' }], ['list']],
	projects: [
		{
			name: `Chrome`,
			use: {
				baseURL: 'https://www.xfinity.com/overview',
				browserName: `chromium`,
				channel: `chrome`,
				headless: true,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		}
	]
})
