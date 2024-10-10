import {test, expect} from '@playwright/test';

test('Upload Single File', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/upload')
    
    await page.waitForSelector("input[id='file-submit']")

    await page.locator("input[id='file-upload']").setInputFiles('uploadFile.png')

    await page.click("input[id='file-submit']")

    await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText('File Uploaded!')
    

    await page.waitForTimeout(5000)
});


