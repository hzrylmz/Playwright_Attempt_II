import{test, expect} from '@playwright/test';


test.describe('Grouping Test', () => {
    test('Test1', async ({page}) => {
        await page.goto('https://www.google.com/');
        const title = await page.title();
        expect(title).toBe('Google');
    });

    test('Test2', async ({page}) => {
        await page.goto('https://www.bing.com/');
        const title = await page.title();
        expect(title).toBe('Bing');
    });
});

test.describe('Grouping Test2', () => {

    
    test('Test3', async ({page}) => {
        await page.goto('https://www.google.com/');
        const title = await page.title();
        expect(title).toBe('Google');
    });

    test('Test4', async ({page}) => {
        await page.goto('https://www.bing.com/');
        const title = await page.title();
        expect(title).toBe('Bing');
    });

})
