
function check(username) 
{

if (username == "") 
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Username is Required</div>";

return false;
}
else
{
	
return true;
}
}

function checkpassword(password1) 
{


if (password1) 
{

	var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
       
        
 
       var json ='{"result":"E-10003 :","message": "Please Check Internet Connection Settings"}';

	obj = JSON.parse(json);

	            window.location='./first_screen.html';
                return false;
    }
    else
    {
		return true;
    }
	 
    }
 
else
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Password is Required</div>";
return false;
}
}

    

function formValidation()  
{ 


var u = document.getElementById("username1");

var p = document.getElementById("password1");


    
    
   
    	if(check(u.value))
    	{
    		
    			if(checkpassword(p.value))
    			{
    
   makeCorsRequest_register(u.value,p.value);
   				return false;
    			}
    				else
    			{
    				return false;
    			}
    	
}
return false;






}




    
    function makeCorsRequest_register(username,password)
     {
     
 
 var name=username;
 var pass=password;

var d = document.getElementById("device_uuid");
var n = document.getElementById('device_name');
var m = document.getElementById("device_model");
var p = document.getElementById("device_platform");
var v = document.getElementById("device_version");






$.post( "http://183.82.96.212:8080/?q=m_service/m_resources/register_device" , { username:encodeURIComponent(name),password:encodeURIComponent(pass),pin:encodeURIComponent(""),device_uuid:encodeURIComponent(d.value), device_name:encodeURIComponent(""),device_model:encodeURIComponent(""),device_platform:encodeURIComponent(""), device_version:encodeURIComponent(""), device_already_registered:encodeURIComponent("1")}, function( data ) {

	
		bootbox.dialog({
  message: "New user registered successfully and user added to your profile",
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {

		
  
   window.location='./log-in.html';
    
      }
    
    }
    
    
  }
});
		
      
}, "json").fail(function() {

//var json ='{"result":"E-10001 :","message": "Invalid username or password"}';

bootbox.dialog({
  message: "Registration Un-Successful.",
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
  
   
    
      }
    
    }
    
    
  }
});
	obj = JSON.parse(data);
		
		return false;
		

});
}