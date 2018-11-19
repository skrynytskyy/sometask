Feature: Statuses feature

  I want to be able to change status of crew members

  Background: Opening testapp and clearing filters
    Given I open testapp
    And I clear filtering


  Scenario: Crew member can be moved from 'Applied' to 'Interviewing' status
    Given I change status of crew member with name 'julia cunningham' to 'Applied'
    When I change status of crew member with name 'julia cunningham' to 'Interviewing'
    Then Status of crew member with name 'julia cunningham' is 'Interviewing'

  Scenario: Crew member can be moved from 'Interviewing' to 'Hired' status
    Given I change status of crew member with name 'julia cunningham' to 'Interviewing'
    When I change status of crew member with name 'julia cunningham' to 'Hired'
    Then Status of crew member with name 'julia cunningham' is 'Hiring'

  Scenario: Crew member can be moved from 'Hired' to 'Interviewing' status
    Given I change status of crew member with name 'julia cunningham' to 'Hired'
    When I change status of crew member with name 'julia cunningham' to 'Interviewing'
    Then Status of crew member with name 'julia cunningham' is 'Interviewing'

  Scenario: Crew member can be moved from 'Interviewing' to 'Applied' status
    Given I change status of crew member with name 'julia cunningham' to 'Interviewing'
    When I change status of crew member with name 'julia cunningham' to 'Applied'
    Then Status of crew member with name 'julia cunningham' is 'Applied'

  Scenario: Crew member cannot be moved from 'Applied' to 'Hired' status directly
    When I change status of crew member with name 'julia cunningham' to 'Applied'
    Then I cannot change crew member status to 'Hired'

  Scenario: Crew member cannot be moved from 'Hired' to 'Applied' status directly
    When I change status of crew member with name 'julia cunningham' to 'Hired'
    Then I cannot change crew member status to 'Applied'