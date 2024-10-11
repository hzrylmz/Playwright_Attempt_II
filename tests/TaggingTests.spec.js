import {test, expect} from '@playwright/test';


test('', {tag:'@smoke'},async({page}) => {
    
});

test.describe('group', {
    tag: '@report',
  }, () => {
    test('test report header', async ({ page }) => {
      // ...
    });
  
    test('test full report', {
      tag: ['@slow', '@vrt'],
    }, async ({ page }) => {
      // ...
    });
  });

  //  npx playwright test --grep @fast

  //  npx playwright test --grep "@fast|@slow"