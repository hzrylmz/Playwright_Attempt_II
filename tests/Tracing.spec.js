import {test, expect} from '@playwright/test';

test('Tracing', async({page}) => {

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