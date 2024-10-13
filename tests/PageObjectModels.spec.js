import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage; // LoginPage nesnesini globalde tanımlıyoruz

test.describe('Login Tests', () => {

    // Her testten önce çalışacak
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);  // LoginPage nesnesi burada oluşturuluyor
        await loginPage.gotoLoginPage();
    });

    test('should login with valid credentials', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        
        // Assertion
        const title = await loginPage.page.title();  // loginPage'den page'e erişim
        expect(title).toBe('Swag Labs');
    });

    test('should fail login with invalid credentials', async () => {
        await loginPage.login('invalid_user', 'wrong_password');
        
        // Assertion for login failure
        const errorMessage = await loginPage.page.locator('[data-test="error"]').textContent();
        expect(errorMessage).toContain('Username and password do not match');
    });
});
