const { test, expect } = require('@playwright/test');

test.describe('Weather forecast overview tests', () => {
    test('to test the content of the current weather overview - valid input', async ({ page }) => {
        await page.goto('http://localhost:8080');
        const validCity = 'New York';

        // Example: Test searching for a city
        const searchInput = await page.locator('#search-weather-forecast-text-field');
        expect(searchInput).not.toBeNull();

        await searchInput.fill(validCity);
        await page.click('.search-weather-forecast-text-field .v-icon');
        await page.waitForTimeout(1500);
        // Wait for the weather data to load
        await page.waitForSelector('#weather-overview-image');

        // Expect current weather data to be visible
        await expect(page.locator('#weather-overview-city')).toBeVisible();
        await expect(page.locator('#weather-overview-description')).toBeVisible();
        await expect(page.locator('#weather-overview-image')).toBeVisible();

        const city = await page.textContent('#weather-overview-city');
        expect(city).not.toBeUndefined();

        // Test the current temperature
        const temperature = await page.textContent('#weather-overview-temperature');
        expect(temperature).not.toBeUndefined();

        // Assert the weather description
        const description = await page.textContent('#weather-overview-description');
        expect(description).not.toBeUndefined();
    });

    test('to test the content of the current weather overview - invalid input', async ({ page }) => {
        await page.goto('http://localhost:8080');
        const invalidCity = 'XXX';
        const defaultCity = 'Copenhagen';

        // Example: Test searching for a city
        const searchInput = await page.locator('#search-weather-forecast-text-field');
        expect(searchInput).not.toBeNull();

        await searchInput.fill(invalidCity);
        await page.click('.search-weather-forecast-text-field .v-icon');
        await page.waitForTimeout(1500);
        await page.waitForSelector('#weather-overview-image');

        // Expect the city equal to the default city
        const cityText = await page.textContent('#weather-overview-city');
        await expect(cityText.trim()).toEqual(defaultCity);
    });
});
