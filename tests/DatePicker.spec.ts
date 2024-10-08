import {test, expect} from '@playwright/test';

test('Date Picker', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('#datepicker','06/30/2024');

    //datepicker

    const year: string = '2024';
    const month: string = 'June';
    const day: string = '30';

    await page.click('#datepicker'); //opens the date picker
    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear === year && currentMonth === month) {
            break;
        } else {
            await page.click('.ui-datepicker-next');
        } 
    }
    const dates = await page.$$("//a[@class='ui-state-default']");

    for (const date of dates) {
       
        if (await date.textContent() === day) {
            await date.click();
            break;
            
        }
    }
    
});