@SmokeTest 
Feature: Space X API Requests 


Scenario: 
	Get all the details for given launchId 
	Given I have launchId with URL 
	When  I send the GET request for given launchId 
	Then  the WS GET response should have success response "200" 
	
Scenario: POST all the details to create new launchId 
	Given I set post posts API endpoint 
	When I set HEADER param request content type as "application/json." 
	And set request body 
	And send POST HTTP request -> 
	Then I receive valid HTPP response code 201 
	And Response body "POST" is non-empty-> This is verification of response body 
	
	
Scenario: UPDATE details for a given launchId 
	Given I Set PUT posts api endpoint for givenLaunchId 
	When I Set Update request Body 
	And Send PUT HTTP request 
	Then I receive valid HTTP response code 200 for "PUT." 
	And Response BODY "PUT" is non-empty 
	
	
Scenario: DELETE given launchId 
	Given I Set DELETE posts api endpoint for gven launcId 
	When I Send DELETE HTTP request 
	Then I receive valid HTTP response code 200 for "DELETE." 
	
	
	#As this dummy API was only supporting GET request,I have not implemeted steps for POST,PATCH, DELETE
	#please find below the critical scenarios which can be automated
	#	1. Verify GET request response if launchId does not exist, it should be 404 Not found or similar
	#	2.Verify GET request response if incorrect parameters passed, it should be 400 Bad request with error message
	#	3.Verify GET request response if correct parameters passed, it should give correct details in response
	#	4. Verify POST Method response when valid data is passed in payload, it should be 201
	#	5.Verify POST Method response when invalid data is passed in payload , it should throw 400 bad request , wth relavent error messages
	#	6. Verify POST Method reponse when header mismatch is request , it should give 409 error with relavent error message
	#	7. Verify PATCH Method response when valid data is passed in payload, it should be 200 
	#	8.Verify PATCH Method response when invalid data is passed in payload , it should throw 400 bad request , wth relavent error messages
	#	9. Verify PATCH Method reponse when header mismatch is request , it should give 409 error with relavent error message
	#	10. Verify PATCH request response if launchId does not exist, it should be 404 Not found or similar
	#	11. Verify DELETE request response if launchId does not exist, it should be 404 Not found or similar
	
	#What I could have implemeted if I got more time  
	
	#1.Data Parametarization for details entered in post and put requests via json
	#2.Properties class and file to capture properties like website etc.
	#3.Separate classes for Validations and Assertions.
	
		