$(document).ready(function() {

  /* WAYPOINT ANIMATE */
  $('.up').waypoint(function() {
    $(this.element).addClass('visible animated fadeInUp');
  },
  { offset: '80%' });

  $('.down').waypoint(function() {
    $(this.element).addClass('visible animated fadeInDown');
  },
  { offset: '80%' });

  $('.left').waypoint(function() {
    $(this.element).addClass('visible animated fadeInLeft');
  },
  { offset: '80%' });

  $('.right').waypoint(function() {
    $(this.element).addClass('visible animated fadeInRight');
  },
  { offset: '80%' });

  /* AUTO SCROLL
  $(window).load(function () {
    //normally you'd wait for document.ready, but you'd likely to want to wait
    //for images to load in case they reflow the page
    $('body').delay(2000) //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#second').offset().top
    }, 800); //animate over 300ms, change this to however long you want it to animate for
  });
*/
  /* SMOOTH SCROLLING */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });
});
