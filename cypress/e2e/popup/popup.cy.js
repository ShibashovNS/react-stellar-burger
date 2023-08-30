describe("Тестируем работу модального окна", () => {
  it("Запуск приложения", () => {
    
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("http://localhost:3000");
    cy.get("button").contains("Оформить заказ").should("exist").as("order-btn");
    cy.get("@order-btn").should("to.be.disabled");

    // Конструктор
    cy.get('[data-test="constructor"]').as("constructor");
    // "Булка"
    cy.get('[data-test_id="643d69a5c3f7b9001cfa093d"]').as("bun");

    //Ингредиенты
    cy.get('[data-test_id="643d69a5c3f7b9001cfa0943"]').as("Sauce");
    cy.get('[data-test_id="643d69a5c3f7b9001cfa0941"]').as("main");
    cy.get('[data-test_id="643d69a5c3f7b9001cfa0945"]').as("Sauce2");
    cy.get('[data-test_id="643d69a5c3f7b9001cfa093e"]').as("main2");

    // Перетаскиваем bun в конструктор
    cy.get("@bun").trigger("dragstart");
    cy.get("@constructor").trigger("drop");

    // Перетаскиваем Sauce в конструктор
    cy.get("@Sauce").trigger("dragstart");
    cy.get("@constructor").trigger("drop");

    // Перетаскиваем main в конструктор
    cy.get("@main").trigger("dragstart");
    cy.get("@constructor").trigger("drop");

    // Перетаскиваем Sauce2 в конструктор
    cy.get("@Sauce2").trigger("dragstart");
    cy.get("@constructor").trigger("drop");

    // Перетаскиваем main2 в конструктор
    cy.get("@main2").trigger("dragstart");
    cy.get("@constructor").trigger("drop");
  });
});
