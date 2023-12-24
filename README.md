# Employee Statistics App

## Overview

This project is an Employee Statistics App designed to provide users with the ability to upload employee data, analyze it, and visualize key statistics. The app includes features such as sorting columns, filtering data, and displaying various statistics related to employee performance.

## Task Description

The primary tasks for this project include:

1. **File Upload:** Allowing users to upload a file containing employee data in a specified format.

2. **Data Validation:** Validating the uploaded data to ensure it meets the required format and contains the necessary information.

3. **Sorting and Filtering:** Implementing functionality to sort the data based on selected columns and filter it based on user-defined criteria.

4. **Statistical Analysis:** Displaying relevant statistics such as overall performance, project periods, and collaboration periods.

5. **Responsive Design:** Ensuring that the app is responsive and user-friendly, providing a seamless experience across different devices.

## Algorithm Overview

### File Upload and Data Processing:

1. **File Upload:** When a user uploads a file, the system uses FileReader to read the file and obtain its content.

2. **Data Splitting:** The content is split into rows based on line breaks, and each row is processed.

3. **Data Formatting:** Each row is split into individual data points using commas as delimiters, and any leading/trailing spaces are trimmed.

4. **Date Validation:** Dates in the data are validated and converted to a consistent format.

5. **Data Sanitization:** The data is sanitized to ensure consistency and remove any potential errors.

### Sorting and Filtering:

1. **Sorting Algorithm:** The data is sorted using a custom sorting algorithm based on the selected column and sorting order (ascending or descending).

2. **Filtering Algorithm:** Filtering is applied based on user-defined criteria, narrowing down the data based on specific conditions.

### Statistical Analysis:

1. **Use of Hooks:** React hooks (useState) are utilized to manage state, such as sorting column, sorting order, and filtered data.

2. **Statistical Functions:** Custom functions are used to calculate and display statistics, such as overall performance, project periods, and collaboration periods.


## Issues to Address

### 1. SortButton Icon Change on Click

**Description:** The icons on the sorting button do not change correctly upon clicking.

**Fix Suggestion:** Review the implementation of the `SortButton` component and ensure that the functionality for changing icons on click is working correctly.

### 2. Search in Input

**Description:** The implementation of the search input can be improved.

**Fix Suggestion:** Examine the code of the search input and add functionality for enhanced searching or optimize the current implementation.

### How to Contribute

If you want to contribute to fixing these issues, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Create a new branch for your feature using `git checkout -b issue/issue-number`
3. Make changes and commit them with detailed comments explaining what each part does.
4. Push your changes to your fork using `git push origin issue/issue-number`.
5. Open a pull request from your branch to the main branch (`master`) of the original repository.
    
## Technologies Used

- **React:** The app is built using React.js for creating a dynamic and responsive user interface.

- **React Router:** Used for navigation within the app.

- **React Icons:** Provides a collection of popular icons for UI components.

- **CSS:** Styling the components and ensuring a visually appealing design.

- **JavaScript (ES6+):** Used for logic implementation and data processing.

## GitHub Repository

Find the project on GitHub: [Employees-Worked-Together](https://github.com/visionNew/Employees-Worked-Together)

## Usage

To run the app locally:

```bash
npm install
npm start
```
Open http://localhost:3000 in your browser.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Feel free to explore and contribute to the development of this Employee Statistics App!
