document.addEventListener('DOMContentLoaded', event => {

  $('#all_articles').on('click','.star', function(){
	  $(this).toggleClass("black-star");
  });
	
});