import * as api from "../../src/data/expenses/api";

describe("Home page", () => {
  it("should show homepage", () => {
    cy.visit("http://localhost:3000");
    cy.get("a").contains("Total Expense");
    cy.contains("Loading ...");
    cy.contains("Departments");
    cy.contains("Project Name");
    cy.contains("Amount");
    cy.contains("Date");
    cy.contains("Name");
  });

  it("should navigate to Total Expense By page", () => {
    cy.get("a").contains("Total Expense").click();
    cy.contains("Go back home");
    cy.contains("Departments");
    cy.contains("Amount");
  });

  it("should navigate back to home page", () => {
    cy.contains("Go back home").click();
  });
});
