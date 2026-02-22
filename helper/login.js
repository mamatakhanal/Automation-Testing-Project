export async function studentLogin(page) {
  await page.goto("/login?tab=student");
  await page.fill("#email","teamadvisebridge@gmail.com");
  await page.fill("#password", "teamadvisebridge@gmail.com");
  await page.click("//button[normalize-space()='Log in as student']");
  await page.waitForURL("/student");
}
