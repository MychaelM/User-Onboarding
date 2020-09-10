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
    })
})