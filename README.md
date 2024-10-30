# Frontend Coding Challenge

## Welcome! :tada:

Thank you for taking the time to participate in our coding challenge! This exercise will help us understand your approach to building modern web applications with an emphasis on code quality and best practices.

## The Assignment

Create a marketplace application that allows users to browse and search through products. You'll be implementing the frontend interface using Next.js 14, TypeScript, and SCSS modules.

We are looking for a system design implementation that showcases a deep understanding of how to write modular and scalable codebases.

This includes:

- Effective use of component-based architecture
- Thoughtful state management and data fetching strategies using app router
- Clean, readable, and maintainable code
- Efficient use of Next.js 14 features
- Proper use of TypeScript for type safety and SCSS modules for styling

## Getting Started

1. Fork this repository

   ```bash
   # Click "Fork" in the top right
   # Rename your fork to: firstname-lastname-fe-challenge
   # Example: john-doe-fe-challenge
   ```

2. Clone your forked repository:

   ```bash
   git clone git@github.com:your-username/firstname-lastname-fe-challenge.git
   cd firstname-lastname-fe-challenge
   ```

3. Create your working branch:
   ```bash
   git checkout -b feature/marketplace
   ```

## Requirements

- Use Next.js 14 with the App Router
- Implement URL state management
- Write code to ESLint and Prettier basic standards
- Implement the provided designs (you'll receive these separately)
- Write the code in TypeScript
- Style the application using SCSS modules

## What We Will Be Looking For

- Code Structure: How you organize your code, including the division of components and modules
- Next.js 14 and TypeScript: Effective use of Next.js features such as App Router, SSR, and TypeScript for type safety
- SCSS Modules: Proper use of SCSS modules for styling, ensuring modular and maintainable CSS
- State Management: How you manage state, especially URL state management for filters
- Data Fetching: Efficient and clean data fetching strategies
- Performance and Scalability: Considerations for building a scalable and performant codebase

## Deliverables

Once you have completed the assignment:

1. Push your changes to your branch

2. Submit Your Work:
   - Email with your GitHub repository link
   - Include any additional notes or considerations you'd like to share

## Logistics

- Aim to spend no more than a few hours on the assignment
- It's okay if it's not fully complete or polished
- If you have questions, please reach out via email

## FAQs

- **What if I have questions about what the ideal product behavior should be?**  
  Feel free to make product assumptions that you think will make for a good user experience while keeping the technical complexity within reason.

- **Can I change which frameworks are used or the tech stack?**  
  Please use the tech stack specified (Next.js 14, TypeScript, SCSS modules).

- **Can I change the design?**  
  Please implement the design as provided in the specifications you'll receive.

- **Can I leverage and import useful modules as necessary?**  
  Yes, you can use utility modules like Day.js and Lodash. However, avoid using major UI libraries like Material-UI.

## Thoughts & Feedback

- The meat and potatoes of the build was centered around the API call. Though I did first try and knock out some of the other more style heavy items. Because of time I dropped carousels and callouts and focused more on larger sweeps of the project.

- I wanted to add some accessibility into the project, keep a focus on the bigger ideas of the assignment like the API, filtering, and grid displays.

- I tried to timebox this to ~4 hours.

- I didn't get into check alternate ways to get data from the API. I was initially thinking the facet list could be called/searched by category, though because of my time I figured that would be beyond MVP. I also opted to focus more on the filtering over the design on the product search. There would be definitely things I would do differently in a real world scenario.

- Got stuck on implementing images from the api - found a cool work around there.

- Spent a little time on setting up stylelint and adding storybook, though it didn't really save me time in the short run.

- Challenge was pretty large, I felt I ran out of time trying to dial in assets and such. I didn't implement fonts and all the styles how I would want, and spent time on things like footer/header that probably could have been just included within the project. As I kept looking at the clock, I felt I was rushing more than I would normally on a project.
