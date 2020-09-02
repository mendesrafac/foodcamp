var elements = Array.from( document.querySelectorAll("article.food"));

elements.forEach( function(ele){
   ele.addEventListener( "click", function(){
      elements.forEach( function( ele ){
         ele.classList.remove("selected");
      });
      ele.classList.add("selected");
   });
});