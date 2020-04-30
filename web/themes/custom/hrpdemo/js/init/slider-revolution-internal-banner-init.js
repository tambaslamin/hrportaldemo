(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtSliderRevolutionInternalBanner = {
    attach: function (context, settings) {
      $(context).find('.slideshow-internal .rev_slider').once('mtSliderRevolutionInternalBannerInit').each(function() {
        if (drupalSettings.hrpdemo.sliderRevolutionInternalBannerInit.slideshowInternalBannerNavigationStyle == "bullets") {
          var bulletsEnable = true,
          tabsEnable = false;
        } else {
          var tabsEnable = true,
          bulletsEnable = false;
        }
        var settings = {
          sliderType: "standard",
          sliderLayout: drupalSettings.hrpdemo.sliderRevolutionInternalBannerInit.slideshowInternalBannerLayout,
          gridheight: parseInt(drupalSettings.hrpdemo.sliderRevolutionInternalBannerInit.slideshowInternalBannerInitialHeight),
          delay: drupalSettings.hrpdemo.sliderRevolutionInternalBannerInit.slideshowInternalBannerEffectTime,
          disableProgressBar: 'off',
          fullScreenOffsetContainer: ".header-container, .toolbar-tray-horizontal, .mt-count-down",
          navigation: {
            onHoverStop: "off",
            arrows: {
              enable: true,
              tmp: "<div class='tp-title-wrap'><span class='tp-arr-titleholder'>{{title}}</span></div>",
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 0,
                v_offset: 0
              },
              right:{
                h_align: "right",
                v_align: "center",
                h_offset: 0,
                v_offset: 0
              }
            },
            bullets: {
              style: "",
              enable: bulletsEnable,
              direction: "horizontal",
              space: 5,
              h_align: drupalSettings.hrpdemo.sliderRevolutionInternalBannerInit.slideshowInternalBannerBulletsPosition,
              v_align: "bottom",
              h_offset: 0,
              v_offset: 20,
              tmp: "",
            },
            tabs: {
              style: "",
              enable: tabsEnable,
              width: 410,
              height: 95,
              min_width: 240,
              wrapper_padding: 0,
              wrapper_opacity: "1",
              tmp: '<div class="tp-tab-content"><span class="tp-tab-title">{{title}}</span></div>',
              visibleAmount: 6,
              hide_onmobile: false,
              hide_onleave: false,
              direction: "horizontal",
              span: true,
              position: "outer-bottom",
              space: 0,
              h_align: "left",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 0
            },
            touch: {
              touchenabled: drupalSettings.hrpdemo.sliderRevolutionInternalBannerInit.slideshowInternalBannerTouchSwipe,
              swipe_treshold: 75,
              swipe_min_touches: 1,
              drag_block_vertical: false,
              swipe_direction: "horizontal"
            }
          }
        };
        if ( drupalSettings.hrpdemo.sliderRevolutionInternalBannerInit.slideshowInternalBannerAutoHeight ) {
          autoHeightSettings = {
            autoHeight: 'on',
          }
          $.extend(settings, autoHeightSettings);
        } else {
          autoHeightSettings = {
            autoHeight: 'off',
            responsiveLevels: [1199,991,767,480],
            gridwidth: [1170,970,750,450],
          };
          $.extend(settings, autoHeightSettings);
        }
        $(this).show().revolution(settings);
      });

      // Set transparent elements bg color for light typography setting
      $(context).find('.region--light-typography .transparent-background').once('mtSliderRevolutionInternalBannerBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.hrpdemo.slideshowBackgroundOpacity + ")");
      $(context).find('.region--light-typography .tp-caption--transparent-background .tp-caption__title').once('mtSliderRevolutionInternalBannerCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.hrpdemo.slideshowCaptionOpacity + ")");
      $(context).find('.region--light-typography .tp-caption--transparent-background .tp-caption__text').once('mtSliderRevolutionInternalBannerCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.hrpdemo.slideshowCaptionOpacity + ")");

      // Set transparent elements bg color for dark typography setting
      $(context).find('.region--dark-typography .transparent-background').once('mtSliderRevolutionInternalBannerBG').css("backgroundColor", "rgba(255,255,255," + drupalSettings.hrpdemo.slideshowBackgroundOpacity + ")");
      $(context).find('.region--dark-typography .tp-caption--transparent-background .tp-caption__title').once('mtSliderRevolutionInternalBannerCaptionBG').css("backgroundColor", "rgba(255,255,255," + drupalSettings.hrpdemo.slideshowCaptionOpacity + ")");
      $(context).find('.region--dark-typography .tp-caption--transparent-background .tp-caption__text').once('mtSliderRevolutionInternalBannerCaptionBG').css("backgroundColor", "rgba(255,255,255," + drupalSettings.hrpdemo.slideshowCaptionOpacity + ")");

    }
  };
})(jQuery, Drupal, drupalSettings);
