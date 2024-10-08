import { test, expect } from '@playwright/test';

test('InputBox Handlings', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(await page.locator('#name').toBeVisible())
    await expect(await page.locator('#name').toBeEmpty())
    expect(await page.locator('#name').isEditable())

    await page.locator('#name').fill('Dusty')
    await page.fill('#email', 'dusty@moh.com')

    await page.waitForTimeout(3000)





});