import {test, expect} from '@playwright/test';

test('Mouse Hover', async({page}) => {
    
        await page.goto('https://demo.opencart.com/');

        const desktops = page.locator("//a[.='Desktops']");
        const mac = page.locator("//a[.='Mac (1)']");

        await desktops.hover();
        await mac.hover();

        await page.pause();
});