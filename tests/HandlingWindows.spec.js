import {test, expect, chromium} from '@playwright/test';
import exp from 'constants';

test.skip('Handling Pages', async () => {

    const browser = await chromium.launch(); //Chromium tarayıcısı başlatılır ve browser değişkenine atanır.
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    

    const allPages = context.pages(); // returns all the pages in the context   
    //context.pages() ile bu bağlamda açılan tüm sayfalar (sekme veya pencere) bir dizi halinde döndürülür ve allPages değişkenine atanır.
    console.log(context.pages().length); // 2     

    await page1.goto('https://www.google.com');
    expect(page1.url()).toBe('https://www.google.com/');
    expect(page1.title()).toBe('Google');


    await page2.goto('https://www.bing.com');
    expect(page2.url()).toBe('https://www.bing.com/');
    expect(page2.title()).toBe('Bing');


})


test('Handling Multiple Pages/Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://www.google.com');
    expect(page1.url()).toBe('https://www.google.com/');
    const pagePromise = context.waitForEvent('page'); //page eventini bekler. Yeni bir sayfa açıldığında bu event tetiklenir.
    await page1.locator('ddd').click()

    const newPage =  await pagePromise
    


})
