function search(){
    var search =document.getElementById("in").value;
    var productlist=document.getElementsByClassName("card");
    var producttitle=document.getElementsByClassName("card-title");
    var found =0;
    var index;
    var count=0;
  for(var i=0;i<productlist.length;i++){
    if(producttitle[i].innerHTML==search){
        index=i;
        found =1;
        break;
      }
  }
  if(found==1){
    for(var j=0;j<productlist.length;j++){
        if(index==j){
            productlist[j].style.display="block";
        }
        else{
            productlist[j].style.display="none";
        }
    }
  }
  else{
       document.write("Search not found");
  }
}