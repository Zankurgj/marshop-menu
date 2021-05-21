$(document).ready(function () {
  /* show hide search in header */
  $(".js-search-open").on("click", function () {
    let $this = $(this);
    let $search = $this.closest(".js-search");
    $search.toggleClass("is-open");
    $search.find(".input").focus();
  });

  $(document).click(function (event) {
    if ($(event.target).closest(".js-search").length) return;
    $(".js-search").removeClass("is-open");
    event.stopPropagation();
  });

  $(".js-search-close").on("click", function () {
    let $this = $(this);
    let $search = $this.closest(".js-search");
    $search.removeClass("is-open");
  });
  let $header = $(".js-header");

  function fixedHeader() {
    if ($(window).scrollTop() > 70) {
      $header.addClass("is-up");
    } else {
      $header.removeClass("is-up");
    }
  }
  fixedHeader();
  $(window).scroll(function () {
    fixedHeader();
  });

  $(".js-catalog-link").on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let current = $this.attr("data-target");
    $(".js-catalog-link").removeClass("is-active");
    $(".js-catalog-level").removeClass("is-active");
    $(".js-catalog-level2").removeClass("is-active");
    $this.addClass("is-active");
    $('.js-catalog-level[data-level="' + current + '"]').addClass("is-active");
  });

  $(".js-catalog-link2").on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let current = $this.attr("data-target");
    $(".js-catalog-link2").removeClass("is-active");
    $(".js-catalog-level2").removeClass("is-active");
    $this.addClass("is-active");
    $('.js-catalog-level2[data-level="' + current + '"]').addClass("is-active");
  });

  $(".js-catalog-back").on("click", function () {
    $(".js-catalog-link").removeClass("is-active");
    $(".js-catalog-level").removeClass("is-active");
  });

  $(".js-catalog-back2").on("click", function () {
    $(".js-catalog-link2").removeClass("is-active");
    $(".js-catalog-level2").removeClass("is-active");
  });

  /* open/close catalog */
  $(".js-catalog-open").on("click", function () {
    $(".js-catalog").addClass("is-open");
  });

  $(".js-catalog-close").on("click", function () {
    $(".js-catalog").removeClass("is-open");
    $(".js-catalog-link").removeClass("is-active");
    $(".js-catalog-level").removeClass("is-active");
    $(".js-catalog-link2").removeClass("is-active");
    $(".js-catalog-level2").removeClass("is-active");
  });
  /* sliders */
  if ($.fn.slick != undefined) {
    $(".js-slider-main").slick({
      arrows: false,
      infinite: true,
      draggable: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      swipeToSlide: true,
      swipe: true,
      speed: 900,
      fade: true,
      customPaging: function (slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>";
      },
    });

    $(".js-slider-extra").slick({
      arrows: true,
      infinite: true,
      draggable: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      swipeToSlide: true,
      swipe: true,
      speed: 900,
      fade: true,
      nextArrow:
        '<div class="slider__arrow slider__arrow_next"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      prevArrow:
        '<div class="slider__arrow slider__arrow_prev"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            variableWidth: true,
            fade: false,
            dots: false,
          },
        },
      ],
    });

    $(".js-slider-product").slick({
      arrows: true,
      infinite: true,
      draggable: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      swipeToSlide: true,
      swipe: true,
      speed: 900,
      nextArrow:
        '<div class="slider__arrow slider__arrow_next"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      prevArrow:
        '<div class="slider__arrow slider__arrow_prev"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 769,
          settings: {
            variableWidth: true,
            arrows: false,
            dots: false,
          },
        },
      ],
    });

    $(".js-slider-popup").slick({
      arrows: true,
      infinite: true,
      draggable: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      swipeToSlide: true,
      swipe: true,
      speed: 900,
      nextArrow:
        '<div class="slider__arrow slider__arrow_next"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      prevArrow:
        '<div class="slider__arrow slider__arrow_prev"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            variableWidth: true,
            dots: false,
          },
        },
      ],
    });

    $(".js-slider-previews").slick({
      arrows: true,
      infinite: true,
      draggable: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      swipeToSlide: true,
      swipe: true,
      speed: 900,
      nextArrow:
        '<div class="slider__arrow slider__arrow_next"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      prevArrow:
        '<div class="slider__arrow slider__arrow_prev"><svg width="12" height="24" class="svg-icon"><use xlink:href="#icon-arrow-slider"></use></svg></div>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 1,
            dots: true,
            fade: true,
          },
        },
      ],
    });
  }

  /* show hide search in header */
  $(".js-favorite").on("click", function () {
    let $this = $(this);
    $this.toggleClass("is-selected");
  });
  /* magnific popups */
  if ($.fn.magnificPopup != undefined) {
    $(".js-popup-youtube").magnificPopup({
      disableOn: 900,
      type: "iframe",
      mainClass: "popup popup_down",
      removalDelay: 1000,
      preloader: false,
    });

    $(".js-gallery").magnificPopup({
      delegate: ".js-gallery-link",
      type: "image",
      mainClass: "popup popup_down",
      removalDelay: 1000,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    });

    $(".js-popup-link").magnificPopup({
      type: "inline",
      midClick: true,
      mainClass: "popup popup_left",
      removalDelay: 1000,
      fixedContentPos: true,
      callbacks: {
        open: function () {
          // When you open the
          $("body").css("overflow", "hidden"); // window, the element
        }, // "body" is used "overflow: hidden".

        close: function () {
          // When the window
          $("body").css("overflow", ""); // is closed, the
        }, // "overflow" gets the initial value.
      },
    });

    $(".js-popup-button").magnificPopup({
      type: "inline",
      midClick: true,
      mainClass: "popup popup_up",
      removalDelay: 1000,
      callbacks: {
        open: function () {
          $(".js-slider-popup").slick("setPosition");
        },
      },
    });
  }

  $(document).on("click", ".js-popup-close", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
  if ($.fn.select2 != undefined) {
    $(".js-select").select2({
      minimumResultsForSearch: -1,
      width: "100%",
      dropdownCssClass: "select__dropdown",
    });

    /* ���������� �������� � ����� select */
    function formatState(state) {
      if (!state.id) {
        return state.text;
      }

      var baseUrl = "images";
      var $state = $(
        '<span><img class="select-image__icon" /> <span class="select-image__text"></span></span>'
      );

      $state.find("span").text(state.text);
      $state
        .find("img")
        .attr(
          "src",
          baseUrl + "/" + state.element.value.toLowerCase() + ".png"
        );

      return $state;
    }

    $(".js-select-image").select2({
      templateSelection: formatState,
      templateResult: formatState,
      minimumResultsForSearch: -1,
      dropdownCssClass: "select-image__dropdown",
    });
  }

  /* open/close submenu aside menu */
  $(".js-aside-link").on("click", function (e) {
    let $this = $(this);
    e.preventDefault();
    let $subMenu = $this.next(".js-aside-block");
    if ($this.hasClass("is-active")) {
      $this.removeClass("is-active");
      $subMenu.slideUp().removeClass("is-open");
    } else {
      $(".js-aside-link").removeClass("is-active");
      $(".js-aside-block").slideUp();
      $this.addClass("is-active");
      $subMenu.slideDown().addClass("is-open");
    }
  });
  /* tabs blocks */
  $(".js-tabs-link").on("click", function () {
    let $this = $(this);
    let needBlock = $this.attr("data-link");
    $(".js-tabs-link").removeClass("is-active");
    $(".js-tabs-block").hide();
    $this.addClass("is-active");
    $('.js-tabs-block[data-block="' + needBlock + '"]').fadeIn();
  });
  /* counter */
  if ($.fn.spinner != undefined) {
    $(".js-counter").spinner({
      min: 0,
    });
  }
  /* remove basket item */
  $(".js-basket-delete").on("click", function () {
    let $this = $(this);
    $this.closest(".js-basket-item").fadeOut();
  });

  /* open close present block */

  $(".js-present-button").on("click", function () {
    $(".js-present-visible").slideUp();
    $(".js-present-hidden").slideDown();
  });

  $(".js-present-hidden .radio").on("click", function () {
    let $this = $(this);
    let selectedPresent = $this.find(".radio__text").text();
    $(".js-present-selected").text(selectedPresent);
    $(".js-present-hidden").slideUp();
    $(".js-present-visible").slideDown();
  });
  /* validation */
  if ($.fn.validate !== undefined) {
    $(".js-validate").each(function () {
      let $this = $(this);
      $this.validate({
        focusInvalid: false,
        errorPlacement: function (error, element) {
          error.appendTo(element.closest(".js-validate-item"));
        },
        highlight: function (element) {
          $(element).closest(".form__wrapper").removeClass("is-complete");
          $(element).addClass("is-error");
        },
        unhighlight: function (element) {
          $(element).closest(".form__wrapper").addClass("is-complete");
          $(element).removeClass("is-error");
        },
      });
    });
    $.validator.methods.email = function (value, element) {
      return (
        this.optional(element) || /^[a-z0-9]+?@[a-z]+?\.[a-z]{2,}?$/.test(value)
      );
    };
  }

  if ($.fn.validate !== undefined) {
    $(".js-form-coupon").validate({
      submitHandler: function () {
        $(".js-form-message").fadeIn();
      },
    });
  }

  $(".required").each(function () {
    let $this = $(this);
    let $form = $this.closest(".js-form-coupon");
    let $submit = $form.find(".js-submit");
    $this.on("change", function () {
      let $valid = $form.valid();
      if ($valid == true) {
        $submit.removeClass("is-disabled");
      } else {
        $submit.addClass("is-disabled");
      }
    });
  });
  /* mask phone */
  if ($.fn.mask != undefined) {
    $(".js-phone").mask("+7 (999) 999-99-99");
  }
  /* date + time */
  if ($.fn.datetimepicker != undefined) {
    $(function () {
      $(".js-datepicker").datetimepicker({
        locale: "ru",
        format: "DD.MM.YYYY",
        //debug: true
      });
      $(".js-timepicker").datetimepicker({
        format: "HH:mm",
        locale: "ru",
        //debug: true
      });
    });
  }
  /* remove subcribe */
  $(".js-subcribe-close").on("click", function () {
    $(".js-subcribe").fadeOut();
  });
  /* selected star rate */
  $(".js-rate").on("click", function () {
    let $this = $(this);
    $(".js-rate").removeClass("is-selected");
    $this.addClass("is-selected");
  });
  /* show hide search in header */
  $(".js-present").on("click", function () {
    let $this = $(this);
    $(".js-present").removeClass("is-selected");
    $this.addClass("is-selected");
  });
  /* show hide search in header */
  $(".js-wish-delete").on("click", function () {
    let $this = $(this);
    $this.closest(".js-wish-wrapper").hide();
  });
  /* remove basket item */
  $(".js-file-button").each(function () {
    var btnFileInput = $(this);
    if (btnFileInput.length > 0) {
      var fileCnt = 0;
      var fileListBlc = btnFileInput.closest(".js-file").find(".js-file-block");
      btnFileInput.on("change", function () {
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          fileCnt++;
          var html =
            '<li class="file-block__item"><span class="file-block__name">' +
            file.name;
          html +=
            '</span><span class="file-block__delete js-file-delete" data-file-id="' +
            fileCnt +
            '"><svg width="48" height="48" class="svg-icon"><use xlink:href="#icon-delete"></use></svg></span></li>';
          //html = $(html).append($(this).clone());
          fileListBlc.append(html);
        }
      });
      fileListBlc.on("click", ".js-file-delete", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var el = $(this);
        el.parents("li").remove();
      });
    }
  });
  /* dropdown */
  $(".js-dropdown-button").on("click", function () {
    let $this = $(this);
    let $parent = $this.closest(".js-dropdown");
    let $hiddenBlock = $parent.find(".js-dropdown-block");
    $(".js-dropdown").removeClass("is-open");
    $(".js-dropdown-block").fadeOut();
    $parent.toggleClass("is-open");
    $hiddenBlock.fadeToggle();
  });

  $(document).click(function (event) {
    if ($(event.target).closest(".js-dropdown").length) return;
    $(".js-dropdown").removeClass("is-open");
    $(".js-dropdown-block").fadeOut();
    event.stopPropagation();
  });

  $(".js-dropdown").each(function () {
    let $this = $(this);
    let $hiddenBlock = $this.find(".js-dropdown-block");
    let $checkbox = $hiddenBlock.find("input[type=checkbox]:checked").length;
    let $counter = $this.find(".js-dropdown-counter");
    $counter.text($checkbox);
    if ($checkbox == 0) {
      $this.removeClass("is-selected");
    } else {
      $this.addClass("is-selected");
    }
  });

  $(".js-dropdown input[type=checkbox]").on("change", function () {
    let $this = $(this);
    let $parent = $this.closest(".js-dropdown");
    let $hiddenBlock = $parent.find(".js-dropdown-block");
    let $checkbox = $hiddenBlock.find("input[type=checkbox]:checked").length;
    let $counter = $parent.find(".js-dropdown-counter");

    $counter.text($checkbox);

    if ($checkbox == 0) {
      $parent.removeClass("is-selected");
    } else {
      $parent.addClass("is-selected");
    }
  });
  /* clean filter */
  $(".js-filter-clean").on("click", function () {
    $(".js-filter").find("input:checked").prop("checked", false);
    $(".js-dropdown").removeClass("is-selected");
  });
});
