//fonction lorsque on appuie sur une touche de direction, le carré se déplace
$(function(){ // Fonction Doc Ready


  // VERSION ACTION KEY
  $('#actionkey').keydown(function(key){
    console.log(key.which);
    if(key.which == 38){
      if($('.container').offset().top <= 0){
        $('.container').offset({top:$(window).width()});
      }
      $('.container').css('margin-top','-=10px');
    }

    if(key.which == 40){
      if($('.container').offset().top >= $(window).height() ){
        $('.container').offset({top:0});
      }
      $('.container').css('margin-top','+=10px');
    }

    if(key.which == 37){
      if($('.container').offset().left <= 0){
        $('.container').offset({left:$(window).width()});
      }
      $('.container').css('margin-left','-=10px');
    }

    if(key.which == 39){
      if($('.container').offset().left >= $(window).width() ){
        $('.container').offset({left:0});
      }
      $('.container').css('margin-left','+=10px');
    });// fin de keydown



// VERSION AVEC BOUTONS

    $('#btnright').click(function(){
      if($('.container').offset().left >= $(window).width() ){
        $('.container').offset({left:0});
      }
      $('.container').css('margin-left','+=10px');
    });

    $('#btndown').click(function(){
      if($('.container').offset().top >= $(window).height() ){
        $('.container').offset({top:0});
      }

      $('.container').css('margin-top','+=10px');
    });

    $('#btnleft').click(function(){
      if($('.container').offset().left <= 0){
        $('.container').offset({left:$(window).width()});
      }
      $('.container').css('margin-left','-=10px');
    });

    $('#btnup').click(function(){
      if($('.container').offset().top <= 0){
        $('.container').offset({top:$(window).width()});
      }
      $('.container').css('margin-top','-=10px');
    });
  }); // fin Doc Ready
