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

## Q1. 1st Resume – Roles at United Airlines, Visa, Capital Group

I am a core UI Developer with 10+ years of experience building .com websites using HTML5, CSS3, JavaScript, React.js, and Redux.

### United Airlines

- Worked on the **React migration team**, converting legacy .NET pages to React on **united.com**.
- Used **ATMOS (in-house component library)** across projects.
- Focused on account and security-related features:
  - Forgot password, security questions, sign-in, miles pooling, dashboard updates, KTN (Known Traveler Number).
- Implemented **accessibility features** following WCAG guidelines.
- Used **Redux-Saga** to handle asynchronous actions like API calls and data fetching.
- Key features: **Miles-Pooling**, TSA PreCheck, Under18 support.

### Visa Inc.

- Worked with the **Accelerator team** on **MBDA module remediation**:
  - Application Management, Account Management, Portfolio Management, Analytics, Recurring Billing, Virtual Terminal.
- Supported major banks like **Wells Fargo** and **Bank of America**.

### Capital Group

- Worked on the **DAVIS Project** for data visualization using **Highcharts + React**, integrated into **AEM**.
- Built **Creative Workbench**, a writing tool used to publish articles.

### Other Experience

- **Cerner Corporation** – Medical exam forms.
- **Office Depot** – Black Friday reporting dashboards.
- **Satinos Technologies** – Tax portal and school website for **Vignan Schools**.

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

# Using React and TypeScript Together in the Project

In this project, React and TypeScript are tightly integrated to build a modular, scalable, and type-safe frontend application. TypeScript enhances React development by providing static typing, which helps catch errors early during development and improves code maintainability.

## Key Aspects:

- **Component Development:**  
  React components are written as TypeScript functional components, with explicit typing for props and state to ensure correctness and improve developer experience with better autocompletion and documentation.

- **State Management:**  
  We leverage React hooks (like `useState`, `useReducer`) along with Zustand for global state management, all typed with TypeScript interfaces and types to maintain consistency across the app.

- **GraphQL Integration:**  
  Apollo Client is used for data fetching, and we use generated TypeScript types from GraphQL schemas to ensure type-safe queries and mutations.

- **Tooling & Best Practices:**  
  Using TypeScript with React allows us to apply strict linting rules, enhance refactoring safety, and implement robust testing with tools like Vitest and React Testing Library.

This combination results in a more reliable, maintainable codebase and a smoother collaboration experience across the team.

## 8. How are you managing state across complex features?

## Managing State Across Complex Features

In complex applications, I manage state using a layered approach depending on the scope and complexity of the feature.

- For **local component state**, I use `useState` or `useReducer`, especially when dealing with isolated logic or form handling.

- For **shared state across multiple components**, I prefer using **Redux Toolkit** along with **RTK Query** for server state. It helps enforce a single source of truth, supports middleware for logging or persistence, and makes debugging predictable. I also use **Reselect** for memoized selectors to improve performance and avoid unnecessary re-renders.

- When the features are **reactive or involve streaming data**, I use **RxJS** to handle observables, enabling clean handling of async flows and complex side effects.

- I ensure that all state logic is **colocated or abstracted into custom hooks** (e.g., `useFeatureState`), so it's easier to reuse and test.

- To avoid **prop drilling** and improve **scalability**, I use **React Context** for things like theming, user sessions, or feature flags — limited to low-frequency updates.

## 9. Can you explain how you're using Redux Toolkit and Reselect in your project?

# Using Redux Toolkit and Reselect in the Project

In our project, **Redux Toolkit** and **Reselect** are used together to efficiently manage and optimize application state:

- **Redux Toolkit:**  
  We use Redux Toolkit to simplify Redux setup and reduce boilerplate. It provides powerful utilities like `createSlice` for defining reducers and actions together, and `createAsyncThunk` for handling asynchronous logic such as API calls. This results in cleaner, more maintainable code with standardized patterns.

- **State Management:**  
  Redux Toolkit manages the global application state that needs to be shared across multiple components or features, especially complex or deeply nested data structures.

- **Reselect:**  
  Reselect is used to create memoized selectors that efficiently compute derived data from the Redux state. These selectors prevent unnecessary recalculations and component re-renders by caching previous results unless the relevant slice of state changes.

- **Performance Optimization:**  
  By combining Redux Toolkit’s simplified state management with Reselect’s memoization, the app achieves better performance and responsiveness, especially in large-scale or data-intensive features.

