
Given(/I search for crew member with name '(.*)'/, (name) => {
    cy.get("#name").type(name)
    cy.get("#filters button[type=submit]").click()
})


var allItemsNuber;

Given(/I clear filtering/, () => {
    cy.get("#filters button[type=button]").click()
    allItemsNuber = cy.get(".CrewMemeber-name").its('length')
})


When(/I see only cards with crew member who's name contains '(.*)'/, (name) => {
    var numberAfterFiltering = cy.get(".CrewMemeber-name div:nth-child(1):contains(" + name + ")").its('length')
    assert.notEqual(allItemsNuber, numberAfterFiltering, 'Filtering by name gives wrong result');
})


Given(/I search for crew member with city '(.*)'/, (name) => {
    cy.get("#city").type(name)
    cy.get("#filters button[type=submit]").click()
})


When(/I see only cards with crew member who's from the city '(.*)'/, (name) => {
    var numberAfterFiltering = cy.get(".CrewMemeber-name div:nth-child(2):contains(" + name + ")").its('length')
    assert.notEqual(allItemsNuber, numberAfterFiltering, 'Filtering by city gives wrong result');
})


Then(/I see (\d+) cards displayed/, (num) => {
    cy.get(".CrewMemeber-name").should("not.be.visible")
})
