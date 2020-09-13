$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SpaceX API GET Service.feature");
formatter.feature({
  "line": 2,
  "name": "Space X API Requests",
  "description": "",
  "id": "space-x-api-requests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "",
  "description": "Get all the details for given launchId",
  "id": "space-x-api-requests;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have launchId with URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I send the GET request for given launchId",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the WS GET response should have success response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_have_launchId_with_URL()"
});
formatter.result({
  "duration": 332571800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_send_the_GET_request_for_given_launchId()"
});
formatter.result({
  "duration": 1568622100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "stepDefinition.the_WS_GET_response_should_have_success_response(int)"
});
formatter.result({
  "duration": 438867600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "POST all the details to create new launchId",
  "description": "",
  "id": "space-x-api-requests;post-all-the-details-to-create-new-launchid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I set post posts API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I set HEADER param request content type as \"application/json.\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "set request body",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "send POST HTTP request -\u003eThis is actual test step of sending a post request",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I receive valid HTPP response code 201",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Response body \"POST\" is non-empty-\u003e This is verification of response body",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "UPDATE details for a given launchId",
  "description": "",
  "id": "space-x-api-requests;update-details-for-a-given-launchid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I Set PUT posts api endpoint for givenLaunchId",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I Set Update request Body",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Send PUT HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I receive valid HTTP response code 200 for \"PUT.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Response BODY \"PUT\" is non-empty",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 28,
  "name": "DELETE given launchId",
  "description": "",
  "id": "space-x-api-requests;delete-given-launchid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I Set DELETE posts api endpoint for gven launcId",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I Send DELETE HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I receive valid HTTP response code 200 for \"DELETE.\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});