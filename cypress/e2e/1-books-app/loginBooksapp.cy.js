const { faker } = require('@faker-js/faker');

const title = faker.company.catchPhrase();
const description = faker.commerce.productDescription();
const author = faker.person.fullName();

describe('Авторизация в библиотеке, тесты', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.contains('Log in').click();
    });

    it('Логин', () => {
      cy.login('bropet@mail.ru', '123');
      cy.contains('Добро пожаловать').should('be.visible', true);
    });

    it('Тест пустого поля email', () => {
      cy.login(null, '123');
      cy.get('#mail').then((elements) => {
        expect(elements[0].checkValidity()).to.be.false;
        expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
      });
    });

    it('Тест пустого поля password', () => {
        cy.login('bropet@mail.ru', null);
        cy.get('#pass').then((elements) => {
          expect(elements[0].checkValidity()).to.be.false;
          expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
        });
      });
    })

describe('Избранные книги, тесты', () => {  
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Log in').click();
        cy.login('bropet@mail.ru', '123');
      });    

    it('Тест, добавление новой книги', () => {
        cy.addBook(title, description, author);
        cy.contains(title).should('be.visible', true);
        cy.contains(author).should('be.visible', true);
    });

    it('Тест, добавление новой книги в избранное', () => {
        cy.addBook(title, description, author);
        cy.addToFavorite(title);
        cy.contains('Favorites').click();
        cy.contains(title).should('be.visible', true);
    });

    it('Тест, удаление книги из избранного', () => {
        //cy.addBook(title, description, author);
        cy.deleteFromFavorite(title);
        cy.contains(title).should("not.exist");
    });
})


  