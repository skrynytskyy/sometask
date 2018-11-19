Feature: Filter feature

  I want to be able to filter displayed crew members

  Background: Opening testapp and clearing filters
    Given I open testapp
    And I clear filtering
    
  Scenario: Filtering by name shows only crew member cards with that name
    When I search for crew member with name 'julia'
    Then I see only cards with crew member who's name contains 'julia'

  Scenario: Filtering by city shows only crew member cards from that city
    When I search for crew member with city 'worcester'
    Then I see only cards with crew member who's from the city 'worcester'

  Scenario: Filtering by wrong city shows zero results
    When I search for crew member with city 'nonExistentCity'
    Then I see 0 cards displayed

  Scenario: Clear filtering is working
    When I search for crew member with city 'nonExistentCity'
    And I clear filtering
    Then I see all cards displayed