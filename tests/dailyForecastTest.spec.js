const { test, expect } = require('@playwright/test');
test.describe('Daily forecast component tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080');
        // Wait for the component to load
        await page.waitForSelector('#daily-forecast-card');
    });

    test('Checking the visibility of daily forecast rows', async ({ page }) => {
        // Check if the daily forecast card is visible
        const dailyForecastCard = await page.locator('#daily-forecast-card');
        expect(dailyForecastCard).not.toBeNull();
        expect(await dailyForecastCard.isVisible()).toBe(true);

        // Check if individual forecast rows are visible
        const dailyForecastRows = await page.$$('.daily-forecast-column');
        expect(dailyForecastRows.length).toBeGreaterThanOrEqual(5);

        for (const row of dailyForecastRows) {
            expect(await row.isVisible()).toBe(true);
        }
    });

    test('Validating daily forecast content', async ({ page }) => {
        // Check if individual forecast rows are visible
        const dailyForecastRows = await page.$$('.daily-forecast-column');

        for (const [index, row] of dailyForecastRows.entries()) {
            const date = await row.$(`span#daily-forecast-date-${index}`);
            const icon = await page.locator(`#daily-forecast-icon-${index}`);
            const temperature = await row.$(`#daily-forecast-temperature-${index}`);

            // Validate the content
            expect(date).not.toBeNull();
            await expect(icon).toBeVisible();
            await icon.hover();
            await page.waitForSelector(`#daily-forecast-description-${index}`);
            expect(temperature).not.toBeNull();
        }
    });

    test('Ensuring skeleton loader is displayed during loading', async ({ page }) => {
        // Navigate to the page
        await page.goto('http://localhost:8080');

        // Check if the skeleton loader is visible
        const skeletonLoader = await page.$('#daily-forecast-skeleton-loader-1');
        expect(skeletonLoader).not.toBeNull();
        expect(await skeletonLoader.isVisible()).toBe(true);
    });
});
