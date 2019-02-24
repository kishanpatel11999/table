
 

function check(){
    

    var table = document.getElementById("table");
   
  /*  var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
*/
    var data = parseInt(document.getElementById("data").value);
    var data1 = parseInt(document.getElementById("data1").value);

    var row = 0;
    var cell1 = 0;
    console.log(data,data1);
    for(var i =0 ;i <data;i++){
        row = table.insertRow(i);
        for(var j=0; j<data1; j++){
            cell1 = row.insertCell(j);
            cell1.innerHTML = " " + j;
        }
        
    }
    document.getElementById("data").value = 1;
    document.getElementById("data1").value = 10;
   

}

 
