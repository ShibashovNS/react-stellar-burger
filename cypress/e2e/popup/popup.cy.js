describe("Тестируем работу модального окна", () => {
  it("Запуск приложения", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("http://localhost:3000");
    cy.location().should((location) => {
      expect(location.origin).to.eq("http://localhost:3000");
    });

    cy.get("button").contains("Оформить заказ").should("exist").as("order-btn");
    cy.get("@order-btn").should("to.be.disabled");

    // Конструктор
    cy.get('[data-test="constructor"]').as("constructor");
    cy.get('[data-test="total"]').as("total");
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

    //Проверяем сумму заказа
    cy.get("@total").should("have.text", "3556");

    //кнопка оформления заказа
    cy.get("@order-btn").should("not.be.disabled");
    cy.get("@order-btn").click();

    //Проверяем эндпоинт после перенаправления на страницу авторизации
    cy.location().should((location) =>
      expect(location.pathname).to.eq("/login")
    );

    //Авторизовываемся
    cy.get('[data-test="loginEmaile"]').as("loginEmaile");
    cy.get('[data-test="loginPassword"]').as("loginPassword");
    cy.get('[data-test="login-form"]').as("loginForm");

    cy.get("@loginEmaile")
      .type("sh95@bk.ru") // Вводим текст в инпут
      .should("have.value", "sh95@bk.ru"); // Проверяем, что значение инпута действительно изменилось на то которое указали
    cy.get("@loginPassword")
      .type("qwerty123")
      .should("have.value", "qwerty123");

    cy.get("@loginForm").find("button").click();

    //После перехода проверяем эндпоинт и оформляем заказ
    cy.get("@order-btn").click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });

    cy.get("@order-btn").click();
  });
});
