function modalWindow () {
    var modalButton = document.querySelector("footer .checkout"); 
    var modalBackground = document.querySelector(".modal-background");
    var modalClose = document.querySelector(".cancel");
 
    modalButton.addEventListener('click', function(){ 
       modalBackground.classList.add("background-active"); // shows up modal window with background when clicked
    });
 
    modalClose.addEventListener('click', function(){
       modalBackground.classList.remove("background-active"); // closes up modal window by removing bg-active class
    });
 }
 

 function descriptionCheckoutOrder (checkoutPrice, selectedFood, selectedDrink, selectedDessert){
    var foodPrice = document.querySelector(".food.selected .price").innerText;
    var drinkPrice = document.querySelector(".drink.selected .price").innerText;
    var dessertPrice = document.querySelector(".dessert.selected .price").innerText;
 
    document.querySelector(".modal .food .name").innerHTML = selectedFood;
    document.querySelector(".modal .food .price").innerHTML = foodPrice.substring(3);
 
    document.querySelector(".modal .drink .name").innerHTML = selectedDrink;
    document.querySelector(".modal .drink .price").innerHTML = drinkPrice.substring(3);
    
    document.querySelector(".modal .dessert .name").innerHTML = selectedDessert;
    document.querySelector(".modal .dessert .price").innerHTML = dessertPrice.substring(3);
    
    document.querySelector(".modal .total .price").innerHTML = "R$ " + checkoutPrice;
 }