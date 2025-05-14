describe('needs', () => {
    it('search needs', () => {
        cy.fixture('employer').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit("https://dev.profteam.su/login")

            cy.log('Ввод логина студента')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
            cy.wait(3000);

            cy.log('Переход на страницу потребностей')
            cy.get(':nth-child(1) > .header__nav > [href="/needs"] > .header__label').click()

            cy.log('Ввод названия')
            cy.get('.form-input--text').type(data.search_text)

            cy.log('Нажать "Поиск"')
            cy.get('div.search-input__field > .button').click()

            cy.log('Выбор ЗП "По договорённости"')
            cy.get('.radio-list > :nth-child(2)').click()

            cy.log('Открыть тип занятости')
            cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()

            cy.log('Выбор "Очный"')
            cy.get('.form-select__items > :nth-child(2)').click()
            cy.wait(2000);

            cy.log('Сброс фильтра')
            cy.get('.custom-modal-mobile__buttons > .button').click()
        })
    })
})