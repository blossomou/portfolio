import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('Portfolio Verification', () => {
  test('theme toggle - starts in light mode with white-ish background', async ({ page }) => {
    // Check sidebar has light background (not dark)
    const sidebar = page.locator('.col-span-12.p-4.pt-8');
    await expect(sidebar).toBeVisible();
    
    // Background should be light in default mode
    const bgColor = await sidebar.evaluate(el => getComputedStyle(el).backgroundColor);
    console.log('Sidebar bg color (light):', bgColor);
    // Light theme: rgb(249, 240, 249) or similar light value
    expect(parseInt(bgColor.split(',')[1])).toBeGreaterThan(150);
  });

  test('theme toggle - clicking switches to dark mode', async ({ page }) => {
    const themeToggle = page.locator('.border-primarycolor.rounded-xl');
    await expect(themeToggle).toBeVisible();
    
    // Click the theme toggle
    await themeToggle.click();
    await page.waitForTimeout(500);
    
    // Check sidebar has dark background now
    const sidebar = page.locator('.col-span-12.p-4.pt-8');
    const bgColorDark = await sidebar.evaluate(el => getComputedStyle(el).backgroundColor);
    console.log('Sidebar bg color (dark):', bgColorDark);
    // Dark theme: should be very dark
    expect(parseInt(bgColorDark.split(',')[1])).toBeLessThan(50);
  });

  test('theme toggle - clicking again switches back to light mode', async ({ page }) => {
    const themeToggle = page.locator('.border-primarycolor.rounded-xl');
    
    // Click twice: dark -> light
    await themeToggle.click();
    await page.waitForTimeout(300);
    await themeToggle.click();
    await page.waitForTimeout(500);
    
    const sidebar = page.locator('.col-span-12.p-4.pt-8');
    const bgColorBack = await sidebar.evaluate(el => getComputedStyle(el).backgroundColor);
    console.log('Sidebar bg color (back to light):', bgColorBack);
    expect(parseInt(bgColorBack.split(',')[1])).toBeGreaterThan(150);
  });

  test('resume page - bar animations are present and functional', async ({ page }) => {
    await page.goto('http://localhost:3000/resume');
    
    // Wait for bars to appear (they animate from width: 0)
    await page.waitForTimeout(1500);
    
    const bars = page.locator('.bg-gradient-to-r.from-primarycolor.to-secondarycolor');
    const count = await bars.count();
    console.log('Number of skill bars found:', count);
    expect(count).toBeGreaterThan(0);
    
    // Check that bars have visible width (not 0) - animation should have completed
    const firstBarWidth = await bars.first().evaluate(el => el.getBoundingClientRect().width);
    console.log('First bar width:', firstBarWidth);
    expect(firstBarWidth).toBeGreaterThan(50); // Should be at least partially visible
    
    // Check all bars are visible
    for (let i = 0; i < count; i++) {
      const isVisible = await bars.nth(i).isVisible();
      expect(isVisible).toBe(true);
    }
  });

  test('resume page - no inline width styles conflicting with framer-motion', async ({ page }) => {
    await page.goto('http://localhost:3000/resume');
    
    const bars = page.locator('.bg-gradient-to-r.from-primarycolor.to-secondarycolor');
    const count = await bars.count();
    
    for (let i = 0; i < count; i++) {
      const style = await bars.nth(i).getAttribute('style');
      console.log(`Bar ${i} inline styles:`, style);
      // Should NOT have an explicit width in inline styles (framer-motion controls it)
      expect(style?.includes('width')).toBe(false);
    }
  });

  test('no console errors on home page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(1000);
    
    console.log('Console errors:', errors);
    expect(errors.length).toBe(0);
  });

  test('no console errors on resume page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('http://localhost:3000/resume');
    await page.waitForTimeout(1500);
    
    console.log('Resume page console errors:', errors);
    expect(errors.length).toBe(0);
  });
});
