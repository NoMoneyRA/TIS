describe('Vacancies', () => {
    // it('create vacancies', () => {
    //     cy.fixture('employer').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit("https://dev.profteam.su/login")
    //
    //         cy.log('Ввод логина студента')
    //         cy.get('.form-input--text').type(data.login)
    //
    //         cy.log('Ввод пароля')
    //         cy.get('.form-input--password').type(data.password)
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get(':nth-child(3) > .button').click()
    //         cy.wait(3000);
    //
    //         cy.log('Переход на страницу вакансий')
    //         cy.get(':nth-child(7) > .menu-item__item-name').click()
    //
    //         cy.log('Нажать на "Создать вакансию"')
    //         cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click().viewport(1200, 1000)
    //         cy.wait(1000);
    //
    //         cy.log('Ввод должности')
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
    //             .type(data.species, {force: true})
    //
    //         cy.log('Выбор фиксированной ЗП')
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(3)').click()
    //
    //         cy.log('Ввод ЗП')
    //         cy.get('.form-input--number').type(data.salary)
    //
    //         cy.log('Открыть типы занятости')
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected').click()
    //
    //         cy.log('Выбор тип занятости "Дистант"')
    //         cy.get('.form-select__items > :nth-child(2)').click()
    //
    //         cy.log('Выбор своего графика')
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3)').click()
    //
    //         cy.log('Ввод графика')
    //         cy.get('.form-control--responsive > .form-input--text').type(data.schedule)
    //
    //         cy.log('Ввод требований')
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requirements)
    //
    //         cy.log('Ввод обязанностей')
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.responsibilities)
    //
    //         cy.log('Клик "Обновить вакансию"')
    //         cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click()
    //     })
    // })
    it('search vacancies', () => {
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

            cy.log('Переход на страницу вакансий')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label')
                .click()

            cy.log('Ввод названия')
            cy.get('.form-input--text')
                .type(data.search_text)

            cy.log('Нажать "Поиск"')
            cy.get('div.search-input__field > .button')
                .click()

            cy.log('Выбор ЗП "По договорённости"')
            cy.get('.radio-list > :nth-child(2)').click()

            cy.log('Открыть выбор графика')
            cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()

            cy.log('Выбор "Полная занятость"')
            cy.get('.form-select__items > :nth-child(2)').click()

            cy.log('Открыть тип занятости')
            cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click()

            cy.log('Выбор "Очный"')
            cy.get('.form-select__items > :nth-child(2)').click()
            cy.wait(2000);

            cy.log('Сброс фильтра')
            cy.get('.custom-modal-mobile__buttons > .button').click()
        })
    })
})