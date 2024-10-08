import {test,expect} from '@playwright/test';


test('CheckboxesTest', async({page}) => {

    await page.goto('https://automationpractice.qualitytestinghub.com/checkboxes/')

    //Single checkbox --- İkisi de aynı işi yapar
    //await page.locator('input[type="checkbox"]').check()
    await page.check("input[id='blackboxtesting']")
    await expect(page.locator("input[id='blackboxtesting']")).toBeChecked()
    await expect(page.locator("input[id='blackboxtesting']")).toBeChecked();

    //Multiple checkboxes
    /*
    async function checkCheckboxByIndex(index) {
        const checkboxes = page.locator("input[type='checkbox']");
        await checkboxes.nth(index).check();
      }
        */

      async function checkCheckboxByIndex(index) {
        const checkboxes = page.locator("input[type='checkbox']");
        await checkboxes.nth(index).check();
      }

      async function unCheckCheckboxByIndex(index) {
        const checkboxes = page.locator("input[type='checkbox']");
        await checkboxes.nth(index).uncheck();
      }

    await checkCheckboxByIndex(1);
    await expect(page.locator("input[id='whiteboxtesting']")).toBeChecked()

    await checkCheckboxByIndex(2);
    await unCheckCheckboxByIndex(2);
    await expect(page.locator("input[id='greyboxtesting']")).not.toBeChecked()


      
      








})