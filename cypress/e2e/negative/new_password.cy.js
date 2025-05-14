describe('New password', () => {
    // it('new none correct password', () => {
    //     cy.fixture('newpass').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit("https://dev.profteam.su/login")
    //
    //         cy.log('Ввод логина студента')
    //         cy.get('.form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод пароля')
    //         cy.get('.form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get(':nth-child(3) > .button')
    //             .click()
    //         cy.wait(1000)
    //
    //         cy.log('Ввод нового пароля')
    //         cy.get(':nth-child(1) > .form-input--password')
    //             .type(data.bad_pass)
    //
    //         cy.log('Проверка сообщения')
    //         cy.get('.form-error > span')
    //             .should('exist')
    //     })
    // })
    it('new password do not match', () => {
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

            cy.log('Ввод нового несовпадающего пароля')
            cy.get(':nth-child(2) > .form-input--password')
                .type(data.bad_pass)

            cy.log('Проверка сообщения')
            cy.get('.form-error > span')
                .should('exist')
        })
    })
})