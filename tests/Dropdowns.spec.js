import {test, expect} from '@playwright/test';
test.skip('Dropdowns', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Dropdown menüsünden 'India' seçeneğini seç
  await page.locator("select[id='country']").selectOption({ label: 'India' });

  // Seçilen seçeneği doğrula
  const selectedOption = await page.locator("select[id='country']").inputValue();
  expect(selectedOption).toBe('india');  // Value attribute of 'India' option is 'india'


  await page.locator("select[id='country']").selectOption({ value: 'usa' });
  await page.locator("select[id='country']").selectOption({ index: 2 });

  await page.selectOption("select[id='country']", { label: 'Avatar' });
});


test.skip('Dropdowns Assertions', async({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    // 1) Check the number of options in the dropdown
    const options_Count = page.locator("select[id='country'] option")
    await expect(options_Count).toHaveCount(10)

    const content = await page.locator("select[id='country']").textContent()
    expect(content).toContain('India')
    
});

test('Using Loop', async ({page}) => {
    const options = await page.$$("select[id='country']")

    for(const option of options){
        console.log(await option.textContent())
    }
});
