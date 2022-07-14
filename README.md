# Expenses Summary PoC

PoC to show user uploaded data in tabular form and allow user to perform some basic set of operations over data such as sort and filter.

## Features

- Show expenses list in tabular form
- Perform sort/filter by clicking on each column header
- View sum of expanses by departments, project name, date and member name

## Screenshots

Expenses list
![App Screenshot](https://raw.githubusercontent.com/didd/static-files/main/photo_2022-07-14%2021.47.46.jpeg)
Sorting and filtering mechanism
![App Screenshot](https://raw.githubusercontent.com/didd/static-files/main/photo_2022-07-14%2021.49.49.jpeg)
Total expense by fields
![App Screenshot](https://raw.githubusercontent.com/didd/static-files/main/photo_2022-07-14%2021.50.19.jpeg)
![App Screenshot](https://raw.githubusercontent.com/didd/static-files/main/photo_2022-07-14%2021.50.07.jpeg)

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

To run unit tests, run the following command

```bash
  npm run test
```

To run e2e tests, run the following command

```bash
  npm run e2e
```

## Tech Stack

**Client:** Next.js, React Hooks, TypeScript, React Select, MUI Data Grid, Styled Components, Jest, React Testing Library, Cypress,
ESLint, and Prettier
