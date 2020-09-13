package stepDefinition;

import static org.testng.Assert.assertEquals;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;


public class stepDefinition {

	private static final String BASE_URL = "https://api.spacexdata.com/v4/launches";


@Given("^I have launchId with URL$")
public void i_have_launchId_with_URL() throws Throwable {
	RestAssured.baseURI = BASE_URL;
	RequestSpecification request = RestAssured.given();

}

@When("^I send the GET request for given launchId$")
public void i_send_the_GET_request_for_given_launchId() throws Throwable {


	RequestSpecification request = RestAssured.given();
		 Response responseget = request.get("/latest");
	
}

@Then("^the WS GET response should have success response \"([^\"]*)\"$")
public void the_WS_GET_response_should_have_success_response(int responseCode) throws Throwable {
	
RequestSpecification request = RestAssured.given();
Response responseget = request.get("/latest");
	 int  statusCode = responseget.getStatusCode();
	Assert.assertEquals(statusCode, responseCode);
 
}
@Given("^I set post posts API endpoint$")
public void i_set_post_posts_API_endpoint() throws Throwable {

	 
	 RestAssured.baseURI ="http://jsonplaceholder.typicode.com";
	 RequestSpecification request = RestAssured.given();
	 
	 JSONObject requestParams = new JSONObject();
	 requestParams.put("launchpad", "5e9e4502f509094188566f88");
	 requestParams.put("name", "Starlink-11 (v1.0)");
	 requestParams.put("date_unix", "1599137160");

	 request.body(requestParams.toJSONString());
	 Response response = request.post("/latest");
	 
	 int statusCode = response.getStatusCode();
	 Assert.assertEquals(statusCode, 201);
    
}

@When("^I set HEADER param request content type as \"([^\"]*)\"$")
public void i_set_HEADER_param_request_content_type_as(String arg1) throws Throwable {


	
    
}

@When("^set request body$")
public void set_request_body() throws Throwable {
	 
    
}

@When("^send POST HTTP request ->This is actual test step of sending a post request$")
public void send_POST_HTTP_request_This_is_actual_test_step_of_sending_a_post_request() throws Throwable {
    
    
}

@Then("^I receive valid HTPP response code (\\d+)$")
public void i_receive_valid_HTPP_response_code(int arg1) throws Throwable {
    
    
}

@Then("^Response body \"([^\"]*)\" is non-empty-> This is verification of response body$")
public void response_body_is_non_empty_This_is_verification_of_response_body(String arg1) throws Throwable {
    
    
}

@Given("^I Set PUT posts api endpoint for givenLaunchId$")
public void i_Set_PUT_posts_api_endpoint_for_givenLaunchId() throws Throwable {
    
    
}

@When("^I Set Update request Body$")
public void i_Set_Update_request_Body() throws Throwable {
    
    
}

@When("^Send PUT HTTP request$")
public void send_PUT_HTTP_request() throws Throwable {
    
    
}

@Then("^I receive valid HTTP response code (\\d+) for \"([^\"]*)\"$")
public void i_receive_valid_HTTP_response_code_for(int arg1, String arg2) throws Throwable {
    
    
}

@Then("^Response BODY \"([^\"]*)\" is non-empty$")
public void response_BODY_is_non_empty(String arg1) throws Throwable {
    
    
}

@Given("^I Set DELETE posts api endpoint for gven launcId$")
public void i_Set_DELETE_posts_api_endpoint_for_gven_launcId() throws Throwable {
    
    
}

@When("^I Send DELETE HTTP request$")
public void i_Send_DELETE_HTTP_request() throws Throwable {
    
    
}
}
