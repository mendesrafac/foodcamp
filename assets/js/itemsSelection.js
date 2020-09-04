/* -------------------------- SELECT ITEM ---------------------------*/

/* Select one option among each class choice on click,
setting border on it, deactivating the rest that belongs 
to the same class */

var foodElements = Array.from(document.querySelectorAll("article.food"));
var drinkElements = Array.from(document.querySelectorAll("article.drink"));
var dessertElements = Array.from(document.querySelectorAll("article.dessert"));

var priceToPay = 0;

function selectItem (elements) {

   var previousPrice = 0;

   elements.forEach(function(element){ // For each element in elements 

      element.addEventListener("click", function(){ // when a click happens
         
         var priceString = element.querySelector(".price").innerText // gets element price in format "R$ X.XX"
         var priceSubstring = priceString.substring(3); // gets substring without "R$ "
         var itemPrice = parseFloat(priceSubstring); // converts to float

         if (!previousPrice) previousPrice = itemPrice; // if its the first item clicked, previous price receives itemPrice
         
         elements.forEach(function(element){ // for each element in elements
            if (element.classList.contains("selected")){ // if the element was previously selected

               priceToPay -= previousPrice; // removes previous selected price from the subtotal               
               element.classList.remove("selected"); // and remove the selected CSS class so we cant select 2 at the same category
            } 
         });

         element.classList.add("selected"); // add CSS class selected to get a green border at the new item
         
         previousPrice = itemPrice; // sets previous price with updated itemPrice for the next loop;
         priceToPay += itemPrice; // adds the selected item price into total price

      });
   });
}
