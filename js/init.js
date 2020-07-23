(function($){

  $(function(){

    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

  }); // end of document ready

  var rellax = new Rellax('.rellax');

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-64px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // }

})(jQuery); // end of jQuery name space

