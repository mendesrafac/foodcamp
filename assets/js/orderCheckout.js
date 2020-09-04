/* -------------------------- CHECKOUT ---------------------------*/

/* Activating the button for sale */

function isOrderCompleted () {
    var order = document.querySelectorAll(".selected"); // get a nodeList with all selected items
    if (order.length === 3) { // if nodeList length = 3, all 3 items were selected
       document.querySelector(".checkout").removeAttribute("disabled"); // removes disabled attribute
       document.querySelector(".checkout p").innerHTML = "Fechar o pedido";
       orderCheckout(); // calls order checkout
    }
 }
 
 /* Redirects order to whatsapp */
 
function orderCheckout () {
   var checkoutPrice = priceToPay.toFixed(2); // rounds price value
   var selectedFood = document.querySelector(".food.selected .name").innerText;
   var selectedDrink = document.querySelector(".drink.selected .name").innerText;
   var selectedDessert = document.querySelector(".dessert.selected .name").innerText;

   descriptionCheckoutOrder(checkoutPrice, selectedFood, selectedDrink, selectedDessert);
      
   var checkOutWppMessage =
      "Olá, gostaria de fazer o pedido:\n" +
      "- Prato: " + selectedFood + "\n" +
      "- Bebida: " + selectedDrink + "\n" +
      "- Sobremesa: " + selectedDessert +" \n" +
      "Total: R$ " + checkoutPrice;
      
   var wppLink = "https://wa.me/5521974393491?text=" + encodeURIComponent(checkOutWppMessage); // encodes wpp message
   document.querySelector(".modal a").setAttribute("href", wppLink); // adds href link to button
 }