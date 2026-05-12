# Cypress JS Web Testing Framework

Enterprise-level automation framework built using Cypress, JavaScript, and Page Object Model (POM).

---

# 🚀 Tech Stack

- Cypress
- JavaScript
- Page Object Model (POM)
- API Testing
- Accessibility Testing
- AJV Schema Validation
- GitHub Actions CI/CD

---

# 📁 Project Structure

```text
cypress/
│
├── e2e/
│   ├── tests/              # UI Test Scripts
│   ├── api/                # API Test Scripts
│   └── accessibility/      # Accessibility Test Scripts
│
├── fixtures/               # Test Data
├── pages/                  # Page Objects
├── schemas/                # JSON Schemas
├── screenshots/            # Failure Screenshots
├── videos/                 # Execution Videos
│
.github/
└── workflows/              # GitHub Actions CI/CD Pipeline
```

---

# 🚀 Features

✅ UI Automation Testing using Cypress  
✅ API Automation Testing using cy.request()  
✅ Accessibility Testing using cypress-axe & axe-core  
✅ Page Object Model (POM) Framework  
✅ Generic Reusable Methods  
✅ Schema Validation using AJV  
✅ Fixture-Based Test Data Management  
✅ GitHub Actions CI/CD Integration  
✅ Screenshots & Video Capture on Failure  
✅ Cross-browser Execution Support  
✅ Headless & Headed Execution Support  

---

# 🚀 Supported Testing Types

| Testing Type | Supported |
|---|---|
| UI Testing | ✅ |
| API Testing | ✅ |
| Accessibility Testing | ✅ |
| Schema Validation | ✅ |
| CI/CD Pipeline | ✅ |

---

# 🚀 Installation

Clone repository:

```bash
git clone https://github.com/kolkarcodes/cypress-js-webtesting-pom.git
```

Navigate to project:

```bash
cd cypress-js-webtesting-pom
```

Install dependencies:

```bash
npm install
```

---

# 🚀 Running Tests

## Open Cypress Test Runner

```bash
npx cypress open
```

---

## Run All Tests Headless

```bash
npx cypress run
```

---

## Run UI Tests

```bash
npx cypress run --spec cypress/e2e/tests/**/*.cy.js
```

---

## Run API Tests

```bash
npx cypress run --spec cypress/e2e/apiTesting/**/*.cy.js
```

---

## Run Accessibility Tests

```bash
npx cypress run --spec cypress/e2e/AccessibilityTesting/**/*.cy.js
```

---

# 🚀 UI Testing

Framework supports UI automation testing using Cypress with:

- Page Object Model (POM)
- Reusable generic methods
- Fixture-driven test data
- Assertions and validations

Example:

```javascript
LoginPage.enterEmailId('customer@practicesoftwaretesting.com');
LoginPage.enterPassword('welcome01');
LoginPage.clickLoginButton();
```

---

# 🚀 API Testing

Framework supports API automation testing using Cypress `cy.request()`.

Implemented APIs include:

- Login API
- Products API
- Categories API
- Contact API
- Schema Validation APIs

Example:

```javascript
cy.request({
  method: 'GET',
  url: 'https://api.practicesoftwaretesting.com/products'
})
```

---

# 🚀 Accessibility Testing

Accessibility testing implemented using:

- cypress-axe
- axe-core

Example:

```javascript
cy.injectAxe();

cy.checkA11y();
```

Framework validates accessibility violations automatically during execution.

---

# 🚀 Schema Validation

Schema validation implemented using AJV.

Example:

```javascript
const valid = validate(response.body);

expect(valid).to.be.true;
```

---

# 🚀 CI/CD Pipeline

GitHub Actions pipeline automatically:

✅ Installs dependencies  
✅ Runs UI tests  
✅ Runs API tests  
✅ Runs Accessibility tests  
✅ Uploads screenshots/videos  
✅ Executes on every push & pull request  

Workflow location:

```text
.github/workflows/main.yml
```

---

# 🚀 GitHub Actions

Pipeline includes:

- UI Tests
- API Tests
- Accessibility Tests

---

# 🚀 Reporting

Framework captures:

- Screenshots on failure
- Videos for execution

Folders:

```text
cypress/screenshots
cypress/videos
```

---

# 🚀 Future Enhancements

- Docker Integration
- Parallel Execution
- Allure Reporting
- Cypress Dashboard
- Multi-browser Execution
- Environment Configurations
- Performance Testing

---

# 👨‍💻 Author

Kolkarcodes

GitHub:
https://github.com/kolkarcodes

---
