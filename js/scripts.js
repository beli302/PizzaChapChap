$(document).ready(function () {
    $("#deliver").click(function (event){
    event.preventDefault()
    // const order = document.getElementById("btn");
    // var delivery = document.addEventListener("click", function () {


        var pizzaFlavor = parseInt(document.getElementById("flavour").value);
        var pizzaSize = parseInt(document.getElementById("size").value);
        var pizzaCrust = parseInt(document.getElementById("crust").value);
        var pizzaToppings = parseInt(document.getElementById("toppings").value);
        var number = parseInt(document.getElementById("number").value);

     var total = (pizzaFlavor + pizzaSize + pizzaCrust + pizzaToppings)
     var totalCost = total * number
$(totalCost).append()
$("#pizzaFlavor option:selecte").value();
$("#pizzaSize option:selecte").value();
$("#pizzaCrust option:selecte").value();
$("#pizzaToppings option:selecte").value();
$("totalCost").value();
    })
$("#btn").click(function() {
   
    prompt(`Enter your location`);
    prompt(`Enter your number`);
    alert(`Your will be delivered to you in a few minutes,please have Ksh.200 with you and total amount of your order for delivery.`)

})
$("#pick").click(function(){
    alert("You can pick ur order in our shop")
})

});
