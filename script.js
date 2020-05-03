function list(){
    //creating an object//
    var xhttp =new XMLHttpRequest();
    //EVENT LISTNER
    xhttp.onreadystatechange = function(){
        //condition
        if(this.readyState==4&&this.status==200){
           // document.getElementById("demo").innerHTML=JSON.parse(this.responseText);
           var pp=JSON.parse(this.responseText);
        //console.log(pp);
        var output ='';
        
        for(var i=0;i<pp.length;i++){
            output+='<tr>';
            output+='<td>' +pp[i].slno+ '</td>';
            
            output+='<td>' +pp[i].name+ '</td>';
            
            output+='<td>' +pp[i].qty+ '</td>';
            
            output+='<td>' +pp[i].unit+ '</td>';
            
            output+='<td>' +pp[i].dept+ '</td>';
            
            output+='<td>' +pp[i].notes+ '</td>';
            output+='</tr>';

           
        }
        
        document.querySelector('.demo tbody').innerHTML=output;
    }
     }
     xhttp.open("GET","list.json",true);
     xhttp.send();
    }
    