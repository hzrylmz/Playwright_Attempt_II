import { test, expect } from '@playwright/test';

test('Locating Multiple Elements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Sayfa tam yüklenene kadar bekle
    await page.waitForSelector("//div[@class='col-lg-4 col-md-6 mb-4']//div//div//h4");

    // XPath ile ürün başlıklarını buluyoruz
    const products_titles = await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']//div//div//h4");

    // Eğer herhangi bir başlık yoksa uyarı ver
    if (products_titles.length === 0) {
        console.log('No product titles found!');
        return;
    }

    for (const product_title of products_titles) {

        // textContent null olabilir, bu yüzden null kontrolü ekliyoruz
        const titleText = await product_title.textContent();

        if (titleText) {
            console.log(titleText.trim());  // Boşlukları temizleyerek başlığı yazdırıyoruz
        } else {
            console.log('Empty title found!');
        }
    }
});