- **Type Safety:**  
  Both tools are integrated with TypeScript to ensure strong typing for actions, state, and selectors, enhancing code reliability and developer experience.

This combination enables scalable and performant state management, making the application easier to maintain and extend.

## 10. How are you handling real-time updates in the dashboard?

# Handling Real-Time Updates in the Dashboard

To manage real-time updates in the dashboard, we implement the following approach:

- **WebSocket Integration:**  
  We use WebSockets to establish a persistent connection between the client and server, enabling the dashboard to receive live data updates instantly without polling.

- **State Synchronization:**  
  Incoming real-time data from the WebSocket is dispatched to the frontend state management layer (using Redux Toolkit or Zustand), ensuring that the UI reflects the latest information.

- **Efficient Rendering:**  
  We optimize component rendering by leveraging React’s memoization techniques (`React.memo`, `useMemo`) and selective state subscriptions to update only the affected parts of the dashboard, reducing unnecessary re-renders.

- **Error Handling and Reconnection:**  
  The WebSocket connection includes logic to handle disconnections and automatic reconnection attempts, maintaining a stable real-time experience.

- **Data Throttling/Debouncing:**  
  To prevent UI overload during bursts of updates, we implement throttling or debouncing mechanisms, smoothing out rapid incoming data streams.

- **Testing & Monitoring:**  
  We write tests to simulate real-time data flows and monitor connection stability and performance using tools like Sentry.

This setup ensures the dashboard remains responsive and up-to-date with minimal latency.

## 11. What role does RxJS play in your frontend architecture?

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. In frontend architecture, RxJS plays a key role by:

- **Managing Asynchronous Data Streams**  
  It allows handling multiple async events like user inputs, HTTP requests, WebSocket messages, timers, etc., as streams of data that can be combined, filtered, and transformed declaratively.

- **Simplifying Complex Event Handling**  
  RxJS provides operators to compose complex event sequences easily, which reduces callback hell and improves code readability.

- **Enabling Reactive State Management**  
  Observables can represent state streams, enabling reactive UI updates when the state changes.

- **Enhancing Real-Time Features**  
  RxJS excels at handling real-time data like live search, notifications, and real-time dashboards by efficiently managing streams and updates.

- **Improving Error Handling and Cancellation**  
  It provides mechanisms for robust error handling and supports cancelling ongoing async operations, improving resource management.

- **Integration with Frameworks**  
  RxJS is tightly integrated with Angular and can also be used with React or other frameworks to handle side effects and async flows.

Overall, RxJS brings a declarative, composable, and scalable approach to handling asynchronous behavior and event-driven programming in frontend apps.

## 12. How are REST APIs integrated in your application?

REST APIs are integrated into the frontend application to enable communication with backend services and perform CRUD operations. The typical integration approach includes:

- **HTTP Client Usage**  
  Use libraries like `fetch`, `axios`, or Angular’s `HttpClient` to make HTTP requests (GET, POST, PUT, DELETE) to REST endpoints.

- **Service Layer Abstraction**  
  Encapsulate API calls within dedicated service classes or modules to separate concerns and promote reusability.

- **Handling Async Data**  
  Use Promises or Observables (with RxJS) to handle asynchronous responses and update UI accordingly.

- **Error Handling**  
  Implement centralized error handling to manage API errors, retries, and user notifications gracefully.

- **Request Configuration**  
  Configure headers, authentication tokens (e.g., JWT), query parameters, and request bodies as needed for secure and correct API calls.

- **State Management Integration**  
  Sync API data with state management tools (Redux, NgRx, etc.) to keep the UI state consistent with backend data.

- **Caching and Performance Optimization**  
  Use caching strategies or libraries (e.g., SWR, React Query) to optimize network usage and improve responsiveness.

- **Security Considerations**  
  Protect API calls with proper authentication and authorization mechanisms, and sanitize inputs to prevent security issues.

This structured integration ensures scalable, maintainable, and efficient communication between the frontend and backend systems.

## 13. Can you explain your use of Axios and interceptors for secure communication?

# Use of Axios and Interceptors for Secure Communication

Axios is a popular HTTP client used to make API requests in frontend applications. Interceptors in Axios allow you to globally handle requests and responses, enabling secure and consistent communication with backend services.

## How Axios and Interceptors Are Used:

- **Request Interceptors**

  - Automatically attach security tokens (e.g., JWT access tokens) to request headers (usually in the `Authorization` header).
  - Add common headers like `Content-Type` or custom headers required by the API.
  - Log or modify requests before they are sent.

