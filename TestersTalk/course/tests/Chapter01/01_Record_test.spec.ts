import { test, expect } from '@playwright/test';

test('navigation to github', async ({ page }) => {
  await test.step('Navigate to the URL', async() => {
    await page.goto('https://github.com/');
  });
  await test.step('Click on Login button', async() => {
    await page.getByRole('link', { name: 'Sign in' }).click();
  });
  await test.step('Enter User Login nad Password', async() => {
    await page.getByLabel('Username or email address').click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('test-user');
    await page.getByLabel('Username or email address').click();
    await page.getByRole('textbox', { name: 'Password' }).fill('test-passwword');
  });
  await test.step('Click on Sign In button', async() => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });
  await test.step('Validate error message', async() => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });
});