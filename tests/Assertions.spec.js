import { test, expect } from '@playwright/test';

test('AssertionsTest', async({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    // 1) expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')


    // 2) expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3) expect(locator).toBeVisible()
    const logoElement = page.locator("[alt='nopCommerce demo store']")
    await expect(logoElement).toBeVisible()

    // 4.1) expect(locator).toBeEnabled()
    const searchBox = page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    // 4.2) expect(locator).toBeDisabled()

    // 5) expect(locator).toBeChecked() --- radio/checkbox is checked
    //radioBtn
    const maleRadioButton = page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    // checkbox 
    const newsletterCheckbox = page.locator("input[id='Newsletter']")
    await expect(newsletterCheckbox).toBeChecked()

    // expect(locator).toHaveAttribute()
    const registerButton = page.locator("#register-button")
    await expect(registerButton).toHaveAttribute('type', 'submit')

    
    const registerText = page.locator("h1")  // Register
    
    // expect(locator).toHaveText()
    await expect(registerText).toHaveText('Register')

    // expect(locator).toContainText()
    await expect(registerText).toContainText('Regis')

    // expect(locator).toHaveValue() --- Input has a value
    const emailTextBox = page.locator('#Email')
    await emailTextBox.fill('dusty@demo.com')
    await expect(emailTextBox).toHaveValue('dusty@demo.com')


    //expect(locator).toHaveCount()  -- List of elements has given length

    const lengthOfMonths = page.locator("select[name='DateOfBirthMonth'] option")
    await expect(lengthOfMonths).toHaveCount(13)
    






    
});