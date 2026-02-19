import { test, chromium } from '@playwright/test';

test('open staging site ', async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext({
    httpCredentials: {
      username: 'advisebridge',
      password: 'advisebridge',
    },
  });

  const page = await context.newPage();
  await page.goto('https://staging.advisebridge.com/');

  // continue your test steps here

  await browser.close();
});

