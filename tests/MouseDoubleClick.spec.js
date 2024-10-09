import { test, expect } from '@playwright/test';

test('Mouse double click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // The correct locator for the button to be double-clicked
    const copyTextBtn = page.locator("//button[text()='Copy Text']");

    // Perform double-click
    await copyTextBtn.dblclick();

    // Check if the text has been updated in the second field
    const f2 = page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');
    // #field2 elementinin value niteliğini kontrol ediyoruz, çünkü input elemanlarında metin doğrudan içeriğe yazılmaz. 
    // Bunun yerine value niteliği kullanılır.
    
});
