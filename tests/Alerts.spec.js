import {test, expect} from '@playwright/test';

test('Alert with OK', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //We need to write Windows dioalog Handler code

    //Enabling Dialog Window Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.click("[onclick='myFunctionAlert()']")
 
    
});

test('Confirmation Dialog - Alert with OK and Cancel', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Press a button!'); 
        console.log(dialog.message());
        await dialog.accept();   // Close by using OK button
        await dialog.dismiss();  // Close by using Cancel button
    });

    await page.click("[onclick='myFunctionConfirm()']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
});


test('Prompt Dialog', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name:'); 
        expect(dialog.defaultValue()).toBe('Harry Potter');
        await dialog.accept('Hello World');

    });

    await page.click("[onclick='myFunctionPrompt()']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Hello World! How are you today?');
    
});