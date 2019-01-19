var swapControl = true;
var divList = document.getElementById('divList');
var divTicket = document.getElementById('divTicket');
var divImput = document.getElementById('divImput');
var arrTicket = new Array()





window.onload = function() {
  console.log('Страница загружена');
}
goToTicket = function(Ticket) {
  console.log(Ticket);
  Swap(Ticket);

}
Swap = function(Ticket){
  if (swapControl==true){
    divList.style.display ="none";
    divTicket.style.display ="block";
    for(var i=0;i<=28;i++){
      document.getElementById('T'+i).style.display ="none";
    }
    document.getElementById('T'+Ticket).style.display ="block";
  }else{
    divList.style.display = "block";
    divTicket.style.display = "none";
  }
  swapControl=!swapControl;
}
