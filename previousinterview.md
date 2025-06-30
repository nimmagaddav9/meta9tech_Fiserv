# Interview Q&A

## 1. Can you walk us through your career journey and current role?

I am a Lead UI Developer with 12+ years of experience building .com websites for different organizations using HTML5, CSS3, JavaScript, Angular 18, React.js, and Redux.  
In the past 2 years, I worked on the React migration team, where I converted the .NET pages to React on united.com.  
Frontend is React, and used ATMOS (own library) components used company-wide.

Worked on security features for users where they can manage their account like Forgot Password, Forgot MileagePlus number,  
security questions, Sign-in features, Miles-Pooling, United Club pass, Recent Activity, dashboard updates, and  
KTN (Known Traveler Number), Accessibility guidelines features on united.com.

Used middleware such as redux-saga to handle asynchronous tasks such as API calls, data fetching, and impure actions in a more organized and efficient way.

The new initiative worked on Miles-Pooling (points you get after traveling), TSA Precheck, Account security and management features, and Under18.

Previously worked with Accelerator team for Visa Inc. remediation of MBDA modules like Application Management, Account Management, Portfolio Management, Analytics, Recurring billing, Virtual Terminal, etc. for bank users like Wells Fargo, Bank of America, etc.

At Capital Group worked on DAVIS Project. DAVIS stands for Data Visualization where we build different Highcharts using React and integrate into AEM; the backend is Java. Previously I worked on Creative Workbench, a writing tool where articles are published on Capital Group websites.

At Cerner Corporation worked on medical examination forms.

In Office Depot worked on Black Friday reporting.

Satinos Technologies created a tax portal and a Schoomin website for the Vignan schools.

---

## 2. What is your current project?

Worked on security features for users where they can manage their account like Forgot Password, Forgot MileagePlus number,  
security questions, Sign-in features, Miles-Pooling, United Club pass, Recent Activity, dashboard updates, and  
KTN (Known Traveler Number), Accessibility guidelines features on united.com.

Used middleware such as redux-saga to handle asynchronous tasks such as API calls, data fetching, and impure actions in a more organized and efficient way.

The new initiative worked on Miles-Pooling (points you get after traveling), TSA Precheck, Account security and management features, and Under18.

---

## 3. What problems did the legacy system have, and how did your team address?

In my previous role at United Airlines, the legacy system—built on .NET—presented several challenges. It lacked responsiveness, didn’t meet modern accessibility standards (like WCAG 2.0), had performance bottlenecks, and was difficult to scale or maintain. The user experience was inconsistent across platforms, and the codebase was monolithic, which slowed down feature delivery.

Our team was part of a React migration initiative focused on modernizing various modules such as Sign-in, Forgot Password, United Club Pass, and TSA Precheck. We addressed the issues by rearchitecting these modules using ReactJS (v16 & 17), Redux-Saga for async flows, and modularizing components for reusability and maintainability.

We implemented accessibility features to ensure compliance with WCAG 2.0 guidelines and used tools like Optimizely and Quantum Metrics for A/B testing and user behavior analytics. We also transitioned to a CI/CD pipeline using TeamCity and GitHub for better version control and streamlined deployments. This resulted in improved performance, better accessibility, faster delivery cycles, and a more engaging user experience across devices.

---

## 4. Can you describe your frontend architecture and how you designed it?

Sure. In my recent projects, I focused on building a scalable, modular, and accessible frontend architecture using React.

For example, at United Airlines, we migrated a monolithic .NET application to a modern React-based architecture. I designed the frontend using a component-driven approach, breaking the UI into reusable atomic components—like buttons, form elements, and layout blocks—which we composed into larger features. This made the UI highly reusable and easy to maintain.

For state management, we used Redux with Redux-Saga to handle asynchronous flows like login, account management, and TSA precheck logic. React Router was used for client-side routing across different modules, ensuring a seamless user experience.

Performance was a big focus—we implemented lazy loading and code-splitting to reduce initial load times and improve page responsiveness. We also ensured everything was WCAG 2.0-compliant, using semantic HTML and ARIA attributes for accessibility.

From a tooling perspective, we had a solid CI/CD setup with GitHub and TeamCity, and used Quantum Metric and Google Analytics to gather frontend insights and improve UX through data.

At Capital Group, we also followed a micro front-end pattern for visualizations—building independent chart components in React and integrating them into AEM pages. This allowed parallel development and easier scaling across teams.

Overall, I prioritize clean architecture with separation of concerns, accessibility, reusability, and strong observability in the frontend stack.

---

## 5. How do you structure your codebase in large-scale React applications?

I structure large-scale React applications using a feature-based folder approach, organizing code by domain or feature rather than file type. Each feature folder contains its components, hooks, styles, state (like Redux slices), and tests. Shared utilities and common components are placed in separate folders. This promotes modularity, easier maintenance, and better scalability, especially when working with larger teams.

---

