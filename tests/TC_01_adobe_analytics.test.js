/* Scenario: 
Capture adobe analytics tracking on clicking on Mobile > Overview tab

Scenario Description: 
Log in to the app and navigate to Overview page. Click on Mobile > Overview and capture the 
Adobe analytics events fired.

Test Steps:
1.	Log in to the APP
2.	Hover to the Mobile tab and click on Overview option
3.	Perform a GET request and get the responses from Mobile Tab URI's
4.	Verify the adobe events fired on clicking the Mobile > Overview tab
5.	Assert the adobe events data and validate the Request Url and Response Url having 'b/ss' tag
*/

import { test, expect } from '@playwright/test'
import { mobileOverviewTab, mobileTab } from '../selectors/locators'
import * as config from '../config'
const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36";

test.describe('Adobe Analytics Tracking Test', () => {
	test.use({userAgent});
	test("Capture Adobe Analytics 'b/ss' event on clicking the Mobile > Overview Tab.", async ({
		page
	}) => {
		await page.route(
			'https://metrics.xfinity.com/b/ss/comcastdotcomprod/10/JS-2.22.0-LDQM/s**',
			async (route, request) => {
				await request.allHeaders()
				const requestUrl = request.url()
				const response = await route.fetch()
				await route.fulfill({
					status: 200,
					contentType: 'application/json',
					headers: { 'access-control-allow-origin': '*' }
				})
				await page.waitForTimeout(config.timeout)
				const formattedRequestBody = request.postData()
				const formattedJsonRequestBody = JSON.stringify(formattedRequestBody)
				console.log('Formatted Json Request Body is:', formattedJsonRequestBody)
				await page.waitForTimeout(config.timeout)

				expect(request.postData()).toContain('AQB', 1)
				expect(request.postData()).toContain('AQE', 1)
				expect(request.postData()).toContain('events', 'event125')
				expect(request.postData()).toContain('events', 'event126')
				expect(request.postData()).toContain(
					'g',
					'https://www.xfinity.com/learn/mobile-service'
				)
				expect(request.postData()).toContain(
					'c73',
					'AA Hosted by Adobe Launch | 11182020'
				)
				expect(request.postData()).toContain(
					'c25',
					'resi|sales|shop||home|page load'
				)
				expect(request.postData()).toContain('id', '281EA5D7457AAC65')
				expect(request.postData()).toContain('c44', 'responsive|df learn 2')
				expect(request.postData()).toContain('c45', 'new')
				expect(request.postData()).toContain(
					'c50',
					'8a8b8ba1-83f5-473d-a11d-434edbd82bb8'
				)
				expect(request.postData()).toContain('c55', 'resi|sales')

				const responseUrl = response.url()
				console.log('Request Url: ', requestUrl)
				console.log('Response Url: ', responseUrl)
				console.log('Response Status is:', response.ok())
				console.log('Response Status code is:', response.status())

				expect(response.ok()).toBe(true)
				expect(response.status()).toBe(200)

				expect(responseUrl).toStrictEqual(requestUrl)
			}
		)
		await page.goto('/')
		await page.waitForLoadState('domcontentloaded')
		await page.locator(mobileTab).hover()
		await page.locator(mobileOverviewTab).click()
		expect(page.url()).toBe(config.mobileOverviewPageUrl)
	})
})
