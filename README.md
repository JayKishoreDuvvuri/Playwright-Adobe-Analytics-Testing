### Reliability Automation Testing with Playwright

An example project demonstrating adome analytics test automation using playwright with Intercept/Mock


#### Test Cases

```bash
#### Test Case: TC_01_adobe_analytics.test.js
/* Scenario: Capture adobe analytics tracking on clicking on Mobile > Overview tab

Scenario Description: 
Navigate to Overview page. Click on Mobile > Overview and capture the 
Adobe analytics events fired.

Test Steps:
1.	Navigate to https://www.xfinity.com/overview
2.	Hover to the Mobile tab and click on Overview option
3.	Perform playwright route and fulfill request and get the responses from Mobile Tab URI's
4.	Verify the adobe events fired on clicking the Mobile > Overview tab
5.	Assert the adobe events data and validate the Request Url and Response Url having 'b/ss' tag
*/
```

#### Application Under Test

We are using https://www.xfinity.com/overview as the Application Under Test. 

- URL: https://www.xfinity.com/overview
- OS : macOS 
- IDE : Visual Studio Code


#### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:


#### Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-Adobe-Analytics-Testing.git
```

#### Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

Run test

```bash
npm run test - Runs test case on chrome browser
```

#### Playwright Test Report 

```bash
Html-test-report :
npm run test
```

#### GitLab Repo
```bash
git clone https://gitlab.com/jaykishore96/playwright-adobe-analytics-testin.git
```

#### GitLab Pipeline
```bash
https://gitlab.com/jaykishore96/playwright-adobe-analytics-testin/-/jobs/4540976686
```
