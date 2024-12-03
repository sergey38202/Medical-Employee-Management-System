Medical Employee Management System

### Overview

The Medical Employee Management System is a web application designed for accounting and managing employees of a medical institution. This application is built with React, Redux, and TypeScript, and uses Vite for quick builds and development environment setup. The user interface is designed using Material UI.

The main purpose of this system is to maintain records of two types of employees:

1. Doctors: Doctors can also be heads of departments.
2. Nurses

The interface provides functionality for adding, editing, and deleting employees from each category, without the need for a backend server. All data is managed on the frontend using mock JSON files.

### Features

- Employee Listing: Separate pages for listing doctors and nurses, accessible via a navigation menu.
- CRUD Operations: Users can add, edit, and delete employees.
- Departments: Employees can belong to either Cardiology or Surgery departments.
- Single Page Application: Uses React Router for seamless page transitions.

### Interface Requirements

- Doctors and Nurses Tables: Each employee type has a dedicated table without pagination.
- Header Menu: The header contains links to navigate between Doctors and Nurses pages.
- Departments: Employees are assigned to Cardiology or Surgery.

### Technologies Used

- Frontend: React (with hooks), TypeScript
- State Management: Redux Toolkit
- UI Framework: Material UI
- Development Environment: Vite
- Code Linting: ESLint

### Project Setup

Follow these steps to set up and run the project locally:

Prerequisites:
1. Clone the repository:
  - git clone https://github.com/sergey38202/Medical-Employee-Management-System.git
  - cd medical-employee-mgmt

2. Install dependencies:
  - npm install

### Running the Application

- Development Server: To start the development server, run:
  - npm run dev
This command will start the server at http://localhost:5173.  

Build: To build the project for production, run:
 npm run dev

Lint: To run linting checks, run:
 npm run lint

### Project Structure

The following is an overview of the project structure:

The main folder is /src

assets/           # Static assets such as images
components/       # Reusable React components (e.g., EmployeesTable, Header)
pages/            # Pages for different routes (Doctors, Nurses, Home)
layouts/          # Layout components (e.g., BaseLayout)
store/            # Redux store setup, reducers, and actions
types/            # TypeScript types (e.g., employee types, departments)
data/             # Mock JSON files with employee data

### Key Files and Directories

- components/EmployeesTable.tsx: A reusable component that displays a table of employees (doctors or nurses). Allows inline editing and deletion.
- components/Header.tsx: The header component containing links to different pages.
- pages/Doctors.tsx: Page for listing and managing doctor employees.
- pages/Nurses.tsx: Page for listing and managing nurse employees.
- layouts/BaseLayout.tsx: A layout component that wraps pages with common UI elements like the header.
- store/reducers/employee.ts: Contains Redux slice for managing employee state. Actions like addEmployee, editEmployee, and deleteEmployee are defined here.

### Redux Store

The project uses Redux Toolkit for state management: