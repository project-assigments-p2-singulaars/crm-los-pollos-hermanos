## CRM App Development Project

### Introduction
In today's fast-paced business environment, managing customer relationships effectively is crucial for any company looking to thrive. A Customer Relationship Management (CRM) system allows businesses to keep track of interactions with current and potential customers, manage their details, and automate various marketing, sales, and customer service processes. This project involves designing and implementing a CRM application that will help users manage their customers, orders, and products efficiently. This real-world application will serve as an excellent learning tool for beginner developers to apply their basic web development skills and get hands-on experience with the Angular framework.

### UI Requirements
#### Pages to Build:
- **Login Page**: Secure entry point to the CRM.
- **Registration Page**: Allows new users to create an account.
- **Dashboard Page**: Displays graphs (new customers per month, orders per week) and a list of products with low inventory.
- **Customers Page**: Includes a list view, detailed view, and a form for adding or editing customer information.
- **Orders Page**: Includes a list view, detailed view, and a form for adding or editing orders.
- **Products Page**: Includes a list view, detailed view, and a form for adding or editing products.
- A **search control** should be included in all list pages.

#### Navigation Flow:
- **Login/Register:** Redirect to Dashboard after successful login/registration.
- **Aside Menu:** Links to Customers, Orders, Products, and Dashboard.
- **Dashboard Widgets:** Links to corresponding list views for detailed insights.
- **A top bar user's avatar** with a dropdown for logging out.

### Technical Requirements

#### Key Technologies:
- **Framework**: Angular for building a scalable and maintainable front-end.
- **UI Components**: Angular Material to provide a unified look and feel.
- **Testing**: Jest for unit testing to ensure code quality and functionality.

#### Best UI Development Practices:
- **Responsive Design**: Ensure the application is usable on devices of various sizes.
- **Accessibility**: Implement ARIA roles and attributes to make the application accessible.
- **Consistent Design Language**: Use Angular Material components to maintain consistency and professionalism across the app.

#### Development Practices:
- **Clean Code**: Write readable and reusable code; follow Angular Style Guide for best practices. Apply DRY, KISS, YAGNI patterns to code.
- **Design Patterns**: Utilize common design patterns such as services for data handling and components for UI layers. Or Container-Representational components pattern interaction.
- **Modular Code**: Break the application into functional modules to keep the codebase manageable.

### Pedagogical Requirements
- **Project Mode**: Group project of 6 people.
- **Duration**: One week. Due Data on May 24th.
- **Methodology**: Use Agile methodologies like Scrum and Kanban to manage the project.
- **Design Requirement**: Each group must create their own app design, fostering creativity and practical UI/UX design skills.

### Documentation and Delivery
- **Production App**: Implement CI/CD pipelines using GitHub Actions for continuous integration and deployment to platforms like Heroku or Railway.
- **Code Repository**: Use GitHub, with a well-documented README.md that includes setup instructions, dependencies, and project description.
- **Slides Presentation:** Highlight project goals, architecture, and challenges.

#### Suggested Slides Presentation Outline
1. **Introduction:** Problem statement and project goals.
2. **Architecture:** Overview of the application's structure and flow.
3. **Implementation:** Key features and implementation details.
4. **Challenges and Solutions:** Issues faced and how they were solved.
5. **Conclusion:** Lessons learned and next steps.

### Suggested Best Practices
- **Branching Strategy:** Use a Git branching strategy like Git Flow.
- **Commit Messages:** Write meaningful and consistent commit messages.
- **Documentation:** Document key components and business logic.
- **Automation:** Automate builds, tests, and deployments using CI/CD.

### Angular Structures to Practice
- **Components**: Create reusable UI pieces.
- **Services**: Handle data logic and API calls.
- **Routing**: Manage navigation between pages.
- **Observables and RxJS**: Handle asynchronous data flows.
- **Signals**: Manage application state.
- **Forms**: Use Reactive Forms for complex form handling.

### Assessment

- Demonstration presentation and Q&A session. The group members will present a demonstration of their work. Following the presentation, there will be a Q&A session where participants will be asked about their technical decisions, approaches, and any other aspects of the project. The feedback will be also offered by classroom pull-request.


### Inspiration and References
- **Example CRM Apps**: Look at popular CRM solutions like Salesforce or Zoho CRM to understand common features and workflows.

### Example Projects
1. **Angular CRM App**
   - [GitHub Repo](https://github.com/GermaVinsmoke/Angular-Crm)
   - Features a simple CRM system with customer management.

2. **Angular Material Admin**
   - [GitHub Repo](https://github.com/flatlogic/angular-material-dashboard)
   - Admin dashboard template built with Angular Material.

3. **Datum - crm**: https://templates.iqonic.design/product/lite/datum/dist/backend/index.html

### Web References
1. **Angular Documentation**
   - [Angular Docs](https://angular.dev)
   - Official Angular documentation covering all key topics.

2. **Angular Material**
   - [Angular Material Docs](https://material.angular.io)
   - Guide to Angular Material components and usage.

3. **Testing Angular**
   - [Official Testing Guide](https://angular.io/guide/testing)
   - Comprehensive guide to testing Angular applications.

4. **Clean Code Principles**
   - [Clean Code by Robert C. Martin](https://www.oreilly.com/library/view/clean-code/9780136083238/)
   - Book on clean coding practices.


By engaging with this project, you will not only learn how to develop a feature-rich Angular application but also understand how to work in a team setting using Agile methodologies, and how to present your work professionally. This holistic approach will prepare you for real-world software development challenges.

**Good luck, and happy coding!**