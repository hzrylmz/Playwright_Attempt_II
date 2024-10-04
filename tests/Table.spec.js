import {test,expect} from '@playwright/test';
import { console } from 'inspector';


test('Handling Table', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable')


    // 1) total number of rows & columns

    const columns = await table.locator('thead tr th').count();
    console.log('Total number of columns: ' + columns);
    expect(columns).toBe(4);


    const rows = await table.locator('tbody tr').count();
    console.log('Total number of rows: ' + rows);
    expect(rows).toBe(5);

    // 2) Select checkbox for product 4
 
    const matchedRow = page.locator('tbody tr').filter({
        hasText: 'Smartwatch' 
    });

    await matchedRow.locator('input[type="checkbox"]').check();

    // 3) Select multiple products by re-using  function

    




    
});