import { test, expect } from "@playwright/test";

test.describe("Chat Application", () => {
  test("should send a message and receive a response", async ({ page }) => {
    // Navigate to the chat page
    await page.goto("/");

    // Type a message into the input bar
    await page.fill(
      'input[placeholder="Type your message..."]',
      "Hello, how are you?"
    );

    // Click the send button
    await page.click('button[type="submit"]');

    // Wait for any bot response (just check if there's content)
    const botResponse = page.locator(".chat-bubble.bot");
    await expect(botResponse).toBeVisible();
    await expect(botResponse).not.toBeEmpty();
  });
});
