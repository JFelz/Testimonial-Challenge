// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://brandtestimony.netlify.app/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Sarah Dole')).toBeVisible();;
});
