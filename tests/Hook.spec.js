import { test, expect, beforeEach, afterEach, beforeAll, afterAll } from '@playwright/test';

// beforeEach hook
beforeEach(async () => {
    // Testten önce yapılacak işlemler
});

// afterEach hook
afterEach(async () => {
    // Testten sonra yapılacak işlemler
});

// beforeAll hook (Tüm testlerden önce bir kez çalışır)
beforeAll(async () => {
    // Tüm testlerden önce yapılacak işlemler
});

// afterAll hook (Tüm testlerden sonra bir kez çalışır)
afterAll(async () => {
    // Tüm testlerden sonra yapılacak işlemler
});

test('example test', async ({ page }) => {
    // Test senaryosu
});
