describe('New password', () => {
    it('new correct password', () => {
        cy.fixture('newpass').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit("https://dev.profteam.su/login")

            cy.log('Ввод логина студента')
            cy.get('.form-input--text')
                .type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            cy.wait(1000)

            cy.log('Ввод нового пароля')
            cy.get(':nth-child(1) > .form-input--password')
                .type(data.new_pass)

            cy.log('Ввод нового пароля ещё раз')
            cy.get(':nth-child(2) > .form-input--password')
                .type(data.new_pass)

            cy.log('Нажать "Сохранить"')
            cy.get('.form__buttons > div > .button')
                .click()

            cy.log('Проверка сообщения')
            cy.get('.form__buttons > div > p')
                .should('exist')
        })
    })
})