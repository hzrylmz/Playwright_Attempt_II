import {test, expect} from '@playwright/test';

test('Mouse right click', async ({page}) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

  const button = page.locator("//span[text()='right click me']");

  await button.click({button: 'right'});

  await page.pause();

})