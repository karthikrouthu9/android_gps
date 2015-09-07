
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


var username = document.getElementById("username1").value;

var password = document.getElementById("password1").value;
//var device_uuid = '8dc6cf319947e729';
var device_uuid = device.uuid;
	

    
    
   
    	if(check(username))
    	{
    		
    			if(checkpassword(password))
    			{
    					$.post( "http://183.82.96.212:8080/m_service/m_resources/check_user_valid" , {username:username,password:password,device_uuid:device_uuid}, function( data ) {
    					if(data.response=='0')
    	  			    	
      				  	{
    						
    						
    						
    						bootbox.dialog({
    	      					  message: "Username and Password Matched",
    	      					  title: "Message",
    	      					  buttons: {
    	      					    success: {
    	      					      label: "OK",
    	      					      className: "btn-danger",
    	      					      callback: function() {
    	      					  
    	      					    	window.location='./create_pin.html';	   
    	      					    
    	      					      }
    	      					    
    	      					    }
    	      					    
    	      					    
    	      					  }
    	      					});
    						
      					}
      				  else
      					
      				  	{
      					
      					bootbox.dialog({
      					  message: data.response_message,
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
      					
      						return false;
      					}
      				
    					  
    				}, "json").fail(function() {
    					
    					bootbox.dialog({
        					  message: data.response_message,
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
    					//document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>"+data.response_message+"</div>";
	    				
    				});;
    			}
    				else
    			{
    				return false;
    			}
    	
    			
			}
    	return false;
	}