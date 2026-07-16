from playwright.sync_api import sync_playwright
import time

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173/")
        time.sleep(2)
        
        # Get initial classes on html and computed background of body
        html_class_before = page.evaluate("document.documentElement.className")
        body_bg_before = page.evaluate("window.getComputedStyle(document.body).backgroundColor")
        print(f"Before click - html class: '{html_class_before}', body background-color: '{body_bg_before}'")
        
        # Click the toggle button
        print("Clicking theme toggle...")
        page.click("button[aria-label='Toggle theme']")
        time.sleep(1)
        
        html_class_after = page.evaluate("document.documentElement.className")
        body_bg_after = page.evaluate("window.getComputedStyle(document.body).backgroundColor")
        print(f"After click - html class: '{html_class_after}', body background-color: '{body_bg_after}'")
        
        browser.close()

if __name__ == '__main__':
    main()
