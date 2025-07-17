Technical quesitons:

# Interview Q&A

### 1. Introduce yourself?

Hi, I'm Vijay, a Senior Full Stack Engineer with over 12 years of experience in building scalable web applications. My core expertise lies in frontend development with React.js, TypeScript, and Redux Toolkit, and on the backend, I work extensively with Node.js, Express, and GraphQL.

I've worked with cloud-native solutions on AWS, including Lambda, API Gateway, and DynamoDB, and I'm well-versed in building micro frontends and designing reusable UI libraries. I’ve also contributed to improving performance, accessibility (WCAG 2.0), and observability in production apps. Most recently, I’ve been focusing on real-time dashboards and enterprise-scale UI architecture.

---

### 2. Folder structure?

I use a feature-based folder structure:

src/
├── features/ // domain modules (auth, dashboard)
├── components/ // shared UI
├── hooks/ // reusable hooks
├── utils/ // helper functions
├── types/ // global interfaces/types

Keeps the code modular and scalable.

## 3. Redux?

Redux is a state management tool. I use Redux Toolkit to manage app-wide state, with `createSlice`, `useSelector`, and `useDispatch`. For async tasks, I use Thunk or Redux Saga.

---

## 4. Difference Between Interface vs Type?

### Q: What’s the difference between `interface` and `type` in TypeScript?

**A:**

| Feature               | `interface`                     | `type`                                      |
| --------------------- | ------------------------------- | ------------------------------------------- |
| Purpose               | Defines shape of an object      | Alias for any type (primitive, union, etc.) |
| Extensibility         | Can be extended via `extends`   | Can be extended using intersections (`&`)   |
| Merging               | Supports declaration merging    | Does **not** support merging                |
| Usage with Primitives | ❌ Not for primitives or unions | ✅ Works with primitives, unions, tuples    |
| Readability           | Preferred for object shapes     | Better for complex or computed types        |

---

- **interface:** Best for objects and class contracts, supports declaration merging.
- **type:** Used for unions, primitives, tuples, and intersection types.

**Example:**

```ts
interface A {
  name: string;
}
type B = { age: number };
```

## 5. WCAG 2.0 guidelines?

WCAG ensures accessibility. It follows the POUR principles:

- **Perceivable:** alt text, captions
- **Operable:** keyboard navigation, focus indicators
- **Understandable:** clear labels
- **Robust:** screen reader support

I use semantic HTML, ARIA attributes, and tools like axe or Lighthouse.

---

## 6. How do you do a code review?

**Answer:**

I review code focusing on:

- ✅ Functionality – Does it meet requirements and handle edge cases?
- ✅ Readability – Clear variable names, modular functions, consistent formatting.
- ✅ Performance – Avoid unnecessary re-renders, loops, or memory leaks.
- ✅ Security – Prevent XSS, SQL injection, and avoid exposing secrets.
- ✅ Best Practices – Follow project standards (e.g., React patterns, REST/GraphQL conventions).
- ✅ Tests – Check for unit/integration tests and critical path coverage.

I leave constructive comments, suggest improvements with examples, and encourage collaboration rather than criticism.

## 7. What is your deployment process?

**Answer:**

I follow a CI/CD-driven deployment process:

- ✅ Code pushed to Git → triggers CI pipeline (GitHub Actions, Jenkins).
- 🧪 Linting, unit tests, and build are run automatically.
- 📦 Artifacts or Docker images are generated and stored (e.g., ECR/S3).
- 🚀 Deployment to dev/stage/prod via:
  - Serverless Framework for Lambda
  - ECS or EC2 for containerized apps
  - S3 + CloudFront for frontend
- 📊 Post-deployment: Monitor with CloudWatch, enable rollback if issues occur.

I ensure infrastructure is defined as code and approvals are in place for prod releases.

---

## 8. What is your role? Developer or Lead?

**Answer:**

I primarily work as a Senior Full Stack Developer, but I often take on lead responsibilities like:

- Reviewing code and mentoring juniors
- Designing technical architecture
- Collaborating with backend/devops teams
- Leading sprint planning and estimations
- Driving best practices for performance, accessibility, and testing

So while my title is developer, I act as a tech lead in many areas of the project.

---

## 9. When there are data issues, how do backend and frontend teams coordinate?

**Short Answer:**

We first identify the issue through logs, API responses, or UI errors. Then:

- 🔍 Frontend shares request payloads, expected vs actual data.
- 🔄 Backend checks API logic, DB queries, or transformation issues.
- 🧪 We reproduce it together (via Postman or dev console).
- 📋 Use tools like Swagger, logging, or versioned contracts to validate.
- ✅ Once fixed, frontend verifies and updates UI handling if needed.

We use Slack/JIRA for async communication and daily standups or debug sessions to collaborate quickly.

---

## 10. What is the difference between any and unknown in TypeScript?

**Short Answer:**

- `any`: Disables type checking. You can assign and use it freely — unsafe.
- `unknown`: Like `any`, but type-safe — you must check its type before using it.

**Example:**

```ts
let a: any = "Hello";
a.toUpperCase(); // ✅ No error, even if 'a' was a number — risky!

let b: unknown = "Hello";
b.toUpperCase(); // ❌ Error: You must check the type first

if (typeof b === "string") {
  b.toUpperCase(); // ✅ Safe
}
```

**Rule of thumb:**
Use `unknown` when you're unsure about the type and want to enforce safety. Avoid `any` unless absolutely necessary.

---

## 11. Have you used React Hooks?

**Answer:**

Yes, I use React Hooks extensively in all my React projects.

