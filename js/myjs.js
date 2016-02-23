
  jQuery( "#desc1cion" ).click(function() {
	jQuery( "#desc2, #desc3, #desc4, #desc5" ).removeClass( "showdesc" );
   jQuery( "#desc4cion, #desc2cion, #desc3cion, #desc5cion" ).removeClass( "ourcompanytabstoggle" );
  jQuery( "#desc1" ).toggleClass( "showdesc" );
  jQuery( this ).toggleClass( "ourcompanytabstoggle" );
 
});
  jQuery( "#desc2cion" ).click(function() {
  jQuery( "#desc1, #desc3, #desc4, #desc5" ).removeClass( "showdesc" );
  jQuery( "#desc4cion, #desc3cion, #desc1cion, #desc5cion" ).removeClass( "ourcompanytabstoggle" );
  jQuery( "#desc2" ).toggleClass( "showdesc" );
  jQuery( this ).toggleClass( "ourcompanytabstoggle" );
  

});
jQuery( "#desc3cion" ).click(function() {
  jQuery( "#desc2, #desc1, #desc4, #desc5" ).removeClass( "showdesc" );
  jQuery( "#desc1cion, #desc4cion, #desc2cion, #desc5cion" ).removeClass( "ourcompanytabstoggle" );
  jQuery( "#desc3" ).toggleClass( "showdesc" );
  jQuery( this ).toggleClass( "ourcompanytabstoggle" );
});
jQuery( "#desc4cion" ).click(function() {
    jQuery( "#desc2, #desc3, #desc1, #desc5" ).removeClass( "showdesc" );
    jQuery( "#desc1cion, #desc2cion, #desc3cion, #desc5cion" ).removeClass( "ourcompanytabstoggle" );
    jQuery( "#desc4" ).toggleClass( "showdesc" );
    jQuery( this ).toggleClass( "ourcompanytabstoggle" );
});

jQuery( "#desc5cion" ).click(function() {
    jQuery( "#desc2, #desc3, #desc4, #desc1" ).removeClass( "showdesc" );
    jQuery( "#desc1cion, #desc2cion,#desc4cion, #desc3cion" ).removeClass( "ourcompanytabstoggle" );
    jQuery( "#desc5" ).toggleClass( "showdesc" );
    jQuery( this ).toggleClass( "ourcompanytabstoggle" );
 
});

jQuery( ".faq_paragraph1" ).hide();
jQuery( ".faq_paragraph2" ).hide();
jQuery( ".faq_paragraph3" ).hide();
jQuery( ".faq_paragraph4" ).hide();

jQuery( ".faq_header1" ).click(function() {
  jQuery( ".faq_paragraph1" ).slideToggle(250);
});

jQuery( ".faq_header2" ).click(function() {
  jQuery( ".faq_paragraph2" ).slideToggle(250);
}); 

jQuery( ".faq_header3" ).click(function() {
  jQuery( ".faq_paragraph3" ).slideToggle(250);
}); 

jQuery( ".faq_header4" ).click(function() {
  jQuery( ".faq_paragraph4" ).slideToggle(250);
});


$(".navbar li").on('click', function(){
    $(".navbar li").removeClass('active');
    $(this).addClass('active');
});
