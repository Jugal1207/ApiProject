Feature: Employee API CRUD

  Background:
    Given the API is running at "http://localhost:4000"

  # 1) Happy-path: Create, List, Update, Delete
  Scenario: Create, read, update, delete an employee
    When I create an employee with:
      | employeeId  | E1207                  |
      | firstName   | John                 |
      | lastName    | Cena                |
      | email       | JOhn@wwe.com         |
      | age         | 42                    |
      | department  | WWE                   |
      | role        | Champion              |
      | salary      | 5000000               |
      | joiningDate | 2002-03-01            |
      | contact     | {"phone":"+1800","address":"Stadium"} |
      | skills      | ["Suplex","F5"]       |
    Then the response code should be 201

    When I fetch all employees
    Then I should see "E1207" in the list

    When I update employee "E1207" with:
      | firstName | Roman                |
      | lastName  | Reigns               |
      | email     | roman@wwe.com        |
    Then the response code should be 200

  # 2) Fetching a missing employee
  Scenario: Request an employee that doesn’t exist
    When I fetch employee "NO_SUCH_ID"
    Then the response code should be 404

  # 3) Create with missing required field
  Scenario: Creating an employee without a required field
    When I create an employee with:
      | employeeId | E555                  |
      | lastName   | NoFirstName           |
      | email      | no.first@example.com  |
    Then the response code should be 201

  # 4) Updating a nonexistent employee
  Scenario: Updating someone who isn’t in the DB
    When I update employee "EUNKNOWN" with:
      | firstName | Ghost                 |
    Then the response code should be 404

  # 5) Deleting twice should fail second time
  Scenario: Deleting an employee twice
    When I delete employee "E1207"
    Then the response code should be 200
