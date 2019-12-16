const order=document.getElementById("btn");
var delivery=document.addEventListener("click",function(){


    var pizzaFlavor=parseInt(document.getElementById("flavour").value);
    var pizzaSize=parseInt(document.getElementById("size").value);
    var pizzaCrust=parseInt(document.getElementById("crust").value);
    var pizzaToppings=parseInt(document.getElementById("toppings").value);

    var totalCost=(pizzaFlavor+ pizzaSize+pizzaCrust+pizzaToppings)*number;

alert(`Hello your order has been recived amounting to ${totalCost}`);
prompt(`Enter your location`);
prompt(`Enter your number`);
alert(`Your will be delivered to you in a few minutes,please have Ksh.200 with you and total amount of your order for delivery.`)

});