- **Response Interceptors**
  - Handle global error responses such as unauthorized (401) or forbidden (403) status codes.
  - Refresh tokens automatically when expired, by intercepting 401 errors and retrying the failed request after obtaining a new token.
  - Centralize error logging and user notifications.
  - Parse and normalize response data if needed.

## Benefits for Secure Communication

- **Consistent Authentication**  
  Tokens are securely appended to every request without manual handling in individual API calls.

- **Improved Error Handling**  
  Centralizes handling of security-related errors and reduces duplication.

- **Token Refresh Management**  
  Ensures smooth user experience by automatically refreshing expired tokens and retrying failed requests.

- **Maintainability**  
  Keeps API communication logic clean and separated from business logic.

## Example Snippet

```javascript
axios.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // Handle token refresh logic here
    }
    return Promise.reject(error);
  }
);
```

## 14. What are the advantages of using TypeScript in large-scale projects?

- Type safety
- Better tooling support (IntelliSense, refactoring)
- Easier to maintain and scale
- Prevents common runtime errors

## ✅ Key Advantages of Using TypeScript in Large-Scale Projects

### 🧠 Static Typing

- Catches type-related errors during development rather than at runtime.
- Improves code reliability, predictability, and self-documentation.

### 🧰 Better IDE Support

- Offers powerful autocompletion, inline documentation, and refactoring tools in editors like VS Code.
- Improves developer productivity and reduces cognitive load.

### 📏 Scalability

- Makes it easier to manage large codebases with many developers.
- Enforces contracts between components, APIs, and layers via interfaces and types.

### 🔁 Improved Refactoring

- Type-aware refactoring allows you to safely rename symbols, move files, and restructure logic with confidence.

### 📚 Code Readability and Maintainability

- Types act as in-code documentation.
- Easier for new developers to onboard and understand function inputs/outputs without reading full implementations.

### ✅ Early Error Detection

- Helps catch bugs before running or deploying the application.
- Reduces the number of bugs caught late in QA or production.

### 🤝 Seamless Integration with JavaScript

- Works incrementally—you can adopt TypeScript gradually in existing JavaScript codebases.

### 🔌 Support for Modern JavaScript Features

- TypeScript supports the latest ECMAScript features and transpiles them for broader browser compatibility.

### 📦 Enhanced Tooling in Frameworks

