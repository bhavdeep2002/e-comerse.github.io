function filter(){
    var lowerlimit= document.getElementById("l").value;
    var upperlimit= document.getElementById("up").value;
     const a =[2,30,40,60,20];
    for(var i=0;i<a.length;i++){
        if(a[i]>=lowerlimit && a[i]<=upperlimit){
            document.write(a[i]+"<br>");
        }
    }
}