# AAMRA Foundation Website – Automation Testing with Selenium & Mocha


# Selenium WebDriver and Mocha Testing Setup

This guide walks you through setting up Selenium WebDriver and Mocha for testing web applications using Node.js.

---

## 1. Install Selenium WebDriver and Mocha

### Tools Overview

- **Selenium**: A web testing framework used for automating web browsers, commonly used for testing web applications.
- **Mocha**: A JavaScript test framework that runs on Node.js, designed for testing asynchronous code and often used in unit testing.

### Steps

#### Step 1: Create a Test Folder
Create a new folder for testing purposes. (e.g., create a folder named `test` inside the project directory)

#### Step 2: Initialize the Folder
Open the folder in the terminal and run the following command:
```bash
npm init
```
You may optionally fill in fields like description, git repository, etc. This command generates a `package.json` file upon confirmation.

#### Step 3: Install Dependencies

Install **Selenium WebDriver**:
```bash
npm install selenium-webdriver
```
Refer to [selenium-webdriver - npm](https://www.npmjs.com/package/selenium-webdriver) for documentation.

Install **Mocha**:
```bash
npm install mocha
```
Refer to [mocha - npm](https://www.npmjs.com/package/mocha) for documentation.

#### Step 4: Confirm Installation
Check the `package.json` file. If the dependencies `selenium-webdriver` and `mocha` are listed, the installation is successful.

---

## 2. Test Node.js Project

### Step 1: Start the Project

Open both backend and frontend folders in separate terminals.

- Backend terminal:
```bash
npm run start:dev
```
- Frontend terminal:
```bash
npm run dev
```

### Step 2: Identify Elements for Testing

- Open the project in the browser via localhost.
- Use **Inspect Element** (DevTools) to find IDs of input fields, buttons, and other actionable elements.

### Step 3: Write Test Code

- Write test cases targeting identified elements using Mocha and Selenium WebDriver.
- Save each test as a `.js` file in the `test` folder (e.g., `home.spec.js`).

### Step 4: Run Tests

Open the terminal in the test folder and run the tests using:
```bash
npx mocha filename
# or
mocha filename
```

Replace `filename` with the name of your test file (e.g., `home.spec.js`).

---

## Notes

- Mocha allows testing in different browsers.
- Testing is fast, flexible, and scalable.
- Unit testing approach: each page/function is tested separately.
- For complete testing, combine all test codes into one file and run it.
- Team collaboration is easier by dividing test cases across members.

---

Happy Testing!

