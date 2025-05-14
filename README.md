# AAMRA Foundation Website – Automation Testing with Selenium & Mocha

## 📋 Overview

This repository contains the **automation testing suite** for the AAMRA Foundation website, built using **Selenium WebDriver** and **Mocha**. It demonstrates how to:

- Install and configure Selenium WebDriver & Mocha in a Node.js project  
- Write and execute browser-based automation tests  
- Validate core functionalities: signup, login, password recovery, subscription, profile view, and logout  

## 🎯 Purpose

The goal is to ensure the AAMRA Foundation website’s critical user flows work as intended by automating end‑to‑end tests. This provides:

- **Fast feedback** on regressions  
- **Repeatable** test execution across environments  
- **Documentation** of expected behavior for key features  

## 🔧 Prerequisites

- **Node.js** ≥ 14.x  
- **npm** (bundled with Node.js)  
- A running instance of the AAMRA Foundation website (local or staging)  
- Chrome (or another browser; adjust WebDriver accordingly)  

## ⚙️ Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-org/amra-foundation-tests.git
   cd amra-foundation-tests
   ```

2. **Initialize the test folder** (if not already)  
   ```bash
   mkdir test
   cd test
   npm init -y
   ```

3. **Install dependencies**  
   ```bash
   npm install selenium-webdriver mocha
   ```

4. **Verify** that `package.json` lists both `selenium-webdriver` and `mocha` under `dependencies`.

## 🚀 Running the Tests

From the project root (where `package.json` lives):

```bash
# Run all tests in the 'test' folder
npx mocha test/**/*.spec.js
```

You can also run individual test files:

```bash
npx mocha test/home.spec.js
npx mocha test/signup.spec.js
```

## 📁 Test Structure

```
/test
  ├─ home.spec.js           # Home‑page load and UI elements
  ├─ signup.spec.js         # Signup positive & negative flows
  ├─ login.spec.js          # Login positive & negative flows
  ├─ forget-password.spec.js# Password recovery success & failure
  ├─ subscribe.spec.js      # Email subscription success & failure
  ├─ profile.spec.js        # Profile viewing success & failure
  └─ logout.spec.js         # Logout functionality
```

Each `*.spec.js` file follows this pattern:

1. **Test metadata** (ID, author, date, priority)  
2. **Preconditions** (e.g., “user not yet registered”)  
3. **Test steps** (navigate, input data, click actions)  
4. **Expected results**  
5. **Pass/Fail assertion**

## 📊 Test Coverage

| Module            | Scenarios Tested                      | Status       |
|-------------------|---------------------------------------|--------------|
| Home Page         | Page load & element presence          | ✅ Pass      |
| Signup            | Valid signup, invalid age, duplicate  | ✅ / ❌ Mixed |
| Login             | Correct/incorrect credentials         | ✅ / ❌ Mixed |
| Forget Password   | Registered/unregistered email         | ✅ / ❌ Mixed |
| Subscribe         | New/existing subscriber email         | ✅ / ❌ Mixed |
| Profile           | View profile post-login               | ✅ / ❌ Mixed |
| Logout            | Session termination                   | ✅ Pass      |

> “Mixed” indicates both passing and failing scenarios were automated to verify validation flows.

## 🤝 Acknowledgement

This test suite leverages **Selenium WebDriver** for browser automation and **Mocha** for test orchestration.  
> **Note:** Misuse for malicious activities (e.g., DDoS) is strictly prohibited and illegal.  
