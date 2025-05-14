describe('Registration', () => {
    // it('registration bad login', () => {
    //     cy.fixture('bad_reg').then(data => {
    //         cy.log('Переход на страницу регистрации')
    //         cy.visit("https://dev.profteam.su/registration")
    //
    //         cy.log('Ввод некорректного логина')
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.bad_login)
    //
    //         cy.log('Ввод мыла')
    //         cy.get('.form-input--email')
    //             .type(data.mail)
    //
    //         cy.log('Проверка появилась ли ошибка')
    //         cy.get('.form-error > span')
    //             .should('exist')
    //     })
    // })
    // it('registration bad email', () => {
    //     cy.fixture('bad_reg').then(data => {
    //         cy.log('Переход на страницу регистрации')
    //         cy.visit("https://dev.profteam.su/registration")
    //
    //         cy.log('Ввод логина')
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод некорректного мыла')
    //         cy.get('.form-input--email')
    //             .type(data.bad_mail)
    //
    //         cy.log('Ввод пароля')
    //         cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Ввод пароля ещё раз')
    //         cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Проверка появилась ли ошибка')
    //         cy.get('.form-error > span')
    //             .should('exist')
    //     })
    // })
    // it('registration bad first pass', () => {
    //     cy.fixture('bad_reg').then(data => {
    //         cy.log('Переход на страницу регистрации')
    //         cy.visit("https://dev.profteam.su/registration")
    //
    //         cy.log('Ввод логина')
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод мыла')
    //         cy.get('.form-input--email')
    //             .type(data.mail)
    //
    //         cy.log('Ввод некорректного пароля')
    //         cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
    //             .type(data.bad_password)
    //
    //         cy.log('Проверка появилась ли ошибка')
    //         cy.get(':nth-child(3) > .form-error > span')
    //             .should('exist')
    //     })
    // })
    // it('registration bad second pass', () => {
    //     cy.fixture('bad_reg').then(data => {
    //         cy.log('Переход на страницу регистрации')
    //         cy.visit("https://dev.profteam.su/registration")
    //
    //         cy.log('Ввод логина')
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод мыла')
    //         cy.get('.form-input--email')
    //             .type(data.mail)
    //
    //         cy.log('Ввод пароля')
    //         cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Ввод некорректного пароля')
    //         cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
    //             .type(data.bad_password)
    //
    //         cy.log('Проверка появилась ли ошибка')
    //         cy.get('.form-error > span')
    //             .should('exist')
    //     })
    // })
    // it('registration no second pass', () => {
    //     cy.fixture('bad_reg').then(data => {
    //         cy.log('Переход на страницу регистрации')
    //         cy.visit("https://dev.profteam.su/registration")
    //
    //         cy.log('Ввод логина')
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод мыла')
    //         cy.get('.form-input--email')
    //             .type(data.mail)
    //
    //         cy.log('Ввод пароля')
    //         cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get(':nth-child(4) > .button')
    //             .click()
    //     })
    // })
    // it('registration bad surname', () => {
    //     cy.fixture('bad_reg').then(data => {
    //         cy.log('Переход на страницу регистрации')
    //         cy.visit("https://dev.profteam.su/registration")
    //
    //         cy.log('Ввод логина')
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод мыла')
    //         cy.get('.form-input--email')
    //             .type(data.mail)
    //
    //         cy.log('Ввод пароля')
    //         cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Ввод пароля ещё раз')
    //         cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get(':nth-child(4) > .button')
    //             .click()
    //
    //         cy.log('Ввод некорректной фамилии')
    //         cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.bad_surname)
    //
    //         cy.log('Проверка появилась ли ошибка')
    //         cy.get('.form-error > span')
    //             .should('exist')
    //     })
    // })
    // it('registration bad name', () => {
    //     cy.fixture('bad_reg').then(data => {
    //         cy.log('Переход на страницу регистрации')
    //         cy.visit("https://dev.profteam.su/registration")
    //
    //         cy.log('Ввод логина')
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.login)
    //
    //         cy.log('Ввод мыла')
    //         cy.get('.form-input--email')
    //             .type(data.mail)
    //
    //         cy.log('Ввод пароля')
    //         cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Ввод пароля ещё раз')
    //         cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
    //             .type(data.password)
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get(':nth-child(4) > .button')
    //             .click()
    //
    //         cy.log('Ввод фамилии')
    //         cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.surname)
    //
    //         cy.log('Ввод некорректного имени')
    //         cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
    //             .type(data.bad_name)
    //
    //         cy.log('Проверка появилась ли ошибка')
    //         cy.get('.form-error > span')
    //             .should('exist')
    //     })
    // })
    it('registration bad patronym', () => {
        cy.fixture('bad_reg').then(data => {
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
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.surname)

            cy.log('Ввод имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                .type(data.name)

            cy.log('Ввод некорректного отчества')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
                .type(data.bad_patronym)

            cy.log('Проверка появилась ли ошибка')
            cy.get('.form-error > span').should('exist')
        })
    })
})