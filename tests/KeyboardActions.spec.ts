import {test, expect} from '@playwright/test';


test('Keyboard Actions ', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator(' #name').fill('Let us copy-paste');

    // await page.type(' #name', 'Let us copy-paste');

    // CTRL + A
    await page.keyboard.press('Meta+A'); //CTRL-->Meta(Mac)

    // CTRL + C
    await page.keyboard.press('Meta+C');
    
    // TAB
    await page.keyboard.press('Tab');
    
    // CTRL + V
    await page.keyboard.press('Meta+V');

    await page.waitForTimeout(5000);



    
});