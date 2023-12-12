const { test, expect } = require('@playwright/test');
test.describe('Hourly forecast component tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080');
        // Wait for the component to load
        await page.waitForSelector('#hourly-forecast-component');
    });

    test('should display hourly forecast when not loading', async ({ page }) => {
        const cardTitle = '3 HOUR FORECAST';
        // Check if the card is visible
        const hourlyForecastCard = await page.locator('#hourly-forecast-card');
        expect(hourlyForecastCard).not.toBeNull();

        // Check if the title is correct
        const title = await page.textContent('#hourly-forecast-card-title');
        expect(title.trim()).toBe(cardTitle);

        // Check if there are hourly forecast columns
        const hourlyForecastColumns = await page.$$('.hourly-forecast-column');
        expect(hourlyForecastColumns.length).toBeGreaterThan(0);

        // Check if the first hourly forecast column has the expected content
        const time = await page.textContent('#hourly-forecast-time-0');
        const icon = await page.locator('#hourly-forecast-icon-0');
        const temperature = await page.textContent('#hourly-forecast-temperature-0');

        expect(time).not.toBeNull();
        expect(icon).not.toBeNull();
        expect(temperature).not.toBeNull();
    });

    test('should display skeleton loader when loading', async ({ page }) => {
        // Set the loading state to true
        await page.evaluate(() => {
            window.$store.commit('setLoading', true);
        });

        // Check if the skeleton loader container is visible
        const skeletonLoaderContainer = await page.$('#hourly-forecast-skeleton-loader-container');
        expect(skeletonLoaderContainer).not.toBeNull();

        // Check if the correct number of skeleton loaders are present
        const skeletonLoaders = await page.$$('.hourly-forecast-skeleton-loader');
        const expectedSkeletonLoaderAmount = 6;
        expect(skeletonLoaders.length).toBe(expectedSkeletonLoaderAmount);
    });
});
