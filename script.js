/* Select one option among each class choice on click,
setting border on it, deactivating the rest that belongs 
to the same class */

var foodElements = Array.from(document.querySelectorAll("article.food"));
var drinkElements = Array.from(document.querySelectorAll("article.drink"));
var dessertElements = Array.from(document.querySelectorAll("article.dessert"));

function applySelectedBorder (elements) {
   elements.forEach(function(element){
      element.addEventListener("click", function(){
         elements.forEach(function(element){
            element.classList.remove("selected");});
         element.classList.add("selected");
      });
   });
}

applySelectedBorder(foodElements);
applySelectedBorder(drinkElements);
applySelectedBorder(dessertElements);