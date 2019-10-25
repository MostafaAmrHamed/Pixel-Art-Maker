
function makeGrid()
{
    
    var h       = document.getElementById("height").value;
    var w       = document.getElementById("width").value;
    var result  = "<table>";
    var num = 0;
    for(var i = 0 ; i<h ; i++)
    {
        
        result +="<tr>";
        for(var j = 0 ; j<w ; j++)
        {
            num ++;
            result +="<td id='td"+num+"'onclick='tableData(this.id)'>"+"</td>";
        }
        result +="</tr>";
    }
    result  += "</table>";
    document.getElementById("pixelCanvas").innerHTML = result;
   
}

function tableData(clicked_id)
{ 
    var colorDetect = document.getElementById("colorPicker").value;
    document.getElementById(clicked_id).style.backgroundColor = colorDetect;
}
