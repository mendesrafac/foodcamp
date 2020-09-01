/* Uses jQuery to read files in assets/views/[filename].html and loads it
into the div that has the [data-include] option */

$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = './assets/views/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});
