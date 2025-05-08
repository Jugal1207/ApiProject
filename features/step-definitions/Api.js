import axios  from 'axios';
import { expect } from 'chai';
import { Given, When, Then } from '@wdio/cucumber-framework';

let baseUrl;
let lastResponse;

// --------- Background ---------
Given(/^the API is running at "(.+)"$/, (url) => {
  baseUrl = url;
});

// --------- CREATE ---------
When(/^I create an employee with:$/, async (table) => {
  const data = table.rowsHash();
  // parse JSON strings into objects/arrays
  if (typeof data.skills === 'string')  data.skills  = JSON.parse(data.skills);
  if (typeof data.contact === 'string') data.contact = JSON.parse(data.contact);

  try {
    lastResponse = await axios.post(
      `${baseUrl}/create/employee`,
      data
    );
  } catch (err) {
    lastResponse = err.response;
  }
});

// --------- GET ALL ---------
When(/^I fetch all employees$/, async () => {
  try {
    lastResponse = await axios.get(`${baseUrl}/get/allemployees`);
  } catch (err) {
    lastResponse = err.response;
  }
});

// --------- GET BY ID ---------
When(/^I fetch employee "([^"]+)"$/, async (empId) => {
  try {
    lastResponse = await axios.get(
      `${baseUrl}/get/employee/${empId}`
    );
  } catch (err) {
    lastResponse = err.response;
  }
});

// --------- UPDATE ---------
When(/^I update employee "([^"]+)" with:$/, async (empId, table) => {
  const updates = table.rowsHash();
  try {
    lastResponse = await axios.put(
      `${baseUrl}/update/employee/${empId}`,
      updates
    );
  } catch (err) {
    lastResponse = err.response;
  }
});

// --------- DELETE ---------
When(/^I delete employee "([^"]+)"$/, async (empId) => {
  try {
    lastResponse = await axios.delete(`${baseUrl}/delete/employee/${empId}`);
  } catch (err) {
    lastResponse = err.response;
  }
});


// --------- ASSERTIONS ---------
Then(/^the response code should be (\d+)$/, (code) => {
  expect(lastResponse.status).to.equal(parseInt(code, 10));
});

Then(/^I should see "([^"]+)" in the list$/, (empId) => {
  const ids = lastResponse.data.map(emp => emp.employeeId);
  expect(ids).to.include(empId);
});


