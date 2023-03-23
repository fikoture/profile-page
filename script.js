console.log("page loaded..asdasdasd.");
var bconreq=2
var connum=500
function changeName() {
    var name=document.querySelector("#name1");
    name.innerHTML = "Fikret Ture";

}
function remfunctiondel() {
var element = document.querySelector(".card-list-item");
   element.remove()
   bconreq--;
   var bedgereq = document.querySelector(".badge") ;
   bedgereq.innerHTML=bconreq;
   
}

function remfunction() {
    var element = document.querySelector(".card-list-item");
       element.remove()
       connum++;
       var connumber=document.querySelector(".badge2");
       connumber.innerHTML=connum;
       bconreq--;
   var bedgereq = document.querySelector(".badge") ;
   bedgereq.innerHTML=bconreq;
    }
    
