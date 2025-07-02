# React with TypeScript – Interview Q&A

---

## 1. Can you walk us through your career journey and current role?

I am a core UI Developer, and my area of expertise is building .com websites using HTML5, CSS3, JavaScript, React, Angular, and Redux.

- **Current Role**: United Airlines – React Migration Team  
  Converted legacy .NET applications to React 3.0. Worked on security features like Forgot Password, Forgot MileagePlus, and dashboard changes.

- **Past Experience**:
  - **Visa (Accelerator Team)**: Built internal portals for banks like Wells Fargo, Bank of America, and Chase.
  - **Capital Group**: Built Highcharts-based data visualizations in React and integrated with AEM (Davis App); worked on Creative Workbench – a writing tool.
  - **Cerner Corporation**: Medical examination forms.
  - **Office Depot**: Black Friday reporting.
  - **Satinos**: Schoomin website – school attendance management for Vignan schools.

---

## 2. What is your current project?

At United Airlines, I’m working on:

- **Security Features**: Forgot Password, Forgot MileagePlus, Sign-In, Security Questions, KTN (Known Traveler Number), Recent Activity, United Club Pass.
- **New Initiatives**: Miles-Pooling, TSA Precheck, Under18 management, Dashboard updates, and Accessibility compliance (WCAG 2.0).
- **Tech Stack**: React, Redux-Saga (for async handling), Google Analytics, Quantum Metrics.

---

## 3. What problems did the legacy system have, and how did your team address them?

### Challenges in Legacy (.NET) System:

- **Monolithic Architecture**: Difficult to scale and maintain.
- **Poor Accessibility & UX**: Did not meet WCAG 2.0 standards.
- **Outdated Stack**: Slower performance and poor responsiveness.
- **Code Duplication**: Limited component reusability.

### Solutions:

- **React Migration**: Converted to React + Redux-Saga SPA.
- **Accessibility Compliance**: Semantic HTML, ARIA, keyboard support.
- **Performance Boost**: Used Webpack, lazy loading, analytics.
- **Code Maintainability**: Modular components, CI/CD with GitHub, TeamCity.
- **Release Management**: Managed multiple environments (dev15, qa9, preprod, prod).

---

## 4. Can you describe your frontend architecture and how you designed it?

At United Airlines, we designed a modern, modular frontend using:

### Key Elements:

1. **Component-Based Architecture**  
   Built reusable atomic components using React.

2. **State Management**  
   Used Redux for global state, Redux-Saga for async flows.

3. **Folder Structure**

   ```bash
   /src
     /features
       /SignIn
       /ForgotPassword
       /MyAccount
     /components
     /redux
     /sagas
     /utils
     /constants

   ```

### 4. Accessibility-First Design

Accessibility was a major focus. We implemented **WCAG 2.0-compliant UI** using semantic HTML, ARIA roles, and keyboard navigability from the beginning of the component design. All components were tested for screen-reader compatibility and contrast ratios.

---

### 5. UI/UX Consistency

We collaborated with UX designers using tools like **Zeplin** and **Figma**. We created a custom **UI library built on Material-UI** for consistent look and feel across all modules. This included standardized themes, spacing, and typography.

---

### 6. API Integration Layer

We had a **central API service layer** to handle XAPI and RESTful API requests using Axios. Each feature module used this shared service to maintain **DRY (Don’t Repeat Yourself)** principles.

---

### 7. Analytics and Monitoring

To monitor performance and usage, we integrated **Google Analytics** and **Quantum Metrics** at the component and route levels. This helped us track user journeys and optimize UX based on real-time feedback.

---

### 8. CI/CD and Environment Management

We used **GitHub**, **TeamCity**, and **Confluence** for source control, automation, and documentation. The architecture supported multiple environments (dev15, dev31, QA, preprod, prodperf, production), and we managed upstream merges and releases carefully.

---

### ✅ Result:

This architecture improved performance, ensured high accessibility compliance, and streamlined development. It also enabled parallel development across teams, making releases more predictable and robust.

---

## 5. How do you structure your codebase in large-scale React applications?

In large-scale React apps, I follow a **feature-based folder structure** to promote modularity and scalability.

- Each feature (e.g., `SignIn`, `MyAccount`) has its own folder with components, Redux slice, saga, styles, and tests.
- Shared logic (UI components, utilities, APIs) goes into `common/` or `shared/` folders.

This keeps the app organized, supports parallel development, and simplifies onboarding.

---

## 6. What is your approach to creating reusable components and UI libraries?

- I follow a **component-first design** approach using **Atomic Design principles**.
- Components are **presentational**, customizable via **props**, and decoupled from logic.
- Shared styles are managed using a **custom UI library** (often with Material-UI, themes, and design tokens).
- All components are **well-documented** and versioned for reuse across multiple projects.

---

## 7. How are you using React and TypeScript together in this project?

_(Your custom response here.)_

---

## 8. How are you managing state across complex features?

_(Your custom response here.)_

---

## 9. Can you explain how you're using Redux Toolkit and Reselect in your project?

_(Your custom response here.)_

---

## 10. How are you handling real-time updates in the dashboard?

_(Your custom response here.)_

---

## 11. What role does RxJS play in your frontend architecture?

_(Your custom response here.)_

---

## 12. How are REST APIs integrated in your application?

_(Your custom response here.)_

---

## 13. Can you explain your use of Axios and interceptors for secure communication?

_(Your custom response here.)_

---

## 14. What are the advantages of using TypeScript in large-scale projects?

- Type safety
- Better tooling support (IntelliSense, refactoring)
- Easier to maintain and scale
- Prevents common runtime errors

---

## 15. Does TypeScript validate runtime API responses?

No, TypeScript performs **compile-time** checks only. For runtime validation, external libraries must be used.

---

## 16. What libraries or techniques do you use for runtime validation?

- `zod`
- `io-ts`
- `yup`
- Manual validation logic when necessary

---

## 17. What is Type Casting?

Type casting in TypeScript explicitly tells the compiler to treat a value as a specific type.  
Useful when TypeScript cannot infer the type — e.g.:

```ts
(ref.current as HTMLInputElement).focus();
```

## 18. What are Union Types?

Union types allow a variable to hold more than one type.

**Example:**

```ts
let value: string | number;
```

## 19. What is a Tuple?

A **tuple** is a fixed-length array where each element has a specific type.

### Example:

```ts
let user: [string, number] = ['John', 30];

## 20\. Difference Between Interface vs Type

Both `interface` and `type` are used to define custom types in TypeScript, but they have different strengths:

### Interface:

* *   Best suited for **object shapes**
*
* *   Supports **extension** (`extends`)
*
* *   Allows **declaration merging**
*

### Type:

* *   More **flexible** than interface
*
* *   Can represent **primitives**, **unions**, **tuples**, and **intersections**
*

### Example:

ts

CopyEdit

`type A = string | number; // Not possible with interface`

Use `interface` for modeling objects and `type` when you need more flexibility with data structures.

* * *

## 21\. What is `tsconfig.json`?

The `tsconfig.json` file is the configuration file for a TypeScript project. It tells the TypeScript compiler how to compile the code.

### Common Fields:

* *   `target`: Sets the JavaScript version output (e.g., `ES6`)
*
* *   `module`: Defines module system (e.g., `CommonJS`, `ESNext`)
*
* *   `strict`: Enables strict type-checking options
*
* *   `jsx`: Enables support for JSX (for React projects)
*

This file ensures consistent compiler behavior across development teams and environments.
```
