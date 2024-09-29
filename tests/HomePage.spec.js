import { test, expect } from '@playwright/test';


test('HomePage Control', async({page}) => {

    await page.goto('https://www.demoblaze.com/');

    const title = await page.title(); // Promise'i await ediyoruz
    expect(title).toBe('STORE');

    //------------

    const pageUrl = page.url();
    expect(pageUrl).toBe('https://www.demoblaze.com/');

    await page.close();
    
});