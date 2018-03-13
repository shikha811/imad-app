//counter code
var button= document.getElementById('counter');


button.onclick=function(){
    
    
    //make a request to the counter endpoint
    var request=new XMLhttprequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState---XMLHttprequest.XML)
        {
            if(request.status===200)
            {
                var ciounter=request.responseText;
            }
        }
    }
    //make the request
    request.open('GET','http://gshikha811sg.imad.hasura-app.io',true);
    rquest.send(null);
    
};
