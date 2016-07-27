$(function(){

  $(".niceCheck").each(

	function() {
	     changeCheckStart($(this));
	});

  $(".niceCheck").click(function(){
    var input = $(this).children('input');
    if(input.attr("checked")){
      input.removeAttr("checked");
      $(this).css({
         backgroundPosition: "0px 0px"
      });
    }else{
      input.attr("checked", "checked");
      $(this).css({
         backgroundPosition: "0px 17px"
      });
    }
  });
  function changeCheckStart(el){
    var el = el;
    var input = $(el).children('input');
    if(input.attr("checked")){
      el.css({
         backgroundPosition: "0px 17px"
      });
    };
    if(input.attr('disabled')){
      el.removeClass('niceCheck');
      el.addClass('niceCheckDisabled')
    }
  }

});
