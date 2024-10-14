import {test, expect,chromium} from '@playwright/test';

test('Multiple Windows ', async() => {

    const browser = await chromium.launch(); //Chromium tarayıcısı başlatılır ve browser değişkenine atanır.
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    

    const allPages = context.pages(); // returns all the pages in the context   
    //context.pages() ile bu bağlamda açılan tüm sayfalar (sekme veya pencere) bir dizi halinde döndürülür ve allPages değişkenine atanır.
    
    await page1.goto('https://parabank.parasoft.com/parabank/register.htm');

    await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
});


/*

Özetle:

Playwright, her sayfa nesnesine bağlı işlemleri doğru sekmede otomatik olarak gerçekleştirir.
Sekmeler arasında manuel geçiş yapmanıza gerek yoktur. Hangi sekmede işlem yapmak istiyorsanız, 
o sayfa (page) nesnesi üzerinden çalışabilirsiniz.

*/