describe('Change profile', () => {
    it('profile change', () => {
        cy.fixture('student').then(data => {
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

            cy.log('Переход в раздел "Профиль"')
            cy.get(':nth-child(2) > .menu-item__item-name').click()

            cy.log('Ввод новой фамилии')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text').clear().type(data.surname)

            cy.log('Ввод нового имени')
            cy.get(':nth-child(2) > .form-control--max > .form-input--text').clear().type(data.name)

            cy.log('Ввод нового отчества')
            cy.get(':nth-child(2) > :nth-child(1) > .form-control--max > .form-input--text').clear().type(data.patronym)

            cy.log('Ввод новой почты')
            cy.get('.form-input--email').clear().type(data.email)

            cy.log('Сохранить изменения')
            cy.get('.form__buttons > .button').click()
        })
    })
})