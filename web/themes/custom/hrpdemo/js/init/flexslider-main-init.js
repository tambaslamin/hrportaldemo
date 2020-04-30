(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtflexsliderMain = {
    attach: function (context, settings) {
      $(context).find('.flexslider-main').once('mtflexsliderMainInit').each(function() {
        $(this).flexslider({
          animation: drupalSettings.hrpdemo.flexsliderMainInit.slideshowEffect,           // Select your animation type, "fade" or "slide"
          slideshowSpeed: drupalSettings.hrpdemo.flexsliderMainInit.slideshowEffectTime, // Set the speed of the slideshow cycling, in milliseconds
          prevText: "",
          nextText: "",
          pauseOnAction: false,
          useCSS: false
        });
        $(this).fadeIn("slow");
      });
    }
  };
})(jQuery, Drupal, drupalSettings);