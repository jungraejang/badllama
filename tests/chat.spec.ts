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

    // Wait for the user's message to appear in the chat
    await expect(page.locator(".chat-bubble.user")).toHaveText(
      "Hello, how are you?"
    );

    // Wait for the bot's response to appear in the chat
    await expect(page.locator(".chat-bubble.bot")).toHaveText(
      /I'm an AI chatbot/
    );
  });
});
