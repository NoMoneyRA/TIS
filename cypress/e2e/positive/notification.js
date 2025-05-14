describe('Notification', () => {
    it('notification check', () => {
        cy.fixture('employer').then(data => {
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
            cy.wait(3000);

            cy.log('Клик по кнопке "Уведомление"')
            cy.get('.header__nav > [href="/notification"]').click()
            cy.wait(2000);

            cy.log('Клик по кнопке "Просмотреть"')
            cy.get(':nth-child(1) > .notification-list-item > .button').click()
        })
    })
})