- `useState` for managing local state
- `useEffect` for side effects (API calls, subscriptions)
- `useContext` for global state or theming
- `useRef` for DOM access or persisting values
- `useMemo` and `useCallback` for performance optimization
- `useReducer` for complex state logic
- Custom hooks for reusable logic (e.g., `useFetch`, `useDebounce`)

Hooks help me write cleaner, functional, and reusable components.

---

## 12. What is a Custom Hook in React?

A custom hook is a reusable function that uses React hooks like `useState` or `useEffect` to share logic between components.

- 🔁 It helps avoid code duplication and keeps components clean.
- 📛 Custom hooks always start with `use`, like `useFetch` or `useForm`.

## 13. How to improve performance in React apps?

**Short Answer:**

- 🧠 Use `React.memo`, `useMemo`, `useCallback` to avoid unnecessary re-renders
- 💤 Lazy load components with `React.lazy` and `Suspense`
- 🧹 Clean up effects in `useEffect`
- 📦 Code splitting and dynamic imports
- 🎯 Use virtualization (e.g., `react-window`) for large lists
- 🚫 Avoid prop drilling – use Context or Redux
- 📉 Minimize unnecessary state and DOM updates

---

## 14. What are Cross-Browser Compatibility Issues?

**Short Answer:**

Cross-browser compatibility issues occur when a website or app behaves differently or breaks across different browsers (like Chrome, Firefox, Safari, Edge) due to differences in how browsers interpret HTML, CSS, or JavaScript.

Common issues include:

- CSS styles not rendering the same
- JavaScript APIs not supported or behaving inconsistently
- Layout and positioning differences
- Feature support variations (e.g., flexbox, grid)

We fix these by using vendor prefixes, polyfills, testing on multiple browsers, and writing standards-compliant code.

---

## 15. What is Webpack?

Webpack is a module bundler for JavaScript applications. It takes your code and assets (JS, CSS, images), bundles them into optimized files for the browser, and handles things like code splitting, tree shaking, and hot module replacement to improve performance and developer experience.

---

## 16. Which tools do you use for accessibility testing?

**Short Answer:**

I use tools like:

- axe DevTools (browser extension) for automated accessibility checks
- Lighthouse (built into Chrome DevTools) for accessibility score reports
- Wave extension for visual accessibility feedback
- NVDA or VoiceOver screen readers for manual testing
- Keyboard-only navigation to ensure operability

These help catch issues and ensure compliance with WCAG guidelines.

---

## 17. What is your team size?

**Short Answer:**

I typically work in teams of 5 to 10 engineers, including frontend, backend, QA, and DevOps. Sometimes larger cross-functional teams up to 15, depending on project scale.

I collaborate closely with product managers, designers, and stakeholders to deliver features smoothly.

## 18. Have you worked on the production environment?

**Short Answer:**

Yes, I regularly work in production environments. I’m involved in:

- Deployments using CI/CD pipelines
- Monitoring app health with tools like CloudWatch and Sentry
- Troubleshooting live issues and applying hotfixes
- Ensuring performance and uptime through observability and alerts

I understand the importance of careful releases and rollback strategies to minimize user impact.

---

## 19. What is the input for Webpack?

**Short Answer:**

The input for Webpack is the entry point — typically a JavaScript file (like `src/index.js` or `src/index.tsx`) that serves as the root of your application. Webpack starts bundling from this entry file, following all imports and dependencies to create the final bundle.

---

## 20. How to enable CORS with Webpack?

You enable CORS during development by configuring `webpack-dev-server` to proxy API requests and set headers:

```js
devServer: {
  proxy: { '/api': 'http://localhost:5000' },
  headers: { 'Access-Control-Allow-Origin': '*' },
}
```

For production, CORS must be handled on the backend server.

=========================================================
coding question:

/\*

- Click `Run` to execute the snippet below!
- [[1,9,3] , [5,4,8] ,[2,7,6]]
-
- "ALL ASC" - [[1,2,3] , [4,5,6] ,[7,8,9]]
- "BLOCK ASC" - [[1,3,9] , [4,5,8] ,[2,6,7]]
  \*. "ALL DESC" - [[9,8,7] , [6,5,4] ,[3,2,1]]
- "Block DESC" - [[9,3,1] , [8,5,4] ,[7,6,7]]
  \*/

const input = [[1,9,3] , [5,4,8] ,[2,7,6]];

// Sort each sub-array ascending
const allAsc = input.map(arr => [...arr].sort((a, b) => a - b));
console.log("ALL ASC:", allAsc);

// Sort each sub-array descending
const allDesc = input.map(arr => [...arr].sort((a, b) => b - a));
console.log("ALL DESC:", allDesc);

// Sort main array by first item ascending
const blockAsc = [...input].sort((a, b) => a[0] - b[0]);
console.log("BLOCK ASC:", blockAsc);

// Sort main array by first item descending
const blockDesc = [...input].sort((a, b) => b[0] - a[0]);
console.log("BLOCK DESC:", blockDesc);

Output:

ALL ASC: [ [ 1, 3, 9 ], [ 4, 5, 8 ], [ 2, 6, 7 ] ]
ALL DESC: [ [ 9, 3, 1 ], [ 8, 5, 4 ], [ 7, 6, 2 ] ]
BLOCK ASC: [ [ 1, 9, 3 ], [ 2, 7, 6 ], [ 5, 4, 8 ] ]
BLOCK DESC: [ [ 5, 4, 8 ], [ 2, 7, 6 ], [ 1, 9, 3 ] ]
