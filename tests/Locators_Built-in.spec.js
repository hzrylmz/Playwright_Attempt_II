import {test, expect} from '@playwright/test';

test('Locators_Built-in', async ({page}) => {


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name: 'LOGIN'}).click();

    const title = await page.title()
    expect(title).toBe('OrangeHRM')

    const logginedUser = page.getByRole('banner').getByRole('img', { name: 'profile picture' })
    expect(logginedUser).toBeVisible()

    await logginedUser.click()

    await page.locator("//a[text()='Logout']").click()

    await page.pause();

    await page.close()




});