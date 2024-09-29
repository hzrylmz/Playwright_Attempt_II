const { test, expect } = require('@playwright/test');


test('Locators', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // it can be used both
    // await page.locator('id=login2').click();
    // await page.click('id=login2');
    await page.locator("[name='username']").fill('Admin')
    await page.locator("input[name='password']").fill('admin123')
    await page.locator("//button[text()=' Login ']").click()

    const logginedUser = page.getByRole('banner').getByRole('img', { name: 'profile picture' })
    expect(logginedUser).toBeVisible()
    
    

    await logginedUser.click()

    await page.locator("//a[text()='Logout']").click()

    await page.close()
});