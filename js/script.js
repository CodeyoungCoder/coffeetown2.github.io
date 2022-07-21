function calcbill(){
    var qty = parseInt(document.getElementById("quantity").value);
  document.getElementById("bill").innerHTML = qty*15;

}