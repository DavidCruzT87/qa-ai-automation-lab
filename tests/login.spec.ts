
import { expect, test } from '@playwright/test';

test('Login successfully with valid credentials', async ({ page }) => {

  // Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter credentials
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  // Click login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Validate successful login
  await expect(page).toHaveURL(/secure/);

  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area!');

});
