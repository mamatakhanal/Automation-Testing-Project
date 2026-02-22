import { expect, test } from "@playwright/test";
import { agent_login, agent_profile } from "../../datas/agent_data.js";

test("Agent Profile", async ({ page }) => {
    //Login
    await page.goto("/agent/login");
    await page.locator("#data\\.email").fill(agent_login.email);
    await page.locator("#data\\.password").fill(agent_login.password);
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForURL("/agent");

    // Profile
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL("agent/agent-profile");
    await page.waitForTimeout(3000);
    await page.locator("#data\\.name").fill(agent_profile.name);
    await page.locator("#data\\.password").fill(agent_profile.password);
    await page.locator("#data\\.email").fill(agent_profile.email);
    await page.locator("#data\\.mobile").fill(agent_profile.mobilenumber);
    await page.locator("#data\\.address").fill(agent_profile.address);
    await page.locator("#data\\.license_number").fill(agent_profile.licensenumber);
    await page.getByRole('button', { name: 'Update' }).click();
    const successMessage = page.locator('h3.fi-no-notification-title', { hasText: 'Profile Updated Successfully' });
    await successMessage.waitFor({ state: 'visible' });
});