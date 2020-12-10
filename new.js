var i=0,k=0;
$(document).ready(function(){
  var interval = setInterval(imageSlides, 3000); 

$('#rightButton').click(nextSlide);
$('#leftButton').click(previousSlide);


$('#icon1,#icon2,#icon3').click(function(){
  clearInterval(interval);
  
    $('.ico').css('color','transparent')
  var mid=this.id;
  
  $(`#${mid}`).css('color','#FF1493');
 
  interval = setInterval(imageSlides, 3000);
  previousSlide();
   
});

function imageSlides(){
  

    if(i==2){
      $('#icon3').css('color','#FF1493')
      $('#icon1').css('color','transparent')
      $('#icon2').css('color','transparent')
      i=0;
      k=1;
    }
    if(i==1){
      $('#icon2').css('color','#FF1493')
      $('#icon1').css('color','transparent')
      i++;
    }
    if(i==0 && k==0){
      $('#icon1').css('color','#FF1493')
      $('#icon3').css('color','transparent')
      i++;
    }
    k=0;

   
    var firstSlide = $('#slider').find('#images img:first');
    var width = firstSlide.width();
  
    firstSlide.animate({marginLeft: -width }, 700, function(){
      var lastSlide = $('#slider').find('#images img:last');
      lastSlide.after(firstSlide);
      firstSlide.css({marginLeft: 0});
    });
  }



function previousSlide(){
  clearInterval(interval);
  var currentSlide = $('#slider').find('#images img:first');
  var width = currentSlide.width();
  var previousSlide = $('#slider').find('#images img:last')
  previousSlide.css({marginLeft: -width})
  currentSlide.before(previousSlide);
  previousSlide.animate({marginLeft: 0}, 700, function(){
    interval = setInterval(imageSlides, 3000);
  });
}

function nextSlide(){
clearInterval(interval);
  imageSlides()
  interval = setInterval(imageSlides, 3000);
}




});
