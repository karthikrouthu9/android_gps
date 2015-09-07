function checkloginpassword()
    {
	
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
       	var json ='{"result":"E-10003 :" ,"message": "Please Check Internet Connection Settings"}';

		obj = JSON.parse(json);

	

	document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please Check Internet Connection Settings</div>";
	
 				window.location='./first_screen.html';
                return true;
               
    }
   
    var c = document.getElementById("registrationcode1");
    return checkloginpin(c.value)
   


}


    function checkloginpin(loginpin1) 
{
var d = document.getElementById("device_uuid");

var loginpin = /^\d{4}$/; 

	if (loginpin.test(loginpin1)) 
		{
		
	$.ajax({
		 url:"http://183.82.96.212:8080/m_service/user/login",
		 data:"username="+d.value+"&password="+loginpin1,
		 type:"POST",
		 dataType:"json",	
		 success:function(data)
		 {
		
		 	//alert("Data from Server"+JSON.stringify(data));
		 	window.location='./patient_selection.html';
		 	
		 },
		 error:function(jqXHR,textStatus,errorThrown)
		 {
		 
		 	document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>"+errorThrown+"</div>";
		 	
		 	
		 }
		});
		
		return false;
		}
else
{

var json ='{"result":"E-10002 :","message": "Device Log-In Pin must contain 4-digits"}';


	obj = JSON.parse(json);


document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>"+obj.message+"</div>";

return false;

}
}

