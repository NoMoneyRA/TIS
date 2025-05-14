describe('Registration', () => {
    it('registration', () => {
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit("https://dev.profteam.su/registration")

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.login)

            cy.log('Ввод мыла')
            cy.get('.form-input--email')
                .type(data.mail)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.password)

            cy.log('Ввод пароля ещё раз')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button')
                .click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.surname)

            cy.log('Ввод имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                .type(data.name)

            cy.log('Ввод отчества')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
                .type(data.patronym)

            cy.log('Кнопка "Войти"')
            cy.get('.form__buttons > :nth-child(3)')
                .click()
        })
    })
})