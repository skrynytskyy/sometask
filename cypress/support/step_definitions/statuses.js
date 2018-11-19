

var statuses = ["Applied", "Interviewing", "Hired"]

function getCurrentStatus(crewName) {
    // return cy.get(".CrewMemeber-name div:nth-child(1):contains(" + name + ")").parent(".App-column").find("h2").invoke('text')

    return Cypress.$(cy.get(".CrewMemeber-name div:nth-child(1):contains(" + name + ")").closest(".App-column").find("h2")).text()
    // return Cypress.$(cy.get("h2")).text()
}

function moveToStatus(crewName, status) {

    var currentStatus = getCurrentStatus(crewName)

    console.log("currentStatus = " + currentStatus)

    var curIndex = statuses.indexOf(currentStatus)
    var statusIndex = statuses.indexOf(status)

    if(curIndex = statusIndex)
        return

    if(curIndex > statusIndex) {
        // while (getCurrentStatus(crewName) !== status )
            cy.get(".CrewMemeber-name").closest(".CrewMember-container").find("button").eq(1).click()
    }else{
        // while (getCurrentStatus(crewName) !== status )
            cy.get(".CrewMemeber-name").closest(".CrewMember-container").find(".CrewMember-up").click()
    }
}


Given(/I change status of crew member with name '(.*)' to '(.*)'/, (crewName, status2) => {
    moveToStatus(crewName, status2)
})



Given(/Status of crew member with name '(.*)' is '(.*)'/, (crewName, status2) => {
    assert.equal(getCurrentStatus(crewName), status2)
})