- Frameworks like Angular, React (with TypeScript), NestJS, and libraries like Redux Toolkit have first-class TypeScript support.

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
Useful when TypeScript cannot infer the type.

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
let user: [string, number] = ["John", 30];
```

## 20. Difference Between Interface vs Type

Both `interface` and `type` are used to define custom types in TypeScript, but they have different strengths:

### Interface:

- Best suited for **object shapes**
- Supports **extension** (`extends`)
- Allows **declaration merging**

### Type:

- More **flexible** than interface
- Can represent **primitives**, **unions**, **tuples**, and **intersections**

### Example:

```ts
type A = string | number; // Not possible with interface
```

Use interface for modeling objects and type when you need more flexibility with data structures.

## 21. What is `tsconfig.json`?

The `tsconfig.json` file is the configuration file for a TypeScript project. It tells the TypeScript compiler how to compile the code.

### Common Fields:

- `target`: Sets the JavaScript version output (e.g., `ES6`)
- `module`: Defines module system (e.g., `CommonJS`, `ESNext`)
- `strict`: Enables strict type-checking options
- `jsx`: Enables support for JSX (for React projects)

This file ensures consistent compiler behavior across development teams and environments.

# React.js UI Developer Interview Preparation Notes



## Q2. Did you work on payment-related features at VISA?

Yes. At VISA, I worked on **payment-related modules** as a UI developer:

- Built secure UIs for **transaction workflows**: payment initiation, confirmation, and history.
- Integrated APIs using **Axios with interceptors**, followed **PCI compliance** and accessibility standards.
- Handled **real-time status updates**, **token-based authentication**, and error flows.
- Developed reusable **React + TypeScript** components.
- Focused on performance optimizations and UX enhancements.

---

## Q3. Team Size

- Total team: **14 members**
  - 3 Frontend Developers
  - 3 Backend Developers
  - 2 QA
  - 1 Scrum Master
  - 1 Manager
  - 1 Lead
  - 3 Product Owners

---

## Q4. Team Working Process

## Meetings Attended as a UI Developer

- **Daily Stand-up (15 min):**  
  Share yesterday’s work, today’s plan, and discuss any blockers.

  - Example: If blockers arise (e.g., chat button integration issues), they are escalated to the backend team.

- Work on **Dev & Staging environments**, typically between **9 AM to 9 PM EST**.

- **Sprint Planning:**  
  Estimate and break down UI tasks for the upcoming sprint.

- **Backlog Refinement:**  
  Review and clarify upcoming work and story details with the team.

- **Sprint Demos:**  
  Showcase completed UI features to stakeholders and gather feedback.

- **Sprint Retrospectives:**  
  Share feedback on what went well, what didn’t, and suggest improvements.

- **Design/UX Meetings:**  
  Align with designers on UI specifications and provide feasibility input.

- **Bug Triage Calls:**  
  Collaborate with QA and backend to prioritize and resolve bugs.

- **Tech Syncs:**  
  Discuss architectural decisions, reusable components, and coding standards with the dev team.

- **Release Planning:**  
  Coordinate deployments and ensure the UI code is production-ready.

---

## Q5. SDLC Phases (Developer View)

Yes, I’m involved in all SDLC phases:

1. **Requirements Gathering** – Understand feature scope with BAs.
2. **Design** – Contribute to frontend architecture and API contracts.
3. **Development** – Build scalable TypeScript code, API integration, validation, and state management.
4. **Testing** – Write unit/integration tests, fix bugs from QA.
5. **Deployment** – CI/CD collaboration, build validation.
6. **Maintenance** – Monitor logs, handle production issues, refactor as needed.
7. **Agile Participation** – Actively involved in all ceremonies.

---

## Q6. Technical Challenges Faced

- While working on **Sign-in features**, accounts got **locked** after wrong security answers.
- Initially needed backend dev help to unlock.
- Created a **Postman workflow** with steps and API calls to self-unlock accounts, simplifying the process.

---

## Q7. How do you deal with and fix problems?

- Use **Redux DevTools**, **Chrome DevTools** to trace issues.
- Follow structured debugging to **reproduce**, inspect **logs**, and **isolate root causes**.

---

## Q8. How did you enhance performance?

- **useMemo/useCallback** – Memoization to avoid unnecessary recalculations.
- **React.Fragment** – Avoid extra DOM nodes.
- **React.lazy** – Lazy load components.
- **Code Splitting** – Reduce bundle size.
- **Optimized Assets** – Image compression, lazy loading, responsive formats.

---

## Q9. What approach did you follow to fix things quicker?

1. Reproduce issue and check logs.
2. Use React/Redux DevTools to debug.
3. Collaborate with backend using Postman/Swagger.
4. Prioritize **hotfixes**, write **unit tests**.
5. Maintain **modular code**, use **feature flags** or **error boundaries** for safe patching.

---

## Q10. TDD (Test-Driven Development)

- Write **unit tests** using **Jest**, **Jasmine/Karma (Angular)**.
- Use **Supertest** for API integration tests.
- **Cypress** for E2E testing.
- Aim for **80%+ coverage**, especially on edge cases.

---

## Q11. VISA Website You Built?

[Pending answer, please clarify or add.]

---

## Q12. Release Support

- Started as **UI Engineer**, later worked as **Scrum Master** and **Release Specialist**.
- Handled **35+ releases** successfully.

---

## Q13. Merchant Support Technologies

- **React.js**, **Redux**, **JavaScript**, **TypeScript**

---

## Q14. Code Review Practices

- Enforce **naming conventions** and DRY principles.
- Extract reusable logic into **custom hooks** (e.g., `useScreenSize`).
- Check for **architecture standards**: containers, components, and folder structure.

---

## Q15. What tools do you use for state management?

- Used **Redux** for predictable state management.
  - **Redux-Saga** – Handle async workflows (preferred over older Redux Thunk).
- Redux Concepts:
  - **Actions** – Input events (e.g., deposit money).
  - **Store** – Global state.
  - **Reducers** – Business logic.
  - **Dispatch** – Send actions.
  - **Subscribe** – Listen to updates.
  - **State** – Component-level data store.

---

## Additional Interview Questions

### - Database Design?

[Provide details if applicable.]

### - Application Design?

[Provide your approach—e.g., micro frontend, atomic design.]

### - Best Practices?

- Follow SOLID principles, accessibility standards, performance tuning, and modular code.

### - How do you design things?

- Plan reusable components, break into smaller modules, design API contracts early, consider responsiveness and maintainability.

---
