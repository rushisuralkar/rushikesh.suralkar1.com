// Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // Navbar active link
  $(document).on('scroll', function() {
    var position = $(this).scrollTop();
    $('nav li a').each(function() {
      var target = $(this.getAttribute('href'));
      if (target.length && target.position().top <= position && (target.position().top + target.height()) > position) {
        $('nav li').removeClass('active');
        $(this).closest('li').addClass('active');
      }
    });
  });
  
  // Navbar collapse on click
  $(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });
  // Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // Navbar active link
  $(document).on('scroll', function() {
    var position = $(this).scrollTop();
    $('nav li a').each(function() {
      var target = $(this.getAttribute('href'));
      if (target.length && target.position().top <= position && (target.position().top + target.height()) > position) {
        $('nav li').removeClass('active');
        $(this).closest('li').addClass('active');
      }
    });
  });
  
  // Navbar collapse on click
  $(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });
  
  // Scroll to section on link click
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  

  