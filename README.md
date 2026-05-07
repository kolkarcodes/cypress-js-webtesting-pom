# Cypress JavaScript Web Testing - Page Object Model

A JavaScript-based Cypress framework for E2E and UI web testing using the Page Object Model (POM) pattern.

## Project Overview

This project demonstrates best practices for web testing using:
- **Cypress** - Fast, reliable end-to-end testing framework
- **Page Object Model** - Maintains clean, maintainable test code by separating test logic from page interactions

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Project Structure

```
cypress/
├── e2e/
│   └── tests/           # Test specifications
│       └── login.cy.js  # Login test suite
├── pages/               # Page Object Model classes
│   └── LoginPage.js     # Login page interactions
├── fixtures/            # Test data
│   ├── example.json
│   └── users.json
├── config/
│   └── env.js           # Environment configuration
├── support/
│   ├── commands.js      # Custom commands
│   ├── e2e.js           # Global configuration
├── utils/               # Utility functions
└── screenshots/         # Test failure screenshots
```

## Running Tests

### Interactive Mode (Recommended for Development)
```bash
npx cypress open
```
Opens the Cypress UI where you can select and run tests interactively.

### Headless Mode (CI/CD)
```bash
npx cypress run
```
Runs all tests in the terminal without opening a browser.

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/tests/login.cy.js"
```

### Debug Mode
```bash
npx cypress run --debug
```
Runs tests with debug output and verbose logging.

### Headed Mode (See Browser During Test)
```bash
npx cypress run --headed
```

## Writing Tests with Page Object Model

### Example: Login Test

**Page Object (`LoginPage.js`):**
```javascript
class LoginPage {
  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    cy.get('#username').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  verifyLoginSuccess() {
    cy.get('.dashboard').should('be.visible');
  }
}

export default new LoginPage();
```

**Test Specification (`login.cy.js`):**
```javascript
import LoginPage from '../../pages/LoginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login with valid credentials', () => {
    LoginPage.enterUsername('user@example.com');
    LoginPage.enterPassword('password123');
    LoginPage.clickLogin();
    LoginPage.verifyLoginSuccess();
  });
});
```

## Configuration

- **Base URL**: Configured in `cypress.config.js`
- **Environment Variables**: Set in `cypress/config/env.js`
- **Custom Commands**: Add to `cypress/support/commands.js`

## Features

- ✅ Page Object Model pattern for maintainability
- ✅ Organized test structure
- ✅ Test fixtures and data management
- ✅ Reusable custom commands
- ✅ Screenshot capture on failures
- ✅ Cross-browser support

## Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Page Object Model Pattern](https://docs.cypress.io/guides/getting-started/testing-your-app#Organizing-tests)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)

## License

ISC