## 6. What is your approach to creating reusable components and UI libraries?

My approach focuses on modularity, consistency, and scalability:

- **Design for Reusability:** I build components to be configurable via props with clear, well-documented APIs so they can be used in different contexts without modification.
- **Atomic Design Principles:** I follow atomic design patterns — starting with small, focused components (buttons, inputs) and composing them into complex ones (forms, modals).
- **Styling and Theming:** I use CSS-in-JS (like styled-components or Emotion) or utility-first CSS (Tailwind) to enable easy theming and style overrides without breaking encapsulation.
- **Type Safety:** I strongly type props with TypeScript for better DX and to prevent misuse.
- **Documentation & Storybook:** I document components using tools like Storybook, providing live examples and usage guidelines to improve adoption and consistency across teams.
- **Testing:** I write unit and snapshot tests to ensure components behave reliably across use cases.
- **Versioning & Packaging:** For UI libraries, I set up versioning, semantic releases, and package distribution (via npm/private registries) to enable easy integration and updates.

---

## 7. How are you using React and TypeScript together in this project?

I use React with TypeScript to ensure type safety across components, props, and state, which helps catch errors early and improves  
code maintainability. I define clear interfaces for component props and API responses, use typed hooks and event handlers, and  
integrate runtime validation tools like Zod to ensure reliable data handling. This combination boosts developer productivity and  
results in more robust applications.

---

## 8. How are you managing state across complex features?

Managing state in complex applications requires a structured and scalable approach to keep the codebase maintainable and performant.

- Use centralized store (Redux Toolkit) with feature-based slices
- Separate local and global state clearly
- Handle async data with thunks or RTK Query
- Use memoized selectors (Reselect) for performance
- Manage cross-feature communication with shared actions or middleware

This approach scales well for large applications with many complex features and teams.

---

## 9. Can you explain how you're using Redux Toolkit and Reselect in your project?

Yes, in my current project, I'm using Redux Toolkit (RTK) as the standard approach for managing global state,  
and Reselect to efficiently compute derived state without unnecessary re-renders.

- **Redux Toolkit:** Streamlines state management with less boilerplate and better async handling.
- **Reselect:** Prevents unnecessary re-renders by memoizing computed data.

Combined, they provide a scalable and performant architecture for complex stateful UIs.

---

## 10. How are you handling real-time updates in the dashboard?

To handle real-time dashboard updates, I use:

- WebSockets or polling for live data
- RxJS or stream management for clean control
- State management for consistency
- UI optimization for performance

This setup ensures fast, reliable, and maintainable real-time dashboards.

---

## 11. What role does RxJS play in your frontend architecture?

RxJS plays a crucial role in managing asynchronous data streams and complex event-driven workflows, especially in Angular applications and in scenarios requiring real-time or reactive programming.

RxJS is essential in my frontend architecture for:

- Managing complex async flows
- Reactive UI updates
- Declarative event handling
- Seamless integration with Angular and React
- Improved readability and testability

It helps create scalable, maintainable, and reactive applications — especially when real-time updates or multi-step async logic is involved.

---

## 12. How are REST APIs integrated in your application?

To integrate REST APIs, I:

- Use Axios or fetch for HTTP calls
- Create a service layer for clean separation
- Use React Query or Redux Toolkit for state management
- Handle auth and errors via Axios interceptors
- Validate responses and manage UI loading/error states effectively

---

## 13. Can you explain your use of Axios and interceptors for secure communication?

Yes, I’ve extensively used Axios for making HTTP requests in React applications, and I often configure Axios interceptors to enhance security, error handling, and token management.

Axios interceptors allow me to centralize auth handling, secure API traffic, and gracefully manage token lifecycle.

They also enforce consistent error responses, reducing bugs and improving maintainability.

This setup is especially useful in large apps using React, Redux Toolkit, and secure APIs.

---

## 14. What are the advantages of using TypeScript in large-scale projects?

TypeScript provides:

- Early error detection
- Better collaboration
- Improved maintainability
- Safer refactoring
- Scalability across large teams and codebases

---

## 15. Does TypeScript validate runtime API responses?

No, TypeScript does not validate runtime API responses.

- TypeScript = compile-time safety only
- To protect your app at runtime, use libraries like Zod to validate API responses
- Always validate external data boundaries (API, localStorage, etc.)

**How to Handle This:**  
To validate API responses at runtime, you need to use a runtime schema validation library, such as:

- Zod (TypeScript-friendly, modern)
- Yup (more common in form validation)
- io-ts
- Ajv (for JSON Schema)
- Joi (commonly used on the backend)

---

## 16. What libraries or techniques do you use for runtime validation?

- **Zod** – primary choice for TypeScript-friendly runtime validation.
- **Yup** – useful for React forms with Formik.
- Use validation both at form level and for API data parsing.
- I always validate external data boundaries (e.g., APIs, local storage) to prevent runtime issues.
