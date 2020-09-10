describe("Testing the Form", () => {
  beforeEach(() => {
    cy.visit('/'); 
  })

    it("Tests the Form", () => {
      const name = "Mychael";
      const email = "email@email.com";
      const password = "password1";

      cy.get("#name").type(name).should("have.value", name);

      cy.get("#email").type(email).should("have.value", email);

      cy.get("#password").type(password).should("have.value", password);

      cy.get("#terms").check().should("be.checked");

      cy.get("#name").clear();

      cy.get(".nameError").contains("Name is definitely required.");
      // cy.get(".nameError").should("have.value", "Name is definitely required.");

      cy.get("#name").type(name);

      cy.get("[data-cy=submitButton]").click();

      cy.get("pre").should("not.have.value", "{}");
    })
})