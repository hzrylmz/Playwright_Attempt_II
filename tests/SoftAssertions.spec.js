import { test,expect } from "@playwright/test";


test('Soft Assertions', async({page}) => {
    
    await page.goto('https://demo.nopcommerce.com/')

    await page.waitForTimeout(5000)


    // Hard Assertions
    /* Behavior: A hard assertion immediately stops the test execution if it fails and throws an error. 
    The following code does not execute once a hard assertion fails.*/

    await expect(page).toHaveTitle('nopCommerce demo store')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/')
    
    

    // Soft Assertions
    /*Behavior: A soft assertion allows the test to continue even if it fails. 
    Instead of throwing an error, it reports the failure but continues to execute the remaining code.*/ 

    await expect.soft(page).toHaveTitle('nopCommerce demo store')
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/')

});