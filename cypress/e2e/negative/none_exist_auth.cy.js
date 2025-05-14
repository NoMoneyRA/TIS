describe('Authorize', () => {
    // it('none-existent pass auth', () => {
    //     cy.fixture('student').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.url_auth)
    //
    //         cy.log('Ввод логина студента')
    //         cy.get('.form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод неправильным паролем')
    //         cy.get('.form-input--password')
    //             .type(data.none_correct_password)
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get(':nth-child(3) > .button')
    //             .click()
    //
    //         cy.log('Проверка что появился элемент сигнализирующий об ошибке')
    //         cy.get('.form-error > span')
    //             .should('exist')
    //     })
    // })

    it('none-existent login auth', () => {
        cy.fixture('student').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.url_auth)

            cy.log('Ввод неправильного логина студента')
            cy.get('.form-input--text')
                .type(data.none_correct_login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
                .should('exist')
        })
    })